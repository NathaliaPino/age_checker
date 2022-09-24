function verificar() {
  var texto = window.document.querySelector("#texto");
  var resposta = window.document.querySelector(".resposta");
  var dataHoje = new Date();
  var pegarAno = dataHoje.getFullYear();

  if (texto.value.length == 0 || Number(texto.value) > pegarAno) {
    window.alert("ERRO! Verifique os dados e tente novamente");
  } else {
    var calculoIdade = pegarAno - Number(texto.value);
    var radios = window.document.getElementsByName("radio");
    var genero = radios[0].checked ? "Mulher" : "Homem";
    resposta.innerHTML = ` ${genero} com ${calculoIdade} anos (ou que vai fazer ${calculoIdade} anos, este ano) `;
  }
}
