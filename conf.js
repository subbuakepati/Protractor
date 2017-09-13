/**
 * Created by subbu on 08/02/2017.
 */
exports.config = {
    // The address of a running selenium server.
    seleniumAddress: 'http://localhost:4444/wd/hub',

    multiCapabilities: [{
        'browserName': 'firefox'
    }, {
        'browserName': 'chrome',
        chromeOptions: {
            args: [ "--headless", "--disable-gpu", "--window-size=800x600" ]}
    }],

    // Spec patterns are relative to the configuration file location passed
    specs: ['sample_spec.js','sample_spec2.js'],

    framework: 'jasmine2',
    getPageTimeOut:100
};

