import * as common from '../../pages/common';
import * as contactsDetail from '../../pages/contactsDetail';

describe("Task 4 - UI - Contacts Detail Screen - Content", () => {
  it("should assert contacts detail screen content", () => {
    common.browserTo('contactsDetail');
    common.assertPageContent('contactsDetail');
  });
});

describe("Task 4 - UI - Contacts Detail Screen", () => {
  it("should assert no contact info available message - customer with no contact info", () => {
    common.browserTo('customerList');
    contactsDetail.assertCompanyWithNoContactInfo();
  });

  it("should return to contact list when clicking on back button", () => {
    common.browserTo('contactsDetail');
    contactsDetail.returnToCustomerList();
    common.assertPageContent('customerList');
  });
});
