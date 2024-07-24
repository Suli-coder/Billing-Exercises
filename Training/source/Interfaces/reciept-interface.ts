import Product  from './product-interface';
import Customer from "./customer-interface"

interface Receipt {
  id: string;
  customer: Customer;
  products: Product[];
  billdue: number;
  amountofproducts: number;
}

export default Receipt;
