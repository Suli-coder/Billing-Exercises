import Read from "../Interfaces/read-interface";
import Product from "../Interfaces/product-interface";
//HAVE NOT IMPLEMEMNTED AMOUNT MULTIPLIER!!!!!!!!!!!!!
//now done :)
const totalBill= function(userData:Read):number{
    var total:number =0;
    const products:Product[]= userData.buyerArray;
    const pricesArray: number[] = products.map((x) => x.price*x.amount);
    
    pricesArray.forEach((prices) => {total += prices;}); 
    return total   
}

export default totalBill