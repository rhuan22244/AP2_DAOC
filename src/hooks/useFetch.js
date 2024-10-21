import { useEffect, useState } from "react";

function useFetch(value) {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState (false)
    useEffect(() => {

        setData({})
        setError(false)

        async function buscaCep() {
            setLoading(true)
            try {
                const response = await fetch(`https://viacep.com.br/ws/${value}/json/`)
                const json = await response.json()
                setTimeout(() =>{
                    setData(json)
                    setLoading (false)
                }, 3000)
            } catch {
                setError (true)
                setLoading (false)
            }
            }

        if(value != null){
            buscaCep();
        }
    }, [value]);

    return [data, error, loading]
}

export default useFetch;