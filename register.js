//.........create an account register a new account........

function register(){
  //1.fetch values from html
  uname=reg_name.value
  acno=reg_acno.value
  pswd=reg_psw.value
  
  console.log(acno,uname,pswd);
  
  //2. create accountnoDetails object
  accountDetails={
      acno,
      uname,
      pswd,
      balance:0
  }
  
  //3.check if acno laready presnt in local storage
  if(acno in localStorage){
      alert("User already registered")
  }else
  {
      //To set details in localStorage
      localStorage.setItem(acno,JSON.stringify(accountDetails))
      //redirect to login page
      window.location="./login.html"
      
  }}