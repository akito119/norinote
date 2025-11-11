import React, { useState,useEffect } from 'react'
import Input from './input'
import getlocate from './getlocate'
import {PrintPath,Reset} from './path'
function MainPage(){
    const [city,setcity] = useState("東京");
    const [lat,setlat] = useState(0); 
    const [lon,setlon] = useState(0);
    const [path,setpath] = useState([" "]);
    useEffect(()=>{getlocate({ lat, setlat: setlat, lon, setlon: setlon })},[]);
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
        </>
    );
}
export default MainPage;