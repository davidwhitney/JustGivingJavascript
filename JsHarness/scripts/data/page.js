(function ($) {

    $.extend($.data, {
        page: function () {
            return new pageMethods();
        }
    });


    function pageMethods() {

        this.retrieve = function (pageShortName) {
            var location = jg.utils().buildApiLocation("fundraising/" + pageShortName);
            var rawResponse = jg.http.get(location);
            alert(rawResponse);
        };
    }

})(jQuery);