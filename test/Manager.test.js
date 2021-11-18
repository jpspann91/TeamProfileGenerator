const Manager = require('../lib/Manager');

describe('Manager Class', () =>{
    //Constructor
    it( "Creates a manager object", ()=> {
        const manager = new Manager('Joe', 619, 'jspann@tl.com', 2)

        expect(manager.officeNumber).toEqual(expect.any(Number));
        expect(manager instanceof Manager);
    })
//getOfficeNumber() fcuntion()
    it('Gets the office number of the manager', ()=>{
        const manager = new Manager('Joe', 619, 'jspann@tl.com', 2)

        expect(manager.getOfficeNumber()).toEqual(expect.any(Number));
    })

    //getRole() function
    it('Gets the role of the employee', () =>{
        const manager = new Manager('Joe', 619, 'jspann@tl.com', 2)

        expect(manager.getRole()).toEqual('Manager');
    })
})