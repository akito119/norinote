import React, { useState,FC } from 'react'
import { setFlagsFromString } from 'v8';
type Props = {
    path : string[];
    setpath :(path:string[]) =>void;
    city: string;
    setcity: (city: string) => void;
};
function addpath({path,setpath,city,setcity}:Props){
    if(city ===""){
        alert("データを入力してください");
        return ;
    }
    let p:string[] = [];
    for(let i = 0;i<path.length;i++){
        p.push(path[i]);
    }
    p.push(city);
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
    const list = path.map((item, index) => <li key={index}>{item}</li>);
    return(
        <>
        {pathflag ?
        <ul>{list}<button onClick = {()=>setpathflag(false)}> 閉じる</button></ul>
        :<button onClick = {()=>setpathflag(true)}>切り替え</button>}
        </>
    );
}
export default addpath