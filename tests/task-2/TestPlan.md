## Task 2: Create a test plan and run it mannually ##

Understanding correclty the expected application's behaviour is crucial to build an efficient test strategy. In this task, you'll have to:
1) Read carefully the application's requirement from the **Requirements.md** file on the root of the git repository;
2) Create a test plan that will _minimally_ contain the steps that have to be taken and their expected results;
3) Execute the test plan you've just created and record textually it's results; and
4) Commit and push the test plan and its results to the public repository you've created on **Task 1**.


## Task 2: Resolution
### Spliting the areas based on Requirements
**Welcome Screen**
Content
- Header title - assert description
- Instructions - assert message
- Text input value - assert different inputs name, integers, special characters, empty field, spaces, blank, long strings inputs
- Submit button - assert when is activated, when is disable, when no action

Functional
- Customer list after submiting all of text input values, empty input, space input, long input value
- Cross-Browser validation
- Different viewports validation

**Customer List Screen**
Content
- Header title - assert description
- table content main entries - assert fields - name, number of employess

Functional
- Contacts details screen should be access for each company name
- Contacts details with no contactInfo what happens when clicking.
- assert company size in accord of number of employess, some values limits between
0 - 100 - Small
10 - 1000 - Medium
1000 or more - Big
- Cross-Browser validation
- Different viewports validation


**Contacts Detail Screen**
Content
- Header title - assert description
- table content for each client - name, number of employees, size, name, email
- no contact info available message for companies with no contact Infos.
- Back button for all cases, different viewports
- Cross-Browser validation
- Different viewports validation

**API Tests**
- Cover the scenarios for different customers validating all the information for each case

- Cover the cases for contactInfo is not present if its not present on db

- Cover the cases for company size in accord of the rules, the same mentioned on UI tests.


**Some notes from Tests**
-  User is beeing able to submit 2 empty spaces as username.

-  User is beeing able to submit a long strings, integers and special characters with no restrictions as username.

-  Alert message to provide name in Safari seems to be not aligned comparing from other browsers.

- United Brands doesn't have contactInfo and it's breaking the application either for the frontend and also for the backend.
> ```
> FE TypeError: Cannot read property 'name' of undefined
> CustomerApp.render
>
> BE SyntaxError: Unexpected token } in JSON at position 35
>  at JSON.parse (<anonymous>)
> ```

- Some companies are not following the size rules in accord of the number of employees

- Refresh page reloads page from welcome page, even if you have some errors or not.

- No console errors. 
