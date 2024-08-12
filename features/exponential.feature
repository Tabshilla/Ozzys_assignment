Feature: Exponential

    Scenario: 2^3
        Given I start with 2
        When I raise to the power of 3
        Then I end up with 8

    Scenario: 5^0
        Given I start with 5
        When I exponentiate with 0
        Then I end up with 1