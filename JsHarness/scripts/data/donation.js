(function ($) {

    $.extend(jg.data, {

        donation: {
            retrieve: function (donationId, overrideCallback) {
                var location = jg.utils.buildApiLocation("donation/" + donationId);
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));
