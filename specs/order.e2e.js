import {
    ICO,
    clientName,
    address,
    substituteName,
    contactName,
    contactPhone,
    contactEmail,
    startDate,
    endDate
} from './fixtures.js'
import {getFieldValueById} from '../pages/functions.js';
import OrderPage from '../pages/order.page.js';

describe('Objednávka pro MŠ/ZŠ', () => {

  beforeEach(() => {
    OrderPage.open();
  })

  it('Existuje stránka pro objednávku', () => {
    OrderPage.goToOrderPageViaMenu();
    expect(OrderPage.icoField).toBeDisplayed();
    browser.saveScreenshot('screenshots/orderPage.png')
  })

  it('Automatické načtení jména a adresy odběratele z ARESu', () => {
    OrderPage.goToOrderPageViaUrl();
    OrderPage.setIcoAndWaitForAres(ICO);
    const valueClient = getFieldValueById('client')
    expect(valueClient).toEqual(clientName)
    const valueAddress = getFieldValueById('address')
    expect(valueAddress).toEqual(address)
    browser.saveScreenshot('screenshots/dataFromARES.png')
  })

  it('Vyplnění přihlášky na příměstský tábor', () => {
    OrderPage.goToOrderPageViaUrl();
    OrderPage.setIcoAndWaitForAres(ICO);

    expect(OrderPage.substituteField).toBeDisplayed();
    OrderPage.setSubstituteName(substituteName)

    expect(OrderPage.contactNameField).toBeDisplayed();
    OrderPage.setContactName(contactName)

    expect(OrderPage.contactPhoneField).toBeDisplayed();
    OrderPage.setContactPhone(contactPhone)

    expect(OrderPage.contactEmailField).toBeDisplayed();
    OrderPage.setContactEmail(contactEmail)

    expect(OrderPage.startDateField).toBeDisplayed();
    OrderPage.setStartDate(startDate)

    expect(OrderPage.endDateField).toBeDisplayed();
    OrderPage.setEndDate(endDate)

    expect(OrderPage.tabSuburtanCamp).toBeDisplayed();
    OrderPage.clickToSuburtanCamp();

    const selectionOfSuburtanCamp = $('#camp-date_part');
    expect(selectionOfSuburtanCamp).toBeDisplayed();
    selectionOfSuburtanCamp.selectByIndex(1)
    // OrderPage.selectionOfSuburtanCamp.selectByIndex(1); // nefunkční
    // OrderPage.setDatePartOfSuburtanCamp(1) // nefunkční

    expect(OrderPage.numberOfChildrenField).toBeDisplayed();
    OrderPage.setNumberOfChildren(20);

    expect(OrderPage.ageOfChildrenField).toBeDisplayed();
    OrderPage.setAgeOfChildren('10-12');

    expect(OrderPage.numberOfAdultsField).toBeDisplayed();
    OrderPage.setNumberOfAdult(5);

    browser.saveScreenshot('screenshots/filledForm.png')

    expect(OrderPage.buttonSubmitCamp).toBeClickable();
    OrderPage.submitFormCamp();

    const newOrderSavedHeading = $('.section--orders').$('.card-body').$('h3');
    expect(newOrderSavedHeading).toHaveText('Děkujeme za objednávku');

    browser.saveScreenshot('screenshots/submitOrder.png')
  })

  it('nekompletně vyplněná objednávka', () => {
    OrderPage.goToOrderPageViaUrl();
    OrderPage.setIcoAndWaitForAres(ICO);
    OrderPage.setSubstituteName(substituteName);
    OrderPage.setContactName(contactName);
    OrderPage.setContactPhone(contactPhone);
    OrderPage.setContactEmail(contactEmail);
    OrderPage.setStartDate(startDate);
    OrderPage.setEndDate(endDate);
    
    const orderHeading = $('.section--orders').$('.card-body').$('h3');
    expect(orderHeading).toHaveText('Objednávka akce');

    browser.saveScreenshot('screenshots/noCompleteOrder.png');
  })

});
