<?php

    include('config.php');
   // extract($_POST);
   $extract = extract(filter_input(INPUT_POST));
   $qry=mysqli_query($con,"insert into tbl_contact (name,email,mobile,subject) values('$name','$email','$mobile','$subject');");
   // echo $qry;
    //header('location:contact.php');
?>