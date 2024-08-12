Feature: Test Increment

    Scenario: decremental
        Given I start with 5
        When I decrement by 1
        Then I end up with 4

    Scenario: decrementing 
        Given I start with 10
        When I decrease by 1
        Then I end up with 9
