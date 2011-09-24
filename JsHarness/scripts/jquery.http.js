(function ($) {
    $.extend({

        http: {

            get: function (settings) {
                var ajax = {
                    url: settings.url,
                    dataType: 'jsonp',
                    success: function (data) {
                        if (settings.overrideCallback)
                            settings.overrideCallback(data);
                        else
                            jg.settings().
                    }
                };
                $.ajax(settings);
            
            },
            put: function () {

                return "PUT";
            },
            head: function () {
                return "HEAD";
            },
            post: function () {
                return "POST";
            }
        }
    });

})(jQuery);