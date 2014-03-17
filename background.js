chrome.webRequest.onBeforeSendHeaders.addListener(
  function(details) {
    var found = false;
    for (var i = 0; i < details.requestHeaders.length; i++) {
      if (details.requestHeaders[i].name === "Referer") {
        found = true;
        details.requestHeaders[i].value = "https://www.google.com";
      }
    }
    if (!found) {
      details.requestHeaders.push({name: "Referer", value: "https://www.google.com"});
    }
    return {requestHeaders: details.requestHeaders};
  },
  {
    urls: ["*://*.nytimes.com/*", "*://*.wsj.com/*"],
    types: ["main_frame"]
  },
  ["blocking", "requestHeaders"]);
