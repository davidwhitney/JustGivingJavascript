(function ($) {

    $.extend(jg, {
        ui: {

            widgets: {},

            utils: {

                getJQueryObject: function (target) {
                    if (typeof target == "string") {
                        target = $(target);
                    }
                    if (target.length != 0) {
                        return target;
                    }
                    throw "'target' must either be a jQuery object or a css selector that selects at least one DOM element."
                },

                loadTemplate: function (templateName, callback) {
                    $.ajax({
                        url: "/scripts/ui/" + templateName + ".htm",
                        accepts: "text/html",
                        dataType: "text/html",
                        beforeSend: function () { },
                        type: "GET",
                        success: function () { alert("success"); },
                        complete: function (xhr, status) {
                            alert("complete");
                        }
                    });
                }
            }
        }
    });

} (jQuery));
