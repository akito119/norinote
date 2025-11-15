import React, { useState,FC } from 'react'
import station from './mkclass'
import getStation from './acceseAPI'
type Props = {
    path : station[];
    setpath :(path:station[]) =>void;
    city: string;
    setcity: (city: string) => void;
};
type prop ={
    path : station[];
    setpath :(path:station[]) =>void;
};
async function addpath({path,setpath,city,setcity}:Props){
    if(city ===""){
        alert("データを入力してください");
        return ;
    }
    let p:station[] = [];
    let k:number = 0;
    if(path.length>=1)  k =path[0].name===""?1:0;
    for(let i = k;i<path.length;i++){
        p.push(path[i]);
    }
    const sta = await getStation(city);
    p.push(sta)
    setpath(p);
}
export const Reset:FC<Props> = ({path,setpath,city,setcity}:Props)=>{
    return (
        <>
        <button onClick ={()=>setpath([])}>乗換駅リセット</button>
        </>
    );
}
export const PrintPath:FC<Props> = ({path,setpath,city,setcity}:Props)=>{
    const [pathflag,setpathflag] = useState(false);
    const list = path.map((item, index) => <li key={index}>{[item.name,item.blank]}</li>);
    return(
        <>
        {pathflag ?
        <ul>{path.length>=1?path[0].name===""?"":list :""}<button onClick = {()=>setpathflag(false)}> 閉じる</button></ul>
        :<button onClick = {()=>setpathflag(true)}>切り替え</button>}
        </>
    );
}
export function deletepath(i:number,{path,setpath}:prop){
    let p =[... path];
    p.splice(i,1);
    setpath(p);
}
export default addpath

{/*complete*/}