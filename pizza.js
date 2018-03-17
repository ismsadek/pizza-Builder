
var initialPrice = 10;					

$('strong').text("$" + initialPrice);		// initially the price is $10
var button = $('.btn');
init();
button.on('click', buttonPressed);			// when a button is clicked, the event starts and calls the function 'buttonPressed'

function init() {
									// Firstly, the dom starts with all buttons 'inactive', thanks to toggleClass which changes it, and the price starts at 10$
	button.toggleClass('active');
	$('.price li').hide();
	$('.pep').hide();
	$('.mushroom').hide();
	$('.green-pepper').hide();
	$('.crust').toggleClass('crust-gluten-free');
	$('.sauce').toggleClass('sauce-white');

}

function  buttonPressed(e, initialPrice) {				//when a button is pressed, the event is localized by a currentTarget, and the class changes to 'inactive', this function calls two functions more
	
	var buttonCurrent = $(e.currentTarget);
	console.log(buttonCurrent);
	console.log(initialPrice);
	buttonCurrent.toggleClass('active');
	hideTopping(e, buttonCurrent);
	updatePrice(e, buttonCurrent, initialPrice);
	
	
}

function hideTopping(e, buttonCurrent) {				// When you select a topping, it fades out from the pizza as well as its price
	
	buttonCurrent = $(e.currentTarget);

	if (buttonCurrent.hasClass('btn-pepperonni')){
		$('.pep').fadeToggle();
		$('li:contains("pepperonni")').fadeToggle();

	} else if(buttonCurrent.hasClass('btn-mushrooms')) {
		$('.mushroom').fadeToggle();
		$('li:contains("mushrooms")').fadeToggle();

	} else if(buttonCurrent.hasClass('btn-green-peppers')) {
		$('.green-pepper').fadeToggle();
		$('li:contains("green peppers")').fadeToggle();

	} else if(buttonCurrent.hasClass('btn-sauce')){
		$('.sauce').toggleClass('sauce-white');
		$('li:contains("white sauce")').fadeToggle();

	} else {
		$('.crust').toggleClass('crust-gluten-free');
		$('li:contains("gluten-free crust")').fadeToggle();
	}
}


function updatePrice(e, buttonCurrent, initialPrice) {			// when a topping is selected, his class is active so the price changes
 
 initialPrice = 10;
 var totalPrice = $('strong').addClass('price');


 if ($('.btn-pepperonni').hasClass('active')) {

   initialPrice += 1;
   console.log(buttonCurrent);

 }
 if ($('.btn-mushrooms').hasClass('active')) {

   initialPrice += 1;
   console.log(buttonCurrent);

 }
 if ($('.btn-green-peppers').hasClass('active')) {

   initialPrice += 1;
   console.log(buttonCurrent);

 }
 if ($('.btn-sauce').hasClass('active')) {

   initialPrice += 3;
   console.log(buttonCurrent);

 }
 if ($('.btn-crust').hasClass('active')) {

   initialPrice += 5;
   console.log(buttonCurrent);

 }

 totalPrice.html('$' + initialPrice);

}
		


	





