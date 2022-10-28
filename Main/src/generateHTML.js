// function to generate html 
function generateHTML(myTeam) {
    cards = [];
    let footer = `</div>
   </div>

</body>

</html>`
//for loop thru myteam to generate cards for different roles and push to cards array
    for (i = 0; i < myTeam.length; i++) {
        if (myTeam[i].getRole() === "Manager") {
           const managerCard = createManagerCard(myTeam[i]);
           cards.push(managerCard);
        } 
        if (myTeam[i].getRole() === "Engineer") {
            const engineerCard =  createEngineerCard(myTeam[i]);
            cards.push(engineerCard);
        } 
        if (myTeam[i].getRole() === "Intern") {
            const internCard = createInternCard(myTeam[i]);
            cards.push(internCard);
        }
    }
//joining cards as a string and assigning it to a variable
    employeeCards = cards.join(" ");
//return string of cards and footer
    return employeeCards + footer
}
//function to create a Manager card depending on for loop
function createManagerCard(manager) {
   
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
            integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
        <title>Document</title>
    </head>
    
    <body>
    
        <div class="jumbotron jumbotron-fluid bg-warning">
            <div class="container">
                <h1 class="display-4">My Team</h1>
            </div>
        </div>
    
        <div class="container">
            <div class="row justify-content-around">
    <div class="card mt-3 mb-3 bg-info shadow-lg p-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-capitalize">${manager.name}</h5>
        <h6 class="card-subtitle mb-2 text-dark">${manager.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush rounded">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${manager.email}" class = "text-info">Send Email</a></li>
        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>`
    
}

//function to create an Engineer card depending on for loop
function createEngineerCard(engineer) {
    
    return `<div class="card mt-3 mb-3 bg-info shadow-lg p-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-capitalize">${engineer.name}</h5>
        <h6 class="card-subtitle mb-2 text-dark">${engineer.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush rounded">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${engineer.email}" class = "text-info">Send Email</a></li>
        <li class="list-group-item">Check my <a href="https://github.com/${engineer.github}" target="_blank">Github</a></li>
    </ul>
</div>`
}

//function to create an Intern card depending on for loop
function createInternCard(intern) {
    
    return `<div class="card mt-3 mb-3 bg-info shadow-lg p-3" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title text-capitalize">${intern.name}</h5>
        <h6 class="card-subtitle mb-2 text-dark">${intern.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush rounded">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item">Email: <a href = "mailto: ${intern.email}" class = "text-info">Send Email</a></li>
        <li class="list-group-item">Intern from ${intern.school}</li>
    </ul>
</div>`
}

//export module to be accesed somewhere else
module.exports = generateHTML;