function getTeams(setTeams) {
    fetch('http://127.0.0.1:3333/teams', {
      method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then((result) =>result.json())
    .then((data) => setTeams(data))
}
  
export default getTeams