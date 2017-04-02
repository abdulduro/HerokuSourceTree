$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 2,
  "name": "User able to login with valid credentials",
  "description": "",
  "id": "user-able-to-login-with-valid-credentials",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5482413534,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "User successfully logs in with valid credentials",
  "description": "",
  "id": "user-able-to-login-with-valid-credentials;user-successfully-logs-in-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I enter \"go2automationclass@gmail.com\" and \"Pass2016\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I ses \"Personal apps\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_am_on_home_page()"
});
formatter.result({
  "duration": 17830286438,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "go2automationclass@gmail.com",
      "offset": 9
    },
    {
      "val": "Pass2016",
      "offset": 44
    }
  ],
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "duration": 237180589,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_click_the_login_button()"
});
formatter.result({
  "duration": 9281312889,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Personal apps",
      "offset": 7
    }
  ],
  "location": "LoginStep.i_ses(String)"
});
formatter.result({
  "duration": 90659,
  "status": "passed"
});
formatter.after({
  "duration": 1337105924,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 15,
  "name": "User not able to logs in with invalid credentials",
  "description": "",
  "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I ses \"\u003ctext2\u003e\" apps\" error message",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "text2"
      ],
      "line": 23,
      "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "go2automationclass@gmail.com",
        "Pass2017",
        "There was a problem with your login."
      ],
      "line": 24,
      "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "automationclass@gmail.com",
        "Pass2016",
        "There was a problem with your login."
      ],
      "line": 25,
      "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3603561083,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User not able to logs in with invalid credentials",
  "description": "",
  "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter \"go2automationclass@gmail.com\" and \"Pass2017\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I ses \"There was a problem with your login.\" apps\" error message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_am_on_home_page()"
});
formatter.result({
  "duration": 13951787640,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "go2automationclass@gmail.com",
      "offset": 9
    },
    {
      "val": "Pass2017",
      "offset": 44
    }
  ],
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "duration": 199222903,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_click_the_login_button()"
});
formatter.result({
  "duration": 2610988665,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There was a problem with your login.",
      "offset": 7
    }
  ],
  "location": "LoginStep.i_ses_apps_error_message(String)"
});
formatter.result({
  "duration": 215101,
  "status": "passed"
});
formatter.after({
  "duration": 1277757109,
  "status": "passed"
});
formatter.before({
  "duration": 3444278807,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "User not able to logs in with invalid credentials",
  "description": "",
  "id": "user-able-to-login-with-valid-credentials;user-not-able-to-logs-in-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 17,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "I enter \"automationclass@gmail.com\" and \"Pass2016\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "I click the login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I ses \"There was a problem with your login.\" apps\" error message",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStep.i_am_on_home_page()"
});
formatter.result({
  "duration": 11877021749,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "automationclass@gmail.com",
      "offset": 9
    },
    {
      "val": "Pass2016",
      "offset": 41
    }
  ],
  "location": "LoginStep.i_enter_and(String,String)"
});
formatter.result({
  "duration": 177255323,
  "status": "passed"
});
formatter.match({
  "location": "LoginStep.i_click_the_login_button()"
});
formatter.result({
  "duration": 2264242150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "There was a problem with your login.",
      "offset": 7
    }
  ],
  "location": "LoginStep.i_ses_apps_error_message(String)"
});
formatter.result({
  "duration": 186021,
  "status": "passed"
});
formatter.after({
  "duration": 1272241480,
  "status": "passed"
});
});