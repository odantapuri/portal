<?php
 $dbhost = '127.0.0.1';
 $dbuser = 'admin_ENQUIRY';
 $dbpass = '000000';
 $dbname = 'admin_ENQUIRY';
 $conn = mysqli_connect($dbhost, $dbuser, $dbpass);

 if(! $conn ) {
    die('Could not connect: ' . mysql_error());
 }

 //echo 'Connected successfully<br />';

 if (!mysqli_select_db( $conn, $dbname))
 {
 //echo ('Database not selected');
 }



 // $sql = 'CREATE DATABASE PRODUCTS';
 $inputName = $_POST['studentName'];
 $inputEmail = $_POST['studentEmail'];
 $phone_no = $_POST['contactNo'];
 $grade = $_POST['studentClass'];
 $subject = $_POST['studentSubject'];

 $sql = "INSERT INTO Enquiry (name, email, phone_no, class, subject) VALUES ('$inputName', '$inputEmail', '$phone_no', '$grade', '$subject')";
 
 if(!mysqli_query($conn, $sql)) {
 //echo ('Could not insert record : ' . mysql_error());
 }

 mysqli_close($conn);
 //header("refresh:2; url=_home.php");
 // echo '<script>alert("Welcome to Geeks for Geeks")</script>';
 // echo '<meta http-equiv="refresh" content="2;URL='."'.http://thetudors.example.com/'".'" />';
 // echo '<script>window.location.replace("/")</script>';
 //header('Location: /');

  //echo 'You will get a mail!';
  //echo '<meta http-equiv="refresh" content="2;URL='."'./'".'" />';
  echo 'Thanks for your interest. Shortly you will receive an e-mail regarding your free class.'

 ?>
