class AndroidSelector {
    accessibilityId(id: string) {
        return `~${id}`;
    }

    className(name: string) {
        return `${name}`;
    }

    xpath(path: string) {
        return `${path}`;
    }

    resourceId(id: string, tagName?: string) {
        console.log('Resource Id Selector: ', `//${tagName || '*'}[@resource-id='${id}']`);
        return `//${tagName || '*'}[@resource-id='${id}']`;
    }

    id(value: string, tagName?: string) {
        console.log('ID Selector: ', `//${tagName || '*'}[@id='${value}']`);
        return `//${tagName || '*'}[@id='${value}']`;
    }
}

export default new AndroidSelector();
