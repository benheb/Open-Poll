	var one, two, three, four, five, six, seven, total;
	var chart;
	function update(id) {
		var current = document.getElementById(id).value;
		var url = "updatePoll.php?"+id+"=" + current;
		$.ajax({
			url: url,
			success: function(data) {
				count();
			}
		});
	}
	
	function count() {
		$.getJSON('updatePoll.php', function(data) {
			one = data['one'];
			one = parseFloat(one);
			two = data['two'];
			two = parseFloat(two);
			three = data['three'];
			three = parseFloat(three);
			four = data['four'];
			four = parseFloat(four);
			five = data['five'];
			five = parseFloat(five);
			six = data['six'];
			six = parseFloat(six);
			seven = data['seven'];
			seven = parseFloat(seven);
			total = [one+two+three+four+five+six+seven];
			one = Math.round(one/total * 100);
			two = Math.round(two/total * 100);
			three = Math.round(three/total * 100);
			four = Math.round(four/total * 100);
			five = Math.round(five/total * 100);
			six = Math.round(six/total * 100);
			seven = Math.round(seven/total * 100);
	  
			animate(one, two, three, four, five, six, seven, total);
		});
	}

	function animate(one, two, three, four, five, six, seven, total) {
        var divinfo = {"initial": []};
        $('#q-container > div').each(function(){
            var $this = $(this);
            var initial = {
                        'index' : $this.index(),
                        'top'     : $this.css('top'),
                        'left'     : $this.css('left')
            };
            divinfo.initial.push(initial);
        });

	        var $this         = $(this);
            $('#q-container > div').each(function(){
       	    	var $ele = $(this);
                $ele.stop().animate({
	                'top' : (Math.floor(Math.random()*601) - 150) +'px',
	                'left': (Math.floor(Math.random()*601) - 150) +'px',
	                'opacity':0
                },800,function(){
                	$(this).hide();
                	//count();
					$('#q-container').hide();
                	buildPoll(one, two, three, four, five, six, seven, total);
                });
            });
       		e.preventDefault();
	};
		
	Highcharts.setOptions({
	    colors: ['#0b61A4', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	    chart: {
			style: {
				fontFamily: '"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif'
			}
		}
	});
	
	function buildPoll(one, two, three, four, five, six, seven, total) {
		$('#poll-res').fadeIn(3000);
		chart = new Highcharts.Chart({
			chart: {
				renderTo: 'poll-res',
				defaultSeriesType: 'column',
				shadow: true
			},
			credits : {
			    enabled : false
			},
			title: {
				text: 'Denver Seasonal Snowfall Predictions',
				style: {
					fontSize: '13px',
					fontWeight: 'bold'
				}
			},
			subtitle: {
				text: 'Total Votes:' + total,
				style: {
					fontSize: '8px'
				}
			},
			xAxis: {
				categories: [
					'< 20"',
					'20-30"',
					'30-40"',
					'40-50"',
					'50-60"',
					'60-70"',
					'>70"'
				],
				labels: {
					rotation:45,
					style: {fontSize: '7px'}
				},
				title: {
					text: 'Inches Predicted'
				}
			},
			yAxis: {
				min: 0,
				title: {
					text: 'Percent'
				}
			},
			legend: {
				layout: 'horizontal',
				verticalAlign: 'bottom',
				floating: false,
				shadow: true
			},
			tooltip: {
				formatter: function() {
					return ''+
						this.y + '%';
				}
			},
			plotOptions: {
				column: {
					pointPadding: 0.2,
					borderWidth: 0
				}
			},
	        series: [{
			showInLegend: false,
			data: [{'y': one, 'color':'#85B0D1'}, 
					{'y': two, 'color':'#669CC6'}, 
					{'y': three, 'color':'#5792C0'}, 
					{'y': four, 'color':'#4888BA'}, 
					{'y': five, 'color':'#387EB5'}, 
					{'y': six, 'color':'#2974AF'}, 
					{'y': seven, 'color':'#0b61A4'}]
			}]
		});
	}
