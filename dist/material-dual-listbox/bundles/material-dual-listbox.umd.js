(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/cdk/drag-drop'), require('@angular/platform-browser'), require('@angular/material/input'), require('@angular/material/icon'), require('@angular/material/list'), require('@angular/forms'), require('@angular/material/form-field')) :
    typeof define === 'function' && define.amd ? define('material-dual-listbox', ['exports', '@angular/core', '@angular/cdk/drag-drop', '@angular/platform-browser', '@angular/material/input', '@angular/material/icon', '@angular/material/list', '@angular/forms', '@angular/material/form-field'], factory) :
    (global = global || self, factory(global['material-dual-listbox'] = {}, global.ng.core, global.ng.cdk.dragDrop, global.ng.platformBrowser, global.ng.material.input, global.ng.material.icon, global.ng.material.list, global.ng.forms, global.ng.material.formField));
}(this, (function (exports, core, dragDrop, platformBrowser, input, icon, list, forms, formField) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, exports) {
        for (var p in m)
            if (p !== "default" && !exports.hasOwnProperty(p))
                __createBinding(exports, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (Object.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var MaterialDualListboxComponent = /** @class */ (function () {
        function MaterialDualListboxComponent() {
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
            this.destinationChange = new core.EventEmitter();
            this.availableFiltered = [];
            this.confirmedFiltered = [];
            this.filterText = null;
        }
        MaterialDualListboxComponent.prototype.ngOnInit = function () {
            this.update();
        };
        MaterialDualListboxComponent.prototype.update = function () {
            this.filterItems(this.filterText);
        };
        MaterialDualListboxComponent.prototype.drop = function (event) {
            if (event.previousContainer === event.container) {
                dragDrop.moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
                console.log(event);
            }
            else {
                dragDrop.transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
                this.destination = this.confirmedFiltered;
                this.destinationChange.emit(this.destination);
            }
        };
        MaterialDualListboxComponent.prototype.clickedItem = function (item) {
            var _this = this;
            var targets = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                targets[_i - 1] = arguments[_i];
            }
            this[targets[0]] = __spread(this[targets[1]].splice(this[targets[1]].findIndex(function (x) { return x[_this.display] == item; }), 1), this[targets[0]]);
            this.destination = this.confirmedFiltered;
            this.destinationChange.emit(this.destination);
        };
        MaterialDualListboxComponent.prototype.filterItems = function (text) {
            var _this = this;
            this.filterText = text;
            if (!text) {
                this.availableFiltered = this.source.filter(function (n) { return !_this.destination.includes(n); });
                return;
            }
            this.availableFiltered = this.availableFiltered
                .filter(function (item) { return item[_this.display].toLowerCase().includes(text.toLowerCase()); });
        };
        return MaterialDualListboxComponent;
    }());
    MaterialDualListboxComponent.decorators = [
        { type: core.Component, args: [{
                    selector: 'material-dual-listbox',
                    template: "<style>\n    .rck-title{\n        margin-bottom: 0px;\n    }\n    .rck-list-container{\n        display: flex;\n        flex-wrap: nowrap;\n    }\n    .rck-container {\n        width: 200px;\n        max-width: 100%;\n        margin: 5px 5px 5px 5px;\n        display: inline-block;\n        vertical-align: top;\n    }\n\n    .rck-container:last-child{\n        margin-right: 25px;\n    }\n\n    .rck-list {\n        border: solid 1px #ccc;\n        min-height: 60px;\n        background: white;\n        border-radius: 4px;\n        overflow: hidden;\n        display: block;\n    }\n\n    .rck-box {\n        padding: 20px 20px;\n        border-bottom: solid 1px #ccc;\n        color: rgba(0, 0, 0, 0.87);\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        justify-content: space-between;\n        box-sizing: border-box;\n        cursor: move;\n        background: white;\n        font-size: 14px;\n    }\n\n    .cdk-drag-preview {\n        box-sizing: border-box;\n        border-radius: 4px;\n        box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n            0 8px 10px 1px rgba(0, 0, 0, 0.14),\n            0 3px 14px 2px rgba(0, 0, 0, 0.12);\n    }\n\n    .cdk-drag-placeholder {\n        opacity: 0;\n    }\n\n    .cdk-drag-animating {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .rck-box:last-child {\n        border: none;\n    }\n\n    .rck-list.cdk-drop-list-dragging .rck-box:not(.cdk-drag-placeholder) {\n        transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    }\n</style>\n\n\n<div [ngStyle]=\"{'max-height': '100%','max-width': width, 'min-width': width }\">\n    <mat-form-field appearance=\"standard\"  *ngIf=\"filter\" [ngStyle]=\"{'max-width': width, 'min-width': width }\">\n        <mat-label>{{searchPlaceholder}} {{itemsTitle}}</mat-label>\n        <input matInput [ngModel]=\"filterText\" autocomplete=\"off\"\n        (ngModelChange)=\"filterItems($event)\">\n        <mat-placeholder>{{searchPlaceholder}} {{itemsTitle}}</mat-placeholder>\n\n    </mat-form-field>\n    <div cdkDropListGroup class=\"rck-list-container\">\n        <div class=\"rck-container\">\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{itemsTitle}}</h3>\n            \n            <div cdkDropList [cdkDropListData]=\"availableFiltered\" class=\"rck-list\"\n                 (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"rck-box\" *ngFor=\"let item of availableFiltered\" (click)=\"clickedItem(item[display],'confirmedFiltered','availableFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"addIconColor\" fxHide.xs mat-list-icon>{{addIcon}}</mat-icon> {{item[display]}}</div>\n            </div>\n\n        </div>\n        <div class=\"rck-container\">\n            <h3 class=\"rck-title\" *ngIf=\"header\">{{selectedItemsTitle}}</h3>\n            \n            <div cdkDropList [cdkDropListData]=\"destination\" class=\"rck-list\"\n                 (cdkDropListDropped)=\"drop($event)\">\n                <div class=\"rck-box\" *ngFor=\"let item of destination\" (click)=\"clickedItem(item[display],'availableFiltered','confirmedFiltered')\" cdkDrag><mat-icon *ngIf=\"showIcons\" [style.color]=\"removeIconColor\" fxHide.xs mat-list-icon>{{removeIcon}}</mat-icon> {{item[display]}}</div>\n            </div>\n        </div>\n        \n    </div>\n</div>",
                    styles: ['./material-dual-listbox.component.scss']
                },] }
    ];
    MaterialDualListboxComponent.ctorParameters = function () { return []; };
    MaterialDualListboxComponent.propDecorators = {
        display: [{ type: core.Input }],
        width: [{ type: core.Input }],
        filter: [{ type: core.Input }],
        searchPlaceholder: [{ type: core.Input }],
        itemsTitle: [{ type: core.Input }],
        selectedItemsTitle: [{ type: core.Input }],
        header: [{ type: core.Input }],
        showIcons: [{ type: core.Input }],
        addIcon: [{ type: core.Input }],
        addIconColor: [{ type: core.Input }],
        removeIcon: [{ type: core.Input }],
        removeIconColor: [{ type: core.Input }],
        source: [{ type: core.Input }],
        destination: [{ type: core.Input }],
        destinationChange: [{ type: core.Output }]
    };

    var MaterialDualListboxModule = /** @class */ (function () {
        function MaterialDualListboxModule() {
        }
        return MaterialDualListboxModule;
    }());
    MaterialDualListboxModule.decorators = [
        { type: core.NgModule, args: [{
                    declarations: [MaterialDualListboxComponent],
                    imports: [
                        platformBrowser.BrowserModule,
                        icon.MatIconModule,
                        input.MatInputModule,
                        list.MatListModule,
                        forms.FormsModule,
                        formField.MatFormFieldModule,
                        dragDrop.DragDropModule
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

    exports.MaterialDualListboxComponent = MaterialDualListboxComponent;
    exports.MaterialDualListboxModule = MaterialDualListboxModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-dual-listbox.umd.js.map
