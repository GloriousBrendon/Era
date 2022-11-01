function getTeamPlayers(teamId, setTeamPlayers) {
    fetch(`http://127.0.0.1:3333/teams/${teamId}`, {
      method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then((result) =>result.json())
    .then((data) => setTeamPlayers(...data))
}
  
export default getTeamPlayers