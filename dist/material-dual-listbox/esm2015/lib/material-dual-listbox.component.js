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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL21hdGVyaWFsLWR1YWwtbGlzdGJveC9zcmMvbGliL21hdGVyaWFsLWR1YWwtbGlzdGJveC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsWUFBWSxFQUFtQixNQUFNLEVBQStCLE1BQU0sZUFBZSxDQUFDO0FBQ3JILE9BQU8sRUFBZSxlQUFlLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQVN6RixNQUFNLE9BQU8sNEJBQTRCO0lBc0J2QztRQXBCUyxZQUFPLEdBQVEsTUFBTSxDQUFDO1FBQ3RCLFVBQUssR0FBRyxPQUFPLENBQUM7UUFDaEIsV0FBTSxHQUFHLElBQUksQ0FBQztRQUNkLHNCQUFpQixHQUFXLFFBQVEsQ0FBQTtRQUNwQyxlQUFVLEdBQVcsT0FBTyxDQUFBO1FBQzVCLHVCQUFrQixHQUFXLGdCQUFnQixDQUFBO1FBQzdDLFdBQU0sR0FBRyxLQUFLLENBQUE7UUFDZCxjQUFTLEdBQUcsSUFBSSxDQUFBO1FBQ2hCLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDeEIsaUJBQVksR0FBVyxPQUFPLENBQUE7UUFDOUIsZUFBVSxHQUFXLFFBQVEsQ0FBQztRQUM5QixvQkFBZSxHQUFXLE9BQU8sQ0FBQTtRQUNqQyxXQUFNLEdBQWUsRUFBRSxDQUFDO1FBQ3hCLGdCQUFXLEdBQWUsRUFBRSxDQUFDO1FBQzVCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFakQsc0JBQWlCLEdBQWUsRUFBRSxDQUFBO1FBQ2xDLHNCQUFpQixHQUFlLEVBQUUsQ0FBQTtRQUNsQyxlQUFVLEdBQVcsSUFBSSxDQUFBO0lBRVYsQ0FBQztJQUVoQixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFBO0lBQ2YsQ0FBQztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUVwQyxDQUFDO0lBRUQsSUFBSSxDQUFDLEtBQTRCO1FBQy9CLElBQUksS0FBSyxDQUFDLGlCQUFpQixLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0MsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDO1lBQy9FLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7U0FDbkI7YUFBTTtZQUNMLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDL0csSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7WUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0M7SUFDSCxDQUFDO0lBRUQsV0FBVyxDQUFDLElBQWMsRUFBRSxHQUFHLE9BQWlCO1FBRTlDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRztZQUNqQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUEsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ25GLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNwQixDQUFBO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsaUJBQWlCLENBQUE7UUFDekMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxJQUFZO1FBQ3RCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFDVCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDN0UsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7YUFDNUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNuRixDQUFDOzs7WUFuRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx1QkFBdUI7Z0JBQ2pDLDQwR0FBcUQ7eUJBQzVDLHdDQUF3QzthQUNsRDs7OztzQkFHRSxLQUFLO29CQUNMLEtBQUs7cUJBQ0wsS0FBSztnQ0FDTCxLQUFLO3lCQUNMLEtBQUs7aUNBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7OEJBQ0wsS0FBSztxQkFDTCxLQUFLOzBCQUNMLEtBQUs7Z0NBQ0wsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIEV2ZW50RW1pdHRlciwgSXRlcmFibGVEaWZmZXJzLCBPdXRwdXQsIE9uSW5pdCwgT25DaGFuZ2VzLCDJtUNvbnNvbGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENka0RyYWdEcm9wLCBtb3ZlSXRlbUluQXJyYXksIHRyYW5zZmVyQXJyYXlJdGVtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XG5cblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdtYXRlcmlhbC1kdWFsLWxpc3Rib3gnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVzOiBbJy4vbWF0ZXJpYWwtZHVhbC1saXN0Ym94LmNvbXBvbmVudC5zY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTWF0ZXJpYWxEdWFsTGlzdGJveENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgQElucHV0KCkgZGlzcGxheTogYW55ID0gJ25hbWUnO1xuICBASW5wdXQoKSB3aWR0aCA9ICczNjBweCc7XG4gIEBJbnB1dCgpIGZpbHRlciA9IHRydWU7XG4gIEBJbnB1dCgpIHNlYXJjaFBsYWNlaG9sZGVyOiBzdHJpbmcgPSAnRmlsdGVyJ1xuICBASW5wdXQoKSBpdGVtc1RpdGxlOiBzdHJpbmcgPSAnSXRlbXMnXG4gIEBJbnB1dCgpIHNlbGVjdGVkSXRlbXNUaXRsZTogc3RyaW5nID0gJ1NlbGVjdGVkIEl0ZW1zJ1xuICBASW5wdXQoKSBoZWFkZXIgPSBmYWxzZVxuICBASW5wdXQoKSBzaG93SWNvbnMgPSB0cnVlXG4gIEBJbnB1dCgpIGFkZEljb246IHN0cmluZyA9ICdhZGQnO1xuICBASW5wdXQoKSBhZGRJY29uQ29sb3I6IHN0cmluZyA9ICdibGFjaydcbiAgQElucHV0KCkgcmVtb3ZlSWNvbjogc3RyaW5nID0gJ2RlbGV0ZSc7XG4gIEBJbnB1dCgpIHJlbW92ZUljb25Db2xvcjogc3RyaW5nID0gJ2JsYWNrJ1xuICBASW5wdXQoKSBzb3VyY2U6IEFycmF5PGFueT4gPSBbXTtcbiAgQElucHV0KCkgZGVzdGluYXRpb246IEFycmF5PGFueT4gPSBbXTtcbiAgQE91dHB1dCgpIGRlc3RpbmF0aW9uQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIGF2YWlsYWJsZUZpbHRlcmVkOiBBcnJheTxhbnk+ID0gW11cbiAgY29uZmlybWVkRmlsdGVyZWQ6IEFycmF5PGFueT4gPSBbXVxuICBmaWx0ZXJUZXh0OiBzdHJpbmcgPSBudWxsXG5cbiAgY29uc3RydWN0b3IoKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMudXBkYXRlKClcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLmZpbHRlckl0ZW1zKHRoaXMuZmlsdGVyVGV4dCk7XG4gICAgXG4gIH1cblxuICBkcm9wKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcbiAgICBpZiAoZXZlbnQucHJldmlvdXNDb250YWluZXIgPT09IGV2ZW50LmNvbnRhaW5lcikge1xuICAgICAgbW92ZUl0ZW1JbkFycmF5KGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgICAgY29uc29sZS5sb2coZXZlbnQpXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyYW5zZmVyQXJyYXlJdGVtKGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsIGV2ZW50LmNvbnRhaW5lci5kYXRhLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xuICAgICAgdGhpcy5kZXN0aW5hdGlvbiA9IHRoaXMuY29uZmlybWVkRmlsdGVyZWRcbiAgICAgIHRoaXMuZGVzdGluYXRpb25DaGFuZ2UuZW1pdCh0aGlzLmRlc3RpbmF0aW9uKTtcbiAgICB9XG4gIH1cblxuICBjbGlja2VkSXRlbShpdGVtOiBzdHJpbmdbXSwgLi4udGFyZ2V0czogc3RyaW5nW10pIHtcbiAgICBcbiAgICB0aGlzW3RhcmdldHNbMF1dID0gW1xuICAgICAgLi4udGhpc1t0YXJnZXRzWzFdXS5zcGxpY2UodGhpc1t0YXJnZXRzWzFdXS5maW5kSW5kZXgoeD0+eFt0aGlzLmRpc3BsYXldPT1pdGVtKSwgMSksXG4gICAgICAuLi50aGlzW3RhcmdldHNbMF1dXG4gICAgXVxuICAgIHRoaXMuZGVzdGluYXRpb24gPSB0aGlzLmNvbmZpcm1lZEZpbHRlcmVkXG4gICAgdGhpcy5kZXN0aW5hdGlvbkNoYW5nZS5lbWl0KHRoaXMuZGVzdGluYXRpb24pO1xuICB9XG5cbiAgZmlsdGVySXRlbXModGV4dDogc3RyaW5nKSB7XG4gICAgdGhpcy5maWx0ZXJUZXh0ID0gdGV4dDtcbiAgICBpZiAoIXRleHQpIHtcbiAgICAgIHRoaXMuYXZhaWxhYmxlRmlsdGVyZWQgPSB0aGlzLnNvdXJjZS5maWx0ZXIobj0+IXRoaXMuZGVzdGluYXRpb24uaW5jbHVkZXMobikpXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXZhaWxhYmxlRmlsdGVyZWQgPSB0aGlzLmF2YWlsYWJsZUZpbHRlcmVkXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbVt0aGlzLmRpc3BsYXldLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModGV4dC50b0xvd2VyQ2FzZSgpKSk7XG4gIH1cblxufVxuXG5cblxuIl19