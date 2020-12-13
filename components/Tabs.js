// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

let topicsContainer = document.querySelector('div.topics');
let tabsArray = [];

axios.get("https://lambda-times-api.herokuapp.com/topics")
.then((response) => {
   console.log(response.data.topics);
   let topics = response.data.topics;
   topics.forEach((datum) => {
       let tab = document.createElement('div');
       tab.classList.add('tab');
       tab.textContent = datum;
       tabsArray.push(datum);
       console.log(tab);
       topicsContainer.appendChild(tab);
   })
}).
catch((error) => {
    let errorContainer = document.querySelector('div.errors-container');
    let errorMessage = document.createElement('h3');
    let customizedError = document.createElement('p');
    customizedError.textContent = "Failed to Obtain Topics for Tabs!";
    errorMessage.textContent = error;
    errorContainer.appendChild(errorMessage);  
    errorContainer.appendChild(customizedError);
})

