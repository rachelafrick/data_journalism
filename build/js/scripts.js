/*console.log("js/scripts.js connected to index.html");
localStorage.setItem("top-secret-information", "you would never guess what kind of data is stored here."); */

Plotly.d3.csv('./data/coveragedata.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) { return row[key]; });
      }

      var amtuninsured =[];
      var locs=[];
      const data= require("./data/coverage.json")

      for(var i =1; i<51;i++){
      	amtuninsured.append(data[i].uninsured)
      	locs.append(data[i].location)
      }


      var data = [{
          type: 'choropleth',
          locationmode: 'USA-states',
          locations: locs,
          z: amtuninsured,
          text: locs,
          zmin: 0,
          zmax: 1,
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

      Plotly.newPlot("myDiv", data, layout, {showLink: false});
});

