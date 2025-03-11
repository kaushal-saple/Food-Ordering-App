import { useEffect, useState } from "react";

const useResData =(url)=>{
    const [resData,setResData] = useState(null);
    useEffect(()=>{
        getData(url);
    },[])

    async function getData(url){
        const data = await fetch(url);
        const json = await data.json();
        setResData(json);
    }
    return resData;
}

export default useResData;



