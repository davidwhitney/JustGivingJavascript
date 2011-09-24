$(function () {
    jg.init({
        apiKey: 'decbf1d2',
        rootDomain: 'https://api.staging.justgiving.com',
        onResponse: function (data) {
            alert(data);
        }
    });
    jg.http.get({ url: "https://api.justgiving.com/ea902521/v1/fundraising/pages/justgiving", overrideCallback: function (data) { alert(data.pageId); } });

    module("jquery.http.js");

    test("first test within module", function () {
        ok(true, "all pass");
    });

});
