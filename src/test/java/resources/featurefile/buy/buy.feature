Feature: Buy Test

  As user I want to login into carsguide website

  Scenario Outline: Search the buy car with model

    Given I am on homepage
    When I mouse hover on "buy + sell" tab
    And I click 'Search Cars' link
    Then I navigate to "new & used car search" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make          | model       | location            | price       |
      | Audi          | A5          | NSW - Newcastle     | $50,000     |
      | BMW           | 125i        | NSW - South Coast   | $60,000     |
      | Mercedes-Benz | A250        | NSW - New England   | $70,000     |
      | Bentley       | Continental | Any Location        | Price (max) |
      | Kia           | Optima      | NSW - All           | $45,000     |
      | Jaguar        | XE          | NSW - Central Coast | $90,000     |

  Scenario Outline: Search the used car with model

    Given I am on homepage
    When I mouse hover on "buy+sell" tab
    And I click 'Used' link
    Then I navigate to "used cars for sale" page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make    | model     | location     | price   |
      | Hyundai | Coupe     | Any Location | $25,000 |
      | Ford    | Corsair   | Any Location | $25,000 |
      | Jeep    | Commander | Any Location | $45,000 |
      | Kia     | Cerato    | Any Location | $45,000 |
      | Suzuki  | Carry     | Any Location | $35,000 |

