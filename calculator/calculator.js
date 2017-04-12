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
		return arg2;
	}
}

$(function(){

	var arg1 = 0;
	var arg2 = 0;
	var newArg = true;
	var newTerm = true;
	var op ="";

	var $display = $("#display");

	
	$("input").addClass("form-control");
	$("button").addClass("btn")
	.addClass("btn-default");

	function calParser(){
		var buttonValue = $(this).text();
		
		switch(buttonValue){
			case 'c':
			arg1=0;
			arg2=0;
			newArg=true;
			newTerm = true;
			op="";
			$display.val(arg1);
			break;

			case '=':
			arg1=calculate(op,arg1,arg2);
			newArg = true;
			if(op !==''){
				newTerm = true;	
			}
			$display.val(arg1);
			break;

			case '/':
			case '+':
			case '-':
			case '*':	
			arg1=calculate(op,arg1,arg2);
			op=buttonValue;
			newArg = true;
			$display.val(arg1);
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
			if(newArg){
				newArg = false;
				arg2 = 0;
				if(newTerm){
					newTerm = false;
					arg1 = 0;
					op = "";
				}
			}
			arg2= arg2*10 + buttonValue*1;
			$display.val(arg2);
			break;	
			default :
		}

	}


	$("#calculator").addClass("col-sm-4");
	$("#calculator button").click(calParser).addClass("col-sm-3");

	$("#calForVendors").addClass("col-sm-4");
	$("#calForVendors button").addClass("btn-block	");
	

})