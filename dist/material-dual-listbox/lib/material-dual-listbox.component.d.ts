import { EventEmitter, OnInit } from '@angular/core';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as ɵngcc0 from '@angular/core';
export declare class MaterialDualListboxComponent implements OnInit {
    display: any;
    width: string;
    filter: boolean;
    searchPlaceholder: string;
    itemsTitle: string;
    selectedItemsTitle: string;
    header: boolean;
    showIcons: boolean;
    addIcon: string;
    addIconColor: string;
    removeIcon: string;
    removeIconColor: string;
    source: Array<any>;
    destination: Array<any>;
    destinationChange: EventEmitter<any>;
    availableFiltered: Array<any>;
    confirmedFiltered: Array<any>;
    filterText: string;
    filterSelectedText: string;
    constructor();
    ngOnInit(): void;
    update(): void;
    drop(event: CdkDragDrop<string[]>): void;
    clickedItem(item: string[], ...targets: string[]): void;
    filterItems(text: string): void;
    filterSelectedItems(text: string): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MaterialDualListboxComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MaterialDualListboxComponent, "material-dual-listbox", never, { "display": "display"; "width": "width"; "filter": "filter"; "searchPlaceholder": "searchPlaceholder"; "itemsTitle": "itemsTitle"; "selectedItemsTitle": "selectedItemsTitle"; "header": "header"; "showIcons": "showIcons"; "addIcon": "addIcon"; "addIconColor": "addIconColor"; "removeIcon": "removeIcon"; "removeIconColor": "removeIconColor"; "source": "source"; "destination": "destination"; }, { "destinationChange": "destinationChange"; }, never, never>;
}

//# sourceMappingURL=material-dual-listbox.component.d.ts.map