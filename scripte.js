////////////////////////////////////////Variable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var table = document.getElementById('table1');
var table2 = document.getElementById('table2');
var h1 = document.getElementById('firstHeading');
var graphCanvas = document.createElement('canvas');
graphCanvas.setAttribute('id', 'graphId');
// graphCanvas.setAttribute('width', '400px');
// graphCanvas.setAttribute('height', '200px');
table.before(graphCanvas);
var graphCanvas2 = document.createElement('canvas');
graphCanvas2.setAttribute('id', 'graphId2');
table2.before(graphCanvas2);
var graphCanvas3 = document.createElement('canvas');
graphCanvas3.setAttribute('id', 'graphId3');
h1.after(graphCanvas3);
const tableau = Array.from(table.querySelectorAll('tbody > tr'));
var annee = tableau[0].querySelectorAll('th');
var perlinpinpin = document.querySelectorAll('#table1 td');
var data_value = {};
var pays = '';
// var array = []
var data_annee = [];
var annee2 = document.querySelectorAll('thead > tr > th');
var data_annee2 = [];
var data2 = document.querySelectorAll('#table2 td');
var data_value2 ={};
var pays2 ='';
//console.log(annee)

///////////////////////////////////////Fonction\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
 
  var i = 2;
  var j = 0;

  while(i < annee.length)
  {
    if(isNaN(annee[i]))
    {
    data_annee[j] = annee[i].textContent;
    }
    i++;
    j++;
  }


  for(i = 0; i < perlinpinpin.length; i++)
  {
    const Pays = perlinpinpin[i].textContent;
    const value = parseFloat(Pays);
    if(isNaN(value))
    {
      pays = Pays;
      data_value[pays]= [];
    }
    else if(!isNaN(value))
    {
      data_value[pays].push(value);
    }
  }
//  console.log(data_value);
  /*
  tableau.forEach(tr => {
    tr.querySelectorAll('td').forEach(td => {
      if(!isNaN(td.innerHTML[0])){
        array.push(parseInt(td.textContent))
      }
    })
  })
  console.log(array);
  */

  var a = 5;
  var b = 0;

  while(a < annee2.length)
  {
    if(isNaN(annee2[a]))
    {
    data_annee2[b] = annee2[a].textContent;
    }
    a++;
    b++;
  }

    for(c = 0; c < data2.length; c++)
  {
    const Pays2 = data2[c].textContent;
    const value2 = parseFloat(Pays2);
    if(isNaN(value2))
    {
      pays2 = Pays2;
      data_value2[pays2]= [];
    }
    else if(!isNaN(value2))
    {
      data_value2[pays2].push(value2);
    }
  }

  //  console.log(data_value2);

//////////////////////////////////////////////Graphique 1\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const labels = data_annee; 
  const CountryList = Object.keys(data_value)

  let DataArray = [] 

  for(i=0; i<CountryList.length; i++){ 
  const countryName = CountryList[i];
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  const data = {
 //     label: '',
 //     backgroundColor: 'rgb(255, 99, 132)',
 //     borderColor: 'rgb(255, 99, 132)',
 //     data: data_value,
        label: countryName,
        data: data_value[countryName],
        backgroundColor : "#" + randomColor,
        borderColor : "#" + randomColor
  };
  DataArray.push(data)
}

const ctx = document.getElementById('graphId').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: labels,
        datasets: DataArray
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

////////////////////////////////////////////graph2\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

const labels2 = data_annee2;
const ctx2 = document.getElementById('graphId2').getContext('2d');
  const CountryList2 = Object.keys(data_value2)

  let DataArray2 = [] 

  for(i=0; i<CountryList2.length; i++){ 
  const countryName = CountryList2[i];
  var randomColor = Math.floor(Math.random()*16777215).toString(16);

  const data = {
 //     label: '',
 //     backgroundColor: 'rgb(255, 99, 132)',
 //     borderColor: 'rgb(255, 99, 132)',
 //     data: data_value,
        label: countryName,
        data: data_value2[countryName],
        backgroundColor : "#" + randomColor,
        borderColor : "#" + randomColor
  };
  DataArray2.push(data)
}
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: DataArray2
          },
                options: {
    scales: {
      y: {
        beginAtZero: true
      }}},
});

////////////////////////////////////////////graph 3\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

 function updateChart() {
   $.getJSON("https://canvasjs.com/services/data/datapoints.php" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function(data) {
       $.each(data, function(key, value) {
           dataPoints.push({
               x: parseInt(value[0]),
               y: parseInt(value[1])
           });
      });
      chart.render();
      setTimeout(function(){updateChart()}, 1000);
   });
}

var dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php?xstart=1&ystart=10&length=10&type=json", function(data) {  
    $.each(data, function(key, value){
        dataPoints.push({x: value[0], y: parseInt(value[1])});
    });
    chart = new CanvasJS.Chart("graphId3",{
        title:{
            text:"Live Chart with dataPoints from External JSON"
        },
        data: [{
        type: "line",
        dataPoints : dataPoints,
        }]
    });
    chart.render();
    updateChart();
});


/* var lien = new XMLHttpRequest();
lien.open('get', 'https://canvasjs.com/services/data/datapoints.php');
lien.onreadystatechange = function() {
  if (lien.readyState === 4) {
    alert(lien.responseText);
  }
};
lien.send(); */

const ctx3 = document.getElementById('graphId3').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: dataPoints,
        datasets: [{
            label: 'test',
            data: dataPoints,
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
