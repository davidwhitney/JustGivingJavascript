(function ($) {

    $.ajaxSetup({
        dataType: 'jsonp'
    });

    function success(settings, data) {
        if (settings.overrideCallback)
            settings.overrideCallback(data);
        else
            jg.settings.onResponse(data);
    }

    $.extend({

        http: {

            get: function (settings) {
                var ajax = {
                    url: settings.url,
                    success: function (data) { success(settings, data); }
                };
                $.ajax(ajax);

            },
            put: function (settings) {
                var ajax = {
                    url: settings.url,
                    dataType: 'jsonp',
                    data: settings.data,
                    success: function (data) {
                        if (settings.overrideCallback)
                            settings.overrideCallback(data);
                        else
                            jg.settings.onResponse(data);
                    }
                };
                $.ajax(ajax);
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