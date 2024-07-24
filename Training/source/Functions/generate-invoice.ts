import Product from "../Interfaces/product-interface";
import Read from "../Interfaces/read-interface";
import totalBill from "./total-bill";

const generateInvoice =  function(userData:Read){
    const productArray : Product[] = [...userData.buyerArray] 
    var total=totalBill(userData)
    console.log("Customer Name:", userData.customer.name)
    for (const item of productArray) {
        console.log(item.name, '| Price:', item.price, '| Amount:',item.amount);
    }
    console.log('Your total bill is:', total)
}

export default generateInvoice