////////////////////////////////////////Variable\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

var table = document.getElementById('table1');
var graphCanvas = document.createElement('canvas');
graphCanvas.setAttribute('id', 'graphId');
graphCanvas.setAttribute('width', '400px');
graphCanvas.setAttribute('height', '200px');
table.before(graphCanvas);
const tableau = Array.from(table.querySelectorAll('tbody > tr'));
var annee = tableau[0].querySelectorAll('th');
var data_value = {};
var pays = ' ';
var array = []
var data_annee = [];
//console.log(annee)

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

  for(i = 1; i < tableau.length && j < tableau.length; i++)
  {
    var dataa = tableau[j].querySelectorAll('td');
    
    data_value[i] = dataa[i];
    j++;
  }
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
//  console.log(dataa);
}
//////////////////////////////////////////////Graphique\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

  const labels = data_annee;

  const data = {
    labels: labels,
    datasets: [{
      label: '',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: array,
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

Annee();
Data();