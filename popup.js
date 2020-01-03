//Need to get the inner text of the textarea
let searchContent = null
document.querySelector("button").addEventListener("click", function() {
  searchContent = document.getElementById("searchContent").value
})

//Get the auth token and send a request
document.querySelector("button").addEventListener("click", async function() {
  if (searchContent) {
    searchContent = searchContent.toLowerCase()
    chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
      tab = tabs[0].url
      let youtubeVideoId = tab.split("v=")[1]
      let ampersandPosition = youtubeVideoId.indexOf("&")
      if (ampersandPosition != -1) {
        youtubeVideoId = youtubeVideoId.substring(0, ampersandPosition)
      }

      //Need to get the youtube id from the current tab
      let initial = {
        method: "GET",
        async: true,
        headers: {
          "Content-Type": "application/json"
        },
        contentType: "json"
      }

      let corsProxy = "https://cors-anywhere.herokuapp.com/"
      let youtubePlaceholder = "https://video.google.com/timedtext?lang=en&v="
      // TODO get the ID from the current tab
      let youtubeUrl = youtubePlaceholder + youtubeVideoId
      fetch(corsProxy + youtubeUrl, initial)
        .then(response => response.text())
        .then(transcript => {
          let timedTranscript = new Transcript(transcript)
          let searchResults = timedTranscript.FindQuery(searchContent)
          console.log(searchResults)
        })
    })
  } else {
    //THROW SOME EXCEPTION
  }
})

async function getYoutubeId() {
  let video_id = ""
  chrome.tabs.query({ currentWindow: true, active: true }, tabs => {
    tab = tabs[0].url
    video_id = tab.split("v=")[1]
    let ampersandPosition = video_id.indexOf("&")
    if (ampersandPosition != -1) {
      video_id += video_id.substring(0, ampersandPosition)
    }
  })
  return video_id
}
