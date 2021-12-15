let programContainer = document.getElementById("program-list")

const fetchProgramData = () => {

  const URL = "https://api.sr.se/api/v2/programs/index?format=json";

  fetch(URL)
    .then((res) => res.json())
    .then((programData) => {
      buildProgramList(programData);
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
};

fetchProgramData();

const buildProgramList = (listData) => {
  let programsOutput = "";

  listData.programs.map((program) => {
    programsOutput += `
        <a href=${program.programurl} target="_blank">
          <div class="program-card">
            <img class="program-card-image" src=${program.programimage} alt=${program.name}/>
            <div class="program-card-details">
              <h5>${program.name}</h5>
              <p>${program.description}</p>
              <p>${program.broadcastinfo == undefined ? "-" : program.broadcastinfo}</p>
            </div>
          </div>
        </a>
      
    `;
    programContainer.innerHTML = programsOutput;
  });
};

