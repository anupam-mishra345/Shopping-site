fetch('items.json')
    .then(function (response) {
      return response.json();
  })
  .then( (data)=>{
      appendData(data);
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
         
         <div class="card" style="width: 18rem; ">
          <br>
          <img src="${data[i].images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title" style="color:#7e3517">${data[i].name}</h5>
            <h1 class="card-text text-success">Rs.${data[i].price}</h1>
            <h4 class="card-text">Ratings: ${data[i].rating}<img src="rating-star-icon-11-256.png" style="margin-bottom:5px" 
                height="25px" width="25px"></h4>
            
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