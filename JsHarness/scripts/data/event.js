(function ($) {

    $.extend($.data, {

        event: {
            retrieve: function (eventId, overrideCallback) {
                var location = jg.utils.buildApiLocation("event/" + eventId);
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));
