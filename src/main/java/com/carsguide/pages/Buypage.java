package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.checkerframework.checker.units.qual.C;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.security.cert.X509Certificate;

public class Buypage extends Utility {
    private static final Logger log = LogManager.getLogger(Buypage.class.getName());

    public Buypage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='buy + sell']")
    WebElement buyAndSell;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Search Cars']")
    WebElement searchCar;
    @CacheLookup
    @FindBy(xpath = "//div[contains(@class,'heading main-heading item-ad-wrapper')]//h1")
    WebElement newAndUsedCarSearch;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement makeAny;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement modelAny;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement locationAny;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement priceMax;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement findMyNextCar;
    @CacheLookup
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement myMake;
    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Used']")
    WebElement usedCar;
    @CacheLookup
    @FindBy(xpath = "//select[@id='makes']")
    WebElement usedMake;
    @CacheLookup
    @FindBy(xpath = "//select[@id='models']")
    WebElement usedModel;
    @CacheLookup
    @FindBy(xpath = "//select[@id='locations']")
    WebElement usedLocation;
    @CacheLookup
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement lowPrice;
    @CacheLookup
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement searchMyCar;


    public void mouseHoverToBuyAndSell() {
        mouseHoverToElement(buyAndSell);
        log.info("Mousehover to buy and sell " + buyAndSell.toString());
    }

    public void clickOnSearchButton() {
        clickOnElement(searchCar);
        log.info("Click on search button " + searchCar.toString());
    }

    public String verifyNewAndUsedCar() {
        log.info("Getting text from element " + newAndUsedCarSearch.toString());
        return getTextFromElement(newAndUsedCarSearch);
    }

    public void selectAnyMake(String make) {
        selectByVisibleTextFromDropDown(makeAny, make);
        log.info("Select any make " + make + "into make field " + makeAny.toString());
    }

    public void selectAnyModel(String model) {
        selectByValueFromDropDown(modelAny, model);
        log.info("Select any model " + model + "into model field " + modelAny.toString());
    }

    public void selectAnyLocation(String location) {
        selectByVisibleTextFromDropDown(locationAny, location);
        log.info("Select any location " + location + "into location field " + locationAny.toString());
    }

    public void selectPrice(String price) {
        selectByVisibleTextFromDropDown(priceMax, price);
        log.info("Select price " + price + "into price field " + priceMax.toString());
    }

    public void clickOnFindMyNextCar() {
        clickOnElement(findMyNextCar);
        log.info("Click on find my next car " + findMyNextCar.toString());
    }
    public String verifyMyMake(){
        log.info("Getting text from my make " + myMake.toString());
        return getTextFromElement(myMake);
    }
    public void mouseHoverToBuyAndSell1() {
        mouseHoverToElement(buyAndSell);
        log.info("Mousehover to buy and sell " + buyAndSell.toString());
    }
    public void clickOnUsedCar() {
        clickOnElement(usedCar);
        log.info("Click on used car " + usedCar.toString());
    }

    public void selectUsedMake(String make) {
        selectByVisibleTextFromDropDown(usedMake, make);
        log.info("Select any make " + make + "into usedmake field " + usedMake.toString());
    }

    public void selectUsedModel(String model) {
        selectByVisibleTextFromDropDown(usedModel, model);
        log.info("Select any model " + model + "into usedmodel field " + usedModel.toString());
    }

    public void selectUsedLocation(String location) {
        selectByVisibleTextFromDropDown(usedLocation, location);
        log.info("Select any locaton " + location + "into location field " + usedLocation.toString());
    }

    public void selectLawPrice(String price) {
        selectByVisibleTextFromDropDown(lowPrice, price);
        log.info("Select law price " + price + "into price field " + lowPrice.toString());
    }

    public void clickOnSearchMyCar() {
        clickOnElement(searchMyCar);
        log.info("Click on Find my next car " + searchMyCar.toString());
    }
}
