$(document).ready(function()
{


     $("#bt_signup").click(function()
      {
          $.ajax({ url: 'signup.php',
               type: 'POST',
               data:{
                    "username":$("#text_un").val(),
                    "password1":$("#text_pw").val(),
                    "password2":$("#text_pw2").val(),
                    //"birthday":$("#text_bd").val()
               },
               dataType: 'text',
                    success: function(txt) {
                         alert(txt); 
                    }
               
                });
     });
});
