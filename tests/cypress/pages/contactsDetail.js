const selectors = {
    table: 'table',
    tableContent: 'tbody',
    backToTheListBtn: 'input'
};

export const assertCompanyWithNoContactInfo = () => {
    cy.get(selectors.table).find(selectors.tableContent).children().as('customerlist');
    cy.get('@customerlist').eq(3).children().eq(0).then(function($name) {
    const companyName = $name.text();
    cy.contains(companyName).click();
    cy.contains('No contact info available');
    });
};

export const returnToCustomerList = () => {
    cy.get(selectors.backToTheListBtn).click();
};
