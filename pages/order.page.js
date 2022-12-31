class OrderPage {

  constructor() {
      this.url = '/objednavka/pridat';
  }

  get toastMessage() { return $('#toast-container').$('.toast-success'); }
 
  // order fields
  get icoField() { return $('#ico'); }
  get clientField() { return $('#client'); }
  get addressField() { return $('#address'); }
  get substituteField() { return $('#substitute'); }
  get contactNameField() { return $('#contact_name'); }
  get contactPhoneField() { return $('#contact_tel'); }
  get contactEmailField() { return $('#contact_mail'); }
  get startDateField() { return $('#start_date_1'); }
  get endDateField() { return $('#end_date_1'); }
  get numberOfChildrenField() { return $('#camp-students'); }
  get ageOfChildrenField() { return $('#camp-age'); }
  get numberOfAdultsField() { return $('#camp-adults'); }

  // links
  get linkForTeachers() { return $('#navbarSupportedContent').$('=Pro učitelé'); }
  get linkForOrder() { return $('=Objednávka pro MŠ/ZŠ') ;}

  // tabs
  get tabSuburtanCamp() { return $('#nav-home-tab'); }

  // selections 
  get selectionOfSuburtanCamp() { $('#camp-date_part'); }

  // buttons
  get buttonSubmitCamp() { return $('form').$('input[type="submit"]'); }


  open() {
    browser.reloadSession();
    browser.url('/');
  }

  goToOrderPageViaMenu() {
    this.linkForTeachers.click();
    this.linkForOrder.click();
  }

  goToOrderPageViaUrl() {
    browser.url(this.url);
  }

  clickToSuburtanCamp() {
    this.tabSuburtanCamp.click();
  }

  waitForAres() {
    this.toastMessage.waitForDisplayed();
  }

  setIco(ico) {
    this.icoField.setValue(ico);
  }

  setIcoAndWaitForAres(ico) {
    this.setIco(ico);
    browser.keys('Enter');
    this.waitForAres();
  }

  setSubstituteName(substituteName) {
    this.substituteField.setValue(substituteName);
  }

  setContactName(contactName) {
    this.contactNameField.setValue(contactName);
  }

  setContactPhone(contactPhone) {
    this.contactPhoneField.setValue(contactPhone);
  }

  setContactEmail(contactEmail) {
    this.contactEmailField.setValue(contactEmail);
  }

  setStartDate(startDate) {
    this.startDateField.setValue(startDate);
  }

  setEndDate(endDate) {
    this.endDateField.setValue(endDate);
  }

  // setDatePartOfSuburtanCamp(index) {
    // this.selectionOfSuburtanCamp.selectByIndex(index); // nefunkční
  // }

  setNumberOfChildren(number) {
    this.numberOfChildrenField.setValue(number);
  }

  setAgeOfChildren(age) {
    this.ageOfChildrenField.setValue(age);
  }

  setNumberOfAdult(number) {
    this.numberOfAdultsField.setValue(number);
  }

  submitFormCamp() {
    this.buttonSubmitCamp.click();
  }

}

module.exports = new OrderPage();