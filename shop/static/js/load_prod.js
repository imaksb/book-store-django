let products = []

fetch('http://127.0.0.1:8000/api/v1/products/')
.then(response => response.json())
.then(data => {
    console.log(data)
    products = data
});

function loadProducts(category) {
    let filterFunction;

    filterFunction = category ? (product) => product.manufacturer === category : () => true;

    let productsFiltered = products.filter(filterFunction);
    let productsHtml = '<div class="container">';

    for (let i = 0; i < productsFiltered.length; i++) {
        productsHtml += `<div class='card-elem' id='${productsFiltered[i].id}'><h2>${productsFiltered[i].title}</h2> <img width='50%' src='${productsFiltered[i].image}'/>  <p><button class="active_desc">INFO</button></p> <p class="description">${productsFiltered[i].description}</p></div>`;
        if ((i + 1) % 3 === 0 && i !== productsFiltered.length - 1) {
            productsHtml += '</div><div class="container">';
        }
    }
    
    productsHtml += '</div>'; 
    let productsContainer = document.getElementById('container-id');
    productsContainer.innerHTML = productsHtml;
}

loadProducts();

addEventListener('click', function(event){
    if(event.target.id === 'laptops_button'){
        loadProducts('laptop')
    }
    if(event.target.id === 'mobile_button'){
        loadProducts('phone')
    }
    if(event.target.id === 'all_button'){
        loadProducts()
    }
});

document.addEventListener('click', function (event) {
    if (event.target.classList.contains('active_desc')) {
        
        let description = event.target.parentElement.nextElementSibling;
        let close = document.createElement('button');
        makeModalDescription(description);
        makeCloseButton(close);
        close.addEventListener('click', function () {
            description.style.display = 'none';
        });
        
        description.appendChild(close);
    }
});

function makeModalDescription(description) {
    description.style.display = 'block';
    description.style.position = 'fixed';
    description.style.top = '50%';
    description.style.left = '50%';
    description.style.transform = 'translate(-50%, -50%)';
    description.style.backgroundColor = 'white';
    description.style.padding = '30px';
    description.style.border = '1px solid black';
    description.style.borderRadius = '10px';
    description.style.zIndex = '1000';
}

function makeCloseButton(close){
    close.innerHTML = `X`;
    close.style.position = 'fixed';
    close.style.top = '0';
    close.style.right = '0';
    close.style.color = 'red';
    close.style.border = 'none';
    close.style.cursor = 'pointer';
    close.style.background = 'none';
    close.style.width = '30px';
}
            
