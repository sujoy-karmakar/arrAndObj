//add meat at the begning if it has not alredy added
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (!shoppingCart.includes("Meat")) {
    shoppingCart.unshift("Meat")
}
console.log(shoppingCart);

//add sugar at the end if it has not alredy added
if (!shoppingCart.includes("Sugar")) {
    shoppingCart.push("Sugar")
}
console.log(shoppingCart);
//remove honey if you are allergic to honey
let allergicToHoney = true
if (allergicToHoney) {
    for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i] == "Honey") {
            shoppingCart.splice(i, 1)
        }
    }
    console.log(shoppingCart);
}
// modify tea to green tea
for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i] == "Tea") {
        shoppingCart[i] = "Green Tea"
    }
}
console.log(shoppingCart);