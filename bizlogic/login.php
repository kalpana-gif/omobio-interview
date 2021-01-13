<?php  
 require('db_connect.php');

if (isset($_POST['mail']) and isset($_POST['pwd'])){
	
// Assigning POST values to variables.
$username = $_POST['mail'];
$password = $_POST['pwd'];

// CHECK FOR THE RECORD FROM TABLE
$query = "SELECT * FROM `users` WHERE email='$username' and Password='$password'";
 
$result = mysqli_query($connection, $query) or die(mysqli_error($connection));
$count = mysqli_num_rows($result);

if ($count == 1){
//echo "Login Credentials verified";
echo "logged in";

}else{
	echo("invalid login");
}