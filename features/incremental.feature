Feature: Test Increment

    Scenario: Incrementing a positive number
        Given I start with 5
        When I increment by 1
        Then I end up with 6

    Scenario: Incrementing 
        Given I start with 10
        When I increase by 1
        Then I end up with 11
