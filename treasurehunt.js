var gift = Math.floor(Math.random() * 9)
var bomb = Math.floor(Math.random() * 9)
if (gift = bomb) {
  bomb = Math.floor(Math.random() * 9)
}
  const treasure = (location) => {
      
    if (gift === location) {
      document.getElementById(location).innerHTML = "🧸"
      alert("You found the missing present!")
    } else if (bomb === location) {
      document.getElementById(location).innerHTML = "🍺"
      alert("You found the eggnog. Better luck next time!")
    } else {
      document.getElementById(location).innerHTML = "🎄"
    }
}