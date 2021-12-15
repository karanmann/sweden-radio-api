let scheduleContainer = document.getElementById("scheduled-next")

const fetchScheduledData = () => {

  const URL = "https://api.sr.se/api/v2/scheduledepisodes/rightnow?format=json&pagination=false";

  fetch(URL)
    .then((res) => res.json())
    .then((scheduleData) => {
      console.log(scheduleData);
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
};

fetchScheduledData();

