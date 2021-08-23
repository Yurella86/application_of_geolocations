import './item.scss'

function Item({ elKey, elValue }) {

    function typeElement(v) {
        switch (typeof v) {
            case "number":
                return '#'
            case "string":
                return parseInt(v) ? '#' : '"'
            case "boolean":
                return 'tf'
            default:
                break;
        }
    }

    function backColor(v) {
        switch (typeof v) {
            case "number":
                return 'num'
            case "string":
                return parseInt(v) ? 'num' : 'str'
            case "boolean":
                return 'tf'
            default:
                break;
        }
    }

    return (
        <div className="item">
            <div className={`type ${backColor(elValue)}`}>
                {typeElement(elValue)}
            </div>
            <div className="key-item">
                {elKey + ":"}
            </div>
            <div className={`value-item ${backColor(elValue)}`}>
                {elValue === true || elValue === false ?
                    '' + elValue :
                    '"' + elValue + '"'}
            </div>
        </div>
    )
}

export default Item;