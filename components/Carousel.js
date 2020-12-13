/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

//HTML:
/*
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

/* THE CODE BELOW MUST BE UNCOMMENTED TO SEE THE FILTERING FUNCTION */

/*
function articleBuilder(articleObj) {
  let cardContainer = document.createElement('div');
  let headLineContainer = document.createElement('div');
  let authorContainer = document.createElement('div');
  let imgContainer = document.createElement('div');
  let authorImage = document.createElement('img');
  let nameContainer = document.createElement('span');

  cardContainer.classList.add('card');
  headLineContainer.classList.add('headline');
  authorContainer.classList.add('author');
  imgContainer.classList.add('img-container');

  cardContainer.appendChild(headLineContainer);
  cardContainer.appendChild(authorContainer);
  authorContainer.appendChild(imgContainer);
  authorContainer.appendChild(nameContainer);
  imgContainer.appendChild(authorImage);

  nameContainer.textContent = `By ${articleObj.authorName}`;
  authorImage.setAttribute('src', articleObj.authorPhoto);
  headLineContainer.textContent = articleObj.headline;

  return cardContainer;
}

let cardsContainer = document.querySelector('div.cards-container');

axios.get("https://lambda-times-api.herokuapp.com/articles").
then((response) => {
    let articlesObject = response.data.articles;
    console.log(articlesObject);
    for(let key in articlesObject) {
      for(let article of articlesObject[key]) {
        let card = articleBuilder(article);
        if(key === 'node') {
          card.classList.add(key + '.js');
        } else {
          card.classList.add(key);
        }
        card.classList.add('all');
        cardsContainer.appendChild(card);
      }
    }

    let stickers = document.querySelectorAll('div.tabs div.topics div.tab');

    let cards = document.querySelectorAll('div.cards-container div.card');

    stickers.forEach((sticker) => {
      sticker.addEventListener('click', function(e) {
          for(let k = 0; k < cards.length; k++) {
            cards[k].style.display = 'flex';
          }
          for(let j = 0; j < cards.length; j++) {
            if(!(cards[j].classList.contains(sticker.textContent))) {
              cards[j].style.display = 'none';
            }
          }
      })
    })

}).
catch((error) => {
    let errorContainer = document.querySelector('div.errors-container');
    let errorMessage = document.createElement('h3');
    let customizedError = document.createElement('p');
    customizedError.textContent = "Failed to Obtain Articles!!!";
    errorMessage.textContent = error;
    errorContainer.appendChild(errorMessage);  
    errorContainer.appendChild(customizedError);
})
*/
