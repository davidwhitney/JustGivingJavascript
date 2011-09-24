(function ($) {

    $.extend($.data, {
        page: function () {
            return new pageMethods();
        }
    });


    function pageMethods() {

        this.retrieve = function (pageShortName) {

            var location = "fundraising/" + pageShortName;
            location = jg.utils().buildApiLocation(location);

            alert(location);
        };
    }

})(jQuery);