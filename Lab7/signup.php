<?php
require("./database.php");
echo $_POST["username"];
if(!isset($_COOKIE['user'])){
    setcookie('user', $_POST["username"], time() * 60, '/');
}

$connection = connectDb("localhost","root","","lab7");

if($_SERVER["REQUEST_METHOD"]=="POST")
{
    $result= addUser($connection,"lab7",$_POST["password1"],$_POST["password2"],$_POST["username"]);
    if($result==-1)
    {
        alert("user Exists");
    }
    else if($result==1)
    {
        alert("added successfully");
        header("Location:./mainpage.html");
    }
}
?>
