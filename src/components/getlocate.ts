type Props = {
    lat : number;
    setlat : (lat : number) => void;
    lon : number;
    setlon : (lon : number) => void;
};


function getlocate({lat,setlat,lon,setlon}:Props){
    navigator.geolocation.getCurrentPosition(
        (position) => {
            setlat(position.coords.latitude);
            setlon(position.coords.longitude);
        },
        (error) => {
            console.error("位置情報取得失敗:", error.message);
         }
    );
}
export default getlocate