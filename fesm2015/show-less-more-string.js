import { Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShowLessMoreStringComponent {
    constructor() {
        this._length = 25;
        this._newString = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._newString = this._longString.substr(0, this._length);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    Toggle(event) {
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
    }
}
ShowLessMoreStringComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-ShowLessMoreString',
                template: "<p>\r\n    {{   _newString }} <a href=\"#\" *ngIf='_longString.length > _length' (click)='Toggle($event)' >more</a>\r\n  </p>"
            }] }
];
/** @nocollapse */
ShowLessMoreStringComponent.ctorParameters = () => [];
ShowLessMoreStringComponent.propDecorators = {
    _longString: [{ type: Input }],
    _length: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class ShowLessMoreStringModule {
}
ShowLessMoreStringModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ShowLessMoreStringComponent],
                imports: [CommonModule
                ],
                exports: [ShowLessMoreStringComponent]
            },] }
];

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