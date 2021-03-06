'use strict';
module.exports = function (casper, scenario, vp) {
  var Page = require('../page-objects/contact-page.js');
  var page = new Page(casper, scenario, vp);

  require('./show-events')(casper, scenario, vp);
  casper.then(function () {
    page.clickFirst('.CRM_Event_Form_Search a[accesskey="N"]');
    this.wait(1000);
  });
};
