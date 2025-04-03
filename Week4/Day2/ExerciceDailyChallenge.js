const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
// 1)

  const usernames = []  
  gameInfo.forEach(player =>{
    usernames.push(player.username)
  } )
  console.log(usernames);
// 2)
  const winner = []
 gameInfo.forEach(score => {
    if(score.score>5){
        winner.push(score.username)
    }
 })
 console.log(winner);
// 3)
 const total = gameInfo.reduce((acc,player) => acc+player.score,0)
 console.log(total);
 
 