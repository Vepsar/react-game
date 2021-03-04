import scoreboard from "./scoretable";
import './score.css'
import { useConfig } from "../game/config";

scoreboard.sort(function (a, b) {
  if (a.time > b.time) {
    return 1;
  }
  if (a.time < b.time) {
    return -1;
  }
  return 0;
});
let scrbrd
if('score' in localStorage){
  scrbrd = JSON.parse(localStorage.score);
} else {
  scrbrd = scoreboard
}
export default function Settings() {
  const config = useConfig();
  const style = {
    border: `1px solid ${config.color}` ,
    width: 200,
    
}
  const ts={
    fontSize:30
  }
  return (
    <div className="score-container">
      <p style={ts}>LEADERBOARD</p>
      <table >
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
                <td style={style}>{cell.name}</td>
                <td style={style}>{cell.time}</td>
                <td style={style}>{cell.size}</td>
                <td style={style}>{cell.diff}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
