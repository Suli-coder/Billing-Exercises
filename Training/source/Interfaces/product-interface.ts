import prodName from "../Enums/prod-name";

interface Product{
    name:prodName;
    id?:number;
    price:number;
    amount :number;
    supply:number
}

export default Product;