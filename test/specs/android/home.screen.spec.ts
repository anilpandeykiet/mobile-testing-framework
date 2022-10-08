import Home from '../../screens/android/Home';
import Welcome from '../../screens/android/Welcome';

describe('Home Screen', function () {
    before(async () => {
        await Welcome.skipAppWalkThrough();
    });

    it('should show sidebar', async function () {
        //Assert left side nav bar is displayed
        await expect(Home.sidebarNav).toBeDisplayed();
    });

    it('should show Logo', async function () {
        //Assert ColorNote logo is displayed
        await expect(Home.logo).toBeDisplayed();
    });

    it('should show Add note Icon', async function () {
        await expect(Home.addNoteBtn).toBeDisplayed();
    });

    it('should show search note icon', async function () {
        await expect(Home.searchNoteBtn).toBeDisplayed();
    });

    it('should show more options btn', async function () {
        await expect(Home.moreOptionsBtn).toBeDisplayed();
    });

    it('should show sort notes filter', async function () {
        //Assert Sort notes is displayed
        await expect(Home.sortByBtn).toBeDisplayed();
    });

    it('should show notes list container', async function () {
        //Assert Notes Container is displayed
        await expect(Home.noteListContainer).toBeDisplayed();
    });
});
