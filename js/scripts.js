const apiKey = 'e549496f17ed507b0e9ebc3007a909b7';
const baseURL = 'https://api.themoviedb.org/3';

async function getRandomMovie() {
    try {
        const response = await fetch(`${baseURL}/discover/movie?api_key=${apiKey}&language=pt-BR`);
        const data = await response.json();
        const movies = data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        displayMovie(randomMovie);
    } catch (error) {
        console.error('Erro ao obter filme:', error);
    }
}

async function topRated() {
    try {
    const response = await fetch(`${baseURL}/movie/top_rated?api_key=${apiKey}&language=pt-BR`);
    const data = await response.json();
    const movies = data.results;
    const top10Movies = movies.slice(0, 10);
    displayTop10Movies(top10Movies)
    } catch (error) {
        console.error('Erro ao obter filme:', error);
    }
}

function displayMovie(movie) {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = `
        <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p class="titulo-filme">${movie.title}</p>
        <p>${movie.overview}</p>
        <p class="rating">Nota: ${movie.vote_average.toFixed(1)}/10</p>
    `;
    movieContainer.style.display = 'block';
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

const carouselList = document.getElementById('carrossel');
const prevArrow = document.querySelector('.prev-arrow');
const nextArrow = document.querySelector('.next-arrow');
let currentPosition = 0;
const step = 100; // Largura de cada item do carrossel

nextArrow.addEventListener('click', () => {
    if (currentPosition > -step * (carouselList.children.length - 1)) {
        currentPosition -= step;
        carouselList.style.transform = `translateX(${currentPosition}%)`;
    }
});

prevArrow.addEventListener('click', () => {
    if (currentPosition < 0) {
        currentPosition += step;
        carouselList.style.transform = `translateX(${currentPosition}%)`;
    }
});


document.getElementById('btn-div').addEventListener('click', getRandomMovie);
document.addEventListener('load', topRated())
