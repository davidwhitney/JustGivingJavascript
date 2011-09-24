(function ($) {

    $.extend($.data, {

        page: {
            retrieve: function (pageShortName) {
                var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
                var responseEnvelope = jg.http.get(location);
                return responseEnvelope
            },
            exists: function (pageShortName) {
                var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
                var responseEnvelope = jg.http.head(location);
                return responseEnvelope.httpStatus != 404;
            }
        }
    });

} (jQuery));