const ctxUsuario = document.getElementById("chart-usuarios");

const style = window.getComputedStyle(document.body);
const corPrimaria = style.getPropertyValue("--cor-primaria");
const corSecundaria = style.getPropertyValue("--cor-secundaria");
const corTexto = style.getPropertyValue("--cor-texto");

function hexParaRGBA(hex, alpha) {

  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b}})`;
}

function criarOptions(nomeGrafico) {

  const options = {

    plugins: {
      title: {
        display: true,
        fullSize: true,
        align: "start",
        color: corTexto,
        position: "top",
        padding: 0,
        text: nomeGrafico,
        font: {
          size: 20
        }
      },
      subtitle: null,
      legend: {
        position: "top",
        align: "start",
        labels: {
          usePointStyle: true,
          pointStyle: "circle"
        },
        display: true
      },
      tooltip: {
        mode: "index",
        intersect: false,
        usePointStyle: true,
        backgroundColor: "#ffffff",
        titleColor: "#000000",
        bodyColor: "#000000",
        position: "nearest"
      },
    },
    maintainAspectRatio: false,
    aspectRatio: 1,
    scale: {
      x: {
        stacked: false,
        min: 0
      },
      y: {
        stacked: false,
        min: 0
      }
    },
    indexAxis: "x",
    hover: {
      mode: null
    }
  };


  return options;
}



const chartUsuario = new Chart(ctxUsuario, {
  type: "line",
  data: {
    labels: [
      "Janeiro",
      "Fevereiro",
      "Março",
      "Abril",
      "Maio",
      "Junho",
      "Julho",
      "Agosto",
      "Setembro",
      "Outubro",
      "Novembro",
      "Dezembro"
    ],
    datasets: [{
      label: 'Novos usuários',
      data: [12, 9, 23, 4, 10, 14, 6, 21, 22, 10, 11, 9],
      fill: true,
      tension: 0.5,
      borderColor: corSecundaria,
      backgroundColor: [hexParaRGBA(corSecundaria, 0.5)],
    }],
  },
  responsive: false,
  options: criarOptions("Novos usuários por mês"),
});

console.log(chartUsuario);


