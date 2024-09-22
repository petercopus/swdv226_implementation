class RegistrationForm {
  constructor() {
    this.formFields = [];
    this.validationStatus = false;
    this.validationErrors = [];
  }

  validateClient(formFields) {
    this.formFields = formFields;
    this.validationErrors = [];

    formFields.forEach((field) => {
      if (field.value.length === 0) this.validationErrors.push(`${field.name} is required.`);
    });

    this.validationStatus = this.validationErrors.length === 0;

    return this.validationStatus;
  }

  submitForm() {
    if (this.validationStatus) console.log('Form submitted');
    else console.log('Form failed');
  }

  displayErrors() {
    if (this.validationErrors.length > 0)
      this.validationErrors.forEach((error) => {
        console.error(error);
      });
  }

  validateServer(formFields) {
    // normally we would have server-side specific validation on the server
    // but for the purposes of building out these classes without a server
    // we will reuse the client validation
    return this.validateClient(formFields);
  }
}

module.exports = RegistrationForm;
