import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

class MaterialDualListboxComponent {
    constructor() {
        this.key = '_id';
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
        this.update();
    }
    update() {
        this.filterItems(this.filterText);
        this.filterSelectedItems(this.filterSelectedText);
    }
    drop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
            console.log(event);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.destination = this.confirmedFiltered;
            this.destinationChange.emit(this.destination);
        }
    }
    clickedItem(item, ...targets) {
        this[targets[0]] = [
            ...this[targets[1]].splice(this[targets[1]].indexOf(item), 1),
            ...this[targets[0]]
        ];
        this.destination = this.confirmedFiltered;
        this.destinationChange.emit(this.destination);
    }
    filterItems(text) {
        this.filterText = text;
        if (!text) {
            this.availableFiltered = this.source;
            return;
        }
        this.availableFiltered = this.source
            .filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
    }
    filterSelectedItems(text) {
        this.filterSelectedText = text;
        if (!text) {
            this.confirmedFiltered = this.destination;
            return;
        }
        this.confirmedFiltered = this.destination.filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
    }
}
MaterialDualListboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'material-dual-listbox',
                template: "<style>\r\n    .rck-title{\r\n        margin-bottom: 0px;\r\n    }\r\n    .rck-list-container{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .rck-container {\r\n        width: 180px;\r\n        max-width: 100%;\r\n        margin: 5px 5px 5px 5px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n\r\n    .rck-container:last-child{\r\n        margin-right: 25px;\r\n    }\r\n\r\n    .rck-list {\r\n        border: solid 1px #ccc;\r\n        min-height: 60px;\r\n        background: white;\r\n        border-radius: 4px;\r\n        overflow: hidden;\r\n        display: block;\r\n    }\r\n\r\n    .rck-box {\r\n        padding: 20px 20px;\r\n        border-bottom: solid 1px #ccc;\r\n        color: rgba(0, 0, 0, 0.87);\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        box-sizing: border-box;\r\n        cursor: move;\r\n        background: white;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .cdk-drag-preview {\r\n        box-sizing: border-box;\r\n        border-radius: 4px;\r\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n            0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n            0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n    }\r\n\r\n    .cdk-drag-placeholder {\r\n        opacity: 0;\r\n    }\r\n\r\n    .cdk-drag-animating {\r\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n\r\n    .rck-box:last-child {\r\n        border: none;\r\n    }\r\n\r\n    .rck-list.cdk-drop-list-dragging .rck-box:not(.cdk-drag-placeholder) {\r\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n</style>\r\n\r\n\r\n<div [ngStyle]=\"{'max-height': '100%','max-width': width, 'min-width': width }\">\r\n\r\n    <div cdkDropListGroup class=\"rck-list-container\">\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{itemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\"  *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{itemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterItems($event)\">\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n\r\n            </mat-form-field>\r\n            <div cdkDropList [cdkDropListData]=\"availableFiltered\" class=\"rck-list\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"rck-box\" *ngFor=\"let item of availableFiltered\" (click)=\"clickedItem($event.target.innerText,'confirmedFiltered','availableFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"addIconColor\" fxHide.xs mat-list-icon>{{addIcon}}</mat-icon> {{item[display]}}</div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{selectedItemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\" *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{selectedItemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterSelectedText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterSelectedItems($event)\"\r\n                >\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n            </mat-form-field>\r\n            <div cdkDropList [cdkDropListData]=\"confirmedFiltered\" class=\"rck-list\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"rck-box\" *ngFor=\"let item of confirmedFiltered\" (click)=\"clickedItem($event.target.innerText,'availableFiltered','confirmedFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"removeIconColor\" fxHide.xs mat-list-icon>{{removeIcon}}</mat-icon> {{item[display]}}</div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>",
                styles: ['./material-dual-listbox.component.scss']
            },] }
];
MaterialDualListboxComponent.ctorParameters = () => [];
MaterialDualListboxComponent.propDecorators = {
    key: [{ type: Input }],
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
                    DragDropModule
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
//# sourceMappingURL=material-dual-listbox.js.map
