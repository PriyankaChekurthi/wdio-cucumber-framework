class ElementHelper {

    async click(element: WebdriverIO.Element) {

        await element.waitForDisplayed({
            timeout: 5000
        });

        await element.click();
    }

    async type(
        element: WebdriverIO.Element,
        value: string
    ) {

        await element.waitForDisplayed({
            timeout: 5000
        });

        await element.setValue(value);
    }

    async getText(element: WebdriverIO.Element) {

        await element.waitForDisplayed({
            timeout: 5000
        });

        return await element.getText();
    }
}
export default new ElementHelper ();
