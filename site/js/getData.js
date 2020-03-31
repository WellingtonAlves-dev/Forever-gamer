function createCard(data) {
    return `
        <div class="card bg-dark text-light shadow mb-5" style="width: 18rem;">
        <img class="card-img-top" src="http://localhost:3800/imagens/${data.file}" alt="Card image cap" height="200px">
        <div class="card-body">
            <h5 class="card-title">${data.nome_jogo}</h5>
            <p class="card-text">${data.desc_jogo}</p>
            <div class='estrelas'>
                ${setStar(data.nota_jogo)}
            </div>
        </div>
    </div>
    `
}

function setStar(star) {
    let spans = [`<span class="fa fa-star"></span>`, `<span class="fa fa-star"></span>`,
        `<span class="fa fa-star"></span>`, `<span class="fa fa-star"></span>`,
        `<span class="fa fa-star"></span>`];

    for (let i = 0; i < star; i++) {
        spans[i] = "<span class='fa fa-star checked'></span>"
    }
    return spans.join("");
}

function getData() {
    axios.get("http://localhost:3800/jogos")
        .then(res => {
            let root = document.querySelector("#root");
            root.innerHTML = res.data.map(dados => createCard(dados)).join("");
        })
}

window.onload = getData();