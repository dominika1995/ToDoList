$(document).ready(function() {

   $('.list__item').on("click", function(){
       if($(this).find('.list__items--text').css("text-decoration")[0]=="n"){
           $(this).find('.list__items--text').css("text-decoration","line-through");
       }
       else{
           $(this).find('.list__items--text').css("text-decoration","none");
       }
   });
   
   $(".list__items--trash").on("click",function () {
       $(this).parent(".list__item").remove();
   });

    $("input:text").keypress(function(e) {
        if(e.which == 13) {
            $(".list__items").append(
            '<li class="list__item">'+
                '<span class="list__items--trash">'+
                '<i class="fa fa-trash"></i>'+
                '</span><span class="list__items--text">'+$("input:text").val()+'</span></li>')
        }
    });




});