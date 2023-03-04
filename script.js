const principal = document.querySelector(".Principal")
const interest = document.querySelector(".Interest")
const months = document.querySelector(".Months")
const submit = document.querySelector(".Submit")
const results = document.querySelector(".result")
const diff = document.querySelector(".diff")
const total = document.querySelector(".total")
const month = document.getElementById("month")
const year = document.querySelector(".year")

  submit.addEventListener("click", () => {
    if (principal.value !== "" && interest.value !== "" && months.value !== "") {

      let int1 = interest.value / 1200
      let firstmethod = principal.value * int1 * ((1 + int1) ** months.value)

      let secondmethod = ((1 + int1) ** months.value - 1)
      let emi = (Number(firstmethod / secondmethod))

      let emi1 = Math.round(emi)

      results.innerText = "Your Monthly EMI is ₹" + emi1.toLocaleString()


      let differnce1 = emi * months.value - principal.value;
      differnce1.innerText = Math.round(differnce1)

      diff.innerText = "Total Intrest payable ₹" + Math.round(differnce1).toLocaleString()
      let totalamount = Number(principal.value) + Number(differnce1)
      total.innerText = "Total Payment (Principal + Interest)₹" + Math.round(totalamount).toLocaleString()
    }

    month.addEventListener("click", () => {

      document.getElementById('month').style.backgroundColor = 'rgb(57, 66, 143)';
      document.getElementById('year').style.backgroundColor = 'transparent';


  })
})

year.addEventListener("click", () => {

  document.getElementById('year').style.backgroundColor = 'rgb(57, 66, 143)'; {
    document.getElementById('month').style.backgroundColor = 'transparent';
  }
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
    alert("Please Add Input value and Select Month or Year")
  }
})