// Get the canvas element
var canvas = document.getElementById('myChart');

// Define the data for the chart
var data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [{
    label: 'My First Dataset',
    data: [10, 20, 30, 40, 50, 60, 70],
  }]
};

// Define the chart options
var options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
};

// Create the chart
var myChart = new Chart(canvas, {
  type: 'pie',
  data: data,
  options: options
});
