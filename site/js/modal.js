estrelas();
let nota = 1;
// Estrelas
function estrelas() {
    let allEstrelas = document.querySelectorAll(".estrelas_rating .fa");
    allEstrelas.forEach(star => {
        star.onclick = function () {
            clearCheckedStar();
            checkedStar(this.getAttribute('data'))
        }
    })
}

function clearCheckedStar() {
    let stars = document.querySelectorAll(".estrelas_rating .fa");
    stars.forEach(star => {
        star.classList.remove("checked");
    })
}

function checkedStar(star) {
    for (let i = 1; i <= star; i++) {
        document.querySelector(".s" + i).className = `fa fa-star s${i} checked`;
        nota = i;
    }
}

//Preview imagem
function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            let img = document.querySelector(".img_demon");
            img.style.display = 'block';
            img.setAttribute('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}