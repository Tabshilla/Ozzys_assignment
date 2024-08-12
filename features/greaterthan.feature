Feature: Test Greater Than Comparison

    Scenario: Comparing a larger number with a smaller number
        Given I have numbers 5 and 3
        When I compare that 5 is greater than 3
        Then the result should be true

    