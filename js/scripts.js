const apiKey = 'e549496f17ed507b0e9ebc3007a909b7';
const baseURL = 'https://api.themoviedb.org/3';

async function getRandomMovie() {
    try {
        const response = await fetch(`${baseURL}/movie/popular?api_key=${apiKey}&language=pt-BR`);
        const data = await response.json();
        const movies = data.results;
        const randomMovie = movies[Math.floor(Math.random() * movies.length)];
        displayMovie(randomMovie);
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

document.getElementById('btn-div').addEventListener('click', getRandomMovie);
