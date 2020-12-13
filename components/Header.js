// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let headerContainer = document.createElement('div');
    let dateContainer = document.createElement('span');
    let mainTitle = document.createElement('h1');
    let tempContainer = document.createElement('span');

    headerContainer.classList.add('header');
    dateContainer.classList.add('date');
    dateContainer.textContent = "March 28, 2020";
    mainTitle.textContent = "Lambda Times";
    tempContainer.classList.add('temp');
    tempContainer.textContent = "98°";

    headerContainer.appendChild(dateContainer);
    headerContainer.appendChild(mainTitle);
    headerContainer.appendChild(tempContainer);

    return headerContainer;
}

let headerContainer = document.querySelector('div.header-container');
console.log(headerContainer);
headerContainer.appendChild(Header());
