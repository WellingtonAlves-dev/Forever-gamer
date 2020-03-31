let btn_sendData = document.querySelector("#sendData");

btn_sendData.onclick = () => {
    let imagem = document.querySelector("#imagem_jogo").files[0];
    let nome = document.querySelector("#nome_jogo").value;
    let desc = document.querySelector("#desc_jogo").value;

    let formData = new FormData();
    formData.append("nome", nome);
    formData.append("desc", desc);
    formData.append("file", imagem);
    formData.append("nota", nota);

    API = "http://localhost:3800/jogos";
    sendData(API, formData);
}

function sendData(API, data) {
    axios.post(API, data, {
        headers: {
            'Content-Type': `multipart/form-data;`
        }
    })
        .then(res => {
            console.log(res);
            getData();
        })
        .catch(err => {
            console.log(err);
        })
}