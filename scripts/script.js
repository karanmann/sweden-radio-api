let cardsContainer = document.getElementById('channel-cards-container');
// FETCH DATA


const buildChannelList = (channelData) => {
  // let output = ""
  console.log(channelData)
  // cardsContainer.innerHTML = output
}

const fetchRadioChannelData = () => {
  const URL = 'http://api.sr.se/api/v2/channels?format=json';

  fetch(URL)
  .then(res => res.json())
  .then(channelData => buildChannelList(channelData))
  .catch((error) => {console.log(error, "There has been an error")})
}

fetchRadioChannelData()