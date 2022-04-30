
function onJson_anime(json) {
	console.log('JSON ricevuto');

	const library = document.querySelector('#random');
	library.innerHTML = '';

	const results = json;

	  const anime_data = results;

	 const title = anime_data.anime;
	 const character = anime_data.character;
	 const quote = anime_data.quote;

	  
	 

	  const anime = document.createElement('div');
	  anime.classList.add('animen');

	  const caption = document.createElement('span');
	  caption.textContent = 'Titolo: ' + title;
	  const personaggio = document.createElement('span');
	  personaggio.textContent = 'Personaggio: ' + character;
	  const descrizione = document.createElement('span');
	  descrizione.textContent = 'Descrizione: ' + quote;

	  anime.appendChild(caption);
	  anime.appendChild(personaggio);
	  anime.appendChild(descrizione);

	  library.appendChild(anime);
	  anime.classList.add('On');
	
	 console.log('fine');
  }
  
  function onResponse(response) {
	console.log('Risposta ricevuta');
	return response.json();
  }


function search(event)
{

  event.preventDefault();

  rest_url = 'https://animechan.vercel.app/api/random';
  console.log('URL: ' + rest_url);

  fetch(rest_url).then(onResponse).then(onJson_anime);
}


const form = document.querySelector('.Anime');
form.addEventListener('submit', search)

