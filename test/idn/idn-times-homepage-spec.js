const { HomePage, CONNECT_SUBDOMAIN, PROFILE_SUBDOMAIN, MEDIA_SUBDOMAIN } = require('./homepage');

describe('HomePage Navigation', () => {
  beforeEach(async () => {
    await HomePage.visit();
  });

  it('should redirect to doctor profile when clicking Profil Dokter', async () => {
    await HomePage.clickProfilDokter();
    await expect(browser).toHaveUrl(expect.stringContaining('profil.idntimes.com'));
  });

  it('should redirect to login page when clicking Community Menu', async () => {
    await HomePage.clickCommunityMenu();
    await expect(browser).toHaveUrl(expect.stringContaining('connect.idn.media'));
  });

  it('should redirect to selected news page when clicking headline news', async () => {
    await HomePage.clickTechMenu();
    await expect(browser).toHaveUrl(expect.stringContaining('/tech'));

    await HomePage.clickBusinessMenu();
    await expect(browser).toHaveUrl(expect.stringContaining('/business'));

    await HomePage.clickHealthMenu();
    await expect(browser).toHaveUrl(expect.stringContaining('/health'));
  });

  it('should redirect to career page when clicking career sidebar', async () => {
    await HomePage.clickCareerSidebar();
    await expect(browser).toHaveUrl(expect.stringContaining('idn.media/career'));
  });
});
