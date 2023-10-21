const submit = document.getElementById('submit')
 const feedbackmessage = document.getElementById('feedbackmessage')
 const allfeedmessage = document.querySelector(".allfeedmessage");
 
 let personInformation = JSON.parse(localStorage.getItem("data")) || [];
 console.log(personInformation)
 if(personInformation.length == 1){
 if(personInformation[0].review == "successful"){
   let div = document.createElement("div")
div.classList = "review"
let img = document.createElement("img")
img.src = `${personInformation[0].phototype}` || 'avatar-1577909_1280 (1).png'
let h3 = document.createElement("h3")
h3.innerHTML = `${personInformation[0].firstName} ${personInformation[0].lastName}`
let h4 = document.createElement("h4")
h4.innerHTML = "member"
div.appendChild(img)
div.appendChild(h3)
div.appendChild(h4)
allfeedmessage.appendChild(div)
 }
 }
 submit.addEventListener("click",  () => {
 console.log(feedbackmessage.value)
if(feedbackmessage.value !== ""){
 if(personInformation.length == 1){
 if(personInformation[0].review ==''){
 personInformation[0].review = "successful"
 localStorage.setItem("data", JSON.stringify(personInformation))
let div = document.createElement("div")
div.classList = "review"
let img = document.createElement("img")
img.src = `${personInformation[0].phototype}`
let h3 = document.createElement("h3")
h3.innerHTML = `${personInformation[0].firstName} ${personInformation[0].lastName}`
let h4 = document.createElement("h4")
h4.innerHTML = "member"
div.appendChild(img)
div.appendChild(h3)
div.appendChild(h4)
allfeedmessage.appendChild(div)
}
else{
  alert("You already Reviewed⭐")
}
}
else{
  alert("first Login")
}
}
 })