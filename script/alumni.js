document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/alumni.json")
    .then((response) => response.json())
    .then((data) => {
      alumni = data.alumni;
      const outputDiv = document.getElementById("alumni_box_team");
      result = "";
      alumni.map(
        (val) =>
        (result += `
        <div class="card1">
              <div class="text_team">
                <p class="name_text_team">${val.name}</p>
                <p class="status_text_team">${val.field}</p>
                <div class="icons_team">
                  ${val.linkedin ? `<a href="${val.linkedin}" target="_blank"><img src="./image/linkdin.png" class="icons_team_img" /></a>` : ''}
                  ${val.github ? `<a href="${val.github}" target="_blank"><img src="./image/git.png" class="icons_team_img" /></a>` : ''}
                  ${val.google_scholar ? `<a href="${val.google_scholar}" target="_blank"><img src="./image/google.png" class="icons_team_img" /></a>` : ''}
                  ${val.homepage ? `<a href="${val.homepage}" target="_blank"><img src="./image/world.png" class="icons_team_img" /></a>` : ''}
                </div> 
              </div>
            </div> 
      `)
      );
      outputDiv.innerHTML = result;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
