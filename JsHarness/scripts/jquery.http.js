(function($) {

    $.ajaxSetup({
            accepts: 'application/json',
            dataType: 'jsonp',
            beforeSend: function(xhr) {
                if (jg.settings.username && jg.settings.password) {
                    xhr.setRequestHeader("Authentication", "Basic " + $.base64.encode(jg.settings.username + ":" + jg.settings.password));
                    xhr.setRequestHeader("Authorization", "Basic " + $.base64.encode(jg.settings.username + ":" + jg.settings.password));
                }
            }
        });

    $.extend({
            http: {
                get: function(settings) {
                    var ajax = {
                        url: settings.url + '?format=json',
                        success: function(data) { success(settings, data); }
                    };
                    $.ajax(ajax);

                },
                head: function(settings) {
                    var ajax = {
                        url: settings.url,
                        type: 'HEAD',
                        success: function(data) { success(settings, data); }
                    };
                    $.ajax(ajax);
                },
                put: function(settings) {
                    var ajax = {
                        url: settings.url,
                        success: function(data) { success(settings, data); },
                        type: 'PUT',
                        data: $.toJSON(settings.data)
                    };
                    $.ajax(ajax);

                },
                post: function(settings) {
                    var ajax = {
                        url: settings.url,
                        success: function(data) { success(settings, data); },
                        type: 'POST',
                        data: $.toJSON(settings.data)
                    };
                    $.ajax(ajax);

                }
            }
        });

    function success(settings, data) {
        if (settings.overrideCallback)
            settings.overrideCallback(data);
        else
            jg.settings().onResponse(data);
    }

})(jQuery);