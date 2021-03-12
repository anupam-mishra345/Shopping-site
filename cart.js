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

      let size=JSON.parse(localStorage.getItem("sizes"));
      let qnty=JSON.parse(localStorage.getItem("quantity"));
      let h1=document.getElementById("h1")
      h1.innerHTML+=" ("+array.length+") ";
      h1.style.fontSize="30px";
      
      for(var j=0;j<array.length;j++){
        let i=array[j];
       let s=size[j];
       let q=qnty[j];
        price+=(data[i].price)*q;
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
                    <br><br>
                    
                    <center>
                    <button class="btn" id="minus" style="width:25%;background-color:#D8D7D4;font-weight:bolder;" onclick=minus(${j})> - </button>
                    <input class="btn" value="${q}" style="width:25%;background-color:#D8D7D4;font-weight: 500;">
                    <button class="btn" style="width:25%;background-color:#D8D7D4;font-weight:bolder;" onclick=plus(${j})> + </button>
                    </center>
                </div>
                <br>
            </div>
            <div class="col-sm-7">
                <br>
                <div class="d-flex flex-column">
                    <h4>${data[i].name}</h4>
                    <h6>Brand: ${data[i].brand}</h6>
                    <h5 style="color:green">&#8377;${data[i].price}</h5>
                    <h5>Size: ${s}</h5>
                    <button type="button" class="btn-outline-danger" style="border-radius:10px;width:50%" 
                    onclick=removeItem(${data[i].id})>Remove Item</button>
                </div>
                <br>  
            </div>
        </div>`
        div.innerHTML+=content;
        mainContainer.appendChild(div);
        // if(qnty[j]<=1){
        //     document.getElementById("minus").setAttribute("disabled","true");
        // }
        // if(qnty[j]>1){
        //     document.getElementById("minus").setAttribute("disabled","false");
        // }        

    }
 
    var sideContainer=document.getElementById("priceDetails");
    let div=document.createElement("div");
    div.classList.add("container","p-2");
    
    let content=`
    <div class="row" style="border:1px solid gray;border-radius:5px">
        
        <center><h3>PRICE DETAILS</h3></center>
        <hr>
        <div class=" d-flex justify-content-around">
        <h5>Price (`+array.length+` items)</h5>
        <h5>&#8377;`+price+`</h5>
        </div>
        <div class=" d-flex justify-content-around">
        <h5>Discount</h5>
        <h5>- &#8377;0</h5>
        </div>
        
        <div class=" d-flex justify-content-around">
        <h5>Delivery charge</h5>
        <h5>+ &#8377;0</h5>
        </div>
        <hr>
        <div class="d-flex justify-content-around">
        <h5>Total Amount</h5>
        <h5>&#8377;`+price+`</h5>
        </div>
    </div>
    `
    div.innerHTML+=content;
    sideContainer.appendChild(div);


    let div2=document.createElement("div");
        div.classList.add("container","p-2");
        let button1=`
        <center><button class="btn btn-lg" id="placeOrder" style="background-color:#8F4712;color:white" width="50%">PLACE ORDER</button></center>
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

    let size=JSON.parse(localStorage.getItem("sizes"));
    let qnty=JSON.parse(localStorage.getItem("quantity"));

    let newArray=[];
    let sizeArray=[];
    let qntyArray=[];
     for(let i=0;i<array.length;i++){
         if((id-1)==array[i]){
        }
        else{
             newArray.push(array[i]);
             sizeArray.push(size[i]);
             qntyArray.push(qnty[i]);
         }
     }   
     localStorage.setItem("carts",JSON.stringify(newArray));
     localStorage.setItem("sizes",JSON.stringify(sizeArray));
     localStorage.setItem("quantity",JSON.stringify(qntyArray));
     window.location.href="cart.html";
}

function minus(j){
    let qnty=JSON.parse(localStorage.getItem("quantity"));
    if(qnty[j]>1){
        qnty[j]-=1;
    }
    
    localStorage.setItem("quantity",JSON.stringify(qnty));
    location.reload();
}

function plus(j){
    let qnty=JSON.parse(localStorage.getItem("quantity"));
    qnty[j]+=1;
    localStorage.setItem("quantity",JSON.stringify(qnty));
    location.reload();
}
