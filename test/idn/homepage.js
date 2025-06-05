const { browser, expect, $ } = require('@wdio/globals')

exports.HomePage = class Homepage {
    static visit() {
        browser.url('https://www.idntimes.com/');
        expect($('[data-testid="header-logo-img"]')).toBeDisplayed();
    }

    static clickJoinButton() {
        return $('[data-testid="join-btn"]').click();
    }

    static async clickProfilDokter() {
        // return cy.contains('Profil Dokter')
        // .invoke('removeAttr','target')
        // .click({ 
        //   animationDistanceThreshold: 20,
        //   force:true
        //  });
        return await $('aria/Profil Dokter').click();
    }

    static async clickCommunityMenu() {
        return await $('[data-testid="menu-community-link"]').click();
    }

    static async clickBusinessMenu() {
        return await $('[data-testid="menu-business-link"]').click();
    }

    static async clickTechMenu() {
        return await $('[data-testid="menu-tech-link"]').click();
    }

    static async clickHealthMenu() {
        return await $('[data-testid="menu-health"]').click();
    }

    static async clickCareerSidebar() {
        return await $('[data-testid="sidebar-career"] > a').click();

    }

};

exports.PROFILE_SUBDOMAIN = 'https://profil.idntimes.com'
exports.CONNECT_SUBDOMAIN = 'https://connect.idn.media'
exports.MEDIA_SUBDOMAIN = 'https://www.idn.media'