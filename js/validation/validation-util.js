function validateField(fieldName, value, rules) {
  if (rules.required && !value.trim()) {
    return `${fieldName} is required`;
  }

  if (rules.minLength && value.length < rules.minLength) {
    return `${fieldName} must contain minimum ${rules.minLength} characters`;
  }

  if (rules.min !== undefined && Number(value) < rules.min) {
    return `${fieldName} must be greater than ${rules.min}`;
  }

  if (rules.max !== undefined && Number(value) > rules.max) {
    return `${fieldName} must be less than ${rules.max}`;
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    return rules.message;
  }

  return "";
}

function validateInput(fieldName) {
  const inputElement = document.getElementById(fieldName);

  const errorElement = document.getElementById(`${fieldName}-error`);

  const value = inputElement.value;

  const rules = validationRules[fieldName];

  const errorMessage = validateField(fieldName, value, rules);

  if (errorMessage) {
    errorElement.innerText = errorMessage;

    inputElement.classList.add("input-error");

    inputElement.classList.remove("input-success");

    return false;
  }

  errorElement.innerText = "";

  inputElement.classList.remove("input-error");

  inputElement.classList.add("input-success");

  return true;
}

function validateForm() {
  let isFormValid = true;

  for (let field in validationRules) {
    const isFieldValid = validateInput(field);

    if (!isFieldValid) {
      isFormValid = false;
    }
  }

  document.getElementById("submit-btn").disabled = !isFormValid;
}
