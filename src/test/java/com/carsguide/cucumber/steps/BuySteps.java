package com.carsguide.cucumber.steps;

import com.carsguide.pages.Buypage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuySteps {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on \"([^\"]*)\" tab$")
    public void iMouseHoverOnTab(String buyAndSell) {
        new Buypage().mouseHoverToBuyAndSell();
    }

    @And("^I click 'Search Cars' link$")
    public void iClickSearchCarsLink() {
        new Buypage().clickOnSearchButton();
    }

    @Then("^I navigate to \"([^\"]*)\" page$")
    public void iNavigateToPage(String search) {
        Assert.assertTrue("not matched", new Buypage().verifyNewAndUsedCar().toLowerCase().contains(search));

    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) {
        new Buypage().selectAnyMake(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model) {
        new Buypage().selectAnyModel(model);

    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location) {
        new Buypage().selectAnyLocation(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) {
        new Buypage().selectPrice(price);
    }

    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new Buypage().clickOnFindMyNextCar();
    }

    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String myMake) {
        Assert.assertTrue("not found", new Buypage().verifyMyMake().contains(myMake));
    }

    @And("^I click 'Used' link$")
    public void iClickUsedLink() {
        new Buypage().clickOnUsedCar();
    }


}
