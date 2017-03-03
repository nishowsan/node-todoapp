$(document).ready(function () {
    $('form').on('submit',function(){
        $.ajax({
            type: "POST",
            url: "/",
            data: {item:$('#input').val() },
            success: function (response) {
                location.reload();
            }
        });
    });
    $('li').on('click',function(){
        $.ajax({
            type: "DELETE",
            url: "/"+$('li').text().replace(/ /g,'-'),
            success: function (response) {
                location.reload();
            }
        });
    });
});