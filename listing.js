var data;
fetch('items.json')
    .then(function (response) {
      return response.json();
  })
  .then( (myData)=>{
      data=myData;
     display(data);
     // applyFilters();
      console.log(data[0].name)
  })
  .catch(function (err){
      console.log(err);
  });

  function appendData(data) {
      
      var mainContainer = document.getElementById("mainId");
      
      for (var i = 0; i < data.length; i++) {
          
          var div = document.createElement("div");
         div.classList.add("p-2","cards" )
         
         let card=`<a style="text-decoration:none" onclick=myFunction(${data[i].id})>
         
         <div class="card" style="width: 15rem;border:1px solid #17B7C4">
          <br>
          <img src="${data[i].images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color:#7e3517;font-size:20px">${data[i].name}</h5>
            <h1 class="card-text text-success" style="font-size:22px">&#8377;${data[i].price}</h1>
            <h4 class="card-text" style="font-size:16px">Ratings: ${data[i].rating}<img src="rating-star-icon-11-256.png" style="margin-bottom:5px" 
                height="16px" width="16px"></h4>
            
          </div>
          </div></a>`;
          
          div.innerHTML+=card;
          mainContainer.appendChild(div);
          
      }
  }

  function myFunction(id){
    //   localStorage.setItem("prdId",id);
      window.document.location="landing.html"+"?id="+id;
  }

  
function applyFilters(){
      let b=document.getElementsByClassName("brnd");
      let brandArray=[];
      let colorArray=[];
      let priceArray=[];
      let brandListingArray=[];
      let colorListingArray=[];
      let priceListingArray=[];

    let mainArray=[];

    let listingArray=[];

    for(let x of b){
        if(x.checked){
            brandArray.push(x.value);
        }
    }

    let c=document.getElementsByClassName("color");
    for(let x of c){
        if(x.checked){
            colorArray.push(x.value);
        }
    }

    let p=document.getElementsByClassName("price");
    for(let x of p){
        if(x.checked){
            priceArray.push(x.value);
        }
    }
    console.log(priceArray);

    if(brandArray.length!==0){
        for(let i=0;i<brandArray.length;i++){
            for(let j=0;j<data.length;j++){
                if(brandArray[i]===data[j].brand){
                    brandListingArray.push(data[j].id);
                }
            }
        }
        console.log(brandListingArray);
    }

    if(colorArray.length!==0)
    {
        for(let i=0;i<colorArray.length;i++){
            for(let j=0;j<data.length;j++){
               if(colorArray[i]===data[j].color){
                   colorListingArray.push(data[j].id);
              }
            }
        }
        console.log(colorListingArray);
    }

    if(priceArray.length!==0){
        for(let i=0;i<priceArray.length;i++){
            for(let j=0;j<data.length;j++){
                if(priceArray[i]==="p1"){
                    if(data[j].price>=100 && data[j].price<=499){
                        priceListingArray.push(data[j].id);
                    }
                }
                else if(priceArray[i]==="p2"){
                    if(data[j].price>=500 && data[j].price<=1499){
                        priceListingArray.push(data[j].id);
                    }
                }
                else if(priceArray[i]==="p3"){
                    if(data[j].price>=1500 && data[j].price<=2500){
                        priceListingArray.push(data[j].id);
                    }
                }
            }
        }
    }

    let temp=0;

    if (brandListingArray.length !== 0 && colorListingArray.length !== 0 && priceListingArray.length!==0) {
        for(let i=0;i<brandListingArray.length;i++){
            for(let j=0;j<colorListingArray.length;j++){
                for(let l=0;l<priceListingArray.length;l++){
                if((brandListingArray[i]==colorListingArray[j])&&(colorListingArray[j]==priceListingArray[l])){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===brandListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(brandListingArray[i]);
                    }
                }
            }
        }
        }
    }
    else if (brandListingArray.length !== 0 && colorListingArray.length !== 0) {
        for(let i=0;i<brandListingArray.length;i++){
            for(let j=0;j<colorListingArray.length;j++){
                if(brandListingArray[i]==colorListingArray[j]){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===brandListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(brandListingArray[i]);
                    }
                }
            }
        }
    }
    else if (brandListingArray.length !== 0 && priceListingArray.length !== 0) {
        for(let i=0;i<brandListingArray.length;i++){
            for(let j=0;j<priceListingArray.length;j++){
                if(brandListingArray[i]==priceListingArray[j]){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===brandListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(brandListingArray[i]);
                    }
                }
            }
        }
    }
    else if (priceListingArray.length !== 0 && colorListingArray.length !== 0) {
        for(let i=0;i<priceListingArray.length;i++){
            for(let j=0;j<colorListingArray.length;j++){
                if(priceListingArray[i]==colorListingArray[j]){
                    for(let k=0;k<mainArray.length;k++){
                        if(mainArray[k]===priceListingArray[i]){
                            temp++;
                        }
                    }
                    if(temp===0){
                        mainArray.push(priceListingArray[i]);
                    }
                }
            }
        }
    }
    else if(brandListingArray.length!==0){
        for(let i=0;i<brandListingArray.length;i++){
            mainArray.push(brandListingArray[i]);
        }
    }
    else if(colorListingArray.length!==0){
        for(let i=0;i<colorListingArray.length;i++){
            mainArray.push(colorListingArray[i]);
        }
    }
    else if(priceListingArray.length!==0){
        for(let i=0;i<priceListingArray.length;i++){
            mainArray.push(priceListingArray[i]);
        }
    }

    console.log(mainArray);

    for(let i=0;i<mainArray.length;i++){
        let elem=data.find((e)=>{
            if(mainArray[i]===e.id){
                return true;
            }
        })
        listingArray.push(elem);
    }
    console.log(listingArray);
    document.getElementById("mainId").innerHTML=""; 
    display(listingArray);
    if(listingArray.length===0){
        if(brandListingArray.length!==0 || colorListingArray.length!==0){
        let res=document.getElementById("mainId");
        res.innerHTML="Product Not Found";
        res.style.color="red";
        res.style.fontWeight="bolder";
        res.style.fontSize="20px";
        }
        else{
            display(data);
        }
    }
       
}

function display(data){
    appendData(data);
}
