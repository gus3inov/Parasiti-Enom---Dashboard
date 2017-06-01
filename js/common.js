$(document).ready(function(){
  

   

});

// The begining of  CHART
	var image1 = document.getElementById('source1');
	var image2 = document.getElementById('source2');
	var ctx = document.getElementById("myChart");


	var scatterChart = new Chart(ctx, {
		type: 'scatter',
		data: {
			datasets: [{
				label: 'consectetur adipiscing elit',
				pointHitRadius: 10,
				data: [{x:0, y:20}, {x:2, y:50}, {x:3.8, y:40},{x: 6.3,y:75}, {x:7.8,y:100}, {x:8.4, y:200}, {x:10.3, y:230}, {x:11, y:240}],
				fill: false,
				borderWidth: 5,
				borderColor: '#f86b4f',
				pointStyle: image1,
			}, 
			{
				label: 'ipsum dolor sit amet',
				pointHitRadius: 10,
				data: [{x:0, y:150}, {x:2.7, y:100}, {x:4.9, y:180}, {x:7, y:135}, {x:9, y:180},{x:11, y:190}],
				fill: false,
				borderWidth: 5,
				borderColor: '#8bc4ea',
				pointStyle: image2,
			},

			]
		},
		options: {
			layout: {
				padding: {
					left: 30,
					right: 20,
					top: 10,
					bottom: 10
				}	
			},
	  
		   legend: {
				labels:{
					fontFamily:"Quark-Light"
					}
				  },               
		 
			elements:{

			  line: {
				tension: 0
			  }
			},
			scales: {
			   yAxes: [{
					gridLines:{
						color:"#f0f0f0",
						tickMarkLength:20,
						zeroLineWidth: 0.1,

					},
					display: true,
					ticks: {
						// fontColor:"#f2f2f2",
						fontFamily:"Quark-Bold",
						fontSize:14,
						
					}
				}],
				xAxes: [{
					gridLines:{
							color:"#f0f0f0",
							tickMarkLength:20,
							zeroLineWidth: 0.1,
						},
					ticks: {
						// display:false,
						fontColor:"#777777",
						  fontFamily:"Quark-Bold",
						  max: 11,      
						  stepSize: 1,
						  fontSize:14,
				  }
				}]
			}
		}
	});


	// END CHART