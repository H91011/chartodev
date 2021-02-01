import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

export default function (props) {
    const history = useHistory()
    const { id } = useParams()
    const nodes = useSelector(state => state.data.nodes)
    const index = useSelector(state => state.selectedIndex)

    const keys = Object.keys(nodes[index])

    return (
        <div>
            <button
                onClick={() => { history.goBack() }}
            > Go Home</button>
            <ul className={"detailList"}>
                {keys.map((item) => {
                    return (<li> {`${item} : ${nodes[index][item]} `}  </li>)
                })}
            </ul>

        </div>
    )

}