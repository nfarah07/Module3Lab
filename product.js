var products=[
    {
        name:"Natural Almonds",
        price:3.99,
        'lactose-free':true,
        'nut-free':false,
        category:"snack",
        src:"almond.jpg"


    },
    {
        name:"Brocolli Bag",
        price:7.99,
        'lactose-free':true,
        'nut-free':true,
        category:"vegetable",
        src:"broc.jpeg"
    },
    {
        name: "24 Pack",
        price: 5.99,
        'lactose-free':true,
        'nut-free':true,
        src:"water.jpeg"
    },
    {
        name:"PeanutButter",
        price:3.79,
        'lactose-free':true,
        'nut-free':false,
        src:"maynard.jpeg",
        src:"peanut.jpeg"
    },
    {
        name:"Tofu",
        price:4.65,
        'lactose-free':true,
        'nut-free':true,
        category:"meat",
        src:"tofu.jpeg"
    },
    {
        name:"Chocolate Milk",
        price:2.55,
        'lactose-free':false,
        'nut-free':true,
        category:"meat",
        src:"choc.jpeg"
    },
    {
        name:"Salted Pistachios",
        price:7.89,
        'lactose-free':true,
        'nut-free':false,
        category:"snack",
        src:"pista.jpg"
    },
    {
        name:"Chicken 4pcs",
        price:21.99,
        'lactose-free':true,
        'nut-free':true,
        category:"meat",
        src:"m1.jpeg"
    },
    {
        name:"Chocolate Brownies",
        price:7.99,
        'lactose-free':false,
        'nut-free':true,
        category:"dairy",
        src:"ch.jpeg"
    },
    {
        name:"Maynards candy",
        price:2.99,
        'lactose-free':true,
        'nut-free':true,
        category:"snacks",
        src:"may.jpg"

    }
];
//array of items to display based on first page choice
function restrictListProducts(prods, restriction) {
	let product_names = [];
	for (let i=0; i<prods.length; i+=1) {
		if ((restriction == "lactose-free") && (prods[i]['lactose-free'] == true)){
			product_names.push(prods[i]);
		}
		else if ((restriction == "nuts-free") && (prods[i]['nut-free'] == true)){
            product_names.push(prods[i]);
        }
        else if(restriction == "None"){
            product_names.push(prods[i]);

        }
    }
    return product_names;
}
//price of each item in the array of choosen items. Which return a array containning the prices of each items
function indexOfPrice(chosenProduct){
    let arrayOfPrices=[];
    const a= 0;
    for(let i=0; i<products.length; i++){
        if(chosenProduct[a]==products[i].name){
            arrayOfPrices.push(products[i].price);
            a++
        }
    }
    
    return priceTotal(arrayOfPrices)
}

function priceTotal(arrayOfPrices){
    let total=0;
    for(let t=0; t<arrayOfPrices.length;t++ ){
       total= total + arrayOfPrices[t]; 
    }
    return total
}
function getTotalPrice(chosenProducts) {
	totalPrice = 0;
	for (let i=0; i<products.length; i+=1) {
		if (chosenProducts.indexOf(products[i].name) > -1){
			totalPrice += products[i].price;
		}
	}
	return totalPrice;
}


            