const principal = document.querySelector(".Principal")
const interest = document.querySelector(".Interest")
const months = document.querySelector(".Months")
const submit = document.querySelector(".Submit")
const results = document.querySelector(".result")
const diff = document.querySelector(".diff")
const total = document.querySelector(".total")
const month = document.querySelector(".month")
const year = document.querySelector(".year")
const btns = document.querySelectorAll("#ss")
// console.log(btns);

month.addEventListener("click", () => {
  month.classList.toggle("touch");
  year.classList.remove("touch")
 
  submit.addEventListener("click", () => {
    if (principal.value !== "" && interest.value !== "" && months.value !== "") {

      let int1 = interest.value / 1200
      let firstmethod = principal.value * int1 * ((1 + int1) ** months.value)

      let secondmethod = ((1 + int1) ** months.value - 1)
      let emi = (Number(firstmethod / secondmethod))

      let emi1 = Math.round(emi)

      results.innerText = "Your Monthly EMI is ₹"+ emi1.toLocaleString()

      let differnce1 = emi * months.value - principal.value;
      differnce1.innerText = Math.round(differnce1)

      diff.innerText = "Total Intrest payable ₹" + Math.round(differnce1).toLocaleString()
      let totalamount = Number(principal.value) + Number(differnce1)
      total.innerText = "Total Payment (Principal + Interest)₹" + Math.round(totalamount).toLocaleString()
    }
    
})
   
})

year.addEventListener("click", () => {

  year.classList.toggle("touch");
  month.classList.remove("touch");
 
  submit.addEventListener("click", () => {
    if (principal.value && interest.value && months.value !== "") {
      let monthstoyears = months.value * 12
      let int1 = interest.value / 1200
      let firstmethod = principal.value * int1 * ((1 + int1) ** monthstoyears)

      let secondmethod = ((1 + int1) ** monthstoyears - 1)
      let emi = (Number(firstmethod / secondmethod))

      let emi1 = Math.round(emi)

      results.innerText = "Your Monthly EMI is ₹" + emi1.toLocaleString()

      let differnce1 = emi * monthstoyears - principal.value;
      differnce1.innerText = Math.round(differnce1)

      diff.innerText = "Total Intrest payable ₹" + Math.round(differnce1).toLocaleString()
      let totalamount = Number(principal.value) + Number(differnce1)
      total.innerText = "Total Payment (Principal + Interest)₹" + Math.round(totalamount).toLocaleString()
    }

  })

})

submit.addEventListener("click",()=>{
  if(principal.value == "" || interest.value == "" || months.value == ""){
    alert("Please Enter Input Values And Select Month Or Year")
  }
  else if (btns[0].classList.contains("touch") == false && btns[1].classList.contains("touch") == false) {
    alert("Please Select Month Or Year")
  }
  
})