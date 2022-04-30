function onJson_music(json) {
  console.log('JSON ricevuto');
  console.log(json);

  const library = document.querySelector('#album-view');
  library.innerHTML = '';
 
  const results = json.playlist.items;
  let num_results = results.length;

  if(num_results > 10)
    num_results = 10;

  for(let i=0; i<num_results; i++)
  {

    const playlist_data = results[i]

    const title = playlist_data.name;
    const selected_image = playlist.images[0].url;
   
    const album = document.createElement('div');
    album.classList.add('album');
  
    const img = document.createElement('img');
    img.src = selected_image;
 
    const caption = document.createElement('span');
    caption.textContent = title;
  
    album.appendChild(img);
    album.appendChild(caption);

    library.appendChild(album);
  }
}

function onResponse(response) {
  console.log('Risposta ricevuta');
  return response.json();
}

function search(event)
{

  event.preventDefault();

  const playlist_input = document.querySelector('#album');
  const playlist_value = encodeURIComponent(playlist_input.value);
  console.log('Eseguo ricerca: ' + playlist_value);

  fetch("https://api.spotify.com/v1/search?type=playlist&q=" + playlist_value,
    {
      headers:
      {
        'Authorization': 'Bearer ' + token
      }
    }
  ).then(onResponse).then(onJson_music);
}

function onTokenJson(json)
{
  console.log(json)
  token = json.access_token;
}

function onTokenResponse(response)
{
  return response.json();
}


const client_id = 'e1111e62418c4d89b1bcec8fa886a177';
const client_secret = 'eac62c88d0de4d0aac329ffd61d03893';

let token;

fetch("https://accounts.spotify.com/api/token",
	{
   method: "post",
   body: 'grant_type=client_credentials',
   headers:
   {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'Basic' + btoa(client_id + ':' + client_secret)
   }
  }
).then(onTokenResponse).then(onTokenJson);

const music = document.querySelector('.Music');
music.addEventListener('submit', search)