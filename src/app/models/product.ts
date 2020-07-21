export class Product{
    id: number;
    category: string = '';
    name: string = '';
    price: number;
    description: string = '';

    constructor(id: number, name: string, category: string, price: number, description: string ){
        this.id = id;
        this.name = name;
        this.category = category;
        this.price = price;
        this.description = description;
    }
}