import addpath from './path'
type Props = {
    path : string[];
    setpath :(path:string[]) =>void;
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
        <p/>
        直近の乗換駅 : {city}
        <p/>
        <> *正確な駅名を入力してください </>
        </>
    );
}
export default Input