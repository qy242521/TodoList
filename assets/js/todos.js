$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(200,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span>" + text + "</li>");
	}
});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});