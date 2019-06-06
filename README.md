
# Before

Make sure you have a test environment

1. install npm

2. install protractor (maybe need sudo)

``` shell

npm install -g protractor

```

3. update webdriver

``` shell

webdriver-manager update

```

# Run Test

1. cd the-project-dir

2. install dependencies

``` shell

npm install

```
 

3. run test cases

``` shell

npm test

```  

**You may get this error: "E/launcher - session not created: This version of ChromeDriver only supports Chrome version XXXX"**
please check your chrome version, and update webdriver like the following, and run test again.
``` shell

webdriver-manager update --versions.chrome=YOUR_CHROME_VERSION

``` 

You will find the test report in the reports folder.(report.html)

  

# Project Info

conf.js is the config file of protractor;

All important things are in the testcases folder:

* Page.js in the shared folder is the super class with common functions to control the page and get page element

* pages folder included all page test cases. Here is the heroes page. You can add other pages like heroDetail later

* 3 parts in a page test case:

  * HeroesPage.js inherited from Page Class with the functions to find the heroes page element

  * page.js in data folder provides the url and heroes page element information; file started with "case-" provides the test cases data. You can add a new case in these files.

  * heroes-spec.js use HeroesPage class and data to run ui test. As the element get action and test data have been encapsulated, you can focus on the business logic.

  

# Report Demo

[Report](https://drive.google.com/file/d/18RXN3TYPA9S1EPdQHQJdYCoDimBlyLrG/view)