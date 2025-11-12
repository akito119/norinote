import React, { useState,FC } from 'react'
import station from './mkclass'
import getStation from './acceseAPI'
type Props = {
    path : station[];
    setpath :(path:station[]) =>void;
    city: string;
    setcity: (city: string) => void;
};
async function addpath({path,setpath,city,setcity}:Props){
    if(city ===""){
        alert("データを入力してください");
        return ;
    }
    let p:station[] = [];
    for(let i = 0;i<path.length;i++){
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
    const list = path.map((item, index) => <li key={index}>{item.name}</li>);
    return(
        <>
        {pathflag ?
        <ul>{list}<button onClick = {()=>setpathflag(false)}> 閉じる</button></ul>
        :<button onClick = {()=>setpathflag(true)}>切り替え</button>}
        </>
    );
}
export default addpath

{/*complete*/}