window.onload=function(){
AOS.init();
$(".imgbox").hover(function(){
	$(this).find('.detailed').css('display','block');
	$(this).find('.detailed').removeClass('animated fadeOutDown');
	$(this).find('.detailed').addClass('animated fadeInUp');
},function(){
	$(this).find('.detailed').removeClass('animated fadeInUp');
	$(this).find('.detailed').addClass('animated fadeOutDown');
});
$('.closetage').on('click',function(){
	$('.blacksheild').addClass('animated fadeOutUp');
})
$('.secpart').on('click',function(){
	var openBnum = $(this).find('.indicator').text();
	var ele = document.getElementsByClassName('blacksheild')[openBnum];
	$(ele).css('display','block');
	$(ele).removeClass('fadeOutUp');
	$(ele).addClass('animated fadeInDown');
});
}