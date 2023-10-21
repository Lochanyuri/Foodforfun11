const button = document.getElementById("submitphoto")
 const chooseImg = document.getElementById("chooseImg")
 const profilerandompic = document.getElementById("profilerandompic")
 const selectprofile = document.querySelector(".selectprofile");
 const cancal = document.querySelector(".cancal")
 const blurbox = document.querySelector(".blurbox")
 const personname = document.querySelector("#personname")
 const personemail = document.querySelector("#personemail")
 const personaccount = document.querySelector("#personaccount")
 const ballance22 = document.querySelector("#ballance22")
 
let personInformation = JSON.parse(localStorage.getItem("data")) || [];
console.log(personInformation)


if(personInformation.length == 1){
profilerandompic.src  = personInformation[0].phototype;
  personname.innerHTML = `Name: ${personInformation[0].firstName} ${personInformation[0].lastName}`
  personemail.innerHTML = `Email: ${personInformation[0].email}`
  personaccount.innerHTML = `Account: $${personInformation[0].ballance}.00`
  if(personInformation[0].number !== ""){
  phoneNumber.innerHTML = `Number: ${personInformation[0].number}`
  }
  ballance22.innerHTML = `Account: $${personInformation[0].ballance}.00`
  if(personInformation[0].phototype == ''){
    profilerandompic.src = "avataaars.png"
  }
  
}
else{
  profilerandompic.src = "avataaars.png"
  personname.innerHTML = `Name: ????`
  personemail.innerHTML = `Email: ????`
  personaccount.innerHTML = "Account: 0.00"
  ballance22.innerHTML = "Account: 0.00"
}
function select(box){
let selectedImg = box.id;

  button.addEventListener("click", ( ) => {
  
   if(personInformation.length == 1){
personInformation[0].phototype = `${selectedImg}`;
profilerandompic.src  = personInformation[0].phototype;

localStorage.setItem("data", JSON.stringify(personInformation))
selectprofile.style.top = "-70%"
  blurbox.style.display = "none"
   }
   else{
  alert("Please Login And Try Again.")

   }
    
  })
}

chooseImg.addEventListener("click", ( ) => {
  selectprofile.style.top = "0%"
  blurbox.style.display = "flex"
})
cancal.addEventListener("click", ( ) => {
  selectprofile.style.top = "-70%"
  blurbox.style.display = "none"
})