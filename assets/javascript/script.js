
//Projects Codelândia
fetch("./assets/projects-codelandia.json")
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
                 <span><a href="https://github.com/hayttle/desafios/tree/master/codelandia/${
                   element.id
                 }" target="_blank"
                     class="btn btn-repo">Repositório <i class="fas fa-code"></i></a></span>
               </div>
             </div>
        `;

      document.querySelector("#projects-codelandia").innerHTML = ContentsHTML;
    });
  })
  .catch((error) => {
    alert("Ocorreu um erro: " + error);
  });

  //Projects Dev Challenge
  fetch("./assets/projects-devchallenge.json")
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
               } thumb" style="background-image: url('./devchallenge/${
          element.folder
        }/assets/images/page.png')"></div>
               <div class="description">
                 <h3>${element.id} - ${element.title}</h3>
                 <div class="technology">
                    <span>Tecnologias: </span>
                    ${
                      element.technology.includes("html")
                        ? "<img src='./assets/images/html.png' alt='html' title='HTML'>"
                        : ""
                    }
                    ${
                      element.technology.includes("css")
                        ? "<img src='./assets/images/css.png' alt='css' title='CSS'>"
                        : ""
                    }
                    ${
                      element.technology.includes("javascript")
                        ? "<img src='./assets/images/javascript.png' alt='javascript' title='JAVASCRIPT'>"
                        : ""
                    }
                  </div>
                  <div class="responsive">
                    <span>Responsivo: ${
                      element.responsive
                        ? '<i class="fas fa-check"></i>'
                        : '<i class="fas fa-times"></i>'
                    }</spanclass=>
                  </div>

                 <span><a href="./devchallenge/${
                   element.folder
                 }/index.html" target="_blank" class="btn btn-view">Acessar <i
                       class="fas fa-external-link-alt"></i></a></span>
                 <span><a href="https://github.com/hayttle/desafios/tree/master/devchallenge/${
                   element.folder
                 }" target="_blank"
                     class="btn btn-repo">Repositório <i class="fas fa-code"></i></a></span>
               </div>
             </div>
        `;

        document.querySelector("#projects-devchallenge").innerHTML = ContentsHTML;
      });
    })
    .catch((error) => {
      alert("Ocorreu um erro: " + error);
    });

    //Projects diversos
  fetch("./assets/projects-random.json")
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
               } thumb" style="background-image: url('./random/${
          element.folder
        }/assets/images/page.png')"></div>
               <div class="description">
                 <h3>${element.id} - ${element.title}</h3>
                 <div class="technology">
                    <span>Tecnologias: </span>
                    ${
                      element.technology.includes("html")
                        ? "<img src='./assets/images/html.png' alt='html' title='HTML'>"
                        : ""
                    }
                    ${
                      element.technology.includes("css")
                        ? "<img src='./assets/images/css.png' alt='css' title='CSS'>"
                        : ""
                    }
                    ${
                      element.technology.includes("javascript")
                        ? "<img src='./assets/images/javascript.png' alt='javascript' title='JAVASCRIPT'>"
                        : ""
                    }
                  </div>
                  <div class="responsive">
                    <span>Responsivo: ${
                      element.responsive
                        ? '<i class="fas fa-check"></i>'
                        : '<i class="fas fa-times"></i>'
                    }</spanclass=>
                  </div>

                 <span><a href="./random/${
                   element.folder
                 }/index.html" target="_blank" class="btn btn-view">Acessar <i
                       class="fas fa-external-link-alt"></i></a></span>
                 <span><a href="https://github.com/hayttle/desafios/tree/master/random/${
                   element.folder
                 }" target="_blank"
                     class="btn btn-repo">Repositório <i class="fas fa-code"></i></a></span>
               </div>
             </div>
        `;

        document.querySelector("#projects-random").innerHTML = ContentsHTML;
      });
    })
    .catch((error) => {
      alert("Ocorreu um erro: " + error);
    });