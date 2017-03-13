(function (app, undefined) {

    app.getParameterByName = function (name, url) {
        if (!url)
            url = window.location.href;

        name = name.replace(/[\[\]]/g, "\\$&");

        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);

        if (!results) return null;

        if (!results[2]) return '';

        return decodeURIComponent(results[2].replace(/\+/g, " "));
    };

    app.createStringFormatMethod = function () {
        if (!String.format) {
            String.format = function () {
                var s = arguments[0];
                for (var i = 0; i < arguments.length - 1; i++) {
                    var reg = new RegExp("\\{" + i + "\\}", "gm");
                    s = s.replace(reg, arguments[i + 1]);
                }
                return s;
            };
        }
    };

    app.init = function () {
        app.createStringFormatMethod();

        console.log("app module initialized");
    };

    app.init();

})(window.app = window.app || {})