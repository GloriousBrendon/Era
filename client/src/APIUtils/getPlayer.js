function getPlayer(setPlayer, editId) {
    fetch(`http://127.0.0.1:3333/players/${editId}`, {
      method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
    })
    .then((result) =>result.json())
    .then((data) => setPlayer(data))
}
  
export default getPlayer