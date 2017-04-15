let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
	
	framework: "jasmine",
	jasmineNodeOpts: {
		
		print: function () {}
		
	},
	seleniumAddress: "http://localhost:4444/wd/hub",
	specs: [
		"basic-input-spec.js"
	],
	
	onPrepare: function () {
		
		jasmine.getEnv().addReporter(new SpecReporter({
			spec: {
				displayStacktrace: true
			}
		}));
		
	},
	
};