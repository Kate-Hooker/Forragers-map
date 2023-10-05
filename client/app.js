
function saveMarker(data) {
  fetch('http://localhost:3000', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      console.log('Success')
    })
    .catch((err) => {
      console.error(err)
    })
}

function getAllMarkers() {
  fetch('http://localhost:3000', {
    method: 'GET', // or 'PUT'
  })
    .then((response) => {
      console.log(response.body.getReader())
    })
    .catch((err) => {
      console.error(err)
    })
}
