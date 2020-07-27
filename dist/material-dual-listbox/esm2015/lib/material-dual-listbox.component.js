import { Component, Input, EventEmitter, Output } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
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
            ...this[targets[1]].splice(this[targets[1]].findIndex(x => x[this.display] == item), 1),
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
                template: "<style>\r\n    .rck-title{\r\n        margin-bottom: 0px;\r\n    }\r\n    .rck-list-container{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .rck-container {\r\n        width: 180px;\r\n        max-width: 100%;\r\n        margin: 5px 5px 5px 5px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n\r\n    .rck-container:last-child{\r\n        margin-right: 25px;\r\n    }\r\n\r\n    .rck-list {\r\n        border: solid 1px #ccc;\r\n        min-height: 60px;\r\n        background: white;\r\n        border-radius: 4px;\r\n        overflow: hidden;\r\n        display: block;\r\n    }\r\n\r\n    .rck-box {\r\n        padding: 20px 20px;\r\n        border-bottom: solid 1px #ccc;\r\n        color: rgba(0, 0, 0, 0.87);\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        box-sizing: border-box;\r\n        cursor: move;\r\n        background: white;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .cdk-drag-preview {\r\n        box-sizing: border-box;\r\n        border-radius: 4px;\r\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n            0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n            0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n    }\r\n\r\n    .cdk-drag-placeholder {\r\n        opacity: 0;\r\n    }\r\n\r\n    .cdk-drag-animating {\r\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n\r\n    .rck-box:last-child {\r\n        border: none;\r\n    }\r\n\r\n    .rck-list.cdk-drop-list-dragging .rck-box:not(.cdk-drag-placeholder) {\r\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n</style>\r\n\r\n\r\n<div [ngStyle]=\"{'max-height': '100%','max-width': width, 'min-width': width }\">\r\n\r\n    <div cdkDropListGroup class=\"rck-list-container\">\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{itemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\"  *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{itemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterItems($event)\">\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n\r\n            </mat-form-field>\r\n            <div cdkDropList [cdkDropListData]=\"availableFiltered\" class=\"rck-list\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"rck-box\" *ngFor=\"let item of availableFiltered\" (click)=\"clickedItem(item[display],'confirmedFiltered','availableFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"addIconColor\" fxHide.xs mat-list-icon>{{addIcon}}</mat-icon> {{item[display]}}</div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{selectedItemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\" *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{selectedItemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterSelectedText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterSelectedItems($event)\"\r\n                >\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n            </mat-form-field>\r\n            <div cdkDropList [cdkDropListData]=\"confirmedFiltered\" class=\"rck-list\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"rck-box\" *ngFor=\"let item of confirmedFiltered\" (click)=\"clickedItem(item[display],'availableFiltered','confirmedFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"removeIconColor\" fxHide.xs mat-list-icon>{{removeIcon}}</mat-icon> {{item[display]}}</div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsLWR1YWwtbGlzdGJveC9zcmMvbGliL21hdGVyaWFsLWR1YWwtbGlzdGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFtQixNQUFNLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVN6RixNQUFNLE9BQU8sNEJBQTRCO0lBdUJ2QztRQXJCUyxZQUFPLEdBQVEsTUFBTSxDQUFDO1FBQ3RCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLHNCQUFpQixHQUFXLFFBQVEsQ0FBQTtRQUNwQyxlQUFVLEdBQVcsT0FBTyxDQUFBO1FBQzVCLHVCQUFrQixHQUFXLGdCQUFnQixDQUFBO1FBQzdDLFdBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBVyxPQUFPLENBQUE7UUFDOUIsZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUM5QixvQkFBZSxHQUFXLE9BQU8sQ0FBQTtRQUNqQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsc0JBQWlCLEdBQWUsRUFBRSxDQUFBO1FBQ2xDLHNCQUFpQixHQUFlLEVBQUUsQ0FBQTtRQUNsQyxlQUFVLEdBQVcsSUFBSSxDQUFBO1FBQ3pCLHVCQUFrQixHQUFXLElBQUksQ0FBQTtJQUVsQixDQUFDO0lBRWhCLFFBQVE7UUFDTixJ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NUMsd0NBQXdDO2FBQ2xEOzs7O3NCQUdFLEtBQUs7b0JBQ0wsS0FBSztxQkFDTCxLQUFLO2dDQUNMLEtBQUs7eUJBQ0wsS0FBSztpQ0FDTCxLQUFLO3FCQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFDTCxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzs4QkFDTCxLQUFLO3FCQUNMLEtBQUs7MEJBQ0wsS0FBSztnQ0FDTCxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgRXZlbnRFbWl0dGVyLCBJdGVyYWJsZURpZmZlcnMsIE91dHB1dCwgT25Jbml0LCBPbkNoYW5nZXMsIMm1Q29uc29sZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDZGtEcmFnRHJvcCwgbW92ZUl0ZW1JbkFycmF5LCB0cmFuc2ZlckFycmF5SXRlbSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdGVyaWFsLWR1YWwtbGlzdGJveCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdGVyaWFsLWR1YWwtbGlzdGJveC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVzOiBbJy4vbWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVyaWFsRHVhbExpc3Rib3hDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBkaXNwbGF5OiBhbnkgPSAnbmFtZSc7XHJcbiAgQElucHV0KCkgd2lkdGggPSAnMzYwcHgnO1xyXG4gIEBJbnB1dCgpIGZpbHRlciA9IHRydWU7XHJcbiAgQElucHV0KCkgc2VhcmNoUGxhY2Vob2xkZXI6IHN0cmluZyA9ICdGaWx0ZXInXHJcbiAgQElucHV0KCkgaXRlbXNUaXRsZTogc3RyaW5nID0gJ0l0ZW1zJ1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbXNUaXRsZTogc3RyaW5nID0gJ1NlbGVjdGVkIEl0ZW1zJ1xyXG4gIEBJbnB1dCgpIGhlYWRlciA9IGZhbHNlXHJcbiAgQElucHV0KCkgc2hvd0ljb25zID0gdHJ1ZVxyXG4gIEBJbnB1dCgpIGFkZEljb246IHN0cmluZyA9ICdhZGQnO1xyXG4gIEBJbnB1dCgpIGFkZEljb25Db2xvcjogc3RyaW5nID0gJ2JsYWNrJ1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb246IHN0cmluZyA9ICdkZWxldGUnO1xyXG4gIEBJbnB1dCgpIHJlbW92ZUljb25Db2xvcjogc3RyaW5nID0gJ2JsYWNrJ1xyXG4gIEBJbnB1dCgpIHNvdXJjZTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIEBJbnB1dCgpIGRlc3RpbmF0aW9uOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQE91dHB1dCgpIGRlc3RpbmF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBhdmFpbGFibGVGaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdXHJcbiAgY29uZmlybWVkRmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXVxyXG4gIGZpbHRlclRleHQ6IHN0cmluZyA9IG51bGxcclxuICBmaWx0ZXJTZWxlY3RlZFRleHQ6IHN0cmluZyA9IG51bGxcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMudXBkYXRlKClcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMuZmlsdGVySXRlbXModGhpcy5maWx0ZXJUZXh0KTtcclxuICAgIHRoaXMuZmlsdGVyU2VsZWN0ZWRJdGVtcyh0aGlzLmZpbHRlclNlbGVjdGVkVGV4dCk7XHJcbiAgfVxyXG5cclxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgY29uc29sZS5sb2coZXZlbnQpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0cmFuc2ZlckFycmF5SXRlbShldmVudC5wcmV2aW91c0NvbnRhaW5lci5kYXRhLCBldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuY29uZmlybWVkRmlsdGVyZWRcclxuICAgICAgdGhpcy5kZXN0aW5hdGlvbkNoYW5nZS5lbWl0KHRoaXMuZGVzdGluYXRpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xpY2tlZEl0ZW0oaXRlbTogc3RyaW5nW10sIC4uLnRhcmdldHM6IHN0cmluZ1tdKSB7XHJcbiAgICBcclxuICAgIHRoaXNbdGFyZ2V0c1swXV0gPSBbXHJcbiAgICAgIC4uLnRoaXNbdGFyZ2V0c1sxXV0uc3BsaWNlKHRoaXNbdGFyZ2V0c1sxXV0uZmluZEluZGV4KHg9PnhbdGhpcy5kaXNwbGF5XT09aXRlbSksIDEpLFxyXG4gICAgICAuLi50aGlzW3RhcmdldHNbMF1dXHJcbiAgICBdXHJcbiAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5jb25maXJtZWRGaWx0ZXJlZFxyXG4gICAgdGhpcy5kZXN0aW5hdGlvbkNoYW5nZS5lbWl0KHRoaXMuZGVzdGluYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZmlsdGVySXRlbXModGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlclRleHQgPSB0ZXh0O1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHRoaXMuYXZhaWxhYmxlRmlsdGVyZWQgPSB0aGlzLnNvdXJjZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5hdmFpbGFibGVGaWx0ZXJlZCA9IHRoaXMuc291cmNlXHJcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuZGlzcGxheV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKTtcclxuICB9XHJcblxyXG4gIGZpbHRlclNlbGVjdGVkSXRlbXModGV4dDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmZpbHRlclNlbGVjdGVkVGV4dCA9IHRleHQ7XHJcbiAgICBpZiAoIXRleHQpIHtcclxuICAgICAgdGhpcy5jb25maXJtZWRGaWx0ZXJlZCA9IHRoaXMuZGVzdGluYXRpb25cclxuXHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuY29uZmlybWVkRmlsdGVyZWQgPSB0aGlzLmRlc3RpbmF0aW9uLmZpbHRlcihpdGVtID0+IGl0ZW1bdGhpcy5kaXNwbGF5XS50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHRleHQudG9Mb3dlckNhc2UoKSkpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIl19