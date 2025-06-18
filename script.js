const formatFullName = (firstName, lastName) => {
  if (!firstName || !lastName) {
    return "Invalid name input."
  }
  return `${capitalizeFirstLetter(lastName)}, ${capitalizeFirstLetter(firstName)}`
}

const capitalizeFirstLetter = (stringInput) => {
  return stringInput.charAt(0).toUpperCase() + stringInput.slice(1);
}

