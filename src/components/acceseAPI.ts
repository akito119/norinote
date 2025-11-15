import station from './mkclass'
async function getStation(targetName: string) {
  const response = await fetch( `https://express.heartrails.com/api/json?method=getStations&name=${encodeURIComponent(targetName)}`);
  if (!response.ok) {
      throw new Error(`HTTPエラー: ${response.status}`);
      
    }

  const data = await response.json();
  const stations = data.response.station;
if (data.response.error) {
  throw new Error("その駅名は存在しません,右上の✖から戻り正しい駅名を入力してください");
}
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