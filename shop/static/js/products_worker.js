
let allTypes = ["H", "E", "P"]

let selectedTypes = allTypes;
let books = [];

let activeButton = $('.a-clicked')

function fetchData() {
    fetch("http://127.0.0.1:8000/api/v1/products/")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            books = data;
            console.log(books);
            loadProducts();

        });
}


 
$(".filter").on('click', function(event) {  
    $(".product").remove();
    const books = {
        "E": "e-book",
        "H": "hardcover",
        "P": "paperback",
        "HEP": "all", 
    }

    for(let key in books) {
        let value = books[key] 
        console.log(key)
        if(event.target.id === value){ 
            selectedTypes = key.split('');
            console.log(selectedTypes);
            let newActiveButton = $(`#${value}`).addClass("a-clicked")
            console.log(newActiveButton);
            activeButton.removeClass("a-clicked");
            activeButton = newActiveButton;
        }
      } 
    loadProducts();
});

fetchData();
function loadProducts(type) {
    console.log(books.length)
    for (let i = 0; i < books.length; i++) {
        let item = books[i]; 
        if(selectedTypes.includes(item['category'])) {
            $(".products").append(`<div class="product">
            <img src="${item["image"]}" alt="" />
            <div class="book-detail">
            <div class="main-information"> 
                 <h4>${item["title"].slice(0, 13)}</h4>
                 <p class="author">${item["manufacturer"]}</p>
                 <p>${item["description"].slice(0, 50)}...</p>
             </div>
             <div class="info-section">
             <button class="book_button_info" id="book_${i}">INFO</button>
             </div>
             </div>
            </div>`);
        }
    }
}

