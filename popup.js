window.onload = function() {
  document.querySelector("button").addEventListener("click", function() {
    chrome.identity.getAuthToken({ interactive: true }, function(token) {})
  })
}

//Need to get the inner text of the textarea
//Need to get the youtube id from the current tab
//Use API
