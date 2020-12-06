
import * as api from '../../support/apiCalls';

describe("Task 3 - POST endpoint - Company Size", () => {
  it("should assert single customer response - small", () => {
    api.postEndpoint('Americas Inc.');
    api.assertCompanyInfo('small');
  });

  it("should assert single customer response - medium", () => {
    api.postEndpoint('Bill Paxton');
    api.assertCompanyInfo('medium');
  });

  it("should assert single customer response - big", () => {
    api.postEndpoint('Bill Paxton');
    api.assertCompanyInfo('big');
  });

  it("should assert company size in accord of employees number", () => {
    api.postEndpoint('Americas Inc.');
    api.assertCompanySize();
  });
});

describe("Task 3 - POST endpoint - ContactInfo", () => {
  it("should assert contact info object not returned", () => {
    api.postEndpoint('United Brands');
    api.contactInfoNotReturned();
  });
});