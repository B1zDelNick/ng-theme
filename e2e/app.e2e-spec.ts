import { NgThemePage } from './app.po';

describe('ng-theme App', () => {
  let page: NgThemePage;

  beforeEach(() => {
    page = new NgThemePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
