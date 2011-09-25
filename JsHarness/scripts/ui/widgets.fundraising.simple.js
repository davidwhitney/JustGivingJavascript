(function ($) {

    $.extend(jg.ui.widgets, {

        simple: function (target, pageShortName) {
            target = jg.ui.utils.getJQueryObject(target);
            jg.data.page.retrieve(pageShortName, function (page) {
                target.append(createWidget(page).element);
            });
        }

    });

    var createWidget = function (page) {
        var wrapper = $("<div />");

        var styleMarkup = "<style type='text/css'>"
            + "    .jg-text-widget { width:240px; background:black; color:#72635c;"
            + "                        font-family: Helvetica, Cambria, Arial, Sans-Serif;"
            + "                        font-weight: bold; font-size:16px; line-height: 28px;"
            + "                        float: left; margin:30px;}"
            + ""
            + "    .jg-text-widget p { display:block; margin:0; padding: 15px; }"
            + ""
            + "    .jg-text-widget .charity-name { color:Pink; }"
            + "    .jg-text-widget .raised-so-far { color:Pink; }"
            + "    .jg-text-widget .left-to-raise { color:Pink; }"
            + "    .jg-text-widget .donate-link { color:Pink; }"
            + ""
            + "    .jg-text-widget .logo { width:102.5px; height:23.5px;"
            + "                            padding:0 15px 15px 15px; }"
            + ""
            + "    .jg-text-widget .call-to-action { margin-top:-15px; }"
            + "</style>";

        var style = $(styleMarkup);

        var widgetMarkup = "<section class='jg-text-widget'>"
            + "    <p>"
            + "        {ownerName} is raising money for <span class='charity-name'>{charityName}</span><br />"
            + "        So far they've raised"
            + "        <span class='raised-so-far'>{totalRaised},</span> and need another"
            + "        <span class='left-to-raise'>{totalLeftToRaise}</span>"
            + "        to reach their target.</p>"
            + ""
            + "        <p class='call-to-action'>You can <a class='donate-link' href='{pageUrl}'>donate now</a>"
            + "        to help this valuable cause.</p>"
            + ""
            + "        <img class='logo' src='http://www.justgiving.com/jg-refresh/images/logos/jg-logo-header-new.png' />"
            + "</section>";

        var totalRaised = page.totalRaisedOffline + page.totalRaisedOnline;

        var model = {
            ownerName: page.owner,
            charityName: page.charity.name,
            totalRaised: page.currencySymbol + Math.floor(totalRaised),
            totalLeftToRaise: page.currencySymbol + (page.fundraisingTarget - totalRaised),
            pageUrl: jg.settings.websiteUrl + "/" + page.pageShortName
        };

        var templateTokenRegex = /\{([a-z0-9\.]+)\}/gmi;
        var match = null;

        while (match = templateTokenRegex.exec(widgetMarkup)) {
            widgetMarkup = widgetMarkup.replace(match[0], model[match[1]]);
        }

        var widget = $(widgetMarkup);
        wrapper.append(style);
        wrapper.append(widget);

        return {
            element: wrapper
        };
    };

} (jQuery));