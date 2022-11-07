const enderecoTipo = "http://localhost/numerapub/Api/Gravartipos.php";
const listagemTipo = "http://localhost/numerapub/Api/Buscartipos.php";



//************************************************************************************ */
window.onload = function(){

    nomes = [];

    const menulogar = document.getElementById('logar');

    menulogar.addEventListener('click', function(e){

             alert("pressionou o login");

    });

};


//*********************************************************************************************** */
function gravartipo() {

    
    const novoente      = document.getElementById("ente");
    const novotipo      = document.getElementById("tipo");
    const novadescricao = document.getElementById("descricao");

   
    tipos = {
        'ente': novoente.value,
        'tipo': novotipo.value,
        'descricao': novadescricao.value
    };

    nomes.push(tipos);
    console.log(nomes);
    
    const options = {
        method: "POST",
        mode: "cors",
        cache : "default",
        headers: {
            "Accept" : "application/json",
            "Content-Type": "application/json; ",
        },
        body: (JSON.stringify(tipos)),
    };

    /********************************************** */
    fetch(enderecoTipo, options)
        .then(response => response.json())
        .then(json => console.log(json))
        .catch (err => console.log("erro... " + err));
   

};


/******************************************************************* */
function ler(){

     const listas = document.getElementById("lista");


    /**************************************** */
     function teste(dados){

        const  div = document.createElement("div");
        const  li  = document.createElement("li");
        
        div.setAttribute("align" , "justify");

        li.innerText =  formataitem(dados.tipo) + ' -  ' + dados.descricao;

        div.appendChild(li);
        
        listas.appendChild(div);

      }

      /********************************** */
     fetch(listagemTipo)

     .then((response) => {

            return response.json();

       })

     .then((dados) => { 

         dados.map((dados) => {

           teste(dados);

       });

     });




  };

  /******************************************** */
  function formataitem(item){

    return ((item  < 10) ? '0' + item : item)

  };
