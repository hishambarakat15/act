export class latest {
    id:string;
    view:number;
    comment: number;
    img: string;
    header: string;
    shortDes: string;
    longDes: string;

    constructor(id:string,view:number,comment: number, img: string, header:string,shortDes: string,longDes: string){
        this.id  = id;
        this.view = view;
        this.comment = comment;
        this.img = img;
        this.header = header;
        this.shortDes = shortDes;
        this.longDes = longDes;

    }
}