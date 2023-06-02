var ctx = document.getElementById('myChart').getContext('2d');
		var myChart = new Chart(ctx, {
			type: 'bar',
			data: {
				labels: ['China', 'India', 'USA', 'Indonesia', 'Pakistan', 'Brazil'],
				datasets: [{
					label: 'Population (millions)',
					data: [1409, 1371, 332, 276, 225, 213],
				}]
			},
			options: {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						}
					}]
				}
			}
		});