var currentData = [1409, 1371, 332, 276, 225, 213];
var tenYearsAgoData = [1339, 1210, 307, 232, 175, 186];
var twentyYearsAgoData = [1270, 1047, 272, 196, 444, 1312];
var thirtyYearsAgoData = [1155, 873, 243, 1000, 107, 555];
var graphStyle = 'pie'
var years = tenYearsAgoData
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = createChart()
function createChart() {
	return new Chart(ctx, {
		type: graphStyle,
		data: {
			labels: ['China', 'India', 'USA', 'Indonesia', 'Pakistan', 'Brazil'],
			datasets: [{
				label: 'Population (millions)',
				data: years,
			}]
		}
	});
}
function changeStyle(x) {
	if (x == 'pie') {
		graphStyle = 'pie'
	} else {
		graphStyle = 'bar'
	}
	myChart.destroy()
	myChart = createChart()
}
function yearsAgo(x) {
	if (x == 10) {
		years = tenYearsAgoData
	} else if (x == 20) {
		years = twentyYearsAgoData
	} else {
		years = thirtyYearsAgoData
	}
	myChart.destroy()
	myChart = createChart()
}