(function (app, undefined) {
    (function (main, undefined) {

        var inputValueList = null;
        var outputValueList = null;

        main.countdownTimer = null;
        main.intervalTimer = null;

        // ================
        //  Control Events
        // ================

        main.checkInput_OnClick = function (sender) {
            var numCheckCtrl = $("#numCheck");
            if (numCheckCtrl) {
                var checkNumber = numCheckCtrl.val().getInteger();
                if (checkNumber > 0) {
                    // Check against Fibonacci sequence
                    var isFibNumber = main.checkFibonacci(checkNumber);
                    if (isFibNumber)
                        alert('FIB');

                    // Add number to array
                    main.addValueToArray(checkNumber);

                    numCheckCtrl.removeClass("required");
                } else {
                    numCheckCtrl.addClass("required");
                }

                // Clear input
                numCheckCtrl.val("");
            }
        };

        // =========
        //  Methods
        // =========

        main.checkFibonacci = function (value) {
            var isFib = false;



            return isFib;
        };

        main.countdown = function (timeInterval) {
            var tmrCountdown = $("#tmrCountdown");
            if (tmrCountdown) {
                var tmrSeconds = tmrCountdown.children("#tmrSeconds");
                var timeCurrent = tmrSeconds.html().getInteger();

                if (timeCurrent > 1)
                    tmrSeconds.html(timeCurrent - 1);
                else
                    tmrSeconds.html(timeInterval);

                tmrCountdown.removeClass("halted");
            }
        };

        main.startTimer = function () {
            var param = app.getParameterByName("interval");

            if (param) {
                time = param.getInteger() * 1000;
                main.intervalTimer = setInterval(function () { main.run(); }, time);

                main.countdownTimer = setInterval(function () { main.countdown(param); }, 1000);
            }
        };

        main.stopTimer = function () {
            clearInterval(main.intervalTimer);
            clearInterval(main.countdownTimer);

            var tmrCountdown = $("#tmrCountdown");
            if (tmrCountdown) {
                var tmrSeconds = tmrCountdown.children("#tmrSeconds");
                if (tmrSeconds)
                    tmrSeconds.html("0");

                tmrCountdown.addClass("halted");
            }
        };

        main.run = function () {
            var txtLog = $("#txtLog");

            // Check whether numbers have been added to array
            if (main.inputValueList.length > 0)
                main.outputUserInputValues(txtLog);
            else
                txtLog.val("No numbers to display");
        };

        main.addValueToArray = function (value) {
            var itemExists = false;

            // Iterate through array and check for matching item(s)
            main.inputValueList.forEach(function (obj, index) {
                if (obj.Value == value) {
                    obj.Count++;

                    itemExists = true;
                }
            });

            // Add new item to array if one does not yet exist
            if (!itemExists) {
                var item = new Object();
                item["Value"] = value;
                item["Count"] = 1;

                main.inputValueList.push(item);
            }
        };

        main.outputUserInputValues = function (ctrl) {
            // Sort array by number of entries
            main.inputValueList.sort(function (a, b) {
                // Sort descending
                return b.Count - a.Count;
            });

            // Clear textarea
            ctrl.val("Output:");

            // Iterate through each array item and print to screen
            for (index in main.inputValueList)
                ctrl.val(String.format("{0}\n{1}:{2}", ctrl.val(), main.inputValueList[index].Value, main.inputValueList[index].Count));
        };


        // ============
        //  Initialize
        // ============

        main.init = function () {
            main.inputValueList = new Array();
            //main.outputValueList = new Array();

            main.startTimer();

            console.log("main module initialized");
        };

        main.init();

    })(app.main = app.main || {});
})(window.app = window.app || {});