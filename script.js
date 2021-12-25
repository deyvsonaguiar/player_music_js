let musica = document.querySelector('audio');

//eventos
document.querySelector('.play').addEventListener('click', tocarMusica);
document.querySelector('.pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);

//funções
function tocarMusica() {
    musica.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica() {
    musica.pause();
    document.querySelector('.pause').style.display = 'none';
    document.querySelector('.play').style.display = 'block';
}

function atualizarBarra() {
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10 ) {
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' + campoSegundos;
}
