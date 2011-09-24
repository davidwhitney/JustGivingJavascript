(function ($) {

    $.extend($.data, {

        account: {
            listAllPages: function (email, overrideCallback) {
                var location = jg.utils().buildApiLocation("account/" + email + "/pages");
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));

