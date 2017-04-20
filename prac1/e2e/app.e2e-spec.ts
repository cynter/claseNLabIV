import { Prac1Page } from './app.po';

describe('prac1 App', () => {
  let page: Prac1Page;

  beforeEach(() => {
    page = new Prac1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
