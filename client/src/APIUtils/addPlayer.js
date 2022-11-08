function addPlayer(player) {
    fetch(`http://127.0.0.1:3333/players`, {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(player)
    })
}
  
export default addPlayer