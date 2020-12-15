// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


/* The MVP IS IMPLEMENTED IN THIS FILE. FILTERING FUNCTION IS INCLUDED IN CAROUSEL.JS*/
/* THE CODE IN CAROUSEL.JS INCLUDES THIS CODE BUT IT EXTENDS THE CODE TO ENABLE FILTER FUNCTIONALITY*/
/* COMMENT OUT THE CODE BELOW AND UNCOMMENT THE CODE IN CAROUSEL.JS TO SEE THE FILTERING FUNCTION IN ACTION */


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
    let keys = [];
    for(let key in articlesObject) {
        let topicsArray = articlesObject[key];
        console.log(topicsArray);
        topicsArray.forEach((topic) => {
            let card = articleBuilder(topic);
            //A card added for each article to the DOM
            card.classList.add(key);
            card.classList.add('all');
            cardsContainer.appendChild(card);
            //Added Event Listener so that the headline is logged to the console when the card is clicked!
            card.addEventListener('click', function(e) {
                let cardObj = card;
                for(let paths of e.path) {
                    if(paths === cardObj) {
                        console.log(paths.firstChild.innerHTML);
                    }
                }
            })
        })
    }
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