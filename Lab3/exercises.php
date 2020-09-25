<!DOCTYPE html>
<html lang="en">
<head>
<title>Lab 3 exercises</title>
</head>
<body>
    <?php
    function isPalindrome($str){
        $str = strtolower($str);
        if(strrev($str) == $str){
            return "true";

        }
        else return -1;

    }
    print(" Ex1: This word is: " . isPalindrome("radar"));
    ?>

    <br>

    <?php
    function drunkenCapitalizer($str){
        $string="";
       for($i=0; $i<strlen($str);$i++){
           $random = rand(0,1);
           if($random == 0){
               $string = $string . strtoupper($str[$i]);
           }
           else{
            $string = $string . $str[$i];
           }

       }
       print ($string);
    }
    //print(" Ex2: This word is: " . drunkenCapitalizer("helloo my name is elio"));
    echo drunkenCapitalizer("hello my name is elio im a drunken capitalizer")
    ?>
    <br>


    <?php
        function gcd($num1, $num2) {
            if($num2==0)
                return abs($num1);
            else
                return gcd($num2, $num1%$num2);
        } 
        echo gcd(105,45)
    ?>
     <br>

     <?php
     function insideOut(){

     }
     ?>

    <br>
  

</body>
</html>
