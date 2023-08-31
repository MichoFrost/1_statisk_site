const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get("category");

fetch(`https://kea-alt-del.dk/t7/api/products?category=${category}`)
.then(res => res.json())
.then((data) => showProducts(data));


function showProducts(products) {
  products.forEach(showProduct);  
}

function showProduct(product){
  const template = document.querySelector("template").content;
  const copy = template.cloneNode(true);

  copy.querySelector(".heading").textContent = product.productdisplayname;
  copy.querySelector(".price").textContent = `${product.price} DKK`;
  copy.querySelector(".readMore").setAttribute("href", `produkt.html?id=${product.id}`)
  copy.querySelector(".image").setAttribute("src", `https://kea-alt-del.dk/t7/images/webp/640/${product.id}.webp`)

  document.querySelector(".productList").appendChild(copy);

  


}