$("#bt_val").on("click",function(){

    $.ajax({
        url:"http://localhost:8081/",
        type:"post",
        data:{name:$("#name").val(),description:$("#descrip").val(),url:$("#txt_url").val(),gender:$("input[name='gender']:checked").val(),birthday:$("#bday").val(),color:$("#fav_color").val()},
        dataType:"text",
        success: function(txt){
            alert(txt+ ": info added");
            let w = window.open('about:blank');          
            w.document.open();
            w.document.write(txt);
            w.document.close();
        }
    })
})
