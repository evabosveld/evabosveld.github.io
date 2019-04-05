$("#btnOne").on("click",function() {
        $('.lazyOne').Lazy();
    });
$("#btnTwo").on("click",function() {
        $('.lazyTwo').Lazy();
    });
$("#btnThree").on("click",function() {
        $('.lazyThree').Lazy();
    });
$("#btnFour").on("click",function() {
        $('.lazyFour').Lazy();
    });
$("#btnFive").on("click",function() {
        $('.lazyFive').Lazy();
    });


/*modals*/
$(".button").on("click", function() {
  var modal = $(this).data("modal");
  $(modal).show();
});

$(".modal").on("click", function(e) {
  var className = e.target.className;
  if(className === "modal" || className === "close"){
    $(this).closest(".modal").hide();
  }
});


/*thumbnails*/
function hoverimg(elem){
	var img = $(elem).data("img");
	$(img).show();
    
    var bodyWidth = document.body.clientWidth;
    var variation = 1;
    var bodyHeight = document.body.clientHeight;
    var randPosX = Math.floor(((Math.random()*bodyWidth) - (bodyWidth / 2)) * variation);
    var randPosY = Math.floor(((Math.random()*bodyHeight) - (bodyHeight / 2)) * variation)

    $(img).css('left', randPosX);
    $(img).css('bottom', randPosY);

    $(img).clone().appendTo("#thumbnails");
    var th = document.getElementById("thumbnails");
    th.removeChild(th.childNodes[0]);
  
};
