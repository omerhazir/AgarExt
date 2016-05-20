chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (details.url.indexOf("main_out.js") != -1) {
        return {
            redirectUrl: "https://aylak.com/agar/main_out.js"
        };
    } else if (details.url.indexOf("agario.core.js") != -1) {
        return {
            redirectUrl: "https://aylak.com/agar/agario.core.js"
        };
    }
}, {
    urls: ["*://agar.io/agario.core.js", "*://agar.io/agario.core.js?*", "*://agar.io/main_out.js", "*://agar.io/main_out.js?*"],
    types: ["script"]
}, ["blocking"]);
