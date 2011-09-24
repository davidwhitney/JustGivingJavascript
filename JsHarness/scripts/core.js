var jg = jQuery.noConflict();

(function ($) {

    $.extend({

        init: function (supplied) {
            jg.settings = $.extend({
                apiKey: '',
                rootDomain: 'https://api.justgiving.com',
                apiVersion: '1'
             }, supplied);
        },
        
        utils: {
            buildApiLocation: function (locationFormat) {
                var format = jg.settings.rootDomain + "/{apiKey}/v{apiVersion}/" + locationFormat;
                format = format.replace("{apiKey}", jg.settings.apiKey);
                format = format.replace("{apiVersion}", jg.settings.apiVersion);
                return format;
            }
        }

    });
    
}(jQuery));