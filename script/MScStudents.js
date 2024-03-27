document.addEventListener("DOMContentLoaded", function () {
  fetch("./data/MScStudents.json")
    .then((response) => response.json())
    .then((data) => {
      MscStudents = data.MScStudents;
      const outputDiv = document.getElementById("MSCStudents_box_team");
      MscStudentsResult = "";
      MscStudents.map((val, index) => {
        const img =
          val.image == ""
            ? `<div class=${index % 2 == 0 ? "empty_image_box1" : "empty_image_box2"
            }></div>`
            : ` <img src=${val.image} class="profile_img_team" />`;

        MscStudentsResult += `<div class="card">
              <div class="image_box">
               ${img}
              </div>
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
      `;
      });
      outputDiv.innerHTML = MscStudentsResult;
    })
    .catch((error) => console.error("Error fetching data:", error));
});
