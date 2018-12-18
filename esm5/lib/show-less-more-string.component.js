/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
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
export { ShowLessMoreStringComponent };
if (false) {
    /** @type {?} */
    ShowLessMoreStringComponent.prototype._longString;
    /** @type {?} */
    ShowLessMoreStringComponent.prototype._length;
    /** @type {?} */
    ShowLessMoreStringComponent.prototype._newString;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hvdy1sZXNzLW1vcmUtc3RyaW5nLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3Nob3ctbGVzcy1tb3JlLXN0cmluZy8iLCJzb3VyY2VzIjpbImxpYi9zaG93LWxlc3MtbW9yZS1zdHJpbmcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6RDtJQWNFO1FBSkEsWUFBTyxHQUFXLEVBQUUsQ0FBQztRQUVyQixlQUFVLEdBQVcsRUFBRSxDQUFDO0lBRVIsQ0FBQzs7OztJQUVqQiw4Q0FBUTs7O0lBQVI7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFRCw0Q0FBTTs7OztJQUFOLFVBQU8sS0FBSztRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUU7WUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzVEO2FBQ0k7WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7U0FDcEM7UUFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxLQUFLLE1BQU0sRUFBRTtZQUN6QyxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7U0FDckM7YUFDSTtZQUNILEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztTQUNyQztJQUNILENBQUM7O2dCQWxDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtvQkFDbEMseUlBQW9EO2lCQUVyRDs7Ozs7OEJBRUUsS0FBSzswQkFHTCxLQUFLOztJQTBCUixrQ0FBQztDQUFBLEFBbkNELElBbUNDO1NBOUJZLDJCQUEyQjs7O0lBQ3RDLGtEQUNvQjs7SUFFcEIsOENBQ3FCOztJQUVyQixpREFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbGliLVNob3dMZXNzTW9yZVN0cmluZycsXG4gIHRlbXBsYXRlVXJsOicuL3Nob3ctbGVzcy1tb3JlLXN0cmluZy5jb21wb25lbnQuaHRtbCcgLFxuICBzdHlsZXM6IFtdXG59KVxuZXhwb3J0IGNsYXNzIFNob3dMZXNzTW9yZVN0cmluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpXG4gIF9sb25nU3RyaW5nOiBzdHJpbmc7XG4gIFxuICBASW5wdXQoKVxuICBfbGVuZ3RoOiBudW1iZXIgPSAyNTtcbiAgXG4gIF9uZXdTdHJpbmc6IHN0cmluZyA9ICcnO1xuICBcbiAgY29uc3RydWN0b3IoKSB7IH1cbiAgXG4gIG5nT25Jbml0KCkge1xuICBcbiAgICB0aGlzLl9uZXdTdHJpbmcgPSB0aGlzLl9sb25nU3RyaW5nLnN1YnN0cigwLCB0aGlzLl9sZW5ndGgpO1xuICB9XG4gIFxuICBUb2dnbGUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fbmV3U3RyaW5nLmxlbmd0aCA9PSB0aGlzLl9sb25nU3RyaW5nLmxlbmd0aCkge1xuICAgICAgdGhpcy5fbmV3U3RyaW5nID0gdGhpcy5fbG9uZ1N0cmluZy5zdWJzdHIoMCwgdGhpcy5fbGVuZ3RoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICB0aGlzLl9uZXdTdHJpbmcgPSB0aGlzLl9sb25nU3RyaW5nO1xuICAgIH1cbiAgICBpZiAoZXZlbnQuc3JjRWxlbWVudC5pbm5lckhUTUwgPT09ICdtb3JlJykge1xuICAgICAgZXZlbnQuc3JjRWxlbWVudC5pbm5lckhUTUwgPSBcImxlc3NcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBldmVudC5zcmNFbGVtZW50LmlubmVySFRNTCA9ICdtb3JlJztcbiAgICB9XG4gIH1cbn1cblxuIl19