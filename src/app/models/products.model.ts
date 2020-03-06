export class prod {
    ProductId: string;
    name: string;
    price: number;
    image: string;
    category: string;
    descripton: string;

    constructor(id: string, name: string, price: number, image: string, category: string ,description){
        this.ProductId = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
        this.descripton = description;
    }
}