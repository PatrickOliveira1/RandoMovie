async function topRated() {
    try {
    const response = await fetch(`${baseURL}/movie/top_rated?api_key=${apiKey}&language=pt-BR`); // chamada para API
    const data = await response.json(); // conversão para JSON
    const movies = data.results; // armazena os resultados na variável
    const top10Movies = movies.slice(0, 10); //pega os 10 primeiros filmes da lista
    displayTop10Movies(top10Movies) //chama a função DisplayTop10Movies e usa top10Movies como argumento
    } catch (error) {
        console.error('Erro ao obter filme:', error);
    }
}

function displayTop10Movies(movies) {
    const movieContainer = document.getElementById('carrossel');
    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        // Cria uma div para cada filme
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-item');

        // Cria um elemento para o título
        const movieTitle = document.createElement('p');
        movieTitle.textContent = movie.title;
        movieDiv.appendChild(movieTitle);

        // Cria uma imagem para o pôster
        const moviePoster = document.createElement('img');
        moviePoster.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
        moviePoster.alt = movie.title;
        movieDiv.appendChild(moviePoster);

        // Adiciona a div do filme ao container
        movieContainer.appendChild(movieDiv);
    });
}

const imgs = document.getElementsByClassName('movie-item')
const carouselList = document.getElementById('carrossel');
let currentPosition = 0;

function carrossel() {
    if (imgs.length > 0) {
        currentPosition++;
        if (currentPosition > imgs.length - 5) {
            currentPosition = 0;
        }

        for (const img of imgs) {
            img.style.transform = `translateX(${-currentPosition * 400}px)`;
        }
    }
}

setInterval(carrossel, 1500);

document.addEventListener('load', topRated())