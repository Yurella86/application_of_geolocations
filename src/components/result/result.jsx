import { useEffect, useState } from 'react'

import config from "./../../config.json"
import './result.scss'

function Result({ ipAddress }) {

    const [loading, setLoading] = useState(true)
    const [dataApi, setDataApi] = useState()

    async function getDataWithApi(ip) {
        try {
            setLoading(true)
            const response = await fetch(`${config.baseURL}${ipAddress}/${config.format}/`)
            const data = await response.json();
            setDataApi(data)
            setLoading(false)
            console.log("fetch", Boolean(ipAddress));
        } catch (error) {
            console.log(error);
        }
    }
    function itemsKeys() {
        const arrayKeysData = Object.keys(dataApi)
        return arrayKeysData
    }
    function itemsValues() {
        const arrayValuesData = Object.values(dataApi)
        return arrayValuesData
    }

    useEffect(() => {
        getDataWithApi();
    }, [ipAddress])



    if (loading) {
        return <div>Loading...</div>
    } else {
        return (
            <div>
                {dataApi.error ?
                    <div>Something went wrong 😞. Please try again.</div> :
                    <div className="items" >
                        <div className="item-keys">{itemsKeys().map((k) => <div>{k}</div>)}</div>
                        <div className="item-values">{itemsValues().map((v) => <div>{v}</div>)}</div>
                    </div>}

            </div>
        )
    }
}

export default Result;