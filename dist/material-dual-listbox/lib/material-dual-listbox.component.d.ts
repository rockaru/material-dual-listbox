import { EventEmitter, OnInit } from '@angular/core';
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
    clickedItem(item: string[], ...targets: string[]): void;
    filterItems(text: string): void;
    filterSelectedItems(text: string): void;
}
