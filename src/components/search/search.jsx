import "./search.scss"
import { useState } from "react";

function Search({ callbackGetIp }) {

    const [ip, setIp] = useState('')

    function onKeyPress(e) {
        if (e.keyCode === 13) {
            callbackGetIp(ip)
        }
    }

    return (
        <div className="search" onKeyDown={onKeyPress}>
            <input type="text" onChange={(e) => setIp(e.target.value)}  ></input>
            <button onClick={() => callbackGetIp(ip)}>Search</button>
        </div>
    )
}

export default Search;