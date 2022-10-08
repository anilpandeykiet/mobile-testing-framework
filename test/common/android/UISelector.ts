//reference https://developer.android.com/reference/androidx/test/uiautomator/UiSelector#selected(boolean)
//NOTE: Applicable only for Android Selectors

class AndroidSelector {
    private readonly prefix = 'android=new UiSelector()';

    private selectors = [];

    className(name: string) {
        this.selectors.push(`className("${name}")`);
        return this;
    }

    text(name: string) {
        this.selectors.push(`text("${name}")`);
        return this;
    }

    resourceId(name: string) {
        this.selectors.push(`resourceId("${name}")`);
        return this;
    }

    textContains(name: string) {
        this.selectors.push(`textContains("${name}")`);
        return this;
    }

    textMatches(name: string) {
        this.selectors.push(`textMatches("${name}")`);
        return this;
    }

    textStartsWith(name: string) {
        this.selectors.push(`textStartsWith("${name}")`);
        return this;
    }

    selected(val: boolean) {
        this.selectors.push(`selected(${val})`);
        return this;
    }

    packageName(name: string) {
        this.selectors.push(`packageName("${name}")`);
        return this;
    }

    getSelector() {
        let str = '';
        str = str + this.selectors.join('.');
        console.log('FINAl UI - SELECTOR: ', `${this.prefix}.${str}`);
        return `${this.prefix}.${str}`;
    }
}

export default new AndroidSelector();
