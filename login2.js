//___________________Deposit___________________

// let balance=0;
let amnt=0;
let withdraw=0;
let totalBalance=0;
let pswd='';


function deposit(){
    amnt=dep_amount.value;
    acno=dep_acno.value;
    amnt=Math.floor(amnt);

if(acno in localStorage){
    accountDetails=JSON.parse(localStorage.getItem(acno));
    if(acno==accountDetails.acno && amnt<=0){
        alert("Value cannot be empty or negative")
    }else{
        accountDetails.balance+=amnt;
        // alert(accountDetails.balance)
        localStorage.setItem(acno,JSON.stringify(accountDetails))

        alert("Your amount is successfully added");
        document.getElementById("balance_amount").innerHTML=`<div style="color:greenyellow; text-shadow:2px 2px 5px black" class="text-white fw-bolder mt-2 fs-5 text-center shadow-lg">Your Current Balance is :  <span style="color:greenyellow" class=" fw-bolder"> ₹ ${accountDetails.balance}</span></div>`
    }
}else{
    alert("Incorrect account number")
}    

}





//__________________withdraw___________________

function withdrawal(){
    withdrawAmnt=wd_amount.value
    acno=wd_acno.value
    withdrawAmnt=Math.floor(withdrawAmnt)

    if(acno in localStorage){
        accountDetails=JSON.parse(localStorage.getItem(acno));
        if(acno==accountDetails.acno && withdrawAmnt<=0){

           alert("please enter amount")
        }else if(withdrawAmnt>accountDetails.balance){
alert("Insufficient funds...!")
        }
        else{
            
            alert("Bank balance before withdrawal : "+ accountDetails.balance)

            alert("withdrawal amount:"+ withdrawAmnt)

            accountDetails.balance-=  withdrawAmnt;
            alert("Your amount is successfully added");
            localStorage.setItem(acno,JSON.stringify(accountDetails));

            alert("After withdrawal balance : "+ accountDetails.balance)
            document.getElementById("balance_amnt").innerHTML=`<div style="color:greenyellow; text-shadow:2px 2px 5px black" class="text-white fs-5 fw-bold mt-2 text-center shadow ">Your Current Balance is :  <span style="color:greenyellow" class=" fw-bolder"> ₹ ${accountDetails.balance}</span></div>`
           
        }
    }else{
        alert("Incorrect account number")
    } 

    }


//logout
function logout() {
    localStorage.clear();
    window.location.href = "./index.html";
}