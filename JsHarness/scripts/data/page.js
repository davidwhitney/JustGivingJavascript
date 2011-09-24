function Page() {

    this.sayHello = function() {
        alert('hello');
    };

}

(function ($) {
    $.extend($.data, {
    page: function () { alert('page'); }

    });

})(jQuery);