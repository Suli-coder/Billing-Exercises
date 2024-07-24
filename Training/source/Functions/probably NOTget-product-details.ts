import Product from "../Interfaces/product-interface";
import Read from "../Interfaces/read-interface";
const getProductDetail = function(userData:Read, index:number, detail:string):number {
    var detailString:string = "userData.buyerArray.${detail}"
    //convert the string to a Read type
    
    const productDetail = userData.buyerArray[index].price
    return productDetail;
}

export default getProductDetail;