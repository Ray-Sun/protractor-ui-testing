'use strict'

const using = require('jasmine-data-provider');

// my libraries or object
// for page init
const HeroesPage = require('./HeroesPage');
const { url, elements } = require('./data/page');

//import test case data
const elementExistsCases = require('./data/case-elementExists');
const normalInputCases = require('./data/case-normalInput');
const exceptionInputCases = require('./data/case-exceptionInput');

describe('heroes page: add new hero', () => {

  let page;
  let nameInput,addButton,heroesList,messageList;
  let pageElements;

  // init page and element
  beforeAll(() => {
    if (!page) {
      page = new HeroesPage(url, elements);
      page.navigateTo();
      nameInput = page.getNameInput();
      addButton = page.getAddButton();
      heroesList = page.getHeroesList();
      messageList = page.getMessageList();
    }
  });

  describe('element exits check', () => {
    beforeAll(() => {
      //init pageElements with test data driven
      if (!pageElements) {
        pageElements = {};
        pageElements["nameInput"] = nameInput;
        pageElements["addButton"] = addButton;
        pageElements["heroesList"] = heroesList;
        pageElements["messageList"] = messageList;
      }
    });
    using(elementExistsCases, (data, description) => {
      it(description, () => {
        expect(pageElements[data.element].isPresent()).toBe(data.exists);
      });
    });
  });

  describe('normal input check', () => {
    using(normalInputCases, (data, description) => {
      it(description, async () => {
        //action
        nameInput.sendKeys(data.name);
        addButton.click();
        page.gotoBottom();//for screenshot

        //get new elements
        let newHeroItem = heroesList.last();
        let newHeroItemBadge = await page.getHeroesListItemBadge(newHeroItem).getText();
        let newHeroItemDelBtn = page.getHeroesListItemDelButton(newHeroItem);

        //check result
        //check new hero name has been added
        expect(newHeroItem.getText()).toContain(data.name.trim());
        //check new hero with delete button
        expect(newHeroItemDelBtn.isPresent()).toBe(true);
        //check new hero message
        expect(messageList.last().getText()).toContain(`id=${newHeroItemBadge}`);
      });
    });
  });

  describe('exception input check', () => {
    let lastHeroItemText;
    using(exceptionInputCases, (data, description) => {

      beforeAll(async () => {
        // record the last on of the hero list to check no new hero is added
        lastHeroItemText||(lastHeroItemText = await heroesList.last().getText());
      });

      it(description, async () => {
        //action
        if(data.name){
          nameInput.sendKeys(data.name);
        }
        addButton.click();
        page.gotoBottom();//for screenshot

        //check exception hero should not be added
        expect(heroesList.last().getText()).toBe(lastHeroItemText);
      })
    })
  })


});