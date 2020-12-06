import * as common from '../../pages/common';
import * as customerList from '../../pages/customerList';

describe("Task 4 - UI - Customer List Screen - Content", () => {
  beforeEach(() => {
    common.browserTo('customerList');
  });

  it("should assert customer list screen content", () => {
    common.assertPageContent('customerList');
  });

  it("should assert default customer list and properties in table", () => {
    customerList.assertCustomerPropertiesAndEntries();
  });

  it("should assert single customer information", () => {
    customerList.assertSingleCustomerInformation();
  });

  it("should assert all companies size in accord of employees number", () => {
    customerList.assertCompanySize();
  });
});

describe("Task 4 - UI - Customer List Screen", () => {
  it("should visit contact details page when clicking on company name", () => {
    common.browserTo('customerList');
    customerList.assertCompanyDetails();
  });  
});