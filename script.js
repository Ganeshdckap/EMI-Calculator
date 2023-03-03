const principal = document.querySelector(".Principal")
const interest = document.querySelector(".Interest")
const months = document.querySelector(".Months")
const submit = document.querySelector(".Submit")
const results = document.querySelector(".result")
const diff = document.querySelector(".diff")
const total = document.querySelector(".total")
// console.log(total);


submit.addEventListener("click",()=>{
   if (principal.value && interest.value &&months.value !==""){
      // alert("Plz add principal amount")
    let int1 = interest.value/1200
    let firstmethod= principal.value*int1 *((1+int1)**months.value)
    // console.log(firstmethod)
    let years = months*12
    let secondmethod =((1+int1)**months.value-1)
    let emi = Math.round(Number(firstmethod/secondmethod))
    // console.log(result)
    results.innerText = "Your Monthly EMI is ₹" + emi
    let differnce1 = emi*months.value -principal.value;
    differnce1.innerText =differnce1

    

    diff.innerText = "Total Intrest payable ₹" + differnce1
    let totalamount = Number(principal.value) + Number(differnce1)
    total.innerText = "Total Payment (Principal + Interest)₹" + totalamount
   }
  else{
   (principal.value && interest.value &&months.value =="")
   alert("Please Enter All Values")
   
  }
})