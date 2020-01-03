let sample =
  '<?xml version="1.0" encoding="utf-8" ?><transcript><text start="0.14" dur="2.51">A few years ago, I got a message from an ex.</text><text start="2.65" dur="2.7">And it said, “roses are few red, violets are blue,</text></transcript>'
class Transcript {
  //TODO: make singleton
  constructor(transcript) {
    this.entireTranscript = Object.entries(this.TimeStampTranscipt(transcript))
  }

  FindEntry(searchQuery) {
    let searchTimeStamps = []
    for (const [text, timestamp] of this.entireTranscript) {
      if (text.includes(searchQuery)) {
        searchTimeStamps.push(timestamp)
      }
    }
    return searchTimeStamps
  }

  TimeStampTranscipt(transcript) {
    let transcriptXML = this.ConvertToXml(transcript)
    let textNodes = this.GetTranscriptTextNodes(transcriptXML)
    let timeStamppedTranscript = this.TimeStampTextNodes(textNodes)
    return timeStamppedTranscript
  }

  GetTranscriptTextNodes(transcriptXML) {
    let textNodes = transcriptXML.getElementsByTagName("transcript")[0]
      .childNodes
    return textNodes
  }

  TimeStampTextNodes(textNodes) {
    let timeStamppedTranscript = {}
    textNodes.forEach(textNode => {
      let text = this.RemoveSpecialChars(textNode.innerHTML)
      let timestamp = textNode.getAttribute("start")
      timeStamppedTranscript[text] = timestamp
    })
    return timeStamppedTranscript
  }

  ConvertToXml(transcript) {
    let parser = new DOMParser()
    let transciptXML = parser.parseFromString(transcript, "text/xml")
    return transciptXML
  }
  RemoveSpecialChars(str) {
    return str.replace(/[^a-zA-Z0-9]/g, " ").replace(/\s\s+/g, " ")
  }
}

let button = document.getElementById("button")
button.onclick = () => {
  let transcriptSample = new Transcript(sample)
  let query = ["few"]
  console.log(transcriptSample.FindEntry(query))
}
