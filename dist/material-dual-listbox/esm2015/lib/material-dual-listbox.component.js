import { Component, Input, EventEmitter, Output } from '@angular/core';
export class MaterialDualListboxComponent {
    constructor() {
        this.display = 'name';
        this.width = '360px';
        this.filter = true;
        this.searchPlaceholder = 'Filter';
        this.itemsTitle = 'Items';
        this.selectedItemsTitle = 'Selected Items';
        this.header = false;
        this.showIcons = true;
        this.addIcon = 'add';
        this.addIconColor = 'black';
        this.removeIcon = 'delete';
        this.removeIconColor = 'black';
        this.source = [];
        this.destination = [];
        this.destinationChange = new EventEmitter();
        this.availableFiltered = [];
        this.confirmedFiltered = [];
        this.filterText = null;
        this.filterSelectedText = null;
    }
    ngOnInit() {
        this.availableFiltered = this.source;
    }
    update() {
        if (!this.filterText) {
            this.availableFiltered = this.source;
        }
        else {
            this.availableFiltered = this.availableFiltered.filter(n => this.destination.includes(n));
        }
        if (!this.filterSelectedText) {
            this.confirmedFiltered = this.destination;
        }
        else {
            this.confirmedFiltered = this.confirmedFiltered.filter(n => !this.source.includes(n));
        }
    }
    clickedItem(item, ...targets) {
        this[targets[0]] = [
            ...this[targets[1]].splice(this[targets[1]].findIndex(x => x[this.display] == item), 1),
            ...this[targets[0]]
        ];
        this.update();
    }
    filterItems(text) {
        this.filterText = text;
        if (!this.filterText) {
            this.availableFiltered = this.source;
            return;
        }
        this.availableFiltered = this.availableFiltered.filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
    }
    filterSelectedItems(text) {
        this.filterSelectedText = text;
        if (!this.filterSelectedText) {
            this.confirmedFiltered = this.destination;
            return;
        }
        this.confirmedFiltered = this.confirmedFiltered.filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
    }
}
MaterialDualListboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'material-dual-listbox',
                template: "<style>\r\n    .rck-title{\r\n        margin-bottom: 0px;\r\n    }\r\n    .rck-list-container{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .rck-container {\r\n        width: 220px;\r\n        max-width: 100%;\r\n        margin: 5px 5px 5px 5px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n\r\n    .rck-container:last-child{\r\n        margin-right: 25px;\r\n    }\r\n\r\n    .rck-list {\r\n        border: solid 1px #ccc;\r\n        min-height: 60px;\r\n        background: white;\r\n        border-radius: 4px;\r\n        overflow: hidden;\r\n        display: block;\r\n    }\r\n\r\n    .rck-box {\r\n        padding: 20px 20px;\r\n        border-bottom: solid 1px #ccc;\r\n        color: rgba(0, 0, 0, 0.87);\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        box-sizing: border-box;\r\n        cursor: move;\r\n        background: white;\r\n        font-size: 14px;\r\n    }\r\n\r\n\r\n    .rck-box:last-child {\r\n        border: none;\r\n    }\r\n    input.example-right-align::-webkit-outer-spin-button,\r\ninput.example-right-align::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n</style>\r\n\r\n\r\n<div [ngStyle]=\"{'max-height': '100%','max-width': width, 'min-width': width }\">\r\n\r\n    <div cdkDropListGroup class=\"rck-list-container\">\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{itemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\"  *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{itemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterItems($event)\">\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n                \r\n            </mat-form-field>\r\n            <mat-list>\r\n                <mat-list-item class=\"rck-box\" *ngFor=\"let item of availableFiltered\" (click)=\"clickedItem(item[display],'destination','source')\"><mat-icon *ngIf=\"showIcons\" [style.color]=\"addIconColor\" fxHide.xs mat-list-icon>{{addIcon}}</mat-icon> {{item[display]}}</mat-list-item>\r\n            </mat-list>\r\n\r\n        </div>\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{selectedItemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\" *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{selectedItemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterSelectedText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterSelectedItems($event)\"\r\n                >\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n               \r\n            </mat-form-field>\r\n            <mat-list>\r\n                <mat-list-item class=\"rck-box\" *ngFor=\"let item of confirmedFiltered\" (click)=\"clickedItem(item[display],'source','destination')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"removeIconColor\" fxHide.xs mat-list-icon>{{removeIcon}}</mat-icon> {{item[display]}}</mat-list-item>\r\n            </mat-list>\r\n           \r\n        </div>\r\n        \r\n    </div>\r\n</div>",
                styles: ['./material-dual-listbox.component.scss']
            },] }
];
MaterialDualListboxComponent.ctorParameters = () => [];
MaterialDualListboxComponent.propDecorators = {
    display: [{ type: Input }],
    width: [{ type: Input }],
    filter: [{ type: Input }],
    searchPlaceholder: [{ type: Input }],
    itemsTitle: [{ type: Input }],
    selectedItemsTitle: [{ type: Input }],
    header: [{ type: Input }],
    showIcons: [{ type: Input }],
    addIcon: [{ type: Input }],
    addIconColor: [{ type: Input }],
    removeIcon: [{ type: Input }],
    removeIconColor: [{ type: Input }],
    source: [{ type: Input }],
    destination: [{ type: Input }],
    destinationChange: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21lYS1tYXRlcmlhbC1kdWFsLWxpc3Rib3gvc3JjL2xpYi9tYXRlcmlhbC1kdWFsLWxpc3Rib3guY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRyxNQUFNLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFVaEYsTUFBTSxPQUFPLDRCQUE0QjtJQXVCdkM7UUFyQlMsWUFBTyxHQUFRLE1BQU0sQ0FBQztRQUN0QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxzQkFBaUIsR0FBVyxRQUFRLENBQUE7UUFDcEMsZUFBVSxHQUFXLE9BQU8sQ0FBQTtRQUM1Qix1QkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQTtRQUM3QyxXQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsT0FBTyxDQUFBO1FBQzlCLGVBQVUsR0FBVyxRQUFRLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxPQUFPLENBQUE7UUFDakMsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELHNCQUFpQixHQUFlLEVBQUUsQ0FBQTtRQUNsQyxzQkFBaUIsR0FBZSxFQUFFLENBQUE7UUFDbEMsZUFBVSxHQUFXLElBQUksQ0FBQTtRQUN6Qix1QkFBa0IsR0FBVyxJQUFJLENBQUE7SUFHakMsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsaUJBQWlCLEdBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQTtJQUNwQyxDQUFDO0lB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dCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsICBPdXRwdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXRlcmlhbC1kdWFsLWxpc3Rib3gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXRlcmlhbC1kdWFsLWxpc3Rib3guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlczogWycuL21hdGVyaWFsLWR1YWwtbGlzdGJveC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlcmlhbER1YWxMaXN0Ym94Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZGlzcGxheTogYW55ID0gJ25hbWUnO1xyXG4gIEBJbnB1dCgpIHdpZHRoID0gJzM2MHB4JztcclxuICBASW5wdXQoKSBmaWx0ZXIgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnRmlsdGVyJ1xyXG4gIEBJbnB1dCgpIGl0ZW1zVGl0bGU6IHN0cmluZyA9ICdJdGVtcydcclxuICBASW5wdXQoKSBzZWxlY3RlZEl0ZW1zVGl0bGU6IHN0cmluZyA9ICdTZWxlY3RlZCBJdGVtcydcclxuICBASW5wdXQoKSBoZWFkZXIgPSBmYWxzZVxyXG4gIEBJbnB1dCgpIHNob3dJY29ucyA9IHRydWVcclxuICBASW5wdXQoKSBhZGRJY29uOiBzdHJpbmcgPSAnYWRkJztcclxuICBASW5wdXQoKSBhZGRJY29uQ29sb3I6IHN0cmluZyA9ICdibGFjaydcclxuICBASW5wdXQoKSByZW1vdmVJY29uOiBzdHJpbmcgPSAnZGVsZXRlJztcclxuICBASW5wdXQoKSByZW1vdmVJY29uQ29sb3I6IHN0cmluZyA9ICdibGFjaydcclxuICBASW5wdXQoKSBzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcclxuICBASW5wdXQoKSBkZXN0aW5hdGlvbjogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBPdXRwdXQoKSBkZXN0aW5hdGlvbkNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgYXZhaWxhYmxlRmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXVxyXG4gIGNvbmZpcm1lZEZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW11cclxuICBmaWx0ZXJUZXh0OiBzdHJpbmcgPSBudWxsXHJcbiAgZmlsdGVyU2VsZWN0ZWRUZXh0OiBzdHJpbmcgPSBudWxsXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmF2YWlsYWJsZUZpbHRlcmVkPXRoaXMuc291cmNlXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICBpZighdGhpcy5maWx0ZXJUZXh0KXtcclxuICAgICAgdGhpcy5hdmFpbGFibGVGaWx0ZXJlZCA9IHRoaXMuc291cmNlXHJcbiAgICB9ZWxzZXtcclxuICAgICAgdGhpcy5hdmFpbGFibGVGaWx0ZXJlZCA9IHRoaXMuYXZhaWxhYmxlRmlsdGVyZWQuZmlsdGVyKG49PnRoaXMuZGVzdGluYXRpb24uaW5jbHVkZXMobikpXHJcbiAgICB9XHJcbiAgICBpZighdGhpcy5maWx0ZXJTZWxlY3RlZFRleHQpe1xyXG4gICAgICB0aGlzLmNvbmZpcm1lZEZpbHRlcmVkID0gdGhpcy5kZXN0aW5hdGlvblxyXG4gICAgfWVsc2V7XHJcbiAgICAgIHRoaXMuY29uZmlybWVkRmlsdGVyZWQgPSB0aGlzLmNvbmZpcm1lZEZpbHRlcmVkLmZpbHRlcihuPT4hdGhpcy5zb3VyY2UuaW5jbHVkZXMobikpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja2VkSXRlbShpdGVtOiBzdHJpbmdbXSwgLi4udGFyZ2V0czogc3RyaW5nW10pIHtcclxuICAgIFxyXG4gICAgdGhpc1t0YXJnZXRzWzBdXSA9IFtcclxuICAgICAgLi4udGhpc1t0YXJnZXRzWzFdXS5zcGxpY2UodGhpc1t0YXJnZXRzWzFdXS5maW5kSW5kZXgoeD0+eFt0aGlzLmRpc3BsYXldPT1pdGVtKSwgMSksXHJcbiAgICAgIC4uLnRoaXNbdGFyZ2V0c1swXV1cclxuICAgIF1cclxuICAgIHRoaXMudXBkYXRlKClcclxuXHJcbiAgfVxyXG5cclxuXHJcbiAgZmlsdGVySXRlbXModGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlclRleHQgPSB0ZXh0O1xyXG4gICAgXHJcbiAgICBpZighdGhpcy5maWx0ZXJUZXh0KXtcclxuICAgIHRoaXMuYXZhaWxhYmxlRmlsdGVyZWQgPSB0aGlzLnNvdXJjZVxyXG5cclxuICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICB0aGlzLmF2YWlsYWJsZUZpbHRlcmVkID0gdGhpcy5hdmFpbGFibGVGaWx0ZXJlZC5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuZGlzcGxheV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKTtcclxuICB9XHJcblxyXG4gIGZpbHRlclNlbGVjdGVkSXRlbXModGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlclNlbGVjdGVkVGV4dCA9IHRleHQ7XHJcbiAgICBpZighdGhpcy5maWx0ZXJTZWxlY3RlZFRleHQpe1xyXG4gICAgdGhpcy5jb25maXJtZWRGaWx0ZXJlZCA9IHRoaXMuZGVzdGluYXRpb25cclxuXHJcbiAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgdGhpcy5jb25maXJtZWRGaWx0ZXJlZCA9IHRoaXMuY29uZmlybWVkRmlsdGVyZWQuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmRpc3BsYXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iXX0=