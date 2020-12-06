let apiUrl = Cypress.env('apiUrl');

export const postEndpoint = (company) => {
    cy.request({
        url: apiUrl,
        method: "POST",
        failOnStatusCode: false,
        body: company
    }).as("response");
};

export const assertCompanyInfo = (type) => {
    cy.fixture('apiData.json').as('data')
      .get('@data').then((data) => {
    switch (type) {
        case 'small':
            cy.get("@response").then((res) => {
                expect(res.status, "response status").to.be.equal(200);
                expect(res.statusText, "response status text").to.be.equal("OK");
                expect(res.body, "response body").to.not.be.empty;
                expect(res.body.customers[0], "single customer").to.not.be.empty;
                expect(res.body.customers[0].id, "single customer id").to.be.eq(data.first.id);
                expect(res.body.customers[0].name, "single customer name").to.be.eq(data.first.name);
                expect(res.body.customers[0].employees, "number of employess").to.be.eq(data.first.employees);
                expect(res.body.customers[0].contactInfo, "contact Info").to.exist;
                expect(res.body.customers[0].contactInfo.name, "contact name").to.be.eq(data.first.contactInfo.name);
                expect(res.body.customers[0].contactInfo.email, "contact email").to.be.eq(data.first.contactInfo.email);
                expect(res.body.customers[0].size, "company size").to.be.eq(data.first.size);
                });
        break;
        case 'medium':
            cy.get("@response").then((res) => {
                expect(res.status, "response status").to.be.equal(200);
                expect(res.statusText, "response status text").to.be.equal("OK");
                expect(res.body, "response body").to.not.be.empty;
                expect(res.body.customers[2], "single customer").to.not.be.empty;
                expect(res.body.customers[2].id, "single customer id").to.be.eq(data.third.id);
                expect(res.body.customers[2].name, "single customer name").to.be.eq(data.third.name);
                expect(res.body.customers[2].employees, "number of employess").to.be.eq(data.third.employees);
                expect(res.body.customers[2].contactInfo, "contact Info").to.exist;
                expect(res.body.customers[2].contactInfo.name, "contact name").to.be.eq(data.third.contactInfo.name);
                expect(res.body.customers[2].contactInfo.email, "contact email").to.be.eq(data.third.contactInfo.email);
                expect(res.body.customers[2].size, "company size").to.be.eq(data.third.size);
            });
        break;
        case 'big':
            cy.get("@response").then((res) => {
                expect(res.status, "response status").to.be.equal(200);
                expect(res.statusText, "response status text").to.be.equal("OK");
                expect(res.body, "response body").to.not.be.empty;
                expect(res.body.customers[4], "single customer").to.not.be.empty;
                expect(res.body.customers[4].id, "single customer id").to.be.eq(data.fifth.id);
                expect(res.body.customers[4].name, "single customer name").to.be.eq(data.fifth.name);
                expect(res.body.customers[4].employees, "number of employess").to.be.eq(data.fifth.employees);
                expect(res.body.customers[4].contactInfo, "contact Info").to.exist;
                expect(res.body.customers[4].contactInfo.name, "contact name").to.be.eq(data.fifth.contactInfo.name);
                expect(res.body.customers[4].contactInfo.email, "contact email").to.be.eq(data.fifth.contactInfo.email);
                expect(res.body.customers[4].size, "company size").to.be.eq(data.fifth.size);
            });
        };
    });
};

export const contactInfoNotReturned = () => {
    cy.get("@response").then((res) => {
        expect(res.status, "response status").to.be.equal(200);
        expect(res.statusText, "response status text").to.be.equal("OK");
        expect(res.body, "response body").to.not.be.empty;
        expect(res.body.customers[3].name, "name").to.be.equal("United Brands");
        expect(res.body.customers[3].contactInfo, "contactInfo").to.be.empty;
    });
}

export const assertCompanySize = () => {
    cy.get("@response").then((res) => {
        expect(res.status, "response status").to.be.equal(200);
        expect(res.statusText, "response status text").to.be.equal("OK");
        expect(res.body, "response body").to.not.be.empty;
        expect(res.body.customers, "customers arrray").to.not.be.empty;
        const numberOf = res.body.customers[0].employees;
        if (numberOf <= 100) {
          expect(res.body.customers[0].size, "size small").to.be.equal("Small");
        } else if (10 > number <= 1000) {
          expect(res.body.customers[0].size, "size medium").to.be.equal("Medium");
        }
         else {
          expect(res.body.customers[0].size, "size big").to.be.equal("Big");
        }
    });
}

