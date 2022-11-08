const enderecoTipo = "http://localhost/numerapub/Api/Gravartipos.php";
const listagemTipo = "http://localhost/numerapub/Api/Buscartipos.php";



//************************************************************************************ */
window.onload = function () {

  nomes = [];

  const menulogar = document.getElementById('logar');
  const menudocumentos = document.getElementById('documentos');
  const menurelatorios = document.getElementById('relatorios');

  menulogar.addEventListener('click', function (e) {

    alert("pressionou o LOGIN");

  });

  menudocumentos.addEventListener('click', function (e) {

    alert("pressionou o DOCUMENTOS");

  });

  menurelatorios.addEventListener('click', function (e) {

    alert("pressionou o RELATORIOS");

  });

};

