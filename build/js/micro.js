


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
	        x: ['Employer', 'Nongroup','Medicaid','Medicare','Military', 'Uninsured', 'Ntl Avg (Uninsured)' ],
	        y: [fig[indexx].employer*100, fig[indexx].nongroup*100, fig[indexx].medicaid*100, fig[indexx].medicare*100, fig[indexx].military*100, fig[indexx].uninsured*100, fig[0].uninsured*100],
        	type: 'bar',	      
	        marker:{
	        	color: ['rgb(114, 0, 214)', 'rgb(114, 0, 214)', 'rgb(114, 0, 214)', 'rgb(114, 0, 214)', 'rgb(114, 0, 214)', 'rgb(114, 0, 214)', 'rgb(0, 47, 255)']
	        }
	
	    }
	 ];

	var layout = {
	  xaxis: {
	  	title: 'Type of Health Care',
	  	tickangle:-45,
	  	automargin: true,
	  },
	  yaxis: {title: 'Percent of Population'},
	};


	 Plotly.newPlot(fig[indexx].location.replace(" ", ""), bars, layout);

});


