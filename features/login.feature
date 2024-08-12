Feature: Login Feature

    Scenario: Successful login
       Given the user is on the login page
       When the user enters valid credentials
       Then the user is redirected to the dashboard
    

    Scenario: 1+0
        Given I start with 1 
        When I add 0 
        Then I end up with 1

    Scenario: 1+1
        Given I start with 1
        When I add 1
        Then I end up with 2

    Scenario: 1*0
        Given I start with 1
        When I multiply by 0
        Then I end up with 0
   