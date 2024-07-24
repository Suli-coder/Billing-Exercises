import Read from "../Interfaces/read-interface";
import readFromFile from "./read-from-file";
import generateInvoice from "./generate-invoice";
import subtractFromSupply from "./subtract-from-supply";

let readData: Read |undefined 

async function run(){
    try {
        // Await the promise to get the resolved value
        const readData: Read = await readFromFile('Input.json'); 
        generateInvoice(readData);
        subtractFromSupply(readData);
      

    } catch (error) {
        console.error('Error generating invoice:', error);
    }
}

export default run