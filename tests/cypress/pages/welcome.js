const selectors = {
    headerTitle: 'h1',
    submitBtn: '[type="button"]',
    usernameInput: '#name'
};

export const loginUser = (username="") => {
    cy.get(selectors.headerTitle)
      .contains('Welcome to Customer App');
    switch (username) {
        case 'noUser':
            cy.get(selectors.submitBtn)
              .click();
            cy.contains('Please provide your name');
        break;
        default:
            cy.get(selectors.usernameInput).type(username);
            cy.get(selectors.submitBtn)
              .click();
            cy.contains('Welcome to Customer App');
    };
};
