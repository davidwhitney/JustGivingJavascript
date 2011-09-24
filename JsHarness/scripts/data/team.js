(function ($) {

    $.extend($.data, {

        team: {
            retrieve: function (teamShortName, overrideCallback) {
                var location = jg.utils.buildApiLocation("team/" + teamShortName);
                jg.http.get({ url: location, overrideCallback: overrideCallback });
            }
        }
    });

} (jQuery));
