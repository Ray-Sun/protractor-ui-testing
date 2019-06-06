'use strict'

// my libraries or object
const Page = require('../../shared/Page');

module.exports = class HeroesPage extends Page {

    getNameInput(){
        return super.getElementByTagName(this.nameInput);
    }

    getAddButton(){
        return super.getElementByButtonText(this.addButton);
    }

    getHeroesList(){
        return super.getElementByCSS(this.heroesList);
    }

    getMessageList(){
        return super.getElementByCSS(this.messageList);
    }

    getHeroesListItemDelButton(listItem){
        return listItem.element(by.css('.delete'));
    }

    getHeroesListItemBadge(listItem){
        return listItem.element(by.css('.badge'));
    }
};