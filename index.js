
const root = document.getElementById("root")

const menu = ["home", "About", "contact", "products", "login"]

function nav(menu) {
    const navBar = document.createElement("nav");
    for (let item in menu){
        const a = document.createElement("a");
        a.innerHTML = menu[item];
        navBar.appendChild(a);
        }
        return navBar
}
function hero() {
    let hero = document.createElement("h1")
    hero.className = "hero"
    let h1 = document.createElement("h1")
    h1.innerHTML = "welcome to the store"
    hero.appendChild(h1)
    return hero;
}

function featuredproducts(products){
    let featured = document.createElement("div")
    featured.className = "featured"
    let h2 = document.createElement("h2")
    h2.innerHTML = "featured products"
    featured.appendChild(h2);
    
    productscontainer.className = "grid";
    products.forEach(function(product)) {
        const productscontainer = document.createElement("div")
        productscontainer.class = "product"
        const productimage = document.createElement("img")
        productsimage.src = product.image
        productscontainer.appendChild(productimage)
        const productname = document.createElement("h3")
        productname.html = product.name
        productscontainer.appendChild("productName")
        const productPrice = document.createElement("p")
        productPrice.innerhtml = product.price
        productscontainer.appendChild(productPrice)
        const productDescription = document.createElement("p")

    }
    return featured
}
function footer()
let footer = document.createElement("footer")
footer.className = "footer"
let p = document.createElement("p")
p.innerHTML = "shopping &copy;2022"
footer.appendChild(p)
return footer;
{           
root.appendChild(nav(menu));
root.appendChild(hero());
root.appendChild(featuredproducts());
root.appendChild(footer())
}

