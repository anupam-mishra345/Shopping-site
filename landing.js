var index;
var data;
fetch('items.json')
.then(function(response){
    return response.json();
})
.then( (mydata)=>{
    let param=new URL(document.location).searchParams;
    index=param.get("id")-1;
    data=mydata;
    appendData(data);
})
.catch(function (err){
    console.log(err);
});


function appendData(data){

    var detail=data[index].images;
    
    let imgVar=document.getElementById("img1")
    imgVar.src=detail[0];
    // imgVar.style.width="auto";
    // imgVar.style.height="400px";
    

    var par=document.getElementById("img2");    
        for(var i=0;i<detail.length;i++){
            var ch=document.createElement("img");
            ch.src=detail[i];
            ch.classList.add("imgAttr");
            ch.setAttribute("onclick","myImage('"+i+"')");//"`myImage(${data},${index},${i})`");
            par.appendChild(ch);       
        }

    var name=document.getElementsByClassName("name")
    for(var i=0;i<name.length;i++){
        name[i].innerHTML+=data[index].name;

    }
    document.getElementById("price").innerHTML="&#8377;"+data[index].price + "  "+`<span style="font-size:20px;color:black">(inclusive of all taxes)</span>`;
    var rating=document.getElementsByClassName("rating")
    for(var i=0;i<rating.length;i++){
        rating[i].innerHTML+="Ratings: "+data[index].rating+`<img src="rating-star-icon-11-256.png" style="margin-bottom:7px" height="24px" width="24px">`;
    }
    document.getElementById("rating").innerHTML+=data[index].rating+`<img src="rating-star-icon-11-256.png" style="margin-bottom:7px" height="24px" width="24px">`   
    document.getElementById("brand").innerHTML+=data[index].brand;
    document.getElementById("category").innerHTML+=data[index].type;
    document.getElementById("gender").innerHTML+=data[index].department;
    document.getElementById("color").innerHTML+=data[index].color;
    document.getElementById("lifestyle").innerHTML+=data[index].lifeStyle;
    document.getElementById("material").innerHTML+=data[index].material;
    document.getElementById("size").innerHTML+=data[index].size;

    for(let j=0;j<data[i].comments.length;j++){
        let maindiv=document.getElementById("review");
        let cmntdiv=document.createElement("div");
        let cmnt=`
        <span>${data[index].comments[j].review}</span><br>
        <b><span>By: ${data[index].comments[j].reviewBy} </span></b><hr>
        `
        cmntdiv.innerHTML+=cmnt;
        maindiv.appendChild(cmntdiv);
    }
}

function myImage(i) {
    document.getElementById("img1").src="";
    document.getElementById("img1").src=data[index].images[i];
    document.getElementById("img1").focus();

}

function myCart(){
let s=document.getElementById("sz").value

if (s==="") {
    alert("Please enter size");
}
else{
    if (localStorage.getItem('carts') == null) {
        
        let cart=[];
        let size=[];
        let qnty=[];
        
        cart[cart.length]=index;
        size[size.length]=s;
        qnty[qnty.length]=1;
        localStorage.setItem("carts",JSON.stringify(cart));
        localStorage.setItem("sizes",JSON.stringify(size));
        localStorage.setItem("quantity",JSON.stringify(qnty));
        console.log(cart);

    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let size=localStorage.getItem("sizes");
        let m=JSON.parse(cart);
        let sz=JSON.parse(size);
        let qnty=JSON.parse(localStorage.getItem("quantity"));
        let p=m.length;
        let temp=0;
        for(let i=0;i<p;i++){
            if(m[i]==index){
                temp++;
            }
        }
        if (temp==0) {
            m[p]=index;
            sz[sz.length]=s;
            qnty[qnty.length]=1;
        }
        localStorage.setItem("carts",JSON.stringify(m));
        localStorage.setItem("sizes",JSON.stringify(sz));
        localStorage.setItem("quantity",JSON.stringify(qnty));
    }
    
    window.document.location="cart.html"+"?id="+(index+1);

}
}
