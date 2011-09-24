(function ($) {

    $.extend($.data, {

        charity: {
            retrieve: function (charityId, overrideCallback) {
                var location = jg.utils.buildApiLocation("charity/" + charityId);
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));

