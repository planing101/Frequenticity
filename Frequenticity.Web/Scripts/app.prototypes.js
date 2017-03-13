(function (app, undefined) {
    (function (prototypes, undefined) {
        
        prototypes.stringFormat = function () {
            if (!String.prototype.format) {
                String.prototype.format = function () {
                    var args = arguments;
                    return this.replace(/{(\d+)}/g, function (match, number) {
                        return typeof args[number] != 'undefined' ? args[number] : match;
                    });
                };
            }
        };

        prototypes.stringGetInteger = function () {
            if (!String.prototype.getInteger) {
                String.prototype.getInteger = function () {
                    return parseInt(this.toString()) || 0;
                };
            }
        };

        prototypes.init = function () {
            prototypes.stringFormat();
            prototypes.stringGetInteger();

            console.log("Prototypes Loaded.");
        };

        prototypes.init();

    })(app.prototypes = app.prototypes || {});
})(window.app = window.app || {});