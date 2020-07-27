![Build](https://github.com/rockaru/mea-material-dual-listbox/workflows/Build/badge.svg)
![Demo](https://github.com/rockaru/mea-material-dual-listbox/workflows/Demo/badge.svg)

# Mea Material Dual Listbox

Simple dual list box component to use in your Angular app, along with Angular Material.

[Demo](https://rockaru.github.io/mea-material-dual-listbox/)

## Dependencies
You will need:

- Angular ^10
- Angular Material ^10

## Instalation

To install this library, run:

```
$ npm install mea-material-dual-listbox --save
```

and then from your Angular AppModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the module
import { MaterialDualListboxModule } from 'mea-material-dual-listbox';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Add the module in the impots
    MaterialDualListboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once the library is imported, you can use the component in your Angular application:

```
<material-dual-listbox [source]="items" [(destination)]="'itemsDestination'">
</material-dual-listbox>
```

## Attributes

- **source** - The source array of objects
- **destination** - The destination array of objects
- **(destinationChange)** - An event triggered when the destination array changes.
- **display** - The field of each object in the source and destination arrays, default is  `name`.
- **width** - The width of the component, default is `360px`
- **filter** - A boolean whether or not to display a filter for the lists, default is `true`.
- **searchPlaceholder** - filter placeholder, default is `Filter`
- **header** - A boolean whether or not to display a header for the lists, default is `false`
- **itemsTitle** - The title of the source array, default is `Items`
- **itemsSelectedTitle** - The title of the destination array, default is `Selected Items`
- **showIcons** - A boolean wheter or not to display icons for the lists, default is `true`
- **addIcon** - The material icon for the source array, default is `add`
- **removeIcon** - The material icon for the destination array, default is `delete`
- **addIconColor** - The color for the material icon of the source array, default is `black`
- **removeIconColor** - The color for the material icon of the destination array, default is `black`
