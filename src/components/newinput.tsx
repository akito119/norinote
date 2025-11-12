import addpath from './newpath'
import station from './mkclass'
type Props = {
    path : station[];
    setpath :(path:station[]) =>void;
    city: string;
    setcity: (city: string) => void;
};
export function Input({path,setpath,city,setcity}:Props){
    return (
        <>
        <input 
            type = "text"
            placeholder = "乗り換え駅を入力"
            value = {city}
            onChange = {(e) => setcity(e.target.value)}
        />
        <button onClick ={() => addpath({path,setpath,city,setcity})}>乗り換え駅を追加</button> 
        <br/>
        <> *正確な駅名を入力してください </>
        </>
    );
}
export default Input

{/*complete*/}