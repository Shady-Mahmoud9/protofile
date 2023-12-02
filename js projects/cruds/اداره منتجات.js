let title =document.getElementById("title");
let price =document.getElementById("price");
let taxes =document.getElementById("taxes");
let ads =document.getElementById("ads");
let discount =document.getElementById("discount");
let total =document.getElementById("total");
let count =document.getElementById("count");
let category =document.getElementById("category");
let submit =document.getElementById("submit");



// total
function gettotal(){
     if(price.value != ''){
let price =document.getElementById("price");
        let result =(+price.value+ +taxes.value+ +ads.value)- +discount.value;
        total.innerHTML = result ;
        total.style.background = '#040';
    }
    else{
        total.innerHTML = '' ;
        total.style.background = '#930000';

    }
}

//create
let dataproduct ;
if(localStorage.product != null){
    dataproduct= JSON.parse(localStorage.product)
}
else{
    dataproduct =[];
}




















// save local storage0
submit.onclick  =function(){
    let newproduct ={
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,


    }
    dataproduct.push(newproduct)
    localStorage.setItem("product",
        JSON.stringify(dataproduct))
    console.log( newproduct)
    cleardata()
    readdata()
}

// clear inputs
function cleardata(){
    title.value ='';
    price.value ='';
    taxes.value ='';
    ads.value ='';
    discount.value ='';
    total.innerHTML ='';
    count.value ='';
    category.value ='';


}
// read
function readdata(){
    let tablee = '' 
    for(let i = 0 ; i < dataproduct.length; i++){
        tablee +=`
        <tr>
        <td>${i}</td>
        <td>${dataproduct[i].title}</td>
        <td>${dataproduct[i].price}</td>
        <td>${dataproduct[i].taxes}</td>
        <td>${dataproduct[i].ads}</td>
        <td>${dataproduct[i].discount}</td>
        <td>${dataproduct[i].total}/td>
        <td>${dataproduct[i].category}</td>
        
    </tr>` 
    }
}
// count
// delete
// update
//search
// clean data