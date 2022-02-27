let btn = document.getElementById("btn").addEventListener("click", () => {
  let cep = document.getElementById("input").value.replace(/\D/g, "");

  if (cep != "") {
    //Expressão regular para validar o CEP.
    let validacep = /^[0-9]{8}$/;

    if (validacep.test(cep)) {
      let url = "https://viacep.com.br/ws/" + cep + "/json/";
      fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.erro) {
            document.getElementById(
              "res"
            ).innerHTML = `<h1>CEP não encontrado</h1>`;
          } else {
            let contentHTML = `
            <span>Logradouro: ${data.logradouro}</span>
            <span>Complemento: ${data.complemento}</span>
            <span>Bairro: ${data.bairro}</span>
            <span>Localidade: ${data.localidade}</span>
            <span>UF: ${data.uf}</span>
            <span>CEP: ${data.cep}</span>
            <span>DDD: ${data.ddd}</span>
            <span>GIA: ${data.gia}</span>
            <span>IBGE: ${data.ibge}</span>
            <span>SIAFI: ${data.siafi}</span>
            `
            document.getElementById("res").innerHTML = contentHTML;
          }
        })
        .catch((e) => {
          alert("Erro na consulta");
        });
    } else {
      //cep é inválido.
      document.getElementById(
        "res"
      ).innerHTML = `<h2>Formato de CEP inválido.</h2>`;
    }
  } else {
    alert("Preencha o CEP!");
  }
});
