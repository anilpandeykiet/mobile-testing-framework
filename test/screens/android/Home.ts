import AndroidSelector from '../../common/android/AndroidSelector';
import UISelector from '../../common/android/UISelector';

class Home {
    get sidebarNav() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/icon_nav'));
    }

    get logo() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/logo_image', 'android.widget.ImageView'));
    }

    get addNoteBtn() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/main_btn1'));
    }

    get searchNoteBtn() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/main_btn2'));
    }

    get moreOptionsBtn() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/main_btn3'));
    }

    get noteListContainer() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/note_list'));
    }

    get notesTitle() {
        return $$(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/title'));
    }

    get sortByBtn() {
        return $(UISelector.textContains('Sort by modified').getSelector());
    }

    getNoteTitles() {
        return this.notesTitle.map(async (note) => await note.getText());
    }

    openSideNav() {
        return this.sidebarNav.click();
    }

    openSearchNote() {
        return this.searchNoteBtn.click();
    }

    openMoreOptions() {
        return this.moreOptionsBtn.click();
    }
}

export default new Home();
