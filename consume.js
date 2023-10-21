let imagebtn1 = document.getElementById("imagebtn1");
let imagebtn2 = document.getElementById("imagebtn2");
let imagebtn3 = document.getElementById("imagebtn3");
let contentimg = document.getElementById("contentimg");
let priceoffood = document.getElementById("priceoffood");
let foodquentity = document.getElementById("foodquentity");
let submitted = document.getElementById("submitted");
let place = document.getElementById("location");
let number = document.getElementById("number");
let ballance = document.getElementById("ballance");
let submitandbuy = document.getElementById("submitandbuy");
let cancel = document.getElementById("cancel");
let popupbuying = document.querySelector(".popupbuying");
let button = document.querySelector(".navbar a");
let blurbox = document.querySelector(".blurbox");

let personInformation = JSON.parse(localStorage.getItem("data")) || [];
console.log(personInformation);
let arry = [
  {
    id: "pizaa",
    name: "pizza",
    price: "2",
    firstImg: "Polish_20231020_142529187.jpg",
    secondImg: "Polish_20231020_142603572.jpg",
    thirdImg: "Polish_20231020_142643249.jpg",
    matching: "20220211142754-margherita-9920.jpg",
    order: "",
  },
  {
    id: "thukpa",
    name: "thukpa",
    price: "3",
    firstImg: "Polish_20231020_142705598.jpg",
    secondImg: "Polish_20231020_142732423.jpg",
    thirdImg: "Polish_20231020_142820014.jpg",
    matching: "Instant-Pot-Thukpa-FI.jpg",
    order: "",
  },
  {
    id: "choumin",
    name: "choumin",
    price: "4",
    firstImg: "Polish_20231020_142846246.jpg",
    secondImg: "Polish_20231020_142912540.jpg",
    thirdImg: "Polish_20231020_142942424.jpg",
    matching: "Polish_20231018_092830763.jpg",
    order: "",
  },
  {
    id: "momo",
    name: "momo",
    price: "5",
    firstImg: "Polish_20231020_143007902.jpg",
    secondImg: "Polish_20231020_143026269.jpg",
    thirdImg: "Polish_20231020_143046148.jpg",
    matching: "SherpaFoodsfullsized-23_1024x1024@2x.jpg",
    order: "",
  },
  {
    id: "chickenleg",
    name: "chickenleg",
    price: "7",
    firstImg: "Polish_20231020_143126614.jpg",
    secondImg: "Polish_20231020_143148033.jpg",
    thirdImg: "Polish_20231020_143207652.jpg",
    matching: "56018168.jpeg",
    order: "",
  },
];

if(personInformation.length == 1){
  if(personInformation[0].redeem == "successful"){
     ballance.innerHTML = `Account: $${personInformation[0].ballance}.00`
     
  }
}
submitandbuy.addEventListener("click", ( ) => {
arry.forEach((a, b) => {
    if (personInformation[0].matching.includes(a.matching)) {
      
    if(place.value !== '' && number.value !== ''){
    let howmanyfood = Number(foodquentity.value);
  let personActulance = Number(personInformation[0].ballance)
  let foodprice = Number(a.price);
  let personlocation = place.value;
  let personNumber = number.value;
  let cutballance = personActulance - (foodprice * howmanyfood);
  personInformation[0].ballance = cutballance;
  personInformation[0].number = personNumber;
  localStorage.setItem("data",JSON.stringify(personInformation))
  popupbuying.style.top = "-55%"
  blurbox.style.display = "none" 
  location.reload();
    }
    else{
      alert("please enter your location and Number")
    }
    }
})
  
})

if (personInformation.length == 1) {
  if (personInformation[0].matching !== "") {
    contentimg.src = `${personInformation[0].matching}`;
  }
}
arry.forEach((a, b) => {
  if (personInformation[0].matching.includes(a.matching)) {
    imagebtn1.src = a.firstImg;
    imagebtn2.src = a.secondImg;
    imagebtn3.src = a.thirdImg;
    priceoffood.innerHTML = `$${a.price}.00`;
  }
});
function image(img) {
  contentimg.src = img.src;
}
cancel.addEventListener("click", ( ) =>{
 popupbuying.style.top = "-55%"
  blurbox.style.display = "none" 
})
submitted.addEventListener("click", () => {
if(foodquentity.value <= 5){
if(foodquentity.value == 0){
  alert("Please Select the quantity.")
}
else if(foodquentity.value > 0){
  popupbuying.style.top = "25%"
  blurbox.style.display = "flex"
}
}
  if (foodquentity.value > 5) {
    foodquentity.style.background = "red";
    foodquentity.style.color = "white";
    alert("5 Is limit.");
  }
  if (foodquentity.value <= 5) {
    foodquentity.style.background = "white";
    foodquentity.style.color = "black";
  }
});






button.addEventListener("click", () => {
  
});
