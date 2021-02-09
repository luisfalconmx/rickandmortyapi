let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

function fetchData(api_url) {
  return new Promise((resolve, reject) => {
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', api_url, true)
    xhttp.onreadystatechange = function () {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
          resolve(JSON.parse(xhttp.responseText))
        } else {
          const error = new Error('Error' + api_url)
          reject(error)
        }
      }
    }
    xhttp.send()
  })
}

module.exports = fetchData
