(function ($) {
    $.extend({

        http: {

            get: function (url, callback) {
                var settings = {
                    url: url,
                    dataType: 'jsonp',
                    success: function (data) { callback(data); }
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