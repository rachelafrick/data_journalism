


var names= document.getElementById("namee").textContent;
var indexx=0;
console.log(names);

Plotly.d3.json('./data/coverage.json', function(err, fig) {
	console.log(fig);
	for(let i=1; i<fig.length;i++){
		names=names.replace(" ","")
		let string = fig[i].location.replace(" ", "")
		if(names==string){
			indexx=i;
		}
	}
	var bars = [
	    {
	        x: ['Employer', 'Nongroup','Medicaid','Medicare','Military', fig[indexx].location + 'uninsured', 'National Average Uninsured' ],
	        y: [fig[indexx].employer, fig[indexx].nongroup, fig[indexx].medicaid, fig[indexx].medicare, fig[indexx].military, fig[indexx].uninsured, fig[0].uninsured],
	        type: 'bar'
	    }
	 ];


	 Plotly.newPlot(fig[indexx].location.replace(" ", ""), bars);

});


