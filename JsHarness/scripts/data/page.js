(function ($) {

    $.extend($.data, {
        page: function () {
            return new pageMethods();
        }
    });


    function pageMethods() {

        this.retrieve = function (pageShortName) {

            var format = "{apiKey}/v{apiVersion}/fundraising";
            alert(pageShortName);
        };
    }

})(jQuery);