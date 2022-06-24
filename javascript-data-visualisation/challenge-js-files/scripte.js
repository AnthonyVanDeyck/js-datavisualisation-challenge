////////////////////////////////////////Variable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var table = document.getElementById('table1');
var table2 = document.getElementById('table2');
var graphCanvas = document.createElement('canvas');
graphCanvas.setAttribute('id', 'graphId');
// graphCanvas.setAttribute('width', '400px');
// graphCanvas.setAttribute('height', '200px');
table.before(graphCanvas);
var graphCanvas2 = document.createElement('canvas');
graphCanvas2.setAttribute('id', 'graphId2');
table2.before(graphCanvas2);
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

    for(c = 0; c < perlinpinpin.length; c++)
  {
    const Pays2 = data2[c].textContent;
    const value2 = parseFloat(Pays2);
    console.log(data_value2);
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

const ctx2 = document.getElementById('graphId2').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: 'My First Dataset',
          data: [65, 59, 90, 81, 56, 55, 40],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
            }, {
          label: 'My Second Dataset',
          data: [28, 48, 40, 19, 96, 27, 100],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
            }]
          },
});

////////////////////////////////////////////Code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\