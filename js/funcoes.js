
//*********************************************************************/
function gravartipo() {

  const novoente = document.getElementById("ente");
  const novotipo = document.getElementById("tipo");
  const novadescricao = document.getElementById("descricao");

  tipos = {
    'ente': novoente.value,
    'tipo': novotipo.value,
    'descricao': novadescricao.value
  };

  const options = {
    method: "POST",
    mode: "cors",
    body: (JSON.stringify(tipos)),
    cache: "default",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json; ",
    }};
    
  
    fetch (enderecoTipo, options)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log("erro... " + err));

  };



/******************************************************************* */
function ler() {

  
  /********************************** */
  fetch(listagemTipo)

    .then((response) => {

      return response.json();

    })

    .then((dados) => {

       const listas = document.getElementById("detalhes");
      
       let novalista =  [];

       novalista = dados.map((dados) => {

               
            return ('<li>' + formataitem(dados.tipo) + ' -  ' + dados.descricao + '</li>');

            console.log(dados.tipo, dados.descricao);

           
        });

        novalista = '<ul>' + novalista + '</ul>';

        listas.innerHTML = novalista;

      // Return o map -- FATORAR MAIS NA FRENTE

    });

};

/******************************************** */
function formataitem(item) {

  return ((item < 10) ? "0" + item : item);

};

