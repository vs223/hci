function calculate(op, arg1, arg2){
	arg1 = arg1*1;
	arg2 = arg2*1;
	switch (op){
		case '-':
		return arg1-arg2;
		case '+':
		return arg1+arg2;
		case '*':
		return arg1*arg2;
		case '/':
		return arg1/arg2;
		case 'Root':
		return Math.pow(arg1,1/arg2);
		case 'Pow':
		return Math.pow(arg1,arg2);
		case 'Log':
		return Math.log(arg1)/Math.log(arg2);

		default:
		return arg2;
	}
}

$(function(){

	var arg1 = 0;
	var arg2 = "";
	var backUp = 0;
	var newArg = true;
	var newTerm = true;
	var dotUsed = false;
	var op ="";

	var $display = $(".display");

	
	$("div > input, td > input").addClass("form-control");
	$("button").addClass("btn")
	.addClass("btn-default");

	function calParser(){
		var buttonValue = $(this).text();
		
		switch(buttonValue){
			case 'c':
			case 'C':
			arg1=0;
			arg2="";
			newArg=true;
			newTerm = true;
			op="";
			$display.val(arg1);
			break;

			case 'Back':
			arg1=backUp;
			$display.val(arg1);

			break;
			case '=':
			backUp = arg1;
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
			case 'Root':
			case 'Pow':
			case 'Log':
			backUp = arg1;
			arg1=calculate(op,arg1,arg2);
			op=buttonValue;
			newArg = true;
			$display.val(arg1);
			break;

			case 'PI':
			arg2=Math.PI;
			$display.val(arg2);
			break;

			case 'e':
			arg2=Math.E;
			$display.val(arg2);
			break;

			case '+/-':
			if(newArg && newTerm){
				arg1 = arg1*(-1);
				$display.val(arg1);
				break;
			}
			else{
				arg2*=-1;
				$display.val(arg2);
			}
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
			case '00':
			case '000':
			case '0000':
			case '.':

			if(newArg){
				newArg = false;
				arg2 = "";
				dotUsed = false;
				if(newTerm){
					newTerm = false;
					arg1 = 0;
					op = "";
				}
			}
			if(buttonValue === '.' && dotUsed === true){
				$display.val(arg2);
				break;
			}

			arg2= arg2 + buttonValue;
			if(buttonValue === '.'){
				dotUsed = true;
			}

			$display.val(arg2);
			break;

			default :
		}

		$(".pre-display").val(op+" ( "+ backUp+", "+ arg2 +" )");

	}

	$(".calculator").hide();

	$("#calculator").addClass("col-sm-4");
	$("#calculator button").click(calParser).addClass("col-sm-3");

	$("#calForVendors").addClass("col-sm-4");
	$("#calForVendors button").addClass("btn-block").click(calParser);

	$("#calForHigh").addClass("col-sm-4");
	$("#calForHigh button").addClass("btn-block").click(calParser);


	$(".radio").change(function(){
		$(".calculator").hide();
		$($(this).attr("target")).show() ;
	});
	

})