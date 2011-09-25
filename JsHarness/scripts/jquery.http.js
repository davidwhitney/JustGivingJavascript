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

    $.extend(jg, {
            http: {
                get: function(settings) {
                    var ajax = {
                        url: settings.url + '?format=json',
                        success: function(data, textStatus, xhr) { success(settings, data, textStatus, xhr); }
                    };
                    $.ajax(ajax);

                },
                head: function(settings) {
                    var ajax = {
                        url: settings.url,
                        type: 'HEAD',
                        success: function(data, textStatus, xhr) { success(settings, data, textStatus, xhr); }
                    };
                    $.ajax(ajax);
                },
                put: function(settings) {
                    var ajax = {
                        url: settings.url,
                        success: function(data, textStatus, xhr) { success(settings, data, textStatus, xhr); },
                        type: 'PUT',
                        data: $.toJSON(settings.data)
                    };
                    $.ajax(ajax);

                },
                post: function(settings) {
                    var ajax = {
                        url: settings.url,
                        success: function(data, textStatus, xhr) { success(settings, data, textStatus, xhr); },
                        type: 'POST',
                        data: $.toJSON(settings.data)
                    };
                    $.ajax(ajax);
                }
            }
        });

    function success(settings, data, textStatus, xhr) {
        if (settings.overrideCallback)
            settings.overrideCallback($.extend({ textStatus: textStatus, xhr: xhr }, data));
        else
            jg.settings.onResponse(data);
    }

})(jQuery);
