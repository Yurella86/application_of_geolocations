import { useEffect, useState } from 'react'
import Item from '../item/item'

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
        } catch (error) {
            console.log(error);
        }
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
                        {Object.keys(dataApi).map(elKey => (
                            <div key={elKey}>
                                <Item
                                    elKey={elKey}
                                    elValue={dataApi[elKey]} />
                            </div>
                        ))}
                    </div>}
            </div>
        )
    }
}

export default Result;