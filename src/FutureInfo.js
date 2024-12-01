export default function FutureInfo({ data }) {
  // Heavily Checks if there are nulls when retrieving
  // data from the API.
  let nextTemp = [];

  for (let i = 1; i < 7; i++) {
    if (data?.properties?.periods?.[i]?.temperature) {
      nextTemp[i - 1] = data.properties.periods[i].temperature;
    } else {
      nextTemp[i - 1] = null;
    }
  }

  // Gets temperature data for the next few days.
  return (
    <table id="futureTemp">
      <tbody>
        <tr>
          <td className="nextTempLabel">Tomorrow</td>
          <td className="nextTempLabel">Two Days Later</td>
          <td className="nextTempLabel">Three Days Later</td>
        </tr>
        <tr>
          <td>
            <h1 className="nextTemp">{nextTemp[0] ?? "??"} F</h1>
          </td>
          <td>
            <h1 className="nextTemp">{nextTemp[1] ?? "??"} F</h1>
          </td>
          <td>
            <h1 className="nextTemp">{nextTemp[2] ?? "??"} F</h1>
          </td>
        </tr>
        <tr>
          <td className="nextTempLabel">Four Days Later</td>
          <td className="nextTempLabel">Five Days Later</td>
          <td className="nextTempLabel">Six Days Later</td>
        </tr>
        <tr>
          <td>
            <h1 className="nextTemp">{nextTemp[3] ?? "??"} F</h1>
          </td>
          <td>
            <h1 className="nextTemp">{nextTemp[4] ?? "??"} F</h1>
          </td>
          <td>
            <h1 className="nextTemp">{nextTemp[5] ?? "??"} F</h1>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
