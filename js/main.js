
$('.colors-list li').click(function(e){

	$( ".str" ).first().addClass( "onea" );
	$( ".weak" ).first().addClass( "twoa" );
	$( ".opp" ).first().addClass( "threea" );
	$( ".thr" ).first().addClass( "foura" );
	});

$('.defult-list li').click(function(e){

	$( ".str" ).first().removeClass( "onea" );
	$( ".weak" ).first().removeClass( "twoa" );
	$( ".opp" ).first().removeClass( "threea" );
	$( ".thr" ).first().removeClass( "foura" );
	});

$('.straight-list li').click(function(e){

	$( ".str" ).first().removeClass( "round" );
	$( ".weak" ).first().removeClass( "round" );
	$( ".opp" ).first().removeClass( "round" );
	$( ".thr" ).first().removeClass( "round" );
	});

$('.rounded-list li').click(function(e){

	$( ".str" ).first().addClass( "round" );
	$( ".weak" ).first().addClass( "round" );
	$( ".opp" ).first().addClass( "round" );
	$( ".thr" ).first().addClass( "round" );
	});

$('.open-list li').click(function(e){

	$( "textarea" ).addClass( "opensands" );
	$("textarea").removeClass("josefin arvo lato volkhov abril ubntu ptsans droidsans oldStandard");
});


$('.jos-list li').click(function(e){

	$( "textarea" ).addClass( "josefin" );
	$("textarea").removeClass("opensands arvo lato volkhov abril ubntu ptsans droidsans oldStandard");
});

$('.arvo-list li').click(function(e){

	$( "textarea" ).addClass( "arvo" );
	$("textarea").removeClass("opensands josefin lato volkhov abril ubntu ptsans droidsans oldStandard");
});


$('.lato-list li').click(function(e){

	$( "textarea" ).addClass( "lato" );
	$("textarea").removeClass("opensands josefin arvo volkhov abril ubntu ptsans droidsans oldStandard");
});

$('.volk-list li').click(function(e){

	$( "textarea" ).addClass( "volkhov" );
	$("textarea").removeClass("opensands josefin arvo lato abril ubntu ptsans droidsans oldStandard");
});

$('.abril-list li').click(function(e){

	$( "textarea" ).addClass( "abril" );
	$("textarea").removeClass("opensands josefin arvo lato volkhov ubntu ptsans droidsans oldStandard");
});

$('.ubntu-list li').click(function(e){

	$( "textarea" ).addClass( "ubntu" );
	$("textarea").removeClass("opensands josefin arvo lato volkhov abril ptsans droidsans oldStandard");
});

$('.pt-list li').click(function(e){

	$( "textarea" ).addClass( "ptsans" );
	$("textarea").removeClass("opensands josefin arvo lato volkhov abril ubntu droidsans oldStandard");
});

$('.old-list li').click(function(e){

	$( "textarea" ).addClass( "oldStandard" );
	$("textarea").removeClass("opensands josefin arvo lato volkhov abril ubntu droidsans ptsans");
});

$('.droid-list li').click(function(e){

	$( "textarea" ).addClass( "droidsans" );
	$("textarea").removeClass("opensands josefin arvo lato volkhov abril ubntu oldStandard ptsans");
});
