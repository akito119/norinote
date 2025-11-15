import track from "./trace"
import station from "./mkclass"
type Props = {
    lat : number;
    setlat : (lat : number) => void;
    lon : number;
    setlon : (lon : number) => void;
    path : station[];
    setpath : (path :station[]) => void;
    buzzer : boolean;
    setbuzzer :(buzzer:boolean) => void;
    traceOn :boolean;
    settraceOn :(traceOn:boolean) => void;
    traceOnRef: React.RefObject<boolean>;
    buzzerRef: React.RefObject<boolean>;
}
 const audio = new Audio("/Clock-Alarm05-1(Mid).mp3");
async function watch ({lat,setlat,lon,setlon,path,setpath,buzzerRef,traceOn,settraceOn,traceOnRef,setbuzzer}:Props){
    settraceOn(false);
    while(true){
        if(buzzerRef.current){
            audio.play();
            alert("乗換駅に到着しました");
            setbuzzer(false);
            break;
        }
        else{
            track({lat,setlat,lon,setlon,path,setpath,setbuzzer,buzzerRef});
        }
        
        if(traceOnRef.current){
            break;
        }
        await new Promise(r => setTimeout(r, 500));
    }
}
async function endtrace({lat,setlat,lon,setlon,path,setpath,buzzer,setbuzzer,traceOn,settraceOn,traceOnRef,buzzerRef}:Props){
    settraceOn(true);
}
function Buzzer ({lat,setlat,lon,setlon,path,setpath,buzzer,setbuzzer,traceOn,settraceOn,traceOnRef,buzzerRef}:Props){
    return(
    <>
    <button onClick ={()=>watch({lat,setlat,lon,setlon,path,setpath,buzzer,setbuzzer,traceOn,settraceOn,traceOnRef,buzzerRef}) }>追跡開始</button>
    <button onClick ={()=>endtrace({lat,setlat,lon,setlon,path,setpath,buzzer,setbuzzer,traceOn,settraceOn,traceOnRef,buzzerRef})}>追跡終了</button>
    </>
    )
}

export default Buzzer