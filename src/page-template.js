const generateManager = manager => {
  if(!manager.name){
    return '';
  } 
 
  return `
  <div>
    <div>
      <h2>${manager.name}</h2>
      <h3>Manager<h3>
    </div>  
    <div>
      <div>ID: ${manager.id}</div>
      <div>Email: ${manager.email}</div>
      <div>Office Number: ${manager.officeNumber}</div>
    </div>
  </div>    
  `;
};

const generateEngineers = engineers => {
  engineers.forEach( (engineer) => {
    if(!engineer.name){
      return '';
    }

    return `
    ${[engineer.name,engineer.id,engineer.email,engineer.github]};
    `
  });
};

const generateInterns = interns => {
  if(!interns.name){
    return '';
  }
  return `
  ${[interns.name, interns.id, interns.email, interns.school]};
  `;
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
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        <title>Employee Directory</title>

    </head>
    
    <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h1 class="page-title text-secondary bg-dark py-2 px-3">My Team</h1>
      </div>
    </header>
    <main class="container my-5">
    ${generateManager(manager)}
    ${generateEngineers(engineers)}
    ${generateInterns(interns)}
    </main>
    <footer class="container text-center py-3">
      <h3></h3>
    </footer>
  </body>
  </html>
    `;
};
