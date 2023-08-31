fetch(`https://kea-alt-del.dk/t7/api/categories`)
.then(res => res.json())
.then(showCategories)


function showCategories(categories){
  categories.forEach(showCategory);
}

function showCategory(category){
  const template = document.querySelector("template").content;
  const clone = template.cloneNode(true);

  const cloneLink = clone.querySelector("a");
  cloneLink.textContent = category.category;
  cloneLink.setAttribute("href", `produktliste.html?category=${category.category}`)
  console.log(cloneLink)

  let categoryList = document.querySelector(".categoryList");
  categoryList.appendChild(clone);


}