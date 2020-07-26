import { EventEmitter, Component, Input, Output, NgModule } from '@angular/core';
import { moveItemInArray, transferArrayItem, DragDropModule } from '@angular/cdk/drag-drop';
import { BrowserModule } from '@angular/platform-browser';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/cdk/drag-drop';
import * as ɵngcc3 from '@angular/material/form-field';
import * as ɵngcc4 from '@angular/material/input';
import * as ɵngcc5 from '@angular/forms';
import * as ɵngcc6 from '@angular/material/icon';
import * as ɵngcc7 from '@angular/material/list';

function MaterialDualListboxComponent_h3_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r0.itemsTitle);
} }
function MaterialDualListboxComponent_mat_form_field_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 8);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "input", 9);
    ɵngcc0.ɵɵlistener("ngModelChange", function MaterialDualListboxComponent_mat_form_field_4_Template_input_ngModelChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r7); const ctx_r6 = ɵngcc0.ɵɵnextContext(); return ctx_r6.filterItems($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "mat-placeholder");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r1.searchPlaceholder, " ", ctx_r1.itemsTitle, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r1.filterText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r1.searchPlaceholder, " ", ctx_r1.itemsTitle, "");
} }
function MaterialDualListboxComponent_div_6_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("color", ctx_r9.addIconColor);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r9.addIcon);
} }
function MaterialDualListboxComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function MaterialDualListboxComponent_div_6_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r11); const ctx_r10 = ɵngcc0.ɵɵnextContext(); return ctx_r10.clickedItem($event.target.innerText, "confirmedFiltered", "availableFiltered"); });
    ɵngcc0.ɵɵtemplate(1, MaterialDualListboxComponent_div_6_mat_icon_1_Template, 2, 3, "mat-icon", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.showIcons);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r8[ctx_r2.display], "");
} }
function MaterialDualListboxComponent_h3_8_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "h3", 7);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r3.selectedItemsTitle);
} }
function MaterialDualListboxComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-form-field", 8);
    ɵngcc0.ɵɵelementStart(1, "mat-label");
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(3, "input", 9);
    ɵngcc0.ɵɵlistener("ngModelChange", function MaterialDualListboxComponent_mat_form_field_9_Template_input_ngModelChange_3_listener($event) { ɵngcc0.ɵɵrestoreView(_r13); const ctx_r12 = ɵngcc0.ɵɵnextContext(); return ctx_r12.filterSelectedItems($event); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(4, "mat-placeholder");
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r4.searchPlaceholder, " ", ctx_r4.selectedItemsTitle, "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r4.filterSelectedText);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate2("", ctx_r4.searchPlaceholder, " ", ctx_r4.itemsTitle, "");
} }
function MaterialDualListboxComponent_div_11_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 12);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵstyleProp("color", ctx_r15.removeIconColor);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(ctx_r15.removeIcon);
} }
function MaterialDualListboxComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 10);
    ɵngcc0.ɵɵlistener("click", function MaterialDualListboxComponent_div_11_Template_div_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const ctx_r16 = ɵngcc0.ɵɵnextContext(); return ctx_r16.clickedItem($event.target.innerText, "availableFiltered", "confirmedFiltered"); });
    ɵngcc0.ɵɵtemplate(1, MaterialDualListboxComponent_div_11_mat_icon_1_Template, 2, 3, "mat-icon", 11);
    ɵngcc0.ɵɵtext(2);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r5.showIcons);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r14[ctx_r5.display], "");
} }
const _c0 = function (a1, a2) { return { "max-height": "100%", "max-width": a1, "min-width": a2 }; };
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
MaterialDualListboxComponent.ɵfac = function MaterialDualListboxComponent_Factory(t) { return new (t || MaterialDualListboxComponent)(); };
MaterialDualListboxComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: MaterialDualListboxComponent, selectors: [["material-dual-listbox"]], inputs: { key: "key", display: "display", width: "width", filter: "filter", searchPlaceholder: "searchPlaceholder", itemsTitle: "itemsTitle", selectedItemsTitle: "selectedItemsTitle", header: "header", showIcons: "showIcons", addIcon: "addIcon", addIconColor: "addIconColor", removeIcon: "removeIcon", removeIconColor: "removeIconColor", source: "source", destination: "destination" }, outputs: { destinationChange: "destinationChange" }, decls: 12, vars: 12, consts: [[3, "ngStyle"], ["cdkDropListGroup", "", 1, "rck-list-container"], [1, "rck-container"], ["class", "rck-title", 4, "ngIf"], ["appearance", "standard", 4, "ngIf"], ["cdkDropList", "", 1, "rck-list", 3, "cdkDropListData", "cdkDropListDropped"], ["class", "rck-box", "cdkDrag", "", 3, "click", 4, "ngFor", "ngForOf"], [1, "rck-title"], ["appearance", "standard"], ["matInput", "", "autocomplete", "off", 3, "ngModel", "ngModelChange"], ["cdkDrag", "", 1, "rck-box", 3, "click"], ["fxHide.xs", "", "mat-list-icon", "", 3, "color", 4, "ngIf"], ["fxHide.xs", "", "mat-list-icon", ""]], template: function MaterialDualListboxComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵtemplate(3, MaterialDualListboxComponent_h3_3_Template, 2, 1, "h3", 3);
        ɵngcc0.ɵɵtemplate(4, MaterialDualListboxComponent_mat_form_field_4_Template, 6, 5, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(5, "div", 5);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function MaterialDualListboxComponent_Template_div_cdkDropListDropped_5_listener($event) { return ctx.drop($event); });
        ɵngcc0.ɵɵtemplate(6, MaterialDualListboxComponent_div_6_Template, 3, 2, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 2);
        ɵngcc0.ɵɵtemplate(8, MaterialDualListboxComponent_h3_8_Template, 2, 1, "h3", 3);
        ɵngcc0.ɵɵtemplate(9, MaterialDualListboxComponent_mat_form_field_9_Template, 6, 5, "mat-form-field", 4);
        ɵngcc0.ɵɵelementStart(10, "div", 5);
        ɵngcc0.ɵɵlistener("cdkDropListDropped", function MaterialDualListboxComponent_Template_div_cdkDropListDropped_10_listener($event) { return ctx.drop($event); });
        ɵngcc0.ɵɵtemplate(11, MaterialDualListboxComponent_div_11_Template, 3, 2, "div", 6);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("ngStyle", ɵngcc0.ɵɵpureFunction2(9, _c0, ctx.width, ctx.width));
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkDropListData", ctx.availableFiltered);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.availableFiltered);
        ɵngcc0.ɵɵadvance(2);
        ɵngcc0.ɵɵproperty("ngIf", ctx.header);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filter);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("cdkDropListData", ctx.confirmedFiltered);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.confirmedFiltered);
    } }, directives: [ɵngcc1.NgStyle, ɵngcc2.CdkDropListGroup, ɵngcc1.NgIf, ɵngcc2.CdkDropList, ɵngcc1.NgForOf, ɵngcc3.MatFormField, ɵngcc3.MatLabel, ɵngcc4.MatInput, ɵngcc5.DefaultValueAccessor, ɵngcc5.NgControlStatus, ɵngcc5.NgModel, ɵngcc3.MatPlaceholder, ɵngcc2.CdkDrag, ɵngcc6.MatIcon, ɵngcc7.MatListIconCssMatStyler], styles: ["./material-dual-listbox.component.scss", ".rck-title[_ngcontent-%COMP%]{\n        margin-bottom: 0px;\n    }\n    .rck-list-container[_ngcontent-%COMP%]{\n        display: flex;\n        flex-wrap: nowrap;\n    }\n    .rck-container[_ngcontent-%COMP%] {\n        width: 180px;\n        max-width: 100%;\n        margin: 5px 5px 5px 5px;\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    .rck-container[_ngcontent-%COMP%]:last-child{\n        margin-right: 25px;\n    }\n\n    .rck-list[_ngcontent-%COMP%] {\n        border: solid 1px #ccc;\n        min-height: 60px;\n        background: white;\n        border-radius: 4px;\n        overflow: hidden;\n        display: block;\n    }\n\n    .rck-box[_ngcontent-%COMP%] {\n        padding: 20px 20px;\n        border-bottom: solid 1px #ccc;\n        color: rgba(0, 0, 0, 0.87);\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        box-sizing: border-box;\n        cursor: move;\n        background: white;\n        font-size: 14px;\n    }\n\n    .cdk-drag-preview[_ngcontent-%COMP%] {\n        box-sizing: border-box;\n        border-radius: 4px;\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n            0 8px 10px 1px rgba(0, 0, 0, 0.14),\n            0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    }\n\n    .cdk-drag-placeholder[_ngcontent-%COMP%] {\n        opacity: 0;\n    }\n\n    .cdk-drag-animating[_ngcontent-%COMP%] {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .rck-box[_ngcontent-%COMP%]:last-child {\n        border: none;\n    }\n\n    .rck-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .rck-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder) {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }"] });
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
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaterialDualListboxComponent, [{
        type: Component,
        args: [{
                selector: 'material-dual-listbox',
                template: "<style>\r\n    .rck-title{\r\n        margin-bottom: 0px;\r\n    }\r\n    .rck-list-container{\r\n        display: flex;\r\n        flex-wrap: nowrap;\r\n    }\r\n    .rck-container {\r\n        width: 180px;\r\n        max-width: 100%;\r\n        margin: 5px 5px 5px 5px;\r\n        display: inline-block;\r\n        vertical-align: top;\r\n    }\r\n\r\n    .rck-container:last-child{\r\n        margin-right: 25px;\r\n    }\r\n\r\n    .rck-list {\r\n        border: solid 1px #ccc;\r\n        min-height: 60px;\r\n        background: white;\r\n        border-radius: 4px;\r\n        overflow: hidden;\r\n        display: block;\r\n    }\r\n\r\n    .rck-box {\r\n        padding: 20px 20px;\r\n        border-bottom: solid 1px #ccc;\r\n        color: rgba(0, 0, 0, 0.87);\r\n        display: flex;\r\n        flex-direction: row;\r\n        align-items: center;\r\n        justify-content: space-between;\r\n        box-sizing: border-box;\r\n        cursor: move;\r\n        background: white;\r\n        font-size: 14px;\r\n    }\r\n\r\n    .cdk-drag-preview {\r\n        box-sizing: border-box;\r\n        border-radius: 4px;\r\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n            0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n            0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n    }\r\n\r\n    .cdk-drag-placeholder {\r\n        opacity: 0;\r\n    }\r\n\r\n    .cdk-drag-animating {\r\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n\r\n    .rck-box:last-child {\r\n        border: none;\r\n    }\r\n\r\n    .rck-list.cdk-drop-list-dragging .rck-box:not(.cdk-drag-placeholder) {\r\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n    }\r\n</style>\r\n\r\n\r\n<div [ngStyle]=\"{'max-height': '100%','max-width': width, 'min-width': width }\">\r\n\r\n    <div cdkDropListGroup class=\"rck-list-container\">\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{itemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\"  *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{itemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterItems($event)\">\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n\r\n            </mat-form-field>\r\n            <div cdkDropList [cdkDropListData]=\"availableFiltered\" class=\"rck-list\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"rck-box\" *ngFor=\"let item of availableFiltered\" (click)=\"clickedItem($event.target.innerText,'confirmedFiltered','availableFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"addIconColor\" fxHide.xs mat-list-icon>{{addIcon}}</mat-icon> {{item[display]}}</div>\r\n            </div>\r\n\r\n        </div>\r\n        <div class=\"rck-container\">\r\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{selectedItemsTitle}}</h3>\r\n            <mat-form-field appearance=\"standard\" *ngIf=\"filter\">\r\n                <mat-label>{{searchPlaceholder}} {{selectedItemsTitle}}</mat-label>\r\n                <input matInput [ngModel]=\"filterSelectedText\" autocomplete=\"off\"\r\n                (ngModelChange)=\"filterSelectedItems($event)\"\r\n                >\r\n                <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\r\n            </mat-form-field>\r\n            <div cdkDropList [cdkDropListData]=\"confirmedFiltered\" class=\"rck-list\"\r\n                 (cdkDropListDropped)=\"drop($event)\">\r\n                <div class=\"rck-box\" *ngFor=\"let item of confirmedFiltered\" (click)=\"clickedItem($event.target.innerText,'availableFiltered','confirmedFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"removeIconColor\" fxHide.xs mat-list-icon>{{removeIcon}}</mat-icon> {{item[display]}}</div>\r\n            </div>\r\n        </div>\r\n        \r\n    </div>\r\n</div>",
                styles: ['./material-dual-listbox.component.scss']
            }]
    }], function () { return []; }, { key: [{
            type: Input
        }], display: [{
            type: Input
        }], width: [{
            type: Input
        }], filter: [{
            type: Input
        }], searchPlaceholder: [{
            type: Input
        }], itemsTitle: [{
            type: Input
        }], selectedItemsTitle: [{
            type: Input
        }], header: [{
            type: Input
        }], showIcons: [{
            type: Input
        }], addIcon: [{
            type: Input
        }], addIconColor: [{
            type: Input
        }], removeIcon: [{
            type: Input
        }], removeIconColor: [{
            type: Input
        }], source: [{
            type: Input
        }], destination: [{
            type: Input
        }], destinationChange: [{
            type: Output
        }] }); })();

class MaterialDualListboxModule {
}
MaterialDualListboxModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MaterialDualListboxModule });
MaterialDualListboxModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ factory: function MaterialDualListboxModule_Factory(t) { return new (t || MaterialDualListboxModule)(); }, imports: [[
            BrowserModule,
            MatIconModule,
            MatInputModule,
            MatListModule,
            FormsModule,
            MatFormFieldModule,
            DragDropModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MaterialDualListboxModule, { declarations: function () { return [MaterialDualListboxComponent]; }, imports: function () { return [BrowserModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        FormsModule,
        MatFormFieldModule,
        DragDropModule]; }, exports: function () { return [MaterialDualListboxComponent]; } }); })();
/*@__PURE__*/ (function () { ɵngcc0.ɵsetClassMetadata(MaterialDualListboxModule, [{
        type: NgModule,
        args: [{
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
            }]
    }], null, null); })();

/*
 * Public API Surface of material-dual-listbox
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MaterialDualListboxComponent, MaterialDualListboxModule };

//# sourceMappingURL=material-dual-listbox.js.map