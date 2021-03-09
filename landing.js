var index;
fetch('items.json')
.then(function(response){
    return response.json();
    
})
.then( (data)=>{
    let param=new URL(document.location).searchParams;
    index=param.get("id")-1;
    console.log(data);
    appendData(data);
})
.catch(function (err){
    console.log(err);
});


function appendData(data){

    var detail=data[index].images;
    
    document.getElementById("img1").src=detail[0];

    var par=document.getElementById("img2");    
        for(var i=0;i<detail.length;i++){
            var ch=document.createElement("img");
            ch.src=detail[i];
            ch.classList.add("imgAttr")
            par.appendChild(ch);       
        }

    var name=document.getElementsByClassName("name")
    for(var i=0;i<name.length;i++){
        name[i].innerHTML+=data[index].name;

    }
    document.getElementById("price").innerHTML="Rs."+data[index].price + "  "+`<span style="font-size:20px;color:black">(inclusive of all taxes)</span>`;
    var rating=document.getElementsByClassName("rating")
    for(var i=0;i<rating.length;i++){
        rating[i].innerHTML+="Ratings: "+data[index].rating+`<img src="rating-star-icon-11-256.png" style="margin-bottom:10px" height="30px" width="30px">`;
    }
    document.getElementById("rating").innerHTML+=data[index].rating+`<img src="rating-star-icon-11-256.png" style="margin-bottom:10px" height="30px" width="30px">`   
    document.getElementById("brand").innerHTML+=data[index].brand;
    document.getElementById("category").innerHTML+=data[index].type;
    document.getElementById("gender").innerHTML+=data[index].department;
    document.getElementById("color").innerHTML+=data[index].color;
    document.getElementById("lifestyle").innerHTML+=data[index].lifeStyle;
    document.getElementById("material").innerHTML+=data[index].material;
    document.getElementById("size").innerHTML+=data[index].size;
}

function setImages(data,index,i){
    document.getElementById("img1").src=data[index].images[i];
}

function myCart(){

    if (localStorage.getItem('carts') == null) {
        
        let cart=[];
        let size=cart.length;
        cart[size]=index;
        localStorage.setItem("carts",JSON.stringify(cart));
        console.log(cart);

    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let m=JSON.parse(cart)
        let p=m.length
        m[p]=index;
        localStorage.setItem("carts",JSON.stringify(m));
        
    }
    window.document.location="cart.html"+"?id="+(index+1);
}
