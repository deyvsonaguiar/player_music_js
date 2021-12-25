let musicas = [
   {titulo: 'Classical Rock', 
    artista: 'Deyvson Aguiar', 
    src: 'musicas/Patterns Of Sadness - Jeremy Korpas.mp3',
    img: 'imagens/rock_music.jpg'
    },
    {titulo: 'Pop Music', 
    artista: 'Deyvson Aguiar', 
    src: 'musicas/Crazy - Patrick Patrikios.mp3',
    img: 'imagens/pop_music.jpg'
    },
    {titulo: 'Classical Music', 
    artista: 'Deyvson Aguiar', 
    src: 'musicas/Mi Dispiace - Mini Vandals.mp3',
    img: 'imagens/classical_music.jpg'
    }
];

let musica = document.querySelector('audio');
let indexMusica = 0;
let duracao = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);

//eventos
document.querySelector('.play').addEventListener('click', tocarMusica);
document.querySelector('.pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if(indexMusica < 0) {
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});
document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if(indexMusica > 2) {
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);

});

//funções
function renderizarMusica(index) {
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracao.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

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


