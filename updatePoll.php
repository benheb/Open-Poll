<php
$connection = mysql_connect('Location', 'DB', 'PW') or die ("<p class='error'>Sorry, we were unable to connect to the database server.</p>");
$database = "DB";
mysql_select_db($database, $connection) or die ("<p class='error'>Sorry, we were unable to connect to the database.</p>");

 //ajax call will update table dependent on val in url
 if(isset($_GET['one'])) {
 	mysql_query("UPDATE table SET value=value + 1 where id=1");
 }
 if(isset($_GET['two'])) {
 	mysql_query("UPDATE table SET value2=value2 + 1 where id=1");
 }
 if(isset($_GET['three'])) {
 	mysql_query("UPDATE table SET value3=value3 + 1 where id=1");
 }
 if(isset($_GET['four'])) {
 	mysql_query("UPDATE table SET value4=value4 + 1 where id=1");
 }
  if(isset($_GET['five'])) {
 	mysql_query("UPDATE table SET value5=value5 + 1 where id=1");
 }
 if(isset($_GET['six'])) {
 	mysql_query("UPDATE table SET value6=value6 + 1 where id=1");
 }
  if(isset($_GET['seven'])) {
 	mysql_query("UPDATE table SET value7=value7 + 1 where id=1");
 }
 
 $data = mysql_query("SELECT * FROM table") or die(mysql_error()); 
 
 $result = mysql_fetch_array( $data ); 
 
 $one = $result['value'];
 $two = $result['value2'];
 $three = $result['value3'];
 $four = $result['value4'];
 $five = $result['value5'];
 $six = $result['value6'];
 $seven = $result['value7']; 

 //create array
 $arr = array('one' => $one, 'two' => $two, 'three' => $three, 'four' => $four, 'five' => $five, 'six' => $six, 'seven' => $seven);

 //encode as JSON for use on Javascript side
 echo json_encode($arr);

?>
