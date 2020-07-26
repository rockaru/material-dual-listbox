import { Component, Input, EventEmitter, Output } from '@angular/core';
import { moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
export class MaterialDualListboxComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsLWR1YWwtbGlzdGJveC9zcmMvbGliL21hdGVyaWFsLWR1YWwtbGlzdGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFtQixNQUFNLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVN6RixNQUFNLE9BQU8sNEJBQTRCO0lBd0J2QztRQXRCUyxRQUFHLEdBQUcsS0FBSyxDQUFDO1FBQ1osWUFBTyxHQUFRLE1BQU0sQ0FBQztRQUN0QixVQUFLLEdBQUcsT0FBTyxDQUFDO1FBQ2hCLFdBQU0sR0FBRyxJQUFJLENBQUM7UUFDZCxzQkFBaUIsR0FBVyxRQUFRLENBQUE7UUFDcEMsZUFBVSxHQUFXLE9BQU8sQ0FBQTtRQUM1Qix1QkFBa0IsR0FBVyxnQkFBZ0IsQ0FBQTtRQUM3QyxXQUFNLEdBQUcsS0FBSyxDQUFBO1FBQ2QsY0FBUyxHQUFHLElBQUksQ0FBQTtRQUNoQixZQUFPLEdBQVcsS0FBSyxDQUFDO1FBQ3hCLGlCQUFZLEdBQVcsT0FBTyxDQUFBO1FBQzlCLGVBQVUsR0FBVyxRQUFRLENBQUM7UUFDOUIsb0JBQWUsR0FBVyxPQUFPLENBQUE7UUFDakMsV0FBTSxHQUFlLEVBQUUsQ0FBQztRQUN4QixnQkFBVyxHQUFlLEVBQUUsQ0FBQztRQUM1QixzQkFBaUIsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRWpELHNCQUFpQixHQUFlLEVBQUUsQ0FBQTtRQUNsQyxzQkFBaUIsR0FBZSxFQUFFLENBQUE7UUFDbEMsZUFBVSxHQUFXLElBQUksQ0FBQTtRQUN6Qix1QkFBa0IsR0FBVyxJQUFJLENBQUE7SUFFbEIsQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELElBQUksQ0FBQyxLQUE0QjtRQUMvQixJQUFJLEtBQUssQ0FBQyxpQkFBaUIsS0FBSyxLQUFLLENBQUMsU0FBUyxFQUFFO1lBQy9DLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ25CO2FBQU07WUFDTCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9HLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFBO1lBQ3pDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFJLEVBQUUsR0FBRyxPQUFpQjtRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUc7WUFDakIsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzdELEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQixDQUFBO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUNyQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU07YUFDakMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRUQsbUJBQW1CLENBQUMsSUFBWTtRQUM5QixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQTtZQUV6QyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFILENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsdTlIQUFxRDt5QkFDNUMsd0NBQXdDO2FBQ2xEOzs7O2tCQUdFLEtBQUs7c0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7Z0NBQ0wsS0FBSzt5QkFDTCxLQUFLO2lDQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3NCQUNMLEtBQUs7MkJBQ0wsS0FBSzt5QkFDTCxLQUFLOzhCQUNMLEtBQUs7cUJBQ0wsS0FBSzswQkFDTCxLQUFLO2dDQUNMLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFdmVudEVtaXR0ZXIsIEl0ZXJhYmxlRGlmZmVycywgT3V0cHV0LCBPbkluaXQsIE9uQ2hhbmdlcywgybVDb25zb2xlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcblxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0ZXJpYWwtZHVhbC1saXN0Ym94JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZXM6IFsnLi9tYXRlcmlhbC1kdWFsLWxpc3Rib3guY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxEdWFsTGlzdGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGtleSA9ICdfaWQnO1xyXG4gIEBJbnB1dCgpIGRpc3BsYXk6IGFueSA9ICduYW1lJztcclxuICBASW5wdXQoKSB3aWR0aCA9ICczNjBweCc7XHJcbiAgQElucHV0KCkgZmlsdGVyID0gdHJ1ZTtcclxuICBASW5wdXQoKSBzZWFyY2hQbGFjZWhvbGRlcjogc3RyaW5nID0gJ0ZpbHRlcidcclxuICBASW5wdXQoKSBpdGVtc1RpdGxlOiBzdHJpbmcgPSAnSXRlbXMnXHJcbiAgQElucHV0KCkgc2VsZWN0ZWRJdGVtc1RpdGxlOiBzdHJpbmcgPSAnU2VsZWN0ZWQgSXRlbXMnXHJcbiAgQElucHV0KCkgaGVhZGVyID0gZmFsc2VcclxuICBASW5wdXQoKSBzaG93SWNvbnMgPSB0cnVlXHJcbiAgQElucHV0KCkgYWRkSWNvbjogc3RyaW5nID0gJ2FkZCc7XHJcbiAgQElucHV0KCkgYWRkSWNvbkNvbG9yOiBzdHJpbmcgPSAnYmxhY2snXHJcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogc3RyaW5nID0gJ2RlbGV0ZSc7XHJcbiAgQElucHV0KCkgcmVtb3ZlSWNvbkNvbG9yOiBzdHJpbmcgPSAnYmxhY2snXHJcbiAgQElucHV0KCkgc291cmNlOiBBcnJheTxhbnk+ID0gW107XHJcbiAgQElucHV0KCkgZGVzdGluYXRpb246IEFycmF5PGFueT4gPSBbXTtcclxuICBAT3V0cHV0KCkgZGVzdGluYXRpb25DaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGF2YWlsYWJsZUZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW11cclxuICBjb25maXJtZWRGaWx0ZXJlZDogQXJyYXk8YW55PiA9IFtdXHJcbiAgZmlsdGVyVGV4dDogc3RyaW5nID0gbnVsbFxyXG4gIGZpbHRlclNlbGVjdGVkVGV4dDogc3RyaW5nID0gbnVsbFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5maWx0ZXJJdGVtcyh0aGlzLmZpbHRlclRleHQpO1xyXG4gICAgdGhpcy5maWx0ZXJTZWxlY3RlZEl0ZW1zKHRoaXMuZmlsdGVyU2VsZWN0ZWRUZXh0KTtcclxuICB9XHJcblxyXG4gIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgaWYgKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyID09PSBldmVudC5jb250YWluZXIpIHtcclxuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICBjb25zb2xlLmxvZyhldmVudClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uID0gdGhpcy5jb25maXJtZWRGaWx0ZXJlZFxyXG4gICAgICB0aGlzLmRlc3RpbmF0aW9uQ2hhbmdlLmVtaXQodGhpcy5kZXN0aW5hdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGlja2VkSXRlbShpdGVtLCAuLi50YXJnZXRzOiBzdHJpbmdbXSkge1xyXG4gICAgdGhpc1t0YXJnZXRzWzBdXSA9IFtcclxuICAgICAgLi4udGhpc1t0YXJnZXRzWzFdXS5zcGxpY2UodGhpc1t0YXJnZXRzWzFdXS5pbmRleE9mKGl0ZW0pLCAxKSxcclxuICAgICAgLi4udGhpc1t0YXJnZXRzWzBdXVxyXG4gICAgXVxyXG4gICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuY29uZmlybWVkRmlsdGVyZWRcclxuICAgIHRoaXMuZGVzdGluYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmRlc3RpbmF0aW9uKTtcclxuICB9XHJcblxyXG4gIGZpbHRlckl0ZW1zKHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gdGV4dDtcclxuICAgIGlmICghdGV4dCkge1xyXG4gICAgICB0aGlzLmF2YWlsYWJsZUZpbHRlcmVkID0gdGhpcy5zb3VyY2U7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuYXZhaWxhYmxlRmlsdGVyZWQgPSB0aGlzLnNvdXJjZVxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmRpc3BsYXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSk7XHJcbiAgfVxyXG5cclxuICBmaWx0ZXJTZWxlY3RlZEl0ZW1zKHRleHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5maWx0ZXJTZWxlY3RlZFRleHQgPSB0ZXh0O1xyXG4gICAgaWYgKCF0ZXh0KSB7XHJcbiAgICAgIHRoaXMuY29uZmlybWVkRmlsdGVyZWQgPSB0aGlzLmRlc3RpbmF0aW9uXHJcblxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNvbmZpcm1lZEZpbHRlcmVkID0gdGhpcy5kZXN0aW5hdGlvbi5maWx0ZXIoaXRlbSA9PiBpdGVtW3RoaXMuZGlzcGxheV0udG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh0ZXh0LnRvTG93ZXJDYXNlKCkpKTtcclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcbiJdfQ==