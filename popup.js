//Need to get the inner text of the textarea
let searchContent = null
document.querySelector("button").addEventListener("click", function() {
  searchContent = document.getElementById("searchContent").value
})

document.querySelector("button").addEventListener("click", function() {
  chrome.identity.getAuthToken({ interactive: true }, function(token) {
    if (searchContent) {
      console.log("THE TEXT AREA SAYS " + searchContent)
    } else {
      //THROW SOME EXCEPTION
    }
  })
})

//Need to get the youtube id from the current tab
//Use API
