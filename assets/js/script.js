//	event pada saat link
$('.page-scroll').on('click', function(){

	// ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen ybs
	var elemenTujuan =$(tujuan);

	//pindahkan scroll
	$('body').animate({
		scrollTop: elemenTujuan.offset().top - 50

	},1000,'swing');

	e.preventDevault();

});





//java script tidak berfungsi mengapa ya //