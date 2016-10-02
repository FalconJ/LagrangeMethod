$(document).ready(function(){
	$("#steps").hide();
});

function resolver(){
	$(".pasos").empty();
	$("#steps").show();
	var equation = $("#equation").val();
	var x1 = parseFloat($("#x1").val());
	var xu = parseFloat($("#xu").val());
	var errormargin = parseFloat($("#errormargin").val());
	var aux = null;
	var errorEstimated = 0;

	var parser = math.parser();
	parser.eval('f(x) = ' + equation);

	var func = 	parser.get('f');

	do{
		var xr = (x1 + xu) / 2;
		$(".pasos").append("<p>Xr = " + xr + "</p>");


		var fx1 = func(x1);
		var fxr = func(xr);

		if((fx1 * fxr) > 0){
			x1 = xr;
			$(".pasos").append("<p>f(X1) * f(Xr) > 0 <br> X1 = Xr</p>");
		}
		else{
			xu = xr;
			$(".pasos").append("<p>f(X1) * f(Xr) < 0 <br> Xu = Xr</p>");
		}

		aux = xr;
		xr = (x1 + xu) / 2;
		errorEstimated = Math.abs((xr - aux) / xr * 100);
		$(".pasos").append("<p>Error Estimado = " + errorEstimated + "% </p><br>");

	}while(errorEstimated > errormargin);

	$(".pasos").append("<h3>Raíz</h3><br><p>Raíz = " + xr + " </p>");
}