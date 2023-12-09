function pesquisarPersonagem() {
  let textoPesquisa = document.getElementById("texto-pesquisa").value.toLowerCase()

  //document.getElementById("texto-pesquisa").innerHTML = ""
  //document.getElementById("texto-pesquisa").value = ""

  let personagens = document.getElementsByClassName("capa");
  for (i = 0; i < personagens.length; i++) {
    if (!personagens[i].getAttribute("name").toLowerCase().includes(textoPesquisa)) {
      personagens[i].style.display = "none";
    } else {
      personagens[i].style.display = "flex";
      personagens[i].style.flexWrap = "wrap";
    }
  }
}