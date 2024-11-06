async function fetchjoke() {
    try {
        const response = await fetch('https://v2.jokeapi.dev/joke/Any');
        const joke = await response.json();
    
    document.getElementById('joke').innerHTML = <p>${joke.setup}</p><p>${joke.punchline}</p>;
    }
  catch (error) {
    console.error('Error fetching joke:', error);
}
}
function clearjoke() {
    document.getElementById('joke').innerHTML = '';
}
fetchJoke();