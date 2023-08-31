const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

fetch(`https://kea-alt-del.dk/t7/api/products/${id}`)
.then(res => res.json())
.then((data) => showProduct(data));

function showProduct(product){

  console.log(product.id)

  const heading = document.querySelector(".heading"); 
  heading.textContent = product.productdisplayname; 
  const brandName = document.querySelector(".brand"); 
  brandName.textContent = product.brandname; 
  const image = document.querySelector(".image"); 
  image.src = `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`; 
}