(function ($) {

    $.extend($.ui, {

        status: function (target, pageShortName) {
            target = getJQueryObject(target);
            var page = jg.data.page.retrieve(pageShortName);
            var status = createStatus(page);
            target.append(status.element);
            return status;
        }

    });

    // Banner size will be 240 x 400 px
    var createStatus = function (page) {
        var wrapper = $("<div class='justGivingStatus'></div>");
        var thermometer = $("<div class='thermometer'></div>");
        var title = $("<p class='title'>" + page.title + "</p>");
        var charity = $("<p class='charityName'>" + page.charity.name + "</p>");

        return {
            element: wrapper
        };

    };

    var getJQueryObject = function (target) {
        if (typeof target == "string") {
            target = $(target);
        }
        if (target.constructor == "?" && target.length != 0) {
            return target;
        }
        throw "target suplied was invalid. target must be a non-empty jQuery object or a selector string that selects at least one DOM element.";
    };

} (jQuery));