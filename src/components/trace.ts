import station from './mkclass'
import getlocate from './getlocate'
import {distance} from './distance'
import {deletepath} from "./newpath"
type Props = {
    lat : number;
    setlat : (lat : number) => void;
    lon : number;
    setlon : (lon : number) => void;
    path : station[];
    setpath : (path :station[]) => void;
    setbuzzer :(buzzer:boolean) => void;
    buzzerRef: React.RefObject<boolean>;
};

async function track({lat,setlat,lon,setlon,path,setpath,setbuzzer,buzzerRef}:Props) {
 
    // 現在位置取得
    await getlocate({setlat,setlon});

    // 距離計算
    distance({lat,lon,path,setpath});

    for(let i =0;i<path.length;i++){
        if(path[i].blank<100){
            setbuzzer(true);
            if (buzzerRef.current !== null) buzzerRef.current = true;
            deletepath(i,{path,setpath});
        }
    }
}

export default track