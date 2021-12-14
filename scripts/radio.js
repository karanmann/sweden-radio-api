let cardsContainer = document.getElementById("channel-list");
let footerContent = document.getElementById("footer-radio");

const buildChannelList = (cardData) => {
  let channelOutput = "";

  cardData.channels.map((channel) => {
    channelOutput += `
      <div class="radio-card" >
        <img class="card-image" src=${channel.image}
        <div class="card-content">
          <p class="card-discription" style="border-left: 6px solid #${channel.color}; padding-left: 1rem">${channel.tagline}</p>
          <audio class="card-player" controls> 
            <source src=${channel.liveaudio.url} type="audio/mpeg">
          </audio>
          <h5>
            <span>Source : </span>
            <a href=${channel.siteurl}>
              <span>${channel.name}</span>
            </a>  
          </h5>
        </div>
      </div>
    `;
    cardsContainer.innerHTML = channelOutput;
  });
};

const buildFooter = (footerData) => {
  footerContent.innerHTML = `<p>${footerData.copyright}</p>`;
}

const fetchRadioChannelData = () => {
  const URL = "https://api.sr.se/api/v2/channels?format=json";

  fetch(URL)
    .then((res) => res.json())
    .then((channelData) => {
      buildChannelList(channelData);
      buildFooter(channelData);
    })
    .catch((error) => {
      console.log(error, "There has been an error");
    });
};

fetchRadioChannelData();
