let programContainer = document.getElementById("program-list")


const fetchProgramData = () => {

  const URL = "https://api.sr.se/api/v2/programs/index?format=json";

  fetch(URL)
    .then((res) => res.json())
    .then((programData) => {
      console.log(programData);
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
};

fetchProgramData();