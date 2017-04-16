import { browser, element, by } from 'protractor';

export class BierpraesesspelPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gong-root h1')).getText();
  }
}
