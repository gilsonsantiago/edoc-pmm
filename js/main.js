/******************************************************************************
 * Endereços URL da API
 */
const enderecoTipo = "http://localhost/numerapub/Api/Gravartipos.php";
const listagemTipo = "http://localhost/numerapub/Api/Buscartipos.php";



/***********************************************************************
* Endereços das Views 
*/
const enderecologin      = "http://localhost/edoc-pmm/views/login.html";
const enderecoentes      = "http://localhost/edoc-pmm/views/entes.html";
const enderecotipos      = "http://localhost/edoc-pmm/views/tipos.html";
const enderecodocumentos = "http://localhost/edoc-pmm/views/documentos.html";
const enderecorelatorios = 'http://localhost/edoc-pmm/views/relatorios.html';
const enderecousuarios   = 'http://localhost/edoc-pmm/views/usuarios.html';



/*************************************************************
 * 
 */
window.onload = function (e) {

  const nomes = [];

  const menulogar      = document.getElementById('logar');
  const menuentes      = document.getElementById('entes');
  const menutipos      = document.getElementById('tipos');
  const menudocumentos = document.getElementById('documentos');
  const menurelatorios = document.getElementById('relatorios');
  const menuusuarios   = document.getElementById('usuarios');


  menulogar.addEventListener('click', menulogarcontrole);
  menuentes.addEventListener("click", menuentescontrole);
  menutipos.addEventListener("click", menutiposcontrole);
  menudocumentos.addEventListener('click', menudocumentoscontrole);
  menurelatorios.addEventListener('click', menurelatorioscontrole);
  menuusuarios.addEventListener('click', menuusuarioscontrole);


};



/******************************************************************
 *  todas as funcções abaixo serão refatorada para otimizar o código
 */



/****************************************** */
function menulogarcontrole(e) {

  const opcaologar = document.getElementById('lista');
  const detalhe    = document.getElementById('detalhes');

  detalhe.innerHTML = '';


  fetch(enderecologin)
    .then((resposta) => resposta.text())
    .then(function (html) {

      opcaologar.innerHTML = html;

    })
    .catch((err) => console.log(err));

};






/****************************************** */
function menuentescontrole(e) {

  const opcaologar = document.getElementById('lista');
  const detalhe    = document.getElementById('detalhes');

  detalhe.innerHTML = '';


  fetch(enderecoentes)
    .then((resposta) => resposta.text())
    .then(function (html) {

      opcaologar.innerHTML = html;

    })
    .catch((err) => console.log(err));

};



/****************************************** */
function menutiposcontrole(e) {

  const opcaologar = document.getElementById('lista');
  const detalhe    = document.getElementById('detalhes');

  detalhe.innerHTML = '';


  fetch(enderecotipos)
    .then((resposta) => resposta.text())
    .then(function (html) {

      opcaologar.innerHTML = html;

    })
    .catch((err) => console.log(err));

};




/****************************************** */
function menudocumentoscontrole(e) {

  const opcaodocumentos = document.getElementById('lista');
  const detalhe = document.getElementById('detalhes');

  detalhe.innerHTML = '';

  fetch(enderecodocumentos)
    .then((resposta) => resposta.text())
    .then(function (html) {

      
      opcaodocumentos.innerHTML = html + listagem();

    })
    .catch((err) => console.log(err));

};


/************************************************** */
function menurelatorioscontrole(e) {

  const opcaorelatorios = document.getElementById('lista');
  const detalhe = document.getElementById('detalhes');

  detalhe.innerHTML = '';

  fetch(enderecorelatorios)
    .then((resposta) => resposta.text())
    .then(function (html) {

      opcaorelatorios.innerHTML = html;

    })
    .catch((err) => console.log(err));

};



/************************************************** */
function menuusuarioscontrole(e) {

  const opcaorelatorios = document.getElementById('lista');
  const detalhe = document.getElementById('detalhes');

  detalhe.innerHTML = '';

  fetch(enderecousuarios)
    .then((resposta) => resposta.text())
    .then(function (html) {

      opcaorelatorios.innerHTML = html;

    })
    .catch((err) => console.log(err));

};







/***********************************************************
 *  Uso futuro.   Uso no Acesso da API
 * 
        Initialize the DOM parser
        var parser = new DOMParser();

        // Parse the text
        var doc = parser.parseFromString(html, "text/html");

        // You can now even select part of that html as you would in the regular DOM 
        // Example:
        // var docArticle = doc.querySelector('article').innerHTML;

       // console.log(doc);


       *****************************************************************************
       Liberação de Origin na API.

       header("Access-Control-Allow-Origin: *");
       header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");

       header("Cache-Control: no-cache, must-revalidate"); // HTTP/1.1
       header("Expires: Sat, 26 Jul 1997 05:00:00 GMT"); // Date in the past

      **************************************************************************************
       Código .htaccess

      <IfModule mod_headers.c>
      Header set Access-Control-Allow-Origin "*"
      </IfModule>

      **************************************************************
      Código para seu script PHP

      ?php
      header("Access-Control-Allow-Headers: Authorization, Content-Type");
      header("Access-Control-Allow-Origin: *");
      header('content-type: application/json; charset=utf-8');
      ?>



      ************************************************************************
      Accept, Authorization, Content-Type

      header('Access-Control-Allow-Origin: http://dominio.com.br');
      Neste exemplo, libero o acesso para qualquer domínio

      header('Access-Control-Allow-Origin: \*');

 */