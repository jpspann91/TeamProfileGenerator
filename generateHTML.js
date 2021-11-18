//Create Manager Card
const generateManager = function (managerObj) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${managerObj.name}</h3>
                <h4>Manager</h4><i class="material-icons">local_cafe</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${managerObj.id}</p>
                <p class="email">Email: <a href="mailto:${managerObj.email}">${managerObj.email}</a></p>
                <p class="office">Office Number: ${managerObj.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}
//Create Engineer Card
const generateEngineer = function (engineerObj) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${engineerObj.name}</h3>
                <h4>Engineer</h4><i class="material-icons">devices</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${engineerObj.id}</p>
                <p class="email">Email: <a href="mailto:${engineerObj.email}">${engineerObj.email}</a></p>
                <p class="github">Github: <a href="https://github.com/${engineerObj.github}" target= "_blank">${engineerObj.github}</a></p>
            </div>
        </div>
    </div>
    `;
}
//Create Intern Card
const generateIntern = function (internObj) {
    return `
    <div class="col-4 mt-4">
        <div class="card h-100">
            <div class="card-header">
                <h3>${internObj.name}</h3>
                <h4>Intern</h4><i class="material-icons">help</i>
            </div>
            <div class="card-body">
                <p class="id">ID: ${internObj.id}</p>
                <p class="email">Email:<a href="mailto:${internObj.email}">${internObj.email}</a></p>
                <p class="school">School: ${internObj.school}</p>
            </div>
        </div>
    </div>
    `;
}

generateHTML = (data) =>{
    pageArray = [];
    for(let i = 0; i < data.length; i++){
        const currentEmployee = data[i];
        const currentRole = currentEmployee.getRole();

        if(currentRole === 'Manager'){
            const managerCard = generateManager(currentEmployee);
            pageArray.push(managerCard);
        }
        if(currentRole === 'Engineer'){
            const engineerCard = generateEngineer(currentEmployee);
            pageArray.push(engineerCard);
        }
        if(currentRole === 'Intern'){
            const internCard = generateIntern(currentEmployee);
            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('');

    const generatedTeam = generateTeamPage(employeeCards);
    return generatedTeam;
}

const generateTeamPage = function (employeeCards){
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!--Team Cards-->
                    ${employeeCards}
                </div>
            </div>
        </main>
        
    </body>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/@popperjs/core@2/dist/umd/popper.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </html>
  `;
}
module.exports = generateHTML;

