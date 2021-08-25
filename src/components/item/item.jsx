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
            <span className={`type ${backColor(elValue)}`}>{typeElement(elValue)}</span>
            <span className="key-item">{elKey} :</span>
            <span className={`value-item ${backColor(elValue)}`}>
                {elValue === false || elValue === true ? `${elValue}` : `"${elValue}"`}</span>
        </div>
    )
}

export default Item;