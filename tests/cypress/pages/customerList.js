const selectors = {
    table: 'table',
    tableContent: 'tbody',
    tableContentList: 'tr',
    tableContentListEntries:'td'
};

export const assertCustomerPropertiesAndEntries = () => {
    cy.get(selectors.table).find(selectors.tableContent).children().as('customerlist');
    cy.get('@customerlist')
      .should($customerlist => {
        expect($customerlist, '6 customers').to.have.length(6);  
    });
    cy.get('@customerlist').children()
      .should($customerlist => {
        expect($customerlist, '6 customers with 3 entries').to.have.length(18);  
    });
};

export const assertSingleCustomerInformation = () => {
    cy.get(selectors.table).children().eq(1).find(selectors.tableContentList).eq(0).as('customerInfo');
    cy.get('@customerInfo').find(selectors.tableContentListEntries).eq(0)
        .should($customerName => {
          expect($customerName).to.have.text('Americas Inc.');
    });
    cy.get('@customerInfo').find(selectors.tableContentListEntries).eq(1)
      .should($customerNumber => {
        expect($customerNumber).to.have.text('10');
    });
    cy.get('@customerInfo').find(selectors.tableContentListEntries).eq(2)
      .should($customerSize => {
        expect($customerSize).to.have.text('Small');
    });
};

export const assertCompanySize = () => {
    cy.get(selectors.table).find(selectors.tableContent).children().as('customerlist');
    cy.get('@customerlist').each(customer => {
      cy.get(customer).children().eq(0).then(function($name) {
          const companyName = $name.text();
          cy.log(companyName);
      cy.get(customer).children().eq(1).then(function($number) {
          const number = $number.text();
          cy.wrap(number).as('number');
      cy.get(customer).children().eq(2).then(function($size) {
          const size = $size.text();
          cy.wrap(size).as('size');
     
          if (number <= 100) {
            cy.get('@size').should('be.equal', 'Small');
          } else if (10 > number <= 1000) {
            cy.get('@size').should('be.equal', 'Medium');
          }
           else {
            cy.get('@size').should('be.equal', 'Big');
          }
        });
     });
   });
 });
};

export const assertCompanyDetails = () => {
    cy.get(selectors.table).find(selectors.tableContent).children().as('customerlist');
    cy.get('@customerlist').children().eq(0).then(function($name) {
      const companyName = $name.text();
      cy.contains(companyName).click();
      cy.contains('Customer Details');
    });
};