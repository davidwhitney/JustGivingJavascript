(function ($) {

    $.extend($.data, {
        page: function () {
            return new pageMethods();
        }
    });


    function pageMethods() {

        this.retrieve = function (pageShortName) {
            alert(pageShortName);
        };
    }

})(jQuery);