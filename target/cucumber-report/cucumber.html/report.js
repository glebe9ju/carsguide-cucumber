$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("buy.feature");
formatter.feature({
  "line": 1,
  "name": "Buy Test",
  "description": "\r\nAs user I want to login into carsguide website",
  "id": "buy-test",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 19,
      "id": "buy-test;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Audi",
        "A5",
        "NSW - Newcastle",
        "$50,000"
      ],
      "line": 20,
      "id": "buy-test;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "BMW",
        "125i",
        "NSW - South Coast",
        "$60,000"
      ],
      "line": 21,
      "id": "buy-test;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "Mercedes-Benz",
        "A250",
        "NSW - New England",
        "$70,000"
      ],
      "line": 22,
      "id": "buy-test;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Bentley",
        "Continental",
        "Any Location",
        "Price (max)"
      ],
      "line": 23,
      "id": "buy-test;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Kia",
        "Optima",
        "NSW - All",
        "$45,000"
      ],
      "line": 24,
      "id": "buy-test;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Jaguar",
        "XE",
        "NSW - Central Coast",
        "$90,000"
      ],
      "line": 25,
      "id": "buy-test;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8005809800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A5\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 183542400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 206397600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2702116800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new \u0026 used car search",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 101883500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 167597400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A5",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 183488300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 169662500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 300492600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 2815950200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 90565000,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HETAL-LAPTOP\u0027, ip: \u0027192.168.0.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ce04535e1edc4a76dd5aa50c676c89c4, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Hetal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56840}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56840/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ce04535e1edc4a76dd5aa50c676c89c4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.toString(Unknown Source)\r\n\tat com.carsguide.pages.Buypage.verifyMyMake(Buypage.java:108)\r\n\tat com.carsguide.cucumber.steps.BuySteps.iShouldSeeTheMakeInResults(BuySteps.java:59)\r\n\tat ✽.Then I should see the make \"Audi\" in results(buy.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 217931400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HETAL-LAPTOP\u0027, ip: \u0027192.168.0.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ce04535e1edc4a76dd5aa50c676c89c4, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Hetal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56840}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:56840/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ce04535e1edc4a76dd5aa50c676c89c4\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.carsguide.cucumber.Hooks.tearDown(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 4841059300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"125i\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - South Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$60,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 40600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 252921000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2528723400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new \u0026 used car search",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 391563400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 159481000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "125i",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 260692400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - South Coast",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 127679000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$60,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 127779800,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3523144400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 361835400,
  "status": "passed"
});
formatter.after({
  "duration": 909984900,
  "status": "passed"
});
formatter.before({
  "duration": 4157780700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Mercedes-Benz\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"A250\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - New England\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$70,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Mercedes-Benz\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 44700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 193529100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2611296600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new \u0026 used car search",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 309758400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 145585200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A250",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 280963400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - New England",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 182998300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$70,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 120016100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4258827500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mercedes-Benz",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 350491700,
  "status": "passed"
});
formatter.after({
  "duration": 849443200,
  "status": "passed"
});
formatter.before({
  "duration": 4394565100,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Bentley\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Continental\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"Price (max)\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Bentley\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 49500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 264246400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2799950100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new \u0026 used car search",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 53138800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bentley",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 206145600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Continental",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 972452300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 59978700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Price (max)",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 67202600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 7921419800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bentley",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 48330000,
  "status": "passed"
});
formatter.after({
  "duration": 850916800,
  "status": "passed"
});
formatter.before({
  "duration": 3732281400,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"Optima\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 39200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 289042000,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2997680000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new \u0026 used car search",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 167209100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 262383800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Optima",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 175774500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 156240100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 120183600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 5119029300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 372905700,
  "status": "passed"
});
formatter.after({
  "duration": 866504200,
  "status": "passed"
});
formatter.before({
  "duration": 3815681900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Search the buy car with model",
  "description": "",
  "id": "buy-test;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I mouse hover on \"buy + sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I click \u0027Search Cars\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"new \u0026 used car search\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I select make \"Jaguar\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select model \"XE\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I select location \"NSW - Central Coast\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select price \"$90,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I should see the make \"Jaguar\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy + sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 290306100,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickSearchCarsLink()"
});
formatter.result({
  "duration": 2622369600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "new \u0026 used car search",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 353088400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 193719700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XE",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 207797400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Central Coast",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 128206700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$90,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 124056600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 3566271900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jaguar",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 68425900,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HETAL-LAPTOP\u0027, ip: \u0027192.168.0.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ef17ec1ff1dcbb8b13a01b0e913e0710, findElement {using\u003dxpath, value\u003d//h1[@class\u003d\u0027listing-search-title\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Hetal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57639}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57639/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ef17ec1ff1dcbb8b13a01b0e913e0710\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.toString(Unknown Source)\r\n\tat com.carsguide.pages.Buypage.verifyMyMake(Buypage.java:108)\r\n\tat com.carsguide.cucumber.steps.BuySteps.iShouldSeeTheMakeInResults(BuySteps.java:59)\r\n\tat ✽.Then I should see the make \"Jaguar\" in results(buy.feature:16)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 245446400,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HETAL-LAPTOP\u0027, ip: \u0027192.168.0.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [ef17ec1ff1dcbb8b13a01b0e913e0710, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Hetal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57639}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:57639/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ef17ec1ff1dcbb8b13a01b0e913e0710\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.carsguide.cucumber.Hooks.tearDown(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to \"used cars for sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 40,
  "name": "",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 41,
      "id": "buy-test;search-the-used-car-with-model;;1"
    },
    {
      "cells": [
        "Hyundai",
        "Coupe",
        "Any Location",
        "$25,000"
      ],
      "line": 42,
      "id": "buy-test;search-the-used-car-with-model;;2"
    },
    {
      "cells": [
        "Ford",
        "Corsair",
        "Any Location",
        "$25,000"
      ],
      "line": 43,
      "id": "buy-test;search-the-used-car-with-model;;3"
    },
    {
      "cells": [
        "Jeep",
        "Commander",
        "Any Location",
        "$45,000"
      ],
      "line": 44,
      "id": "buy-test;search-the-used-car-with-model;;4"
    },
    {
      "cells": [
        "Kia",
        "Cerato",
        "Any Location",
        "$45,000"
      ],
      "line": 45,
      "id": "buy-test;search-the-used-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Carry",
        "Any Location",
        "$35,000"
      ],
      "line": 46,
      "id": "buy-test;search-the-used-car-with-model;;6"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 4095480000,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to \"used cars for sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select model \"Coupe\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 32700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 279552600,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2617686100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "used cars for sale",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 96097200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 159702400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Coupe",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 211491400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 91761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 234651300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4259506100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 348957800,
  "status": "passed"
});
formatter.after({
  "duration": 907422300,
  "status": "passed"
});
formatter.before({
  "duration": 4270331100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to \"used cars for sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select make \"Ford\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select model \"Corsair\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the make \"Ford\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 30000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 257375200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2814094400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "used cars for sale",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 341325900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 156949200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Corsair",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 150682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 117400100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 111744200,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4160215300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ford",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 392601900,
  "status": "passed"
});
formatter.after({
  "duration": 892169500,
  "status": "passed"
});
formatter.before({
  "duration": 4142718600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to \"used cars for sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select model \"Commander\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 28000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 245266300,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 1831396500,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d101.0.4951.67)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HETAL-LAPTOP\u0027, ip: \u0027192.168.0.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [36320710d373623dd6410e7f42ce3c12, clickElement {id\u003d3ae92a5f-a879-45f8-ab7a-04267ff52d4b}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Hetal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58074}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58074/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on WINDOWS (36320710d373623dd6410e7f42ce3c12)] -\u003e xpath: //a[normalize-space()\u003d\u0027Used\u0027]]\nSession ID: 36320710d373623dd6410e7f42ce3c12\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\r\n\tat sun.reflect.GeneratedMethodAccessor23.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:52)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.carsguide.utility.Utility.clickOnElement(Utility.java:53)\r\n\tat com.carsguide.pages.Buypage.clickOnUsedCar(Buypage.java:116)\r\n\tat com.carsguide.cucumber.steps.BuySteps.iClickUsedLink(BuySteps.java:64)\r\n\tat ✽.And I click \u0027Used\u0027 link(buy.feature:31)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "used cars for sale",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Commander",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 190221800,
  "error_message": "org.openqa.selenium.NoSuchSessionException: invalid session id\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027HETAL-LAPTOP\u0027, ip: \u0027192.168.0.74\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [36320710d373623dd6410e7f42ce3c12, screenshot {}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\Hetal\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:58074}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:58074/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 36320710d373623dd6410e7f42ce3c12\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:614)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:618)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:349)\r\n\tat com.carsguide.utility.Utility.getScreenshot(Utility.java:335)\r\n\tat com.carsguide.cucumber.Hooks.tearDown(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:127)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:26)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater$1.execute(IdeaTestRunner.java:38)\r\n\tat com.intellij.rt.execution.junit.TestsRepeater.repeat(TestsRepeater.java:11)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:35)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.before({
  "duration": 3886585400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to \"used cars for sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select make \"Kia\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select model \"Cerato\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select price \"$45,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the make \"Kia\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 27800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 255145400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2689994600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "used cars for sale",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 573201600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 172515900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cerato",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 176862600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 74120600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$45,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 168356500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4543481200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Kia",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 421651200,
  "status": "passed"
});
formatter.after({
  "duration": 887448700,
  "status": "passed"
});
formatter.before({
  "duration": 4010486200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Search the used car with model",
  "description": "",
  "id": "buy-test;search-the-used-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 29,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I mouse hover on \"buy+sell\" tab",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I click \u0027Used\u0027 link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I navigate to \"used cars for sale\" page",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I select make \"Suzuki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I select model \"Carry\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I select location \"Any Location\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I select price \"$35,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I should see the make \"Suzuki\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuySteps.iAmOnHomepage()"
});
formatter.result({
  "duration": 52400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "buy+sell",
      "offset": 18
    }
  ],
  "location": "BuySteps.iMouseHoverOnTab(String)"
});
formatter.result({
  "duration": 252622500,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickUsedLink()"
});
formatter.result({
  "duration": 2694546700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "used cars for sale",
      "offset": 15
    }
  ],
  "location": "BuySteps.iNavigateToPage(String)"
});
formatter.result({
  "duration": 344529400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "BuySteps.iSelectMake(String)"
});
formatter.result({
  "duration": 158489600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carry",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectModel(String)"
});
formatter.result({
  "duration": 151259700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Any Location",
      "offset": 19
    }
  ],
  "location": "BuySteps.iSelectLocation(String)"
});
formatter.result({
  "duration": 67280400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$35,000",
      "offset": 16
    }
  ],
  "location": "BuySteps.iSelectPrice(String)"
});
formatter.result({
  "duration": 117192400,
  "status": "passed"
});
formatter.match({
  "location": "BuySteps.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 147150000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 23
    }
  ],
  "location": "BuySteps.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 1164128200,
  "status": "passed"
});
formatter.after({
  "duration": 877349000,
  "status": "passed"
});
});