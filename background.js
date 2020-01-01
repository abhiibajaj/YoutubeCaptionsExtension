chrome.runtime.onInstalled.addListener(() => {
  chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
    chrome.declarativeContent.onPageChanged.addRules([youtubeRule])
  })
})

let youtubeRegex = "^(https?://)?(www.youtube.com|youtu.?be)/.+$"
let youtubeRule = {
  conditions: [
    new chrome.declarativeContent.PageStateMatcher({
      pageUrl: { urlMatches: youtubeRegex }
    })
  ],
  actions: [new chrome.declarativeContent.ShowPageAction()]
}
