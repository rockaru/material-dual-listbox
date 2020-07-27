import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

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
    }
    ngOnInit() {
        this.update();
    }
    update() {
        this.filterItems(this.filterText);
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
            ...this[targets[1]].splice(this[targets[1]].findIndex(x => x[this.display] == item), 1),
            ...this[targets[0]]
        ];
        this.destination = this.confirmedFiltered;
        this.destinationChange.emit(this.destination);
    }
    filterItems(text) {
        this.filterText = text;
        if (!text) {
            this.availableFiltered = this.source.filter(n => !this.destination.includes(n));
            return;
        }
        this.availableFiltered = this.availableFiltered
            .filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
    }
}
MaterialDualListboxComponent.decorators = [
    { type: Component, args: [{
                selector: 'material-dual-listbox',
                template: "<style>\n    .rck-title{\n        margin-bottom: 0px;\n    }\n    .rck-list-container{\n        display: flex;\n        flex-wrap: nowrap;\n    }\n    .rck-container {\n        width: 200px;\n        max-width: 100%;\n        margin: 5px 5px 5px 5px;\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    .rck-container:last-child{\n        margin-right: 25px;\n    }\n\n    .rck-list {\n        border: solid 1px #ccc;\n        min-height: 60px;\n        background: white;\n        border-radius: 4px;\n        overflow: hidden;\n        display: block;\n    }\n\n    .rck-box {\n        padding: 20px 20px;\n        border-bottom: solid 1px #ccc;\n        color: rgba(0, 0, 0, 0.87);\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        box-sizing: border-box;\n        cursor: move;\n        background: white;\n        font-size: 14px;\n    }\n\n    .cdk-drag-preview {\n        box-sizing: border-box;\n        border-radius: 4px;\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n            0 8px 10px 1px rgba(0, 0, 0, 0.14),\n            0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    }\n\n    .cdk-drag-placeholder {\n        opacity: 0;\n    }\n\n    .cdk-drag-animating {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .rck-box:last-child {\n        border: none;\n    }\n\n    .rck-list.cdk-drop-list-dragging .rck-box:not(.cdk-drag-placeholder) {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n</style>\n\n\n<div [ngStyle]=\"{'max-height': '100%','max-width': width, 'min-width': width }\">\n    <mat-form-field appearance=\"standard\"  *ngIf=\"filter\" [ngStyle]=\"{'max-width': width, 'min-width': width }\">\n        <mat-label>{{searchPlaceholder}} {{itemsTitle}}</mat-label>\n        <input matInput [ngModel]=\"filterText\" autocomplete=\"off\"\n        (ngModelChange)=\"filterItems($event)\">\n        <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\n\n    </mat-form-field>\n    <div cdkDropListGroup class=\"rck-list-container\">\n        <div class=\"rck-container\">\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{itemsTitle}}</h3>\n            \n            <div cdkDropList [cdkDropListData]=\"availableFiltered\" class=\"rck-list\"\n                 (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"rck-box\" *ngFor=\"let item of availableFiltered\" (click)=\"clickedItem(item[display],'confirmedFiltered','availableFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"addIconColor\" fxHide.xs mat-list-icon>{{addIcon}}</mat-icon> {{item[display]}}</div>\n            </div>\n\n        </div>\n        <div class=\"rck-container\">\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{selectedItemsTitle}}</h3>\n            \n            <div cdkDropList [cdkDropListData]=\"destination\" class=\"rck-list\"\n                 (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"rck-box\" *ngFor=\"let item of destination\" (click)=\"clickedItem(item[display],'availableFiltered','confirmedFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"removeIconColor\" fxHide.xs mat-list-icon>{{removeIcon}}</mat-icon> {{item[display]}}</div>\n            </div>\n        </div>\n        \n    </div>\n</div>",
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
