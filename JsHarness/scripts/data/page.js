(function ($) {

    $.extend($.data, {
        page: {
            retrieve: retrieve,
            exists: exists
        }
    });

    var retrieve = function (pageShortName, callback) {
        var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
        jg.http.get({
            url: location,
            overrideCallback: callback
        });
    };

    var exists = function (pageShortName, callback) {
        throw "exists is not implemented";
        var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
        jg.http.head({
            url: location,
            overrideCallback: callback
        });
    };

} (jQuery));
