// https://superheroapi.com/api/access-token
const containerDiv = document.querySelector('.container')
// let singleContainer = document.querySelector('.singleContainer');
const button = document.querySelector('.btn');
const image = document.querySelector('.image');
const superHeroToken = '1132132367687340';
const base_URL = `https://superheroapi.com/api.php/${superHeroToken}`;
const getRandomSuperHero = (id,name) => {
    // console.log('hello');
    fetch(`${base_URL}/${id}`)
    .then(response => response.json())
    .then(json => {
        // document.querySelector('.image').innerHTML += `<img src="${json.image.url}" height=400>`
        // document.querySelector('.text').innerHTML += `<h3>${json.name}</h3>`
        addSuperHero(json.image.url,json.name)
    })
}
button.onclick = () => getRandomSuperHero(Math.floor(Math.random() * 730));

function addSuperHero(image_url,name_url,power_Stats){

    //creating the node elements div node, span node, text node,
    const divElement = document.createElement('div');
    const spanImg = document.createElement('span');
    const image = document.createElement('img');
    const spanNameText = document.createElement('span');
    const nameText = document.createElement('h3');
    const powerStatSpan = document.createElement('span');
    const powerStatsIntelligence = document.createElement('p')

    //adding the information to the text node element
    powerStatsIntelligence.innerHTML = power_Stats.intelligence;
    nameText.innerHTML = name_url;
    image.src = image_url;
    image.height = 350;
    image.alt = 'hero pic';
    image.style.border = 'solid 2px black';

    //adding the text node element to the span node element
    powerStatSpan.appendChild(powerStatsIntelligence);
    spanImg.appendChild(image);
    spanNameText.appendChild(nameText);

    //adding the span element nodes to the div node
    divElement.append(spanImg,spanNameText,powerStatSpan);
    containerDiv.appendChild(divElement);
}
// getSuperHero(Math.floor(Math.random() * 1000));

//Now we are get the hero we searched
const searchButton = document.querySelector('#searchButton');
const searchInput = document.querySelector('#searchInput');
const search_URL = `${base_URL}/search`
function searchSuperHero(name){
    // console.log(searchInput.value);
    if(name === 'vaibhav' || name === 'VAIBHAV' || name === 'Vaibhav'){
        addSuperHero('../modi.jpeg', name);
    }
    else{
        fetch(`${search_URL}/${name}`)
    .then(response => response.json()
    .then(json => {
        const hero = json.results[0];
        // hero.name = searchInput.value;
        addSuperHero(hero.image.url, hero.name, hero.powerstats);
        console.log(hero);
        
    }))
    }
}
searchButton.onclick = () => searchSuperHero(searchInput.value)
searchInput.addEventListener('keypress', (evt) => {
    if(evt.code === 'Enter'){
        searchSuperHero(searchInput.value)
    }
})
