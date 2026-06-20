let btn = document.getElementById('btn');
let products = document.getElementById('product');
console.log(btn,product);

btn.addEventListener('click',() =>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data=>{
    product.innerHTML = data.products.map(
      product =>`
       <div class="cash">
       <img src=${product.images}>
<ul>${product.price}</ul>
<h1>${product.category}</h1>
        <i>${product.stock}</i>
         <p>${product.discountPercentage}</p>
            </div>
        ` 
    );
  })
  .catch(err => console.error(err));
});