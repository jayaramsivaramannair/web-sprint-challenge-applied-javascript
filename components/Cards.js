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


axios.get("https://lambda-times-api.herokuapp.com/articles").
then((response) => {
    let articlesObject = response.data.articles;
    let keys = [];
    for(let key in articlesObject) {
        keys.push(key);
    }
    console.log(keys);

})


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



//Test Object
let articleObj = {
    authorName: "MAX GOODBOYE",
    authorPhoto: "https://tk-assets.lambdaschool.com/247dd20f-7e32-479b-a861-c3bbe85b5f0c_max.jpg",
    headline: "The Hottest New Bootstrap 4 Components Every Developer Needs to Know About",
    id: "8b881573-414b-4b0d-80a8-2d7a3d546e02"
}

console.log(articleBuilder(articleObj));
