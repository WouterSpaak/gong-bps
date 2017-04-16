import { BierpraesesspelPage } from './app.po';

describe('bierpraesesspel App', () => {
  let page: BierpraesesspelPage;

  beforeEach(() => {
    page = new BierpraesesspelPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gong works!');
  });
});
