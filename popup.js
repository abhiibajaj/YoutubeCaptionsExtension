// Add gapi script here???
// let gapiRef = document.createElement("script")
// gapiRef.setAttribute("type", "text/javascript")
// gapiRef.setAttribute("src", "https://apis.google.com/js/api.js")

//Need to get the inner text of the textarea
let searchContent = null
document.querySelector("button").addEventListener("click", function() {
  searchContent = document.getElementById("searchContent").value
})

const gAPI = "AIzaSyD-XYTzGnBj6t8b1qn7DV3uYgR0Tt0-Jk0"

//Get the auth token and send a request
document.querySelector("button").addEventListener("click", async function() {
  if (searchContent) {
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

    // TODO get the ID from the current tab
    let youtubeUrl = "https://video.google.com/timedtext?lang=en&v=LZM9YdO_QKk"
    try {
      let response = await getReponse(corsProxy + youtubeUrl, initial)
      response.text().then(data => console.log(data))
    } catch (err) {
      console.log(err)
    }
  } else {
    //THROW SOME EXCEPTION
  }
})

async function getReponse(youtubeUrl, initial) {
  try {
    let response = await fetch(youtubeUrl, initial)
    return response
  } catch (err) {
    console.log(err)
  }
}

//Use API
