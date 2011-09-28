(function ($) {

    var simple = function (target, pageShortName, theme) {
        if (typeof theme == "string") {
            theme = jg.ui.widgets.simple.themes[theme];
        }
        target = jg.ui.utils.getJQueryObject(target);
        jg.data.page.retrieve(pageShortName, function (page) {
            theme = theme || {
                background: "#" + page.branding.thermometerBackgroundColour,
                foreground: "#" + page.branding.thermometerTextColour,
                highlight: "#" + page.branding.thermometerFillColour
            };
            target.append(createWidget(page, theme).element);
        })
    };

    simple.themes = {
        dark: {
            background: "black",
            foreground: "#72635c",
            highlight: "pink"
        },
        light: {
            background: "#fcc",
            foreground: "#003CFF",
            highlight: "#72635c"
        }
    };

    $.extend(jg.ui.widgets, { simple: simple });

    var createWidget = function (page, theme) {

        var styleMarkup = "<style type='text/css'>"
            + "    .jg-text-widget { width:240px; background:{background}; color:{foreground};"
            + "                        font-family: Helvetica, Cambria, Arial, Sans-Serif;"
            + "                        font-weight: bold; font-size:16px; line-height: 28px;"
            + "                        float: left; margin:30px;}"
            + ""
            + "    .jg-text-widget p { display:block; margin:0; padding: 15px; }"
            + ""
            + "    .jg-text-widget .charity-name { color:{highlight}; }"
            + "    .jg-text-widget .raised-so-far { color:{highlight}; }"
            + "    .jg-text-widget .left-to-raise { color:{highlight}; }"
            + "    .jg-text-widget .donate-link { color:{highlight}; }"
            + ""
            + "    .jg-text-widget .logo { width:102.5px; height:23.5px;"
            + "                            padding:0 15px 15px 15px; }"
            + ""
            + "    .jg-text-widget .call-to-action { margin-top:-15px; }"
            + "</style>";

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

        var totalRaised = parseFloat(page.totalRaisedOffline) + parseFloat(page.totalRaisedOnline);

        var model = {
            ownerName: page.owner,
            charityName: page.charity.name,
            totalRaised: page.currencySymbol + Math.floor(totalRaised),
            totalLeftToRaise: page.currencySymbol + (page.fundraisingTarget - totalRaised),
            pageUrl: jg.settings.websiteUrl + "/" + page.pageShortName
        };

        widgetMarkup = renderTemplate(widgetMarkup, model);
        styleMarkup = renderTemplate(styleMarkup, theme);

        var widget = $(widgetMarkup);
        var style = $(styleMarkup);
        widget.append(style);

        return {
            element: widget
        };
    };

    var templateTokenRegex = /\{([a-z0-9\.]+)\}/gmi;

    var renderTemplate = function (template, model) {
        var templateTokenRegex = /\{([a-z0-9\.]+)\}/gmi;
        var match = null;

        while (match = templateTokenRegex.exec(template)) {
            template = template.replace(match[0], model[match[1]]);
        }

        return template;
    };

} (jQuery));