'use strict'
// super class 
// provide common function to control page
module.exports = class Page{
    constructor(url,elements){
        this.url = url;
        //init all page elements nage, for 'by'
        //not good enough,sub class needs know its element key 
        Object.assign(this,elements);
    }
    async navigateTo(url=this.url){
        await browser.get(url);
    }

    async gotoBottom(){
        await browser.executeScript('window.scrollTo(0,document.body.scrollHeight)');
    }

    getElementByTagName(tagName){
        return  element(by.tagName(tagName)); 
    }
    getElementByButtonText(buttonText){
        return element(by.buttonText(buttonText));
    }

    getElementByCSS(cssSelector){
        return $$(cssSelector);
    }

    // TODO: add other get element functions later
}