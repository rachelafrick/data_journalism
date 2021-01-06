
      var amtuninsured =[];
      var locs=[];
      var index=0;
 


      

      let locas= [ 'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',  'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY' ];


      Plotly.d3.json('./data/coverage.json', function(err, fig){

        console.log(fig);

        for(var i =1; i<51;i++){
        amtuninsured.push(fig[i].uninsured*100)
        locs.push(fig[i].location)
      }


      var data2 = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: locas,
          z: amtuninsured,
          //text: locs,
          zmin: 0,
          zmax: 20,
          colorscale: [
              [0, 'rgb(242,240,247)'], [0.2, 'rgb(218,218,235)'],
              [0.4, 'rgb(188,189,220)'], [0.6, 'rgb(158,154,200)'],
              [0.8, 'rgb(117,107,177)'], [1, 'rgb(84,39,143)']
          ],
          colorbar: {
              title: 'Percent Uninsured',
              thickness: 0.2
          },
          marker: {
              line:{
                  color: 'rgb(255,255,255)',
                  width: 2
              }
          }
      }];


      var layout = {
          title: 'Percent of uninsured citizens by State',
          geo:{
              scope: 'usa',
              showlakes: true,
              lakecolor: 'rgb(255,255,255)'
          }
      };

      Plotly.newPlot("myDiv", data2, layout).then(gd => {
		  gd.on('plotly_click', d => {
		    var pt = (d.points || [])[0]
		    console.log(pt.location);

		    for(let i=0;i<locas.length;i++){
		    	if(pt.location==locas[i]){
		    		index=i;
		    	}
		    }

		    window.location.assign(fig[index+1].location.trim().replace(/ /g, "_")+".html")
		    
		  })
		}) 

  }); 



