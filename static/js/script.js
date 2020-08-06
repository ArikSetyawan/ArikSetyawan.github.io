$('.page-scroll').on('click', function(event){

	let tujuan = $(this).attr('href')
	let ElemenTujuan = $(tujuan);

	

	$('html,body').animate({
		scrollTop: ElemenTujuan.offset().top - 55
		
	},1000)
	event.preventDefault()
});