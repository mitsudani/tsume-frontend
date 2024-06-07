import { type Locator, type Page } from '@playwright/test';
import { HOME } from "../src/constants/routes";

export class HomePage {
    readonly page: Page;
    readonly homeLink: Locator;
    readonly howItWorksLink: Locator;
    readonly loginLink: Locator;
    readonly signUpLink: Locator;
    readonly getStartedLink: Locator;
    readonly tsumeLogo: Locator;
    readonly facebookLink: Locator;
    readonly instagramLink: Locator;
    readonly tiktokLink: Locator;
    readonly twitterLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.homeLink = page.getByTestId("header-navbar-home-link");
        this.howItWorksLink = page.getByTestId("header-navbar-howItWorks-link");
        this.loginLink = page.getByTestId("header-login-link");
        this.signUpLink = page.getByTestId("header-signup-link");
        this.getStartedLink = page.getByTestId("get-started-link");
        this.tsumeLogo = page.getByTestId("logo-home");
        this.facebookLink = page.getByTestId("facebook-link");
        this.instagramLink = page.getByTestId("instagram-link");
        this.tiktokLink = page.getByTestId("tiktok-link");
        this.twitterLink = page.getByTestId("twitter-link");
    }

    async goto() {
        await this.page.goto(HOME);
    }
}