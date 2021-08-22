import "./search.scss"
import { useState } from "react";

function Search({ callbackIp }) {

    const [ip, setIp] = useState('')

    function onKeyPress(e) {
        if (e.keyCode === 13) {
            callbackIp(ip)
        }
    }

    return (
        <div className="search" onKeyDown={onKeyPress}>
            <input type="text" onChange={(e) => setIp(e.target.value)}  ></input>
            <button
                onClick={() => callbackIp(ip)}
            >Search</button>
        </div>
    )
}

export default Search;