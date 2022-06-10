
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
root.appendChild(nav(menu))
