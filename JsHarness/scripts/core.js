var jg = jQuery.noConflict();

(function ($) {
    $.extend(true, {

        init: function (supplied) {
            jg.settings = function() {
                return $.extend({ apiKey: '', rootDomain: 'https://api.justgiving.com', apiVersion: '1' }, supplied);
            };
        },
        
        utils: function () {
            return new utils();
        }
});
    
    
function utils() {

    this.buildApiLocation = function (locationFormat) {

        var format = jg.settings().rootDomain + "/" + locationFormat;
        format = format.replace("{apiKey}", jg.settings().apiKey);
        format = format.replace("{apiVersion}", jg.settings().apiVersion);
        alert(format);
        return format;
    };
}

})(jQuery);