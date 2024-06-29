<?php 
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
 header("Access-Control-Allow-Headers: *");



$email=$_REQUEST['email'];



$to="info@efc.com.ph";
$subject="Newsletter Submission";


$message = 
    "New Entry for newsletter"
  . "Email: " . $email . "\n\n";
  
 
 


mail("$to",$subject,$message);




?>