import { Component, Input, EventEmitter, IterableDiffers, Output, OnInit, OnChanges, ɵConsole } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';



@Component({
  selector: 'material-dual-listbox',
  templateUrl: './material-dual-listbox.component.html',
  styles: ['./material-dual-listbox.component.scss']
})
export class MaterialDualListboxComponent implements OnInit {

  @Input() display: any = 'name';
  @Input() width = '360px';
  @Input() filter = true;
  @Input() searchPlaceholder: string = 'Filter'
  @Input() itemsTitle: string = 'Items'
  @Input() selectedItemsTitle: string = 'Selected Items'
  @Input() header = false
  @Input() showIcons = true
  @Input() addIcon: string = 'add';
  @Input() addIconColor: string = 'black'
  @Input() removeIcon: string = 'delete';
  @Input() removeIconColor: string = 'black'
  @Input() source: Array<any> = [];
  @Input() destination: Array<any> = [];
  @Output() destinationChange = new EventEmitter();

  availableFiltered: Array<any> = []
  confirmedFiltered: Array<any> = []
  filterText: string = null
  filterSelectedText: string = null

  constructor() {}

  ngOnInit() {
    this.update()
  }

  update() {
    this.filterItems(this.filterText);
    this.filterSelectedItems(this.filterSelectedText);
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      console.log(event)
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      this.destination = this.confirmedFiltered
      this.destinationChange.emit(this.destination);
    }
  }

  clickedItem(item, ...targets: string[]) {
    this[targets[0]] = [
      ...this[targets[1]].splice(this[targets[1]].indexOf(item), 1),
      ...this[targets[0]]
    ]
    this.destination = this.confirmedFiltered
    this.destinationChange.emit(this.destination);
  }

  filterItems(text: string) {
    this.filterText = text;
    if (!text) {
      this.availableFiltered = this.source;
      return;
    }
    this.availableFiltered = this.source
      .filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
  }

  filterSelectedItems(text: string) {
    this.filterSelectedText = text;
    if (!text) {
      this.confirmedFiltered = this.destination

      return;
    }
    this.confirmedFiltered = this.destination.filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
  }

}



