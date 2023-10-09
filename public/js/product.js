let productSearchItems=document.querySelector("#productSearchItems")
let searchProductValueList=document.querySelector("#searchProductCat");
searchProductValueList.addEventListener("keyup",  (e)=>{
    
productSearchItems.innerHTML="";
    fetch('/api/products?pname='+e.target.value)
   .then((res)=>{
        return res.json()
   })
   .then((finalResponse)=>{
   return finalResponse.proData
})
.then((filterResult)=>{

    filterResult.forEach(element => {
        productSearchItems.innerHTML+=` <div class="col-md-4">
        <div class="product-list-items">
            <div class="card" >
            <div class="hover-img">
                <a href="/product/${element.slug}">
                    <img class="card-img-top productImage" src='/${element.product_image_path}'
                        alt="Card image cap">
                </a>
                </div>

                <div class="card-body">
                    <h5 class="card-title prodcut-title">${element.product_name}</h5>
                    <p class="card-text product-price">Price:${element.price}</p>

                </div>
            </div>

        </div>
    </div>`;
    });


})

})



let priceFilter=document.querySelector("#price-filter")

priceFilter.addEventListener("change",(e)=>{
    productSearchItems.innerHTML="";
    fprice.innerHTML=e.target.value;
    console.log(e.target.value)
    let filterValue=Number(e.target.value)
    fetch('/api/products/price')
    .then((res)=>{
         return res.json()
    })
    .then((finalResponse)=>{
    return finalResponse.proData
 })
 .then((filterResult)=>{

filterResult.forEach(element => {
console.log(element.product_image_path)
    if(Number(element.price)>=15 && Number(element.price)<filterValue)
    productSearchItems.innerHTML+=` <div class="col-md-4">
    <div class="product-list-items">
        <div class="card" ">
        <div class="hover-img">
            <a href="/product/${element.slug}">
                <img class="card-img-top productImage" src='/${element.product_image_path}'
                    alt="Card image cap">
            </a>
            </div>

            <div class="card-body">
                <h5 class="card-title prodcut-title">${element.product_name}</h5>
                <p class="card-text product-price">Price:${element.price}</p>

            </div>
        </div>

    </div>
</div>`;
});

    
})
})



//
// let priceFilter=document.querySelector("#price-filter")

// priceFilter.addEventListener("change",(e)=>{
//     productSearchItems.innerHTML="";
//     fprice.innerHTML=e.target.value;
//     console.log(e.target.value)
//     let filterValue=Number(e.target.value)
//     fetch('/api/products/price')
//     .then((res)=>{
//          return res.json()
//     })
//     .then((finalResponse)=>{
//     return finalResponse.proData
//  })
//  .then((filterResult)=>{

// filterResult.forEach(element => {
// console.log(element.product_image_path)
//     if(Number(element.price)>=15 && Number(element.price)<filterValue)
//     productSearchItems.innerHTML+=` <div class="col-md-4">
//     <div class="product-list-items">
//         <div class="card" ">
//         <div class="hover-img">
//             <a href="/product/${element.slug}">
//                 <img class="card-img-top productImage" src='/${element.product_image_path}'
//                     alt="Card image cap">
//             </a>
//             </div>

//             <div class="card-body">
//                 <h5 class="card-title prodcut-title">${element.product_name}</h5>
//                 <p class="card-text product-price">Price:${element.price}</p>

//             </div>
//         </div>

//     </div>
// </div>`;
// });

    
// })
// })