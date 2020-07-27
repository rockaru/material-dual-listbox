import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';

class MaterialDualListboxComponent {
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

class MaterialDualListboxModule {
}
MaterialDualListboxModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MaterialDualListboxComponent],
                imports: [
                    BrowserModule,
                    MatIconModule,
                    MatInputModule,
                    MatListModule,
                    FormsModule,
                    MatFormFieldModule,
                    MatButtonModule
                ],
                exports: [MaterialDualListboxComponent]
            },] }
];

/*
 * Public API Surface of material-dual-listbox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MaterialDualListboxComponent, MaterialDualListboxModule };
//# sourceMappingURL=mea-material-dual-listbox.js.map
