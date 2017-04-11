function calculate(op, arg1, arg2){
	switch (op){
		case '-':
		return arg1-arg2;
		case '+':
		return arg1+arg2;
		case '*':
		return arg1*arg2;
		case '/':
		return arg1/arg2;
		default:
		return arg1;
	}
}

$(function(){

	var $button = $("button");
	var arg1 = 0;
	var arg2 = 0;
	var op ="";

	$button.attr('type','button');	
	$("#calculator").addClass("col-sm-4");	
	$("#display").addClass("form-control");
	
	$button.addClass("btn")
	.addClass("btn-default")
	.addClass("col-sm-3")
	.click(function (){
		var buttonValue = $(this).text();
		
		switch(buttonValue){
			case 'c':
			arg1=0;
			arg2=0;
			op="";
			$("#display").val(arg1);
			break;

			case '=':
			arg1=calculate(op,arg1,arg2);
			$("#display").val(arg1);
			break;

			case '/':
			case '+':
			case '-':
			case '*':			
			arg2=calculate(op,arg1,arg2);
			op=buttonValue;
			arg1 = 0;
			$("#display").val(arg2);
			break;

			case '0':
			case '1':
			case '2':
			case '3':
			case '4':
			case '5':
			case '6':
			case '7':
			case '8':
			case '9':
			arg1= arg1*10 + buttonValue*1;
			$("#display").val(arg1);

			default :
		}

	});
	

})