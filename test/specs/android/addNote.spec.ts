import Welcome from '../../screens/android/Welcome';
import { textNote } from '../../data/addNotesData';
import AddNotes from '../../screens/android/AddNotes';
import Home from '../../screens/android/Home';

describe('Add Note Screen', function () {
    const { title, description } = textNote;

    before(async () => {
        await Welcome.skipAppWalkThrough();
    });

    it('should add a new text note details', async function () {
        //Add a new Note
        await AddNotes.addNoteDetails({ title, description });
        const noteTitle = await AddNotes.getNoteTitle();
        // console.log('NOTE TITLE: ', noteTitle);
        // await browser.debug(1000 * 60 * 10);
        //Verify Notes title
        expect(noteTitle).toEqual(title);

        const noteDescription = await AddNotes.getNotesDescription();

        //verify Notes Body
        expect(noteDescription).toEqual(description);

        //Save Notes
        await AddNotes.saveNote();

        //Verify it shows in Main App
        const allNotes = await Home.getNoteTitles();
        console.log('allNotes: ', allNotes);
        expect(allNotes).toContain(title);
    });
});
