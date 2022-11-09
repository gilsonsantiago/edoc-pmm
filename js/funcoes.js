
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

  const listas = document.getElementById("detalhes");

  /********************************** */
  fetch(listagemTipo)

    .then((response) => {

      return response.json();

    })

    .then((dados) => {

      dados.map((dados) => {

           adicionaritem(dados, listas);

      });

      // Return o map -- FATORAR MAIS NA FRENTE

    });

};

/******************************************** */
function formataitem(item) {

  return ((item < 10) ? "0" + item : item);

};



 /*****************************************/
 function adicionaritem(dados, listas) {

    const div = document.createElement("div");
    const li = document.createElement("li");

    div.setAttribute("align", "justify");

    li.innerText = formataitem(dados.tipo) + ' -  ' + dados.descricao;

    div.appendChild(li);

    // listas.innerHTML = div;

    listas.appendChild(div);

}