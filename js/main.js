/******************************************************************************
 * Endereços URL da API
 */



const enderecoTipo       = "http://localhost/numerapub/Api/Gravartipos.php";
const listagemTipo       = "http://localhost/numerapub/Api/Buscartipos.php";



/*
const enderecoTipo       = "http://localhost/numerapub/Api/Gravartipos.php";
const listagemTipo       = "http://localhost/numerapub/Api/Buscartipos.php";
*/

/***********************************************************************
* Endereços das Views 
*/
const enderecoHome       = "http://localhost/edoc-pmm/views/home.html";
const enderecoTipos      = "http://localhost/edoc-pmm/views/tipos.html";
const enderecoRelatorios = 'http://localhost/edoc-pmm/views/relatorios.html';

/*
const enderecoHome       = "http://localhost/edoc-pmm/views/home.html";
const enderecoTipos      = "http://localhost/edoc-pmm/views/tipos.html";
const enderecoRelatorios = 'http://localhost/edoc-pmm/views/relatorios.html';

*/

window.onload = function(e){

  const nomes = [];

  const menulogar      = document.getElementById('logar');
  const menudocumentos = document.getElementById('documentos');
  const menurelatorios = document.getElementById('relatorios');
 
  menulogar.addEventListener('click', menulogarcontrole);

  menudocumentos.addEventListener('click', menudocumentoscontrole);

  menurelatorios.addEventListener('click', menurelatorioscontrole);

};


/****************************************** */
function menulogarcontrole(e){

  const opcaologar = document.getElementById('lista');
  const detalhe    = document.getElementById('detalhes');

  detalhe.innerHTML = '';


  fetch(enderecoHome)
  .then((resposta) => resposta.text())
  .then(function(html) {

     opcaologar.innerHTML = html;

  })
  .catch((err) => console.log(err));

};



/****************************************** */
function menudocumentoscontrole(e){

  const opcaodocumentos = document.getElementById('lista');
  const detalhe         = document.getElementById('detalhes');

  detalhe.innerHTML = '';

  fetch(enderecoTipos)
  .then((resposta) => resposta.text())
  .then(function(html) {

      opcaodocumentos.innerHTML = html;
     
  })
  .catch((err) => console.log(err));

};


/************************************************** */
function menurelatorioscontrole(e){

  const opcaorelatorios = document.getElementById('lista');
  const detalhe         = document.getElementById('detalhes');

  detalhe.innerHTML = '';

  fetch(enderecoRelatorios)
  .then((resposta) => resposta.text())
  .then(function(html) {

      opcaorelatorios.innerHTML = html;
     
  })
  .catch((err) => console.log(err));

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