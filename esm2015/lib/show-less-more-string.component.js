/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ShowLessMoreStringComponent {
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
if (false) {
    /** @type {?} */
    ShowLessMoreStringComponent.prototype._longString;
    /** @type {?} */
    ShowLessMoreStringComponent.prototype._length;
    /** @type {?} */
    ShowLessMoreStringComponent.prototype._newString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1sZXNzLW1vcmUtc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nob3ctbGVzcy1tb3JlLXN0cmluZy8iLCJzb3VyY2VzIjpbImxpYi9zaG93LWxlc3MtbW9yZS1zdHJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU96RCxNQUFNLE9BQU8sMkJBQTJCO0lBU3RDO1FBSkEsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRVIsQ0FBQzs7OztJQUVqQixRQUFRO1FBRU4sSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7O0lBRUQsTUFBTSxDQUFDLEtBQUs7UUFDVixJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3JELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUM1RDthQUNJO1lBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsS0FBSyxNQUFNLEVBQUU7WUFDekMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsTUFBTSxDQUFDO1NBQ3JDO2FBQ0k7WUFDSCxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx3QkFBd0I7Z0JBQ2xDLHlJQUFvRDthQUVyRDs7Ozs7MEJBRUUsS0FBSztzQkFHTCxLQUFLOzs7O0lBSE4sa0RBQ29COztJQUVwQiw4Q0FDcUI7O0lBRXJCLGlEQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItU2hvd0xlc3NNb3JlU3RyaW5nJyxcbiAgdGVtcGxhdGVVcmw6Jy4vc2hvdy1sZXNzLW1vcmUtc3RyaW5nLmNvbXBvbmVudC5odG1sJyAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgU2hvd0xlc3NNb3JlU3RyaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KClcbiAgX2xvbmdTdHJpbmc6IHN0cmluZztcbiAgXG4gIEBJbnB1dCgpXG4gIF9sZW5ndGg6IG51bWJlciA9IDI1O1xuICBcbiAgX25ld1N0cmluZzogc3RyaW5nID0gJyc7XG4gIFxuICBjb25zdHJ1Y3RvcigpIHsgfVxuICBcbiAgbmdPbkluaXQoKSB7XG4gIFxuICAgIHRoaXMuX25ld1N0cmluZyA9IHRoaXMuX2xvbmdTdHJpbmcuc3Vic3RyKDAsIHRoaXMuX2xlbmd0aCk7XG4gIH1cbiAgXG4gIFRvZ2dsZShldmVudCkge1xuICAgIGlmICh0aGlzLl9uZXdTdHJpbmcubGVuZ3RoID09IHRoaXMuX2xvbmdTdHJpbmcubGVuZ3RoKSB7XG4gICAgICB0aGlzLl9uZXdTdHJpbmcgPSB0aGlzLl9sb25nU3RyaW5nLnN1YnN0cigwLCB0aGlzLl9sZW5ndGgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuX25ld1N0cmluZyA9IHRoaXMuX2xvbmdTdHJpbmc7XG4gICAgfVxuICAgIGlmIChldmVudC5zcmNFbGVtZW50LmlubmVySFRNTCA9PT0gJ21vcmUnKSB7XG4gICAgICBldmVudC5zcmNFbGVtZW50LmlubmVySFRNTCA9IFwibGVzc1wiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGV2ZW50LnNyY0VsZW1lbnQuaW5uZXJIVE1MID0gJ21vcmUnO1xuICAgIH1cbiAgfVxufVxuXG4iXX0=