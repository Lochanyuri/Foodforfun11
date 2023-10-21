const personemail = document.getElementById('personEmail')
const personPassword = document.getElementById('personPassword')
const personsubmit = document.getElementById('personsubmit')
const checkdetails = document.querySelector('.checkdetails')
 let persondeatail = JSON.parse(localStorage.getItem("data")) || [];
 
 
 personsubmit.addEventListener("click", () => {
 if(persondeatail.length == 1){
   if(personemail.value == persondeatail[0].email && personPassword.value == persondeatail[0].password ){
 checkdetails.innerHTML = "Login Successful"
 checkdetails.style.background = "green"
   checkdetails.style.top = "0px"
   setTimeout(function() {
     checkdetails.style.top = "-30px"
   }, 3000);
   persondeatail[0].login = "successful"
   localStorage.setItem("data", JSON.stringify(persondeatail))
 }
 else{
 checkdetails.innerHTML = "Something Wrong 🌀"
 checkdetails.style.background = " red"
 
   checkdetails.style.top = "0px"
   setTimeout(function() {
     checkdetails.style.top = "-30px"
   }, 3000);
 }
 }
 else{
  checkdetails.innerHTML = "First Sign up"
 checkdetails.style.background = "red"
   checkdetails.style.top = "0px"
   setTimeout(function() {
     checkdetails.style.top = "-30px"
   }, 3000);
 }
 
 })
 document.getElementById("goback-button").addEventListener("click", function() {
        history.back();
    });
    