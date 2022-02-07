// code your solution here

function superbowlWin(record) {
  let winner = record.find((ass) => ass.result === "W");
  if (winner) return winner.year;
  // else return winner.year;
}
