<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");
// echo "<pre>";
//     print_r($_REQUEST);
    
  
// echo "</pre>";

$name=$_REQUEST['name'];
$email=$_REQUEST['email'];
$company=$_REQUEST['company'];
$Subject=$_REQUEST['Subject'];
$message=$_REQUEST['message'];
$number=$_REQUEST['tel'];


$to="info@efc.com.ph";
$subject=$_REQUEST['Subject'];


$message = "Cleint Name: " . $name . "\n"
 . "Phone Number: " . $number . "\n\n"
  . "Email: " . $email . "\n\n"
  . "Company: " . $company . "\n\n"
  . "Subject: " . $Subject . "\n\n"
 . "Client Message: " . "\n" . $message;


mail("$to",$subject,$message);




?>