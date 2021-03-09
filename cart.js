fetch('items.json')
    .then(function (response) {
      return response.json();
  })
  .then( (data)=>{
      appendData(data);
      //console.log(data[0].name)
  })
  .catch(function (err){
      console.log(err);
  });
  
  var price=0;
  function appendData(data) {   
      let arr=localStorage.getItem("carts");
      let array=JSON.parse(arr);
      document.getElementById("h1").innerHTML+=" ("+array.length+") ";
     
      for(var j=0;j<array.length;j++){
        let i=array[j];
        price+=data[i].price;
        console.log(data[i].name);
        let mainContainer=document.getElementById("carts");
        let div=document.createElement("div");
        div.classList.add("container","p-2");
        let content=`
        <div class="row" style="border:1px solid gray;border-radius:5px">
        <br>
            <div class="col-sm-5">    
                <br><br>
                <div class="d-flex flex-column">
                    <center><img src="${data[i].images[0]}" alt"..." height="70px" width="auto"></center>
                </div>
                <br>
            </div>
            <div class="col-sm-7">
                <br>
                <div class="d-flex flex-column">
                    <h4>${data[i].name}</h4>
                    <h6>Brand: ${data[i].brand}</h6>
                    <h5 style="color:green">Rs.${data[i].price}</h5>
                    <button type="button" class="btn-outline-danger" style="border-radius:10px;width:50%" onclick=removeItem(${data[i].id})>Remove Item</button>
                </div>
                <br>  
            </div>
        </div>`
        div.innerHTML+=content;
        mainContainer.appendChild(div);
        
        
        

    }
 
    var sideContainer=document.getElementById("priceDetails");
    let div=document.createElement("div");
    div.classList.add("container","p-2");
    
    let content=`
    <div class="row" style="border:1px solid gray;border-radius:5px">
        
        <center><h3>PRICE DETAILS</h3></center>
        <hr>
        <div class=" d-flex justify-content-evenly">
        <h5>Price(`+array.length+` items)</h5>
        <h5>Rs.`+price+`</h5>
        </div>
        <div class=" d-flex justify-content-evenly">
        <h5>Discount</h5>
        <h5>-Rs.0</h5>
        </div>
        
        <div class=" d-flex justify-content-evenly">
        <h5>Delivery charge</h5>
        <h5>+Rs.0</h5>
        </div>
        <hr>
        <div class="d-flex justify-content-evenly">
        <h5>Total Amount</h5>
        <h5>Rs.`+price+`</h5>
        </div>
    </div>
    `
    div.innerHTML+=content;
    sideContainer.appendChild(div);


    let div2=document.createElement("div");
        div.classList.add("container","p-2");
        let button1=`
        <center><button class="btn btn-success btn-lg" id="placeOrder" width="50%">PLACE ORDER</button></center>
        `
        div2.innerHTML+=button1;
        sideContainer.appendChild(div2);
        if(array.length===0){
            document.getElementById("placeOrder").setAttribute("disabled","true")
        }
}

function removeItem(id){
    let arr=localStorage.getItem("carts");
    let array=JSON.parse(arr);
     let newArray=[];
     for(let i=0;i<array.length;i++){
         if((id-1)==array[i]){
        }
        else{
             newArray.push(array[i]);

         }
     }   
     localStorage.setItem("carts",JSON.stringify(newArray));
     window.location.href="cart.html";
}