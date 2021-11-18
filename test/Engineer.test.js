const Engineer = require('../lib/Engineer');

describe('Engineer Class', ()=>{
    //Constrcutor
    it('Creates an engineer object', ()=>{
        const engineer = new Engineer('Joe', 619, 'jspann@tl.com', 'jpspann91');

        expect(engineer.github).toEqual(expect.any(String));

        expect(engineer instanceof Engineer);
    })
    //getGithub() function
    it('Gets the github account of the employee', ()=>{
        const engineer = new Engineer('Joe', 619, 'jspann@tl.com', 'jpspann91');

        expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
    })

    //getRole() function
    it('Gets the role of the employee', ()=>{
        const engineer = new Engineer('Joe', 619, 'jspann@tl.com', 'jpspann91');

        expect(engineer.getRole()).toEqual('Engineer');
    })
})