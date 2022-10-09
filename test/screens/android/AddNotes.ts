import AndroidSelector from '../../common/android/AndroidSelector';
import UISelector from '../../common/android/UISelector';
import Home from './Home';

class AddNotes {
    get noteTypeText() {
        return $(UISelector.text('Text').getSelector());
    }

    get noteTypeCheckList() {
        return $(UISelector.text('Checklist').getSelector());
    }

    get notesTitle() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/edit_title'));
    }

    get notesDescription() {
        return $(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/edit_note'));
    }

    setTitle(title) {
        return this.notesTitle.setValue(title);
    }

    setDescription(description) {
        return this.notesDescription.setValue(description);
    }

    getNoteTitle() {
        return this.notesTitle.getText();
    }

    getNotesDescription() {
        return this.notesDescription.getText();
    }

    async addNoteDetails({ title = '', description = '' }) {
        await Home.addNoteBtn.click();
        await this.noteTypeText.click();
        await this.setTitle(title);
        await this.setDescription(description);
    }

    async saveNote() {
        await browser.hideKeyboard();
        await browser.back();
        await browser.back();
    }
}

export default new AddNotes();
