import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
        { type: Component, args: [{
                    selector: 'lib-ShowLessMoreString',
                    template: "<p>\r\n    {{   _newString }} <a href=\"#\" *ngIf='_longString.length > _length' (click)='Toggle($event)' >more</a>\r\n  </p>"
                }] }
    ];
    /** @nocollapse */
    ShowLessMoreStringComponent.ctorParameters = function () { return []; };
    ShowLessMoreStringComponent.propDecorators = {
        _longString: [{ type: Input }],
        _length: [{ type: Input }]
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
        { type: NgModule, args: [{
                    declarations: [ShowLessMoreStringComponent],
                    imports: [CommonModule
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

export { ShowLessMoreStringComponent, ShowLessMoreStringModule };

//# sourceMappingURL=show-less-more-string.js.map