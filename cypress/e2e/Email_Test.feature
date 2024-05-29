Feature: Email - Email_Test

    Scenario: Disposable Email supplied
        Given I navigate to the url
        When I scroll down on the page and click on elemental selenium link "<linkText>"
        When I Fill in a disposable email "<emailAddress>"
        When I Select a language
        Then I should see the error message

         Examples:
      | linkText           | emailAddress        | language  | errorMessage                                                |
      | Elemental Selenium | test123@mailinator.com    | JavaScript | Email is on a high-bounce domain. Please enter another email address. |