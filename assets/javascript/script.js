fetch("./assets/projects.json")
  .then((r) => {
    if (r.ok) {
      return r.json();
    }
    return Promise.reject(r);
  })
  .then((data) => {
    projects = data.projects;
    let ContentsHTML = "";
    projects.forEach((element) => {
      ContentsHTML += `
        <div class="project ${element.status}">
               <div class="project${
                 element.id
               } thumb" style="background-image: url('./codelandia/${
        element.id
      }/assets/images/page.png')"></div>
               <div class="description">
                 <h3>${element.id} - ${element.title}</h3>
                 <div class="technology">
                    <span>Tecnologias: </span>
                    ${element.technology.includes('html') ? "<img src='./assets/images/html.png' alt='html' title='HTML'>":""}
                    ${element.technology.includes('css') ? "<img src='./assets/images/css.png' alt='css' title='CSS'>":""}
                    ${element.technology.includes('javascript') ? "<img src='./assets/images/javascript.png' alt='javascript' title='JAVASCRIPT'>":""}
                  </div>
                  <div class="responsive">
                    <span>Responsivo: ${
                      element.responsive
                        ? '<i class="fas fa-check"></i>'
                        : '<i class="fas fa-times"></i>'
                    }</spanclass=>
                  </div>

                 <span><a href="./codelandia/${
                   element.id
                 }/index.html" target="_blank" class="btn btn-view">Acessar <i
                       class="fas fa-external-link-alt"></i></a></span>
                 <span><a href="https://github.com/hayttle/desafios/tree/main/codelandia/${
                   element.id
                 }" target="_blank"
                     class="btn btn-repo">Repositório <i class="fas fa-code"></i></a></span>
               </div>
             </div>
        `;

      document.querySelector("#projects").innerHTML = ContentsHTML;
    });
  })
  .catch((error) => {
    alert("Ocorreu um erro: " + error);
  });