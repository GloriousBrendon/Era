function getPlayers(setPlayers) {
    fetch('http://127.0.0.1:3333/players', {
      method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then((result) =>result.json())
    .then((data) => setPlayers(data))
}
  
export default getPlayers