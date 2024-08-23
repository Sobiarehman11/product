
var clothsProduct = {
    GulAhmed: {
      NewYork: {
       img:"kameezshalwar.jfif",
        productName: "kameez shalwar",
        color: "Red",
        price: "$10",
      },
      turkey:{
        img:"kurti1.jfif",
        productName: "kurti",
        color: "blue",
        price: "$20",
      
        
      },
      Pakistan:{
        img:"sari.jfif",
        productName: "sari",
        color: "grey",
        price: "$20",
    },
    london:{
        img:"dupatta1.jfif",
        productName: "dupatta",
        color: "red",
        price: "$20",
    }
},
   Adidas: {
      Paris: {
        img:"scarf.jfif",
        productName: "scarf",
        color: "red",
        price: "$15",
      },
     America: {
        img:"garara.jfif",
        productName: "garara",
        color: "pink",
        price: "$200",
      },
      london: {
        img:"scarf1.jfif",
        productName: "scarf",
        color: "pink",
        price: "$15",
      },
      SiriLanka: {
        img:"longshirt.jfif",
        productName: "long shirt",
        color: "tea pink",
        price: "$150",
      },
       japan: {
        img:"sharara.jfif",
        productName: "sharara",
        color: "black",
        price: "$15",
      }
    },
    Bareeze: {
      London: {
        img:"tshrt.jfif",
        productName: "t-shirt",
        color: "Black",
        price: "$127",
      },
      jerman :{
        img:"fishsharara.jfif",
        productName: "fish sharara",
       color: "pink",
        price: "$300",
      },
      Pakistan :{
        img:"jeans.jfif",
        productName: "jeans",
        color: "blue",
        price: "$700",
      },
      India :{
        img:"dresshrt.jfif",
        productName: "dress shirt",
        color: "grey",
        price: "$80",
      },
      british :{
        img:"drespant.jfif",
        productName: "dress pant",
        shade: "blue",
        price: "$80",
      }
    },
    Khadi: {
      Afghanistan: {
        img:"brownkurti.jfif",
        productName: "brown kurti",
        color: "brown",
        price: "$260",
      },
      Iran: {
        img:"kurtij.jfif",
        productName: "jents kurti",
        color: "Gold",
        price: "$20",
      },
      Swedon: {
        img:"kmezshlwr.jfif",
        productName: "jents kamez shalwar",
        color: "navy blue",
        price: "$20",
      },
      China: {
        img:"tshirt.jfif",
        productName: "jents t-shrt",
        color: "white & black",
        price: "$7000",
      },
      Nipal: {
        img:"trousr.jfif",
        productName: "jents trousr",
        color: "blue",
        price: "$900",
      },

    },
   

  
  }

  var main = document.querySelector("#main")
  var brand = document.querySelector("#brand")
  var country = document.querySelector("#country")

  brand.innerHTML = `<option value="">Select brand </option>`
  
country.innerHTML = `<option value="">Select country name</option>`
 

  


  for(var key in clothsProduct){

    brand.innerHTML += `<option value="${key}">${key}</option>`
    for(var key1 in clothsProduct[key]){
         
        
        
        console.log(clothsProduct[key][key1]);
    var obj = clothsProduct[key][key1]

    main.innerHTML +=` <div class="card text-center" style="width: 18rem;">
            <img src="${obj.img}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${obj.productName}</h5>
              <p class="card-text">${obj.price}</p>
              <a href="#" class="btn btn-success">${obj.color}</a>
            </div>
          </div>`
          
            
          }
  
        
    
  }


  function setCountry(){
    country.innerHTML = ""
    country.innerHTML =`<option value ="">select country name </option>`
for(var key in clothsProduct[brand.value]){
  country.innerHTML +=`<option value ="${key}">${key} </option>`
  
}
  
  }

var selectedCard = document.getElementById("selectedCard")
  function searchProduct(){
     console.log(clothsProduct[brand.value][country.value]);
  
    var userVal = clothsProduct[brand.value][country.value]
   
    
    selectedCard.innerHTML = `<div class="card text-center" style="width: 18rem;">
            <img src="./download.jfif" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${userVal.productName}</h5>
              <p class="card-text">${userVal.price}</p>
              <a href="#" class="btn btn-primary">${userVal.color}</a>
            </div>
          </div>`
             main.style.display = 'none'
          
    
    
  }
  function clearProduct (){
    selectedCard.style.display ='none'
    main.style.display= "flex"
  }
