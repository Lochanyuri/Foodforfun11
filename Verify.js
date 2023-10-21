const submitted = document.querySelector("#personsubmit")
 const personFirstName = document.querySelector("#personFirstName")
 const personLastName = document.querySelector("#personLastName")
 const personEmail = document.querySelector("#personEmail")
 const checkdetails = document.querySelector(".checkdetails")
 const personPassword = document.querySelector("#personPassword")
 const backtoprev = document.querySelector("#backtoprev")
 
 
 let persondeatail = JSON.parse(localStorage.getItem("data")) || [
   {
     firstName:'',
     lastName: '',
   email:'',
   password: '',
   login:'',
   redeem:'',
   phototype:'',
   ballance:'',
   review:'',
   matching: '',
   number:'',
   }
   ];

 submitted.addEventListener("click", ( ) => {
 
 if(persondeatail[0].firstName !=='' &&persondeatail[0].lastName !== '' && persondeatail[0].email !== '' && persondeatail[0].password !== '' ){
   checkdetails.innerHTML = "You Already Have Id And Password."
  checkdetails.style.background = '#ff00e2'
    checkdetails.style.top = "0px"
    setTimeout(function() {
      checkdetails.style.top = "-30Px"
    }, 3000);
 }
 else{
   let emailshouldbe = "@gmail.com"
  if(persondeatail[0].firstName =='' &&persondeatail[0].lastName == '' && persondeatail[0].email == '' && persondeatail[0].password == '' && personEmail.value.includes(emailshouldbe)){
 
    persondeatail[0].firstName = personFirstName.value
    persondeatail[0].lastName = personLastName.value
    persondeatail[0].email = personEmail.value
    persondeatail[0].password = personPassword.value
 
 // persondeatail.push(data)
 localStorage.setItem("data", JSON.stringify(persondeatail))
  checkdetails.innerHTML = "Successfully Created 🔑"
  checkdetails.style.background = 'blue'
    checkdetails.style.top = "0px"
    setTimeout(function() {
      checkdetails.style.top = "-30Px"
    }, 3000);
    personFirstName.value = ''
    personLastName.value = ''
    personEmail.value = ''
    personPassword.value = ''
    
  }
  else{
  checkdetails.innerHTML = "Try Again."
    checkdetails.style.background = "red"
    checkdetails.style.top = "0px"
    personFirstName.value = ''
    personLastName.value = ''
    personPassword.value = ''
    personEmail.value = ''
    setTimeout(function() {
      checkdetails.style.top = "-30Px"
    }, 3000);
  }
 }
   
 
  
 })


    document.getElementById("goback-button").addEventListener("click", function() {
        history.back();
    });
