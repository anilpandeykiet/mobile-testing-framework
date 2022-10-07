import { config } from '../wdio.shared.conf';
const android_specs_base_path = './test/specs/ios/**/*.ts';
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

config.capabilities = [
    {
        platformName: 'ios',
        'appium:platformVersion': '16.0',
        'appium:automationName': 'XCUITest',
        'appium:app':
            '/Users/anilp/custom-folder/experiments/mobile-testing/app/ios/UIKitCatalog.app',
        deviceName: 'iPhone X',
    },
];

config.maxInstances = 10;

exports.config = config;
