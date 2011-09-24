(function ($) {

    $.extend($.data, {
        page: function () {
            return new pageMethods();
        }
    });


    function pageMethods() {

        this.retrieve = function (pageShortName) {

            var format = "{apiKey}/v{apiVersion}/fundraising";

            var location = jg.utils().buildApiLocation(format);

            alert(location);
        };
    }

})(jQuery);