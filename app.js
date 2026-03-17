const addToBasketButtons = document.querySelectorAll(".add-to-basket");
addToBasketButtons.forEach(button => {
    button.addEventListener("click", addToBasket);
});

let basket = [];

let plants = [
    {
     Name:"Zonnebloem",
     Text:"Zonnebloemen al vanaf €2 per bos",
     Img: "nora'sFlora foto's/pexels-pixabay-54267.jpg",
     Price:5,
     button: "add to basket"
    },
{
     Name:"Rode Tulpen",
     Text:"Rode Tulpen al vanaf €3 per bos",
     Img:"nora'sFlora foto's/pexels-valeriya-1961778.jpg",
     Price:7.68,
     button: "add to basket"
    },
{
     Name:"Cactus",
     Text:"Cactus in pot, deze week 3 voor €5",
     Img:"nora'sFlora foto's/pexels-scottwebb-403571.jpg",
     Price:2,
     button: "add to basket"
    },
{
     Name:"Rozenboeket",
     Text:"Rozenboeket al vanaf €19.60",
     Img:"nora'sFlora foto's/pexels-secret-garden-333350-931176.jpg",
     Price:19.60,
     button: "add to basket"
    },
{
     Name:"Trouwdagboeket",
     Text:"Speciaal samengestelde trouwdag boeket bundel al vanaf",
     Img:"nora'sFlora foto's/pexels-43381756-7462761.jpg",
     Price:25,
     button: "add to basket"
    },
{
     Name:"Lenteboeket",
     Text:"Lenteboeket al vanaf €20",
     Img:"nora'sFlora foto's/pexels-valeriya-1484657.jpg",
     Price:20,
     button: "add to basket"
    },
{   Name:"Diverse Planten",
    Text:"Diverse Planten al vanaf €5 per pot",
    Img:"nora'sFlora foto's/pexels-maureen-piecesphotography-1207978.jpg",
    Price:15,
    button: "add to basket"
    },
{
     Name:"Diverse lente bloemen",
     Text:"Diverse lentebloemen €7,50 per bos",
     Img:"nora'sFlora foto's/pexels-jos-van-ouwerkerk-377363-1075960.jpg",
     Price:25,
     button: "add to basket"
    },
{
    Name:"Paarse allium Bloemen",
    Text:"Paarse allium Bloemen per bos €4",
    Img:"nora'sFlora foto's/pexels-mikebirdy-109828.jpg",
    Price:10,
    button: "add to basket"
    },

]
;

for (let i = 0; i < plants.length; i++) {
    const plant = plants[i];
    const plantElement = document.createElement("div");
    plantElement.classList.add("plant");
    plantElement.innerHTML = `
        <img src="${plant.Img}" alt="${plant.Name}">
        <h2>${plant.Name}</h2>
        <p>${plant.Text}</p>
        <p>Price: €${plant.Price}</p>
        <button class="buttonOnAssorment">${plant.button}</button>
    `;
    plantElement.style.fontSize = "16px";
    document.querySelector(".container").appendChild(plantElement);
}

function addToBasket() {

}