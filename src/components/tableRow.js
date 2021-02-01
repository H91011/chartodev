import {
    useHistory
} from "react-router-dom"

import { useDispatch } from 'react-redux'


export default function ({ data, id, rowstyle, index }) {
    const history = useHistory()
    const dispatch = useDispatch()
    const rowClick = (elem) => {
        dispatch({
            type: 'SET_SELECT',
            selectedIndex: index
        })
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