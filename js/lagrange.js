$(document).ready(function(){
	$(".BoxC").hide();
});

function obtainData() {
	$(".pasos").empty();

	var xValues = $("#xValues").val();
	var yValues = $("#yValues").val();
	var point = $("#point").val();
	var answer = $("#answer").val();

	var cleanX = xValues.split(" ");
	var cleanY = yValues.split(" ");

	var result = lagrange(cleanX, cleanY, point);

	$(".pasos").append("<span>" + result + "</span><br>");
}

function lagrange(cleanX, cleanY, point) {
	var sum=0;
	var prod;

	for (var i=0; i<cleanX.length; i++)
	{
		prod=1;
		for (var j=0; j<cleanX.length;j++){
		   if (j != i){
			prod *= (point - cleanX[j])/(cleanX[i]-cleanX[j]);
		   }
		}

		sum += prod * cleanY[i];
	}
	return sum;
}