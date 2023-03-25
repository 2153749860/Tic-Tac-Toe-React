export const gameCheck = (game, player) => {
  const lines = [
    [game[0], game[1], game[2]],
    [game[3], game[4], game[5]],
    [game[6], game[7], game[8]],
    [game[0], game[3], game[6]],
    [game[1], game[4], game[7]],
    [game[3], game[5], game[6]],
    [game[0], game[4], game[8]],
    [game[2], game[4], game[6]],
  ];

  let winner = null;

  lines.forEach((line) => {
    if (line.every((value) => value === line[0]) && !line.includes("")) {
      winner = player;
    }
  });

  return winner;
};
