function addPlayer(team) {
    fetch(`http://127.0.0.1:3333/teams`, {
      method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(team)
    })
}
  
export default addPlayer