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
document.querySelector("button").addEventListener("click", function() {
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    if (searchContent) {
      //Need to get the youtube id from the current tab

      let init = {
        method: "GET",
        async: true,
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        },
        contentType: "json"
      }

      let proxyUrl = "https://cors-anywhere.herokuapp.com/"
      let youtubeUrl =
        "https://www.googleapis.com/youtube/v3/captions/[TR3Vdo5etCQ&list=RDIBH97ma9YiI]?key=[" +
        gAPI +
        "]"
      fetch(proxyUrl + youtubeUrl)
        .then(response => response.json())
        .then(function(data) {
          console.log(data)
        })
        .catch(() => console.log("Can't access things"))
    } else {
      //THROW SOME EXCEPTION
    }
  })
})

//Use API
