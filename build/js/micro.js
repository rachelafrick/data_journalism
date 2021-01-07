


var names= document.getElementById("namee").textContent;
var indexx=0;
let mdata=[];

Plotly.d3.json('./data/coverage.json', function(err, fig) {
	mdata=fig;
	console.log(mdata);
	for(let i=1; i<fig.length;i++){
		names=names.replace(" ","")
		let string = fig[i].location.replace(" ", "")
		if(names==string){
			indexx=i;
		}
	}
	var bars = [
	    {
	        x: ['Employer', 'Nongroup','Medicaid','Medicare','Military', fig[indexx].location + ' Uninsured', 'Ntl Avg (Uninsured)' ],
	        y: [fig[indexx].employer*100, fig[indexx].nongroup*100, fig[indexx].medicaid*100, fig[indexx].medicare*100, fig[indexx].military*100, fig[indexx].uninsured*100, fig[0].uninsured*100],
        	type: 'bar',	      
	        marker:{
	        	color: ['rgb(255, 164, 46)', 'rgb(255, 164, 46)', 'rgb(255, 164, 46)', 'rgb(255, 164, 46)', 'rgb(255, 164, 46)', 'rgb(255, 164, 46)', 'rgb(255, 106, 0)']
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



	 Plotly.newPlot(fig[indexx].location.replace(" ", ""), bars, layout).then(function() {

		  	
    });

});

function analysis() {
	console.log(mdata);
	if(mdata[indexx].uninsured<mdata[0].uninsured){
		document.getElementById("analysis").innerText="The data for " + mdata[indexx].location + " shows that the majority of people in " + mdata[indexx].location + " recieve insurance through their employer. " + mdata[indexx].uninsured*100 + " percent of the population of " + mdata[indexx].location + " is uninsured. This number is less then the national average, " + mdata[0].uninsured*100 + " percent, meaning "  + mdata[indexx].location + " has a higher health care coverage rate than the U.S. as a whole." ;
	}

	else{
		document.getElementById("analysis").innerText="The data for " + mdata[indexx].location + " shows that the majority of people in " + mdata[indexx].location + " recieve insurance through their employer. " + mdata[indexx].uninsured*100 + " percent of the population of " + mdata[indexx].location + " is uninsured. This number is greater then the national average, " + mdata[0].uninsured*100 + " percent, meaning "  + mdata[indexx].location + " has a lower health care coverage rate than the U.S. as a whole." ;
	}
}
	
