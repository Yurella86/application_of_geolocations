import "./search.scss"
import { useState } from "react";

function Search({ callbackIp }) {

    const [ip, setIp] = useState('')

    return (
        <div className="search">
            <input type="text" onChange={(e) => setIp(e.target.value)}></input>
            <button onClick={() => callbackIp(ip)} >Search</button>
        </div>
    )
}

export default Search;