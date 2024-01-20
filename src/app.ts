import { Invoice } from './classes/Invoice.js'
// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string) : void;
  spend (a: number) : void;
}

 


const form = document.querySelector('.new-item-form') as HTMLFormElement;
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

const invOne = new Invoice('mario', 'work on the mario website', 250)

let invoices: Invoice[] = [];
invoices.push(invOne);

invoices.forEach(inv => {
  console.log(inv.client,);
  
});


form.addEventListener('submit', (e: Event ) => {
  e.preventDefault();

  console.log( 
    type.value, 
    tofrom.value,
    details.value,
    amount.value
    )
    
  
}
)