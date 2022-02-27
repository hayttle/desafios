document.getElementById("btn-search").addEventListener("click", () => {
  let input = document.getElementById("input");

  let username = input.value;

  let url = "https://api.github.com/users/" + username;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (data.message) {
        alert("Profile Not Found");
      } else {
        document
          .getElementById("avatar")
          .setAttribute("src", `${data.avatar_url}`);
        document.getElementById("avatar").style.display = 'flex';
        document.getElementById("name").textContent = `${data.name}`;
        document.getElementById("username").textContent = `@${data.login}`;
        (data.bio ? document.getElementById("bio").textContent = `${data.bio}` : "");
        document.getElementById("followers").textContent = `${data.followers}`;
        document.getElementById("following").textContent = `${data.following}`;
        document.getElementById("repo").textContent = `${data.public_repos}`;
        input.value = "";
      }
    })
    .catch((e) => {
      console.log(e);
    });
});
