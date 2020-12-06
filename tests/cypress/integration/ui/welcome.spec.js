import * as common from '../../pages/common';
import * as welcome from '../../pages/welcome';

const username = ['test', '12345', '%%%%', 'longstringwithnocharacterslimitslongstringwithnocharacterslimits', '  '];

describe("Task 4 - UI - Welcome Screen - Content", () => {
  it("should assert welcome screen content", () => {
    common.browserTo('welcome');
    common.assertPageContent('welcome');
  });
});

describe("Task 4 - UI - Welcome Screen", () => {
  beforeEach(() => {
    common.browserTo('welcome');
  });
 
  username.forEach(username => {
  it(`should login with an user name - ${username}`, () => {
    welcome.loginUser(`${username}`);
    });
  });

  it("should not login with no user name", () => {
    welcome.loginUser('noUser');
  });
});