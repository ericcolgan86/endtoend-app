import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/') as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  getUserMessageText() {
    return element(by.css('app-root h2')).getText() as Promise<string>;
  }

  getUserButton() {
    return element(by.id('getUsers'));
  }

  deleteUserButton() {
    return element(by.id('deleteUsers'));
  }

  getUserList() {
    var userList = element.all(by.css('ul li'));
    return userList;
  }

}
