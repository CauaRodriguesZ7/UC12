function validaBusca() {
    if (document.querySelector('#inputLupa').value == ''){
        alert('Digite algo na busca... ');
        return false;
    }
}

document.querySelector('#form-busca').onsubmit = validaBusca;

