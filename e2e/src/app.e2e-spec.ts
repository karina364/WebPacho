<<<<<<< HEAD
import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
=======
import { browser, logging } from 'protractor';
import { AppPage } from './app.po';
>>>>>>> 02c60e5... initial commit

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', async () => {
    await page.navigateTo();
<<<<<<< HEAD
    expect(await page.getTitleText()).toEqual('primer-proyecto-angular app is running!');
=======
    expect(await page.getTitleText()).toEqual('Webpacho app is running!');
>>>>>>> 02c60e5... initial commit
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
