import { Component, Input, EventEmitter,  Output, OnInit } from '@angular/core';




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

  constructor() {
  }

  ngOnInit() {
    this.availableFiltered=this.source
  }

  update() {
    if(!this.filterText){
      this.availableFiltered = this.source
    }else{
      this.availableFiltered = this.availableFiltered.filter(n=>this.destination.includes(n))
    }
    if(!this.filterSelectedText){
      this.confirmedFiltered = this.destination
    }else{
      this.confirmedFiltered = this.confirmedFiltered.filter(n=>!this.source.includes(n))
    }
  }

  clickedItem(item: string[], ...targets: string[]) {
    
    this[targets[0]] = [
      ...this[targets[1]].splice(this[targets[1]].findIndex(x=>x[this.display]==item), 1),
      ...this[targets[0]]
    ]
    this.update()

  }


  filterItems(text: string) {
    this.filterText = text;
    
    if(!this.filterText){
    this.availableFiltered = this.source

      return
    }
    this.availableFiltered = this.availableFiltered.filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
  }

  filterSelectedItems(text: string) {
    this.filterSelectedText = text;
    if(!this.filterSelectedText){
    this.confirmedFiltered = this.destination

      return
    }
    this.confirmedFiltered = this.confirmedFiltered.filter(item => item[this.display].toLowerCase().includes(text.toLowerCase()));
  }

}



