

fetch("https://kea-alt-del.dk/t7/api/products/1165")
.then(res => res.json())
.then((data) => showProduct(data));

function showProduct(product){
  const heading = document.querySelector(".heading"); 
  heading.textContent = product.productdisplayname; 
  const brandName = document.querySelector(".brand"); 
  brandName.textContent = product.brandname; 
  const image = document.querySelector(".image"); 
  image.src = product.brandimage; 
}