//All Id and Class
//All Id and Class
//672
//360
// console.log(window.innerWidth)
const box = document.querySelector(".box");
const container = document.querySelector(".container");
const boxingbox = document.querySelector("#boxingbox");
const introbox = document.querySelector("#introbox");
const discount = document.querySelector("#discount");
const audio = document.querySelector("audio");
const dots = document.querySelectorAll(".dot");
const submitredeemcode = document.getElementById("redeemsubmit");
const redeemcodes = document.getElementById("redeemcodes");
const checkbox = document.querySelector(".checktext");
const cancal = document.querySelector(".cancal");
const profilebox = document.querySelector(".profilebox");
let profile = document.querySelector("#profile");
let profile1 = document.querySelector("#profile1");
const blurbox = document.querySelector(".blurbox");
const randomphoto = document.querySelector("#randomphoto");
const profilepicture12 = document.querySelector("#profilepicture12");
const personName22 = document.querySelector("#personName22");
let boxinmg = document.getElementById("boxingbox");
let buynow = document.getElementById("buynow");
let tutorial = document.querySelector(".tutorial");
let tutorialImg = document.querySelector(".tutorial img");
let buynow2 = document.querySelector("#buynow a");

let skip = document.querySelector("#skip");

//All Id and Class

//index for image
let index = 0;

//Data of foods
let tutorialimgdataindex = 0;
let tutorialimgdata =  ["Polish_20231021_075830325.png","Polish_20231021_080234824.png","Polish_20231021_080455961.png","Polish_20231021_080824449.png" ]

const data = [
  {
    img: "20220211142754-margherita-9920.jpg",
    intro: "This  pizza is delicious.Made with chicken meat and vegetable.",
    discount: "No Delivery Charge",
  },
  {
    img: "Polish_20231018_092830763.jpg",
    intro: "This  chumin is delicious.Mixed chicken meat and vegetable.",
    discount: "No Delivery Charge",
  },
  {
    img: "56018168.jpeg",
    intro: "This  leg is delicious.Mixed SOS and vegetables.",
    discount: "No Delivery Charge",
  },
  {
    img: "SherpaFoodsfullsized-23_1024x1024@2x.jpg",
    intro: "This  momo is delicious.Mixed chicken meat and vegetable.",
    discount: "No Delivery Charge",
  },
  {
    img: "Instant-Pot-Thukpa-FI.jpg",
    intro: "This  noddle is delicious.Mixed chicken meat and vegetable.",
    discount: "No Delivery Charge",
  },
];

//Next Button
nextBtn(data);

//events for x axis to manipulate food menu.
let offset, firstTouch, presentTouch;
boxinmg.addEventListener("touchstart", (e) => {
  firstTouch = e.touches[0].clientX;
});

boxinmg.addEventListener("touchmove", (e) => {
  presentTouch = e.touches[0].clientX;
  offset = presentTouch - firstTouch;
});
boxinmg.addEventListener("touchend", () => {
  if (offset > 60) {
    prevBtn();
  }
  if (offset < -60) {
    nextBtn();
  }
});

//This function help to automate food menu next to next.
setInterval(function () {
  nextBtn();
}, 6000);

//This is Next button
function nextBtn() {
  index++;
  let next = (index + 1) % data.length;
  boxingbox.src = `${data[next].img}`;
  introbox.innerHTML = `${data[next].intro}`;
  discount.innerHTML = `${data[next].discount}`;
  dots.forEach((a, b) => {
    if (next === b) {
      a.style.background = "black";
    } else {
      a.style.background = "white";
    }
  });
}

//This is prev button
function prevBtn() {
  index++;
  let next = (index - 1 + data.length) % data.length;
  console.log(next);
  boxingbox.src = `${data[next].img}`;
  introbox.innerHTML = `${data[next].intro}`;
  discount.innerHTML = `${data[next].discount}`;
  dots.forEach((a, b) => {
    if (next === b) {
      a.style.background = "#000000";
    } else {
      a.style.background = "white";
    }
  });
}

//data of user
let persondeatail = JSON.parse(localStorage.getItem("data")) || [];
buynow2.addEventListener("click", ( ) => {
console.log(persondeatail[0].login)
if(persondeatail.length == 1){
  if(persondeatail[0].login == "successful"){
    buynow2.href = "consume.html"
  }
  else{
    alert("no")
  }
}
})
// console.log(persondeatail);
// we including person name with persondeatail arry, if the length is 1 so we know that there is data.
if (persondeatail.length == 1) {
  if (persondeatail[0].login == "successful") {
    personName22.innerHTML = `NAME: ${persondeatail[0].firstName.toUpperCase()} ${persondeatail[0].lastName.toUpperCase()}`;
    if (persondeatail[0].phototype !== "") {
      profile1.src = `${persondeatail[0].phototype}`;
      randomphoto.src = `${persondeatail[0].phototype}`;
    }
  }
}
//if person doesn't login person profile show this kind of data.
else {
  // randomphoto.src = "avatar-1577909_1280.png"
  //    profilepicture12.src = "avatar-1577909_1280.png"
  //     personName22.innerHTML = "Login First?"
}

//This is submit button, used for analysing code whether person enter the write code or not.
submitredeemcode.addEventListener("click", () => {
  //usertextCode is code enter by person
  let usertextCode = redeemcodes.value;
  //This is actul code and real.
  let redeemcode = "AGBU KJLQ PLHY QUOP";
  //redeemcode is equal to person enter code than it start to analyzing more in deep.
  if (redeemcode == usertextCode) {
    //in this step if persondeatail.length == "" then it make error, so we include this method, which define, arry is empty or not.
    if (persondeatail.length === 1) {
      //every person used this code only one time so, we include this method.
      //if arry.redeem is emty then it fill successful.
      if (persondeatail[0].redeem == "") {
        persondeatail[0].redeem = "successful";
        checkbox.innerHTML = "You Get 2000$ as New Customer.";
        checkbox.style.background = "blue";
        checkbox.style.top = "0px";
        redeemcodes.value = "";
        persondeatail[0].ballance = "2000";
        localStorage.setItem("data", JSON.stringify(persondeatail));
        setTimeout(function () {
          checkbox.style.top = "-30px";
        }, 3000);
      }
      //if arry.redeem is not empty and already being successful then it show.
      else {
        checkbox.innerHTML = " Code is already Used.";
        checkbox.style.background = "#ff0043";
        checkbox.style.top = "0px";
        redeemcodes.value = "";
        setTimeout(function () {
          checkbox.style.top = "-30px";
        }, 3000);
      }
    }
    //if person doesn't login then this method fire up.
    else {
      checkbox.innerHTML = "login first?";
      checkbox.style.background = "red";
      checkbox.style.top = "0px";
      redeemcodes.value = "";
      setTimeout(function () {
        checkbox.style.top = "-30px";
      }, 3000);
    }
  } else {
    checkbox.style.top = "0px";
    redeemcodes.value = "";
    setTimeout(function () {
      checkbox.style.top = "-30px";
    }, 3000);
  }
});

buynow.addEventListener("click", () => {
  if (persondeatail.length === 1) {
    if (persondeatail[0].login == "successful") {
      let src = boxingbox.src;
      persondeatail[0].matching = `${src}`;
      localStorage.setItem("data", JSON.stringify(persondeatail));
    } else {
      alert("login First");
    }
  } else {
    alert("login First");
  }
});

//when someone click on profile the  this method fire up
profile.addEventListener("click", () => {
  blurbox.style.display = "flex";
  profilebox.style.top = "10%";
});
cancal.addEventListener("click", () => {
  blurbox.style.display = "none";
  profilebox.style.top = "-100%";
});


if(persondeatail == 0){
setTimeout(function() {
  tutorial.style.display = "block"
  blurbox.style.display = "flex";
}, 4000);
  skip.addEventListener("click", ( ) => {
    tutorialimgdataindex++;
    tutorialImg.src = tutorialimgdata[tutorialimgdataindex];
    if(tutorialimgdataindex == 3){
      tutorial.style.display = "none"
  blurbox.style.display = "none";
    }
  })
  
}