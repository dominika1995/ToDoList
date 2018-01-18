$(document).ready(function() {
   $('.list__items').on("click","li", function(){
       if($(this).find('.list__items--text').css("text-decoration")[0]=="n"){
           $(this).find('.list__items--text').css("text-decoration","line-through");
       }
       else{
           $(this).find('.list__items--text').css("text-decoration","none");
       }
   });
   
   $(".list__items").on("click",".list__items--trash",function (event) {
       $(this).parent(".list__item").fadeOut(500,function () {
           $(this).parent(".list__item").remove();
       });
       event.stopPropagation();
   });

    $("input:text").keypress(function(e) {
        if(e.which == 13) {
            var text=$("input:text").val();
            $(".list__items").append(
            '<li class="list__item"><span class="list__items--trash"><i class="fa fa-trash"></i>'+
                '</span><span class="list__items--text">'+text+'</span></li>')
        }
    });
});