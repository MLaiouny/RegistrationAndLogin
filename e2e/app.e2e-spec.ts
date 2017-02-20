import { RegistrationAndLoginAppPage } from './app.po';

describe('registration-and-login-app App', function() {
  let page: RegistrationAndLoginAppPage;

  beforeEach(() => {
    page = new RegistrationAndLoginAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
