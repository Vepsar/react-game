import scoreboard from "./scoretable";
let score = scoreboard.sort(function (a, b) {
  if (a.time > b.time) {
    return 1;
  }
  if (a.time < b.time) {
    return -1;
  }
  return 0;
});
export default function Settings() {
  const scrbrd = JSON.parse(localStorage.score);
  return (
    <div className="score-contasiner">
      LEADERBOARD
      <table>
        <thead>
          <th>NAME</th>
          <th>TIME</th>
          <th>SIZE</th>
          <th>DIFFICULT</th>
        </thead>
        <tbody>
          {scrbrd.map((cell) => {
            return (
              <tr>
                <td>{cell.name}</td>
                <td>{cell.time}</td>
                <td>{cell.size}</td>
                <td>{cell.diff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
