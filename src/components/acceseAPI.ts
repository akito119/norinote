import station from './mkclass'
async function getStation(targetName: string) {
  const response = await fetch( `https://express.heartrails.com/api/json?method=getStations&name=${encodeURIComponent(targetName)}`);
  const data = await response.json();
  const stations = data.response.station;

  const targetStation = stations.find((s: any) => s.name === targetName);
   const sta = new station();
  if (targetStation) {
    sta.name = targetName;
    sta.lat = targetStation.y;
    sta.lon = targetStation.x;
  }
    return sta;
}

export default getStation