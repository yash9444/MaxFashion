


let cardData = JSON.parse(localStorage.getItem("cartData"))

let cartCount = cardData.length || 0

document.querySelector("#cartDisplay").innerText = cartCount

display(cardData)
function display(prodData) {
    prodData.forEach(function (ele) {
      let card = document.createElement("div");
     
      let color = document.createElement("p");
      color.innerText = "Color : " + ele.color;
      color.style.marginTop = "10px"
  
      let size = document.createElement("select");
      size.setAttribute("id", "size");
      size.style.border = "none" 
      size.style.paddingLeft = "0px"
  
      let option1 = document.createElement("option");
      option1.setAttribute("value", "all");
      option1.innerText = "Size : "+ "All";
  
      let option2 = document.createElement("option");
      option2.setAttribute("value", "small");
      option2.innerText = "Size : "+ "Small";
  
      let option3 = document.createElement("option");
      option3.setAttribute("value", "medium");
      option3.innerText = "Size : "+ "Medium";
  
      let option4 = document.createElement("option");
      option4.setAttribute("value", "large");
      option4.innerText = "Size : "+ "Large";
  
      let option5 = document.createElement("option");
      option5.setAttribute("value", "xtralarge");
      option5.innerText = "Size : "+ "Xtra Large";

  
      size.append(option1, option2, option3, option4, option5);
  
      let img = document.createElement("img");
      img.setAttribute("src", ele.img);
  
      let price = document.createElement("h3");
      price.innerText = "₹ " + ele.price;
  
      let name = document.createElement("h4");
      name.innerText = ele.name;
  
     
      card.append(img, price, name, color,size);
      document.querySelector("#display").append(card);
    });
  }


  