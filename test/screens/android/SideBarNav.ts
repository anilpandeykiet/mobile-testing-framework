import AndroidSelector from '../../common/android/AndroidSelector';

class SideBarNav {
    get navListTexts() {
        return $$(AndroidSelector.resourceId('com.socialnmobile.dictapps.notepad.color.note:id/text', 'android.widget.TextView'));
    }

    getNavOptions() {
        return this.navListTexts.map(async (navItem) => navItem.getText());
    }
}

export default new SideBarNav();
