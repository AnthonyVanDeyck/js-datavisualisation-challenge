////////////////////////////////////////Variable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var table = document.getElementById('table1');
var graphCanvas = document.createElement('canvas');
graphCanvas.setAttribute('id', 'graphId');
// graphCanvas.setAttribute('width', '400px');
// graphCanvas.setAttribute('height', '200px');
table.before(graphCanvas);
const tableau = Array.from(table.querySelectorAll('tbody > tr'));
var annee = tableau[0].querySelectorAll('th');
var perlinpinpin = document.querySelectorAll('#table1 td');
var data_value = {};
var pays = '';
// var array = []
var data_annee = [];
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
  console.log(data_value);
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

////////////////////////////////////////////Code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Annee();
//Data();