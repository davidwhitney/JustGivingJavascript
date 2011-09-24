(function ($) {

    $.extend($.data, {

        page: {
            retrieve: function (pageShortName, overrideCallback) {
                var location = jg.utils.buildApiLocation("fundraising/pages/" + pageShortName);
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));
