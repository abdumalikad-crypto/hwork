let btn = document.getElementById('btn');
let products = document.getElementById('product');
console.log(btn,product);

btn.addEventListener('click',() =>{
  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(data=>{
    product.innerHTML = data.products.map(
 
      product =>`
<ul>${product.aplle}</ul>
<li>${product.book}</li>
        <i>${product.icon}</i>
         <p>${product.hello }</p>
   <b>${product.big}</b>
        ` 
    );
  })
  .catch(err => console.error(err));
});