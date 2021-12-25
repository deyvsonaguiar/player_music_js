let musica = document.querySelector('audio');

document.querySelector('.play').addEventListener('click', tocarMusica);
document.querySelector('.pause').addEventListener('click', pausarMusica);

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