﻿(function ($) {

    $.extend(jg.ui, {

        fundraisingWidget: function (target, pageShortName) {
            target = getJQueryObject(target);
            jg.data.page.retrieve(pageShortName, function (page) {
                var status = createStatus(page);
                target.append(status.element);
            });
        }
    });

    // Banner size will be 240 x 400 px
    var createStatus = function (page) {
        var wrapper = $("<div class='justGivingStatus'></div>");
        var thermometer = $("<div class='thermometer'></div>");
        var title = $("<p class='title'>" + page.title + "</p>");
        var charity = $("<p class='charityName'>" + page.charity.name + "</p>");

        wrapper.append(thermometer);
        wrapper.append(title);
        wrapper.append(charity);

        return {
            element: wrapper
        };

    };

    var getJQueryObject = function (target) {
        if (typeof target == "string") {
            target = $(target);
        }
        if (target.length != 0) {
            return target;
        }
    };

} (jQuery));