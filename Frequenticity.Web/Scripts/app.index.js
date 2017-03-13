(function (app, undefined) {
    (function (index, undefined) {

        index.btnGo_Click = function () {
            var timeInterval = $("#timeInterval");

            if (timeInterval.val().getInteger() > 0)
                window.location.href = String.format("/Home/Main?interval={0}", timeInterval.val());
            else
                timeInterval.addClass("required");
        };

        index.addEventHandlers = function () {
            //btnGo
            btnGo = document.getElementById("btnGo");
            if (btnGo) {
                if (btnGo.addEventListener)  // all browsers except IE before version 9
                    btnGo.addEventListener("click", index.btnGo_Click, false);
                else if (btnGo.attachEvent)  // IE before version 9
                    btnGo.attachEvent("click", index.btnGo_Click);
            }
        };

        index.init = function () {
            index.addEventHandlers();

            console.log("index module initialized");
        };

        index.init();

    })(app.index = app.index || {});
})(window.app = window.app || {});