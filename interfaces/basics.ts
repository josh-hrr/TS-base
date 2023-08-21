/*

Interface: 
- can be extended
- must implement all 
- cannot be instantiated

Types:
- cannot be extended 
- can have option attributes
*/
 

interface Client {
    name: string;
    age?: number;
    address: Address
}

interface Address {
    zip: number,
    street: string
}

const clientOne:Client = {
    name: 'clientName',
    age: 25,
    address: {
        zip: 101,
        street: "Street test"
    }
}

console.log(clientOne)