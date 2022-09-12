Feature: Holidays APIs Assertions



 Scenario: Verify that the user can get the list of books
    When user makes books listing request successfully

 Scenario: Verify that user can get a book
   When user makes book request successfully


 Scenario: Verify that i can create user successfully
   When user makes the create user api with valid data
   Then user is created successfully


Scenario: Verify that i can delete user successfully
  When user makes the delete user api
  Then user is deleted successfully


Scenario: Verify that user can't be created with invalid data
  When user makes the create user api with invalid data
  Then user is not created and validation message is returned


