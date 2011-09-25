(function ($) {

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
        var logo = $("<div class='jgLogo'><img src='http://www.justgiving.com/jg-refresh/images/logos/jg-logo-header-new.png' /></div>");
        var image = $("<div class='image'><img src='http://www.justgiving.com/Utils/imaging.ashx?imageType=frpphoto&img=" + page.image.url + "&width=230' /></div>");
        var title = $("<p class='title'>" + page.title + "</p>");
        var charity = $("<p class='charityNameParagraph'><span class='charityName'>" + page.charity.name + "</span></p>");
        var donate = $("<p class='donate'><span class='donateButton'>Donate</span></p>");

        var styleDetails = "<style type=\"text/css\">";
        styleDetails += ".justGivingStatus { background-color: #E6E4DE; width: 240px; height: 400px; font-family: Arial,Helvetica,sans-serif; }";
        styleDetails += ".title { font-weight: bolder; border-bottom: 10px solid #73645D; padding: 5px; margin: 0px; }";
        styleDetails += ".justGivingStatus p { margin: 0px; }";
        styleDetails += ".charityNameParagraph { padding: 5px; }";
        styleDetails += ".charityName { font-weight: bolder; }";
        styleDetails += ".image { padding: 5px;  }";
        styleDetails += ".jgLogo { padding: 5px;  }";
        styleDetails += ".donate { padding: 5px; }";
        styleDetails += ".donateButton { background: #617FBB; display: block; padding: 5px; font-weight: bolder; color: white; text-align: center; }";
        styleDetails += "</style>";

        var style = $(styleDetails);

        wrapper.append(title);
        wrapper.append(charity);
        wrapper.append(image);
        wrapper.append(donate);
        wrapper.append(logo);
        wrapper.append(style);

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