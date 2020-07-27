export class List {
    private _name: string
    last:any
    selector:string

    pick:Array<any>
    list:Array<any>
    sift:Array<any>

    dragStart: boolean
    dragStop: boolean

    constructor(name:string){
        this._name = name
        this.last = null
        this.selector = ''
        this.dragStart=false
        this.dragStop=false

        this.pick = []
        this.list=[]
        this.sift = []
    }

    get name(): string{
        return this._name
    }

}