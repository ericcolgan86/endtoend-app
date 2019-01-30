import { AppPage } from './app.po';
import { browser, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to endtoend-app!');
  });


  it('should display No Users message', () => {
    page.navigateTo();
    expect(page.getUserMessageText()).toEqual('No Users');
  });

  it('should display We have users message after clicking get users and show users', () => {
    page.navigateTo();
    var userList = page.getUserList();
    expect(userList.count()).toEqual(0);

    page.getUserButton().click();

    expect(page.getUserMessageText()).toEqual('We have users');
    userList = page.getUserList();
    expect(userList.count()).toEqual(3);
    expect(userList.get(0).getText()).toEqual('Eric')
  });


  it('should display No Users message after clicking delete users and delete users', () => {
    page.navigateTo();
    var userList = page.getUserList();
    expect(userList.count()).toEqual(0);

    page.getUserButton().click();
    userList = page.getUserList();
    expect(userList.count()).toEqual(3);

    page.deleteUserButton().click();
    userList = page.getUserList();
    expect(userList.count()).toEqual(0);
  });




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    }));
  });
});
