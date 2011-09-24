(function ($) {

    $.extend($.data, {
        page: function () {
            return new pageMethods();
        }
    });


    function pageMethods() {

        this.retrieve = function (pageShortName, overrideCallback) {
            var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
            var responseEnvelope = jg.http.get(location, overrideCallback);
            return responseEnvelope;
        };
    }

})(jQuery);