// Information to reach API
const apiKey = 'fcdb9d0c2804453a8dbe579b2e4a0faa';
const url = 'https://api.rebrandly.com/v1/links';

// Some page elements
const inputField = document.querySelector('#input');
const shortenButton = document.querySelector('#shorten');
const responseField = document.querySelector('#responseField');

// AJAX functions
const shortenUrl = () => {
}

// Clear page and call AJAX functions
const displayShortUrl = (event) => {
  event.preventDefault();
  while(responseField.firstChild){
    responseField.removeChild(responseField.firstChild)
  }
const shortenUrl = () => {
  const urlToShorten = inputField.value;
  const data = JSON.stringify({destination: urlToShorten});
  fetch(url, {
    method: 'POST',
    headers: { 'Content-type': 'application/json', 'apikey': apiKey },
    body: data
  }).then(response = (response) =>{
    if (response.ok){
      return response.json();
    };
    throw new Error('Request failed!');
  }, networkError => console.log(networkError.message))
  };

}

shortenButton.addEventListener('click', displayShortUrl);


// I learned how to return the Promise on a fetch() POST request
