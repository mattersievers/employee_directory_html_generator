const generateManager = manager => {
  if(!manager.name){
    return '';
  } 
 
  return `
  <div class ="p-2 shadow border card" style="width: 18rem;">
    <div class = "bg-info text-white">
      <h2>${manager.name}</h2>
      <h4> <i class="fas fa-mug-hot"></i> Manager<h4>
    </div>  
    <div>
      <div class = "border rounded"> ID: ${manager.id}</div>
      <div class = "border rounded"><a href ="mailto:${manager.email}"> Email: ${manager.email}</a></div>
      <div class = "border rounded"> Office Number: ${manager.officeNumber}</div>
    </div>
  </div>    
  `;
};

const generateEngineers = engineers => {
  let tempScript = ``;

  engineers.forEach( (engineer) => {
    if(!engineer.name){
      return '';
    }
    tempScript += `
    <div class ="p-2 shadow border card" style="width: 18rem;">
      <div class = "bg-info text-white">
        <h2>${engineer.name}<h2>
        <h4> <i class="fas fa-glasses"></i> Engineer</h4>
      </div>
      <div>
        <div class = "border rounded">ID: ${engineer.id}</div>
        <div class = "border rounded"><a href ="mailto:${engineer.email}">Email: ${engineer.email}</a></div>
        <div class = "border rounded"><a href = "http://www.github.com/${engineer.github}"> GitHub: ${engineer.github}</a></div>
      </div>
      
    </div>  
    `  
  });
  
  return tempScript;
};

const generateInterns = interns => {
  let tempScript = ``;

  interns.forEach( (intern) => {
    if(!intern.name){
      return '';
    }
    tempScript += `
    <div class ="p-2 shadow border card" style="width: 18rem;">
      <div class = "bg-info text-white">
        <h2>${intern.name}<h2>
        <h4><i class="fas fa-user-graduate"></i> Intern</h4>
      </div>
      <div>
        <div class = "border rounded">ID: ${intern.id}</div>
        <div class = "border rounded">Email: ${intern.email}</div>
        <div class = "border rounded">School: ${intern.school}</div>
      </div>
      
    </div>  
    `  
  });
  
  return tempScript;
};

module.exports = templateData => {
    const{manager, engineers, interns} = templateData;

    return `     
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Employee Directory</title>
        <script src="https://kit.fontawesome.com/675b06116b.js" crossorigin="anonymous"></script>
    </head>
    
    <body>
    <header>
      <div class="align-content-center d-flex justify-content-center">
        <h1 class="text-white text-center bg-primary col-8">My Team</h1>
      </div>
    </header>
    <main class="d-flex flex-wrap justify-content-around container col-8">
      ${generateManager(manager)}
      ${generateEngineers(engineers)}
      ${generateInterns(interns)}
    </main>
  </body>
  </html>
    `;
};
