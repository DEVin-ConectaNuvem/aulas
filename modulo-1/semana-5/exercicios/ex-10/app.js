const btnCat = document.getElementById('btn-cat');
const imgCat = document.getElementById('img-cat');

// https://api.thecatapi.com/v1/images/search
const URL = 'https://api.thecatapi.com/v1/images/search';

async function showMeTheCat() {
  try {

    const response = await fetch(URL);
    //console.log(response);
    const content = await response.json();
    //console.log(content);

    imgCat.src = content[0].url;
  } catch (error) {
    console.error(error);
  }
}

btnCat.addEventListener('click', showMeTheCat);

// showMeTheCat();
// ou
window.onload = showMeTheCat;
