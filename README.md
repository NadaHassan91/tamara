###### **Task 1:**

****Where would you start? What would be your first steps?

I will start with the team, who is allocated where and if each is assigned to a module fits his skills or not and allocate each member in the area where he will be perfect fit.
Then we will do exploratory testing to get overview about the system and how it works what are the bugs existing and report all.

 **Which process would you establish around testing new functionality? How would you
want the features to be tested?**

The process will start from the test cases

1. We will review the old test cases of the system
2. structure them per feature or module
3. set priority for each 
4. Select the suite for regression and sanity 
5. Update the outdated testcases
And then the process for the new features will be 
1. Review the requirements and all the documents and analysis them.
2. Design the test cases for each feature accordingly
3. Set test plan having all the test cases linked to the requirements 
4. Then execution and bug reporting.
5. Set the process for bugs reporting in terms of the attributes we will use, the tags for filtering and reports and the structure of the bug.



**If you would do test automation which techniques or best practices would you use?**

1. As a team we will select the tool will be used first based on the team experience and if we have time we can do a POC to determine if the tool suits our requirements or not
2.  use the Page Object Model Design pattern
3. use the Behavior driven technique for tests
4.  set the test data that we will use
5. set the configuration for the environments
6. Set the  configuration for the CI/CD and setup the workflows
7. Set the configuration for the parallel execution
8. Set the tool for reporting and screenshots

###### **Task 2**

I picked the books apis, retrieved books and specific book and 
then created and deleted user.

What I can make better 
 
1. add more coverage for negative testcases and
different API responses 
2. Add githubaction workflow to schedule a job to run tests every day and upon PR opening
3. Validate the API scheme vs the response
4. Make E2E tests for a whole flow.
 


