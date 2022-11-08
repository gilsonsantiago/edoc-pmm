const enderecoTipo = "http://localhost/numerapub/Api/Gravartipos.php";
const listagemTipo = "http://localhost/numerapub/Api/Buscartipos.php";



//************************************************************************************ */
window.onload = function () {

  const nomes = [];

  const menulogar = document.getElementById('logar');
  const menudocumentos = document.getElementById('documentos');
  const menurelatorios = document.getElementById('relatorios');

  menulogar.addEventListener('click', function (e) {

     const opcaologar = document.getElementById('lista');

     fetch('http://localhost/edoc-pmm/views/home.html')
     .then((resposta) => resposta.text())
     .then(function(html) {

        opcaologar.innerHTML = html;

     })
     .catch((err) => console.log(err));

  });

  menudocumentos.addEventListener('click', function (e) {

    alert("pressionou o DOCUMENTOS");

  });

  menurelatorios.addEventListener('click', function (e) {

    alert("pressionou o RELATORIOS");

  });

};

/*
 // Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

       // console.log(doc);

   */    