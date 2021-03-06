var Patch;
(function (root, Patch) {
    var _apply = function () {
        var _require = root.require;
        root.require = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i - 0] = arguments[_i];
            }
            if (0 < args.length && args[0] instanceof Array) {
                return requirejs.apply(root, args);
            }
            else {
                return _require.apply(root, args);
            }
        };
    };
    Patch.apply = _apply;
})(this, Patch || (Patch = {}));
var DPMW;
(function (DPMW) {
    var setup = function (callback) {
        Patch.apply();
        var global = global || window;
        require(['cdp.lazyload'], function () {
            callback();
        });
    };
    setup(function () {
        require(['cdp.framework.jqm'], function () {
            CDP.Framework.initialize().done(function () {
                require(['scripts/app_dialog_sync_result'], function (app) {
                    app.main('dialog_sync_result');
                });
            });
        });
    });
})(DPMW || (DPMW = {}));
//# sourceMappingURL=init_dialog_sync_result.js.map