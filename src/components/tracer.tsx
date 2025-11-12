import station from './mkclass'

type Props = {
    lat : number;
    setlat : (lat : number) => void;
    lon : number;
    setlon : (lon : number) => void;
    path : station[];
    setpath : (path :station[]) => void;
};

function Trace({lat,setlat,lon,setlon,path,setpath}:Props){
    {/*https://qiita.com/r-fuji/items/99ca549b963cedc106ab を参考に書く*/}
}