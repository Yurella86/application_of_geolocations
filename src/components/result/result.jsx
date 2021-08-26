import { useEffect, useState } from 'react'
import Item from '../item/item'
import config from "./../../config.json"
import './result.scss'

function Result({ ipAddress }) {

    const [loading, setLoading] = useState(true)
    const [dataApi, setDataApi] = useState({})

    async function getDataWithApi() {
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
                    <div>Something went wrong  &#128542;. Please try again.</div> :
                    <div className="items" >
                        {
                            config.exampleFollowingOrder.map(el => {
                                return <Item
                                    elKey={el}
                                    elValue={dataApi[el]} />
                            })
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Result;