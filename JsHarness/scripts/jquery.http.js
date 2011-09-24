(function($) {$.extend({
            
        http: {
                get: function() {

                    return "GET";
                },
                put: function() {

                    return "PUT";
                },
                head: function() {
                    return "HEAD";
                },
                post: function() {
                    return "POST";
                }
            }
        });
    
})(jQuery);