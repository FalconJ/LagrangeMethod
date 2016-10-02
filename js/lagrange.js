// Calculate the Lagrange interpolationtyped into input boxes on the
//and displays the result in a span on the page
function obtainData() {
	var xValues = $("#xvalues").val();
	var yValues = $("#yvalues").val();
	var point = $("#point").val();
	var answer = $("#answer").val();

	var cleanX = xValues.split(" ");
	var cleanY = yValues.split(" ");

	var result = lagrange(cleanX, cleanY, point);
	answer.innerHTML = result;
}

function lagrange(cleanX, cleanY, point) {
	var sum=0;
	var prod;

	for (var i=0; i<cleanX.length; i++)
	{
		prod=1;
		for (var j=0; j<cleanX.length;j++){
		   if (j != i){
			prod *= (x - cleanX[j])/(cleanX[i]-cleanX[j]);
		   }
		}
		
		sum += prod * cleanY[i];
	}
	return sum;
}