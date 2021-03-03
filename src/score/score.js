import scoreboard from "./scoretable";
export default function Settings() {
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
          {scoreboard.map((cell) => {
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
