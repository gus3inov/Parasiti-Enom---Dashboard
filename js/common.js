$(document).ready(function(){
  

	$('.map-popup').magnificPopup({
	  tClose: 'Close (Esc)',
		removalDelay: 900
	});

// chart-line
var image1 = document.getElementById("source1");
var image2 = document.getElementById("source2");
var ctx = document.getElementById("myChart");

var scatterChart = new Chart(ctx, {
  type: "scatter",
  data: {
	datasets: [
	  {
		label: "consectetur adipiscing elit",
		pointHitRadius: 10,
		data: [
		  { x: 0, y: 20 },
		  { x: 2, y: 50 },
		  { x: 3.8, y: 40 },
		  { x: 6.3, y: 75 },
		  { x: 7.8, y: 100 },
		  { x: 8.4, y: 200 },
		  { x: 10.3, y: 230 },
		  { x: 11, y: 240 }
		],
		fill: false,
		borderWidth: 5,
		borderColor: "#f86b4f",
		pointStyle: image1
	  },
	  {
		label: "ipsum dolor sit amet",
		pointHitRadius: 10,
		data: [
		  { x: 0, y: 150 },
		  { x: 2.7, y: 100 },
		  { x: 4.9, y: 180 },
		  { x: 7, y: 135 },
		  { x: 9, y: 180 },
		  { x: 11, y: 190 }
		],
		fill: false,
		borderWidth: 5,
		borderColor: "#8bc4ea",
		pointStyle: image2
	  }
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
	  labels: {
		fontFamily: "Quark-Light"
	  }
	},

	elements: {
	  line: {
		tension: 0
	  }
	},
	scales: {
	  yAxes: [
		{
		  gridLines: {
			color: "#f0f0f0",
			tickMarkLength: 20,
			zeroLineWidth: 0.1
		  },
		  display: true,
		  ticks: {
			// fontColor:"#f2f2f2",
			fontFamily: "Quark-Bold",
			fontSize: 14
		  }
		}
	  ],
	  xAxes: [
		{
		  gridLines: {
			color: "#f0f0f0",
			tickMarkLength: 20,
			zeroLineWidth: 0.1
		  },
		  ticks: {
			// display:false,
			fontColor: "#777777",
			fontFamily: "Quark-Bold",
			max: 11,
			stepSize: 1,
			fontSize: 14
		  }
		}
	  ]
	}
  }
});

// chart-doughnut
var ctx = document.getElementById("doughnut");
var doughnut = new Chart(ctx, {
  type: "doughnut",
  data: {
	datasets: [
	  {
		data: [60, 40],
		backgroundColor: ["#5faee3", "#eeeeee"],
		borderColor: ["#5faee3", "#eeeeee"],
		hoverBackgroundColor: ["#3297db", "#d2cece"]
		// label: 'Dataset 1'
	  }
	],

	labels: ["Storage use", "Free space"]
  },
  options: {
	cutoutPercentage: 60,
	responsive: true,
	layout: {
	  padding: {
		left: 30,
		right: 20,
		top: 10,
		bottom: 10
	  }
	},
	legend: {
	  display: false
	},

	animation: {
	  animateScale: true,
	  animateRotate: true
	}
  },
  plugins: [
	{
	  afterDatasetsDraw: function(chart, easing) {
		var ctx = chart.ctx;
		ctx.fillStyle = "#999999";
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		var fontSize = 16;
		ctx.font = Chart.helpers.fontString(
		  fontSize,
		  "normal",
		  "Helvetica Neue"
		);
		var padding = 5;
		var meta = chart.getDatasetMeta(0);
		var position1 = meta.data[0].tooltipPosition();

		ctx.fillText(
		  chart.data.labels[0],
		  position1.x,
		  position1.y - fontSize / 2 - padding
		);

		var position2 = meta.data[1].tooltipPosition();

		ctx.fillText(
		  chart.data.labels[1],
		  position2.x,
		  position2.y - fontSize / 2 - padding
		);
		var text_inside =
		  chart.data.datasets[0].data[0].toString() +
		  " / " +
		  chart.data.datasets[0].data[1].toString();
		ctx.font = Chart.helpers.fontString(45, "normal", "Quark-Bold");
		ctx.fillText(text_inside, 175, 150);
		ctx.fillText("GB", 175, 150 + fontSize / 2 + 30);
	  }
	}
  ]
});
// end chart-doughnut




});

