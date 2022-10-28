function generateHTML(teamMembers) {
    cards = [];
    let footer = `</div>
   </div>

</body>

</html>`

    for (i = 0; i < teamMembers.length; i++) {
        if (teamMembers[i].getRole() === "Manager") {
           const managerCard = generateManagerCard(teamMembers[i]);
           cards.push(managerCard);
        } 
        if (teamMembers[i].getRole() === "Engineer") {
            const engineerCard =  generateEngineerCard(teamMembers[i]);
            cards.push(engineerCard);
        } 
        if (teamMembers[i].getRole() === "Intern") {
            const internCard = generateInternCard(teamMembers[i]);
            cards.push(internCard);
        }
    }

    console.log(cards);
    console.log(cards.length);

    employeeCards = cards.join(" ");

    return employeeCards + footer
}

function generateManagerCard(manager) {
   
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


function generateEngineerCard(engineer) {
    console.log(engineer.name, engineer.id, engineer.email, engineer.github);
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

function generateInternCard(intern) {
    
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


module.exports = generateHTML;