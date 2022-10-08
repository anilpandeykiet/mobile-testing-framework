import AndroidSelector from '../../common/android/AndroidSelector';

class Welcome {
    get welcomeTitle() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/textTitle'));
    }

    get welcomeSubtitle() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/textSubtitle'));
    }

    get skipBtn() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/btn_start_skip'));
    }

    get startBtn() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/btn_start'));
    }

    get nextBtn() {
        return $(AndroidSelector.id('com.socialnmobile.dictapps.notepad.color.note:id/btn_next'));
    }

    getWelcomeTitle() {
        return this.welcomeTitle.getText();
    }

    getWelcomeSubtitle() {
        return this.getWelcomeSubtitle().getText();
    }

    async skipAppWalkThrough() {
        const isDisplayed = await this.skipBtn.isDisplayed();
        isDisplayed && (await this.skipBtn.click());
        return await browser.waitUntil(
            async () => {
                return (await this.skipBtn.isDisplayed()) === false;
            },
            { timeout: 1000 * 5 }
        );
    }

    async clickStart() {
        const isDisplayed = await this.startBtn.isDisplayed();
        return isDisplayed && this.startBtn.click();
    }

    async clickNext() {
        const isDisplayed = await this.nextBtn.isDisplayed();
        return isDisplayed && this.nextBtn.click();
    }
}

export default new Welcome();
