type Props = {
    setlat : (lat : number) => void;
    setlon : (lon : number) => void;
};


function getlocate({setlat,setlon}:Props){
    navigator.geolocation.watchPosition(
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