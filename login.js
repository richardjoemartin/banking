
function login(){
  //1. fetch the details
  acno=log_acno.value
  pswd=log_pswd.value
  console.log(acno,pswd);

  //2.check if acno is present in local storage

  if(acno in localStorage){
      accountDetails=JSON.parse(localStorage.getItem(acno));
      if(pswd==accountDetails.pswd){
          alert("Login Successful")
          window.location="./login2.html"
      }else{
          alert("Incorrect password")
      }
  }else{
      alert("Invalid account number")
  }
}
