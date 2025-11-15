import React, { useRef,useState,useEffect } from 'react'
import Input from './newinput'
import getlocate from './getlocate'
import {PrintPath,Reset} from './newpath'
import station from './mkclass';
import Buzzer from './buzzer'
function MainPage(){
    const [city,setcity] = useState("東京");
    const [lat,setlat] = useState(0); 
    const [lon,setlon] = useState(0);
    const [path,setpath] = useState([new station()]);
    const [traceOn,settraceOn] = useState(false);
    const [buzzer,setbuzzer] = useState(false);
    const buzzerRef = useRef(false);
    const traceOnRef = useRef(false);
    useEffect(() => {buzzerRef.current = buzzer;}, [buzzer]);
    useEffect(()=>{getlocate({ setlat: setlat, setlon: setlon })},[]);
    useEffect(()=>{alert("このページは位置情報を使用しますが、取得した情報はこの端末内でのみ処理され、外部には送信されません。")},[]);
    return(
        <>
        <h1>
            test world!!
        </h1>
       <Input path = {path} setpath = {setpath} city = {city} setcity = {setcity}/>
       <br/>
       <Reset  path = {path} setpath ={setpath} city = {city} setcity ={setcity}/>
       <PrintPath path = {path} setpath ={setpath} city = {city} setcity ={setcity}/>
       <Buzzer lat={lat} setlat={setlat} lon={lon} setlon={setlon} path={path} setpath={setpath} buzzer={buzzer} setbuzzer={setbuzzer} traceOn={traceOn} settraceOn={settraceOn} traceOnRef={traceOnRef} buzzerRef={buzzerRef}/>
        </>
    );
}
export default MainPage;