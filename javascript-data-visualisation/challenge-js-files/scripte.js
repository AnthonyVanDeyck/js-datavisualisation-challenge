////////////////////////////////////////Variable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var table = document.getElementById('table1');
var graphCanvas = document.createElement('canvas');
graphCanvas.setAttribute('id', 'graphId');
graphCanvas.setAttribute('width', '400px');
graphCanvas.setAttribute('height', '200px');
table.before(graphCanvas);
const tableau = Array.from(table.querySelectorAll('tbody > tr'));
var annee = tableau[0].querySelectorAll('th');
var data_value =[];
var data_annee = [];
//console.log(annee)
Annee();
Data();

///////////////////////////////////////Fonction\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function Annee()
{
 
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

}

function Data()
{

  var i;
  for(i = 1; i < tableau.length; i++)
  {
    var dataa = tableau[i].querySelectorAll('td');

    data_value[i] = dataa[i];

    console.log(dataa);
  }
}
//////////////////////////////////////////////Graphique\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const labels = data_annee;

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [],
    }]
  };

  const config = {
    type: 'line',
    data: data,
    options: {}
  };

   const myChart = new Chart(
    document.getElementById('graphId'),
    config
  );

////////////////////////////////////////////Code\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\