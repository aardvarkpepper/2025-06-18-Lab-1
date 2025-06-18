const capitalizeFirstLetter = (stringInput) => {
  return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
}

const formatFullName = (firstName, lastName) => {
  if (!firstName || !lastName) {
    return "Invalid name input."
  }
  return `${capitalizeFirstLetter(lastName)}, ${capitalizeFirstLetter(firstName)}`
}

const formString = document.getElementById('form-string');
const formStringOut = document.getElementById('form-string-out');

formString.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formString);
  const firstName = formData.get('qsfirstname');
  const lastName = formData.get('qslastname');
  formStringOut.textContent = `Formatted name:  ${formatFullName(firstName, lastName)}`
});
//formString.addEventListener

const isNumber = (input) => {
  return !isNaN(Number(input));
}

const calculateTotalCost = (price, quantity, taxRate) => {
  if (!isNumber(price) || !isNumber(quantity) || !isNumber(taxRate)) {
    return "Invalid input."
  }
  return Number(price) * Number (quantity) * (1 + Number(taxRate));
}

const formMath = document.getElementById('form-math');
const formMathOut = document.getElementById('form-math-out');

formMath.addEventListener('submit', (event) => {
  event.preventDefault();
  const formData = new FormData(formMath);
  const price = formData.get('qsprice');
  const quantity = formData.get('qsquantity');
  const taxRate = formData.get('qstaxrate');
  formMathOut.textContent = `Total cost of items including tax:  $${calculateTotalCost(price, quantity, taxRate)}`;
});
//formMath.addEventListener

// If the person is over 18 and employed, they are eligible.
// If the person is over 18 but unemployed, they are conditionally eligible.
// If the person is 18 or younger, they are not eligible.

const formEligibility = document.getElementById('form-eligibility');
const formEligibilityOut = document.getElementById('form-eligibility-out');

const checkEligibility = (age, isEmployed) => {
  let returnString = ``;
  if (!isNumber(age)) {
    returnString += "Please enter a number for age.";
  }
  if (!isEmployed) {
    if (!returnString) {
      returnString += " "
    }
    returnString += "Please select an option for employment status."
  }
  if (returnString) {
    return returnString;
  } else {
    let ageNumber = Number(age);
    if (age<=18) {
      returnString += 'Not eligible.  Must be over 18.'
    } else {
      if (isEmployed === "valueIsEmployed") {
        returnString = "Eligible."
      } else {
        returnString = "Conditionally eligible."
      }
    }
  }
  return returnString;
};
// checkEligibility

formEligibility.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(formEligibility);
  const age = formData.get('qsage');
  const isEmployed = formData.get('qsisemployed');
  formEligibilityOut.textContent = `${checkEligibility(age, isEmployed)}`;
});
//formEligibility.addEventListener

const formMathRefactor = document.getElementById('form-math-refactor');
const formMathRefactorOut = document.getElementById('form-math-refactor-out');
