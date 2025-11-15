import station from './mkclass'
type Props = {
    lat : number;
    lon : number;
    path : station[];
    setpath : (path :station[]) => void;
};

function pythadis({lat,lon,path,setpath}:Props){
    let  tmp :station[] = [];
    for(let i = 0;i<path.length;i++){
        let cache = new station() ;
        cache.name = path[i].name;
        cache.lon = path[i].lon;
        cache.lat = path[i].lat;
        const dis:number = Math.sqrt(((lat-path[i].lat)*111320)**2+((lon-path[i].lon)*111320)**2);
        cache.blank = dis;
        tmp.push(cache);
        
    }
    setpath(tmp);
}
/*function vincentydis({lat,setlat,lon,setlon,path,setpath}:Props){
  精度を上げる時に実装
}*/

export {pythadis as distance};