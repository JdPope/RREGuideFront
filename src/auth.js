const savedToken = localStorage.get("jwt")

fetch("someLoginUrl", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${savedToken}`
  },
  body: JSON.stringify({
    username: "kyle",
    password: "coberly"
  })
}).then(response => respons.json())
.then(response => {
  const token = response.token

  localStorage.set("jwt", token)
})


fetch('http://localhost:3000/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: 'guy',
      password: 'hi'
    }
  })
})
  .then(r => r.json())
  .then(console.log("test complete"))
