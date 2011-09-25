$(function() {
    jg.init({
            apiKey: 'decbf1d2',
            rootDomain: 'https://api.staging.justgiving.com',
            onResponse: function(data) {
                alert(data);
            }
        });

    jg.data.search.CharitySearch('tree', 1, 10, function(data) {

        alert(data.query);

    });

    module("jquery.http.js");

    test("ajaxSetup dataType should equal dataType jsonp", function() {
        equal($.ajaxSetup().dataType, 'jsonX');
    });

    asyncTest("Given a vaild Api resource when ", function() {
        jg.http.get({
                url: "https://api.justgiving.com/ea902521/v1/fundraising/pages/justgiving",
                overrideCallback: function(data) {
                    equal(data.pageId, '123');
                    start();
                }
            });

    });

    asyncTest("Api result should be return when given a vaild Api resource", function() {
        jg.http.get({
                url: "https://api.justgiving.com/ea902521/v1/fundraising/pages/justgiving",
                overrideCallback: function(data) {
                    equal(data.pageId, '123');
                    start();
                }
            });

    });

    asyncTest("xhr status return given a vaild Api resource", function() {
        jg.http.get({
                url: "https://api.justgiving.com/ea902521/v1/fundraising/pages/justgiving",
                overrideCallback: function(data) {
                    equal(data.xhr.status, '200');
                    start();
                }
            });

    });

});
