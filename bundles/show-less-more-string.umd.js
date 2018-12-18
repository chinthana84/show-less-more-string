(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('show-less-more-string', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global['show-less-more-string'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShowLessMoreStringComponent = /** @class */ (function () {
        function ShowLessMoreStringComponent() {
            this._length = 25;
            this._newString = '';
        }
        /**
         * @return {?}
         */
        ShowLessMoreStringComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._newString = this._longString.substr(0, this._length);
            };
        /**
         * @param {?} event
         * @return {?}
         */
        ShowLessMoreStringComponent.prototype.Toggle = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                if (this._newString.length == this._longString.length) {
                    this._newString = this._longString.substr(0, this._length);
                }
                else {
                    this._newString = this._longString;
                }
                if (event.srcElement.innerHTML === 'more') {
                    event.srcElement.innerHTML = "less";
                }
                else {
                    event.srcElement.innerHTML = 'more';
                }
            };
        ShowLessMoreStringComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'lib-ShowLessMoreString',
                        template: "<p>\r\n    {{   _newString }} <a href=\"#\" *ngIf='_longString.length > _length' (click)='Toggle($event)' >more</a>\r\n  </p>"
                    }] }
        ];
        /** @nocollapse */
        ShowLessMoreStringComponent.ctorParameters = function () { return []; };
        ShowLessMoreStringComponent.propDecorators = {
            _longString: [{ type: core.Input }],
            _length: [{ type: core.Input }]
        };
        return ShowLessMoreStringComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ShowLessMoreStringModule = /** @class */ (function () {
        function ShowLessMoreStringModule() {
        }
        ShowLessMoreStringModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [ShowLessMoreStringComponent],
                        imports: [common.CommonModule
                        ],
                        exports: [ShowLessMoreStringComponent]
                    },] }
        ];
        return ShowLessMoreStringModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ShowLessMoreStringComponent = ShowLessMoreStringComponent;
    exports.ShowLessMoreStringModule = ShowLessMoreStringModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=show-less-more-string.umd.js.map