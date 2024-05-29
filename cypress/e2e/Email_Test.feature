Feature: Disposable-Email 

    Scenario: Disposable Email supplied
        Given I navigate to the url
        When I scroll down on the page and click on elemental selenium link
        And I Fill in a disposable email '<email>'
        And I Select a language '<language>'
        Then I should see the message '<message>'


Examples:
    | email | language  | message |
    | test123@mailinator.com  | JavaScript  | Email is on a high-bounce domain. Please enter another email address.|
    

       