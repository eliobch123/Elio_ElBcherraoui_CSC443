<?php
require("./database.php");
echo $_POST["txt_username"];
if(!isset($_COOKIE['user'])){
    setcookie('user', $_POST["txt_username"], time() * 360, '/');
}
$connection = connectDb("localhost","root","","users");

if($_SERVER["REQUEST_METHOD"]=="POST" && isset($_POST["txt_username"]))
{
    
    $result= signInUser($connection,"users",$_POST["txt_username"],$_POST["txt_password"]);
    if($result==-1)
    {
        alert("password is wrong");
        header("Location: welcome.html");
    }
    else if($result==-2)
    {
        alert("Not exists");
        $result2= addUser($connection,"users",$_POST["txt_password"],$_POST["txt_username"]);
        if($result == -1){
            alert("user exists");
            header("Location: welcome.html");
        }
        else if($result2 == 1){
            alert("added successfully");
            $url = "user.php? txt_username=" . $_POST["txt_username"]. "&txt_password=".$_GET["txt_password"];
            header("Location: $url");
        }
    }
    else if($result==1)
    {
        alert("signed in");
        $_GET["txt_username"] = $_POST["txt_username"];
        $_GET["txt_password"] = $_POST["txt_password"];
        echo $_GET["txt_username"];
        $url = "user.php? txt_username=" . $_GET["txt_username"].'&txt_password='.$_GET["txt_password"];
        header("Location: $url");
        echo "hello";

    }
}



?>
