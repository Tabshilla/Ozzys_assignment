Feature: Test Modulus

    Scenario: Modulus of an even number
        Given I start with 10
        When I take modulus 2
        Then I end up with 0

    Scenario: Modulus of an odd number
        Given I start with 7
        When I calculate modulus 2
        Then I end up with 1