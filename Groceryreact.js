let totalAmount = 0;
let listOfItems=[];

window.onload=() =>{
    var run= true;

    const tab_changes= document.querySelectorAll('[data-switcher]'); 
  
    // loop through tabs(customer, product, cart)
    for(let i=0; i<tab_changes.length;i++){
        // getting current tab
        const tab_change=tab_changes[i];
        // whichever tab you clicked on it's id 
        const pageId= tab_change.dataset.tab; 
        //if another tab is clicked we need to de-active the first tab to active the one that is clicked
        // need to listen
        tab_change.addEventListener('click',() =>{
            switchpageOnClick(tab_change, pageId);
        }); 
    }
   

}

function switchpageOnClick(tab_change, pageId){
    //console.log('hhh==>>>', pageId)
    // de-activate on change(i.e on click)
    document.querySelector('.tabs .tab.is-active').classList.remove('is-active'); 
    // this is somehow with parentNode getting the current tab and activating it
    tab_change.parentNode.classList.add('is-active');

    const currentPage= document.querySelector('.pages .page.is-active'); 
    currentPage.classList.remove('is-active')
    // now use id to switch to new page
    const next_page= document.querySelector(`.pages .page[data-page="${pageId}"]`);
    next_page.classList.add('is-active'); 

}
function page2DataOn(userValue){

}



function populateListProductChoices(UserTypeID,linkedPage2ID){
    //console.log('got here==>', UserTypeID, 'linkedPage2ID', linkedPage2ID)
    //var s1 = document.getElementById('dietSelect');
    var s2 = document.getElementById(linkedPage2ID);
    s2.style.width = '880px';
    s2.style.textAlign = 'left';
	
	// s2 represents the <div> in the Products tab, which shows the product list, so we first set it empty
    s2.innerHTML = "";
		
	// obtain a reduced list of products based on restrictions
    var optionArray = restrictListProducts(products, UserTypeID);
    //console.log('got here optionArray==>', optionArray)
    //console.log('got here 0==>', s2)
	// for each item in the array, create a checkbox element, each containing information such as:
	// <input type="checkbox" name="product" value="Bread">
	// <label for="Bread">Bread/label><br>
		
	for (i = 0; i < optionArray.length; i++) { 
        const {price, name, src} = optionArray[i];

		// var productName = optionArray[i].name;
        // create the checkbox and add in HTML DOM
        const divElement = document.createElement('div');
        divElement.style.display = 'inline-block';
        divElement.style.width = '275px';
        divElement.style.textAlign = 'center';
        divElement.style.marginRight = '10px';
        divElement.style.backgroundColor='#8AA37B';
        divElement.style.color='black';
        const imgTag = document.createElement('img');
        imgTag.setAttribute("src", src);
        imgTag.setAttribute("width","275");
        imgTag.setAttribute("height","275");
		var checkbox = document.createElement("input");
		checkbox.type = "checkbox";
		checkbox.name = "product";
        checkbox.value = name;
        checkbox.id = price;
        checkbox.onchange = event => {
            const {checked, id} = event.target;
            //console.log('got here 1==>', checked, 'v==>', value);
            if (checked) {
                totalAmount += parseFloat(id);
                listOfItems.push(name);
                //console.log('elementArrayslot',name);
                //console.log("ItemName1", src);
                

            } else {
                totalAmount -= parseFloat(id);
                //listOfItems.remove(name); remove function needs to be made
                remove(name,listOfItems);
                console.log('elementRemoved',name);
                console.log('element',listOfItems);

            }
        }
        divElement.appendChild(imgTag);
        divElement.appendChild(checkbox);
		
		//console.log('got here 2==>')
		// create a label for the checkbox, and also add in HTML DOM
		var label = document.createElement('label')
        label.htmlFor = name;
       
        label.appendChild(document.createTextNode(`${name} - Price: $${price}`));
        divElement.appendChild(label);
        s2.appendChild(divElement);
        //console.log('got here 3==>')
        console.log('elements', listOfItems);
		// create a breakline node and add in HTML DOM
        //s2.appendChild(document.createElement("br")); 
        
        const product_tab= document.querySelector('[data-tab="2"]'); 
        switchpageOnClick(product_tab, 2);
        //console.log('got here 4==>', product_tab)  
        document.getElementById('addCart').addEventListener('click', () => {
            //console.log('tto==>>', totalAmount)
            const cart_tab= document.querySelector('[data-tab="3"]');
            switchpageOnClick(cart_tab, 3);
            // list all items in the form the proffessor would like. USE a for loop to go through the items 


            document.getElementById('ItemsSelected').innerHTML = listOfItems
            
            document.getElementById('displayCart').innerHTML = `<h7>Cart Total: $${totalAmount}</h7>`;
        })
       


	}
   

}

function remove(item,array){
    for(let i=0; i<array.length; i++){
        if(array[i]==item){
            array.splice(i,1);

        }
        else{
            i++

        }
    }
}

