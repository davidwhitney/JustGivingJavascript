$(function () {

    jg.http.get("https://api.justgiving.com/ea902521/v1/fundraising/pages/justgiving?format=json", function (data) { alert(data.pageId); });

    module("jquery.http.js");

    test("first test within module", function () {
        ok(true, "all pass");
    });

});