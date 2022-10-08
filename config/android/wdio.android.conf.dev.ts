const path = require('path');
const config = require('../wdio.shared.conf');

const android_specs_base_path = './test/specs/android/**/home.screen.spec.ts';

config.port = 4723;

//
// ==================
// Specify Test Files
// ==================
// Define which test specs should run. The pattern is relative to the directory
// from which `wdio` was called.
//
// The specs are defined as an array of spec files (optionally using wildcards
// that will be expanded). The test for each spec file will be run in a separate
// worker process. In order to have a group of spec files run in the same worker
// process simply enclose them in an array within the specs array.
//
// If you are calling `wdio` from an NPM script (see https://docs.npmjs.com/cli/run-script),
// then the current working directory is where your `package.json` resides, so `wdio`
// will be called from there.
//
config.specs = [android_specs_base_path];

//
// ============
// Capabilities
// ============
// Define your capabilities here. WebdriverIO can run multiple capabilities at the same
// time. Depending on the number of capabilities, WebdriverIO launches several test
// sessions. Within your capabilities you can overwrite the spec and exclude options in
// order to group specific specs to a specific capability.
//
// First, you can define how many instances should be started at the same time. Let's
// say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
// set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
// files and you set maxInstances to 10, all spec files will get tested at the same time
// and 30 processes will get spawned. The property handles how many capabilities
// from the same test should run tests.
//

//
// If you have trouble getting all important capabilities together, check out the
// Sauce Labs platform configurator - a great tool to configure your capabilities:
// https://saucelabs.com/platform/platform-configurator
//
const appPath = path.join(process.cwd(), './app/android/ColorNote+Notepad.apk');
console.log('APP PATH: ', appPath);

config.capabilities = [
    {
        platformName: 'Android',
        'appium:platformVersion': '11.0',
        'appium:deviceName': 'Pixel 4',
        'appium:app': appPath,
        'appium:automationName': 'UiAutomator2',
        // @ts-ignore
        'appium:autoGrantPermissions': true,
    },
];

config.maxInstances = 10;

config.services = ['appium'];

exports.config = config;
