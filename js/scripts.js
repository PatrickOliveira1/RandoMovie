const apiKey = 'e549496f17ed507b0e9ebc3007a909b7';
const baseURL = 'https://api.themoviedb.org/3';

async function getRandomMovie() {
    try {
        const response = await fetch(`${baseURL}/discover/movie?api_key=${apiKey}&language=pt-BR`); // chamada para API
        const data = await response.json(); // conversão para JSON
        const movies = data.results; // armazena os resultados na variável
        const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // pega um filme aleatório da lista
        displayMovie(randomMovie); //chama a função DisplayMovie e usa randomMovie como argumento
    } catch (error) {
        console.error('Erro ao obter filme:', error);
    }
}

async function getRandomType(genreId) {
    try {
        const response = await fetch(`${baseURL}/discover/movie?api_key=${apiKey}&language=pt-BR&with_genres=${genreId}`); // chamada para API
        const data = await response.json(); // conversão para JSON
        const movies = data.results; // armazena os resultados na variável
        const randomMovie = movies[Math.floor(Math.random() * movies.length)]; // pega um filme aleatório da lista
        displayMovie(randomMovie); //chama a função DisplayMovie e usa randomMovie como argumento
    } catch (error) {
        console.error('Erro ao obter filme:', error);
    }    
}

function displayMovie(movie) {
    const movieContainer = document.getElementById('movie-container'); // seleciona o conteiner onde aparecerá as informações do filme
    movieContainer.innerHTML = `
        <img class="poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
        <p class="titulo-filme">${movie.title}</p>
        <p>${movie.overview}</p>
        <p class="rating">Nota: ${movie.vote_average.toFixed(1)}/10</p>
    `; // insere as informações dentro do local especificado
    movieContainer.style.display = 'block'; // deixa o conteiner visível
}

document.getElementById('btn-div').addEventListener('click', getRandomMovie);
document.getElementById('q1').addEventListener('click', function() {
    getRandomType(28);
});
document.getElementById('q2').addEventListener('click', function() {
    getRandomType(18);
});
document.getElementById('q3').addEventListener('click', function() {
    getRandomType(10749);
});
document.getElementById('q4').addEventListener('click', function() {
    getRandomType(35);
});
document.getElementById('q5').addEventListener('click', function() {
    getRandomType(12);
});
document.getElementById('q6').addEventListener('click', function() {
    getRandomType(878);
});
document.getElementById('q7').addEventListener('click', function() {
    getRandomType(27);
});
document.getElementById('q8').addEventListener('click', function() {
    getRandomType(53);
});
document.getElementById('q9').addEventListener('click', function() {
    getRandomType(16);
});
