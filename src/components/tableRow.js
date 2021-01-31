import {
    useHistory
} from "react-router-dom"


export default function ({ data, id, rowstyle }) {
    const history = useHistory()
    const rowClick = (elem) => {
        history.push("/detail/" + id)
    }

    return (
        <tr className={"hoverEffect " + rowstyle} onClick={rowClick}>
            {
                data.map((item, index) => {
                    return (<td key={index}>{item}</td>)
                })
            }
        </tr>
    )
}