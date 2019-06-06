const HtmlReporter = require('protractor-beautiful-reporter');


exports.config = {
    directConnect: true,
    capabilities: {
        'browserName': 'chrome',
    },
    specs: ['./testcases/**/*-spec.js'],
    framework: 'jasmine',
    baseUrl: 'https://winning-group.github.io/toh/',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function () {
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'reports',
            screenshotsSubfolder: 'images',
            jsonsSubfolder: 'jsons',
            preserveDirectory: false,
            takeScreenShotsOnlyForFailedSpecs: true, 
            docTitle: 'TOH-UI-Report'
        }).getJasmine2Reporter());
    }

};