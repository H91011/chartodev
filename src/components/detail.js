import {
    useParams
} from "react-router-dom"

import {
    useHistory
} from "react-router-dom"

export default function (props) {
    const history = useHistory()
    const { id } = useParams()
    return (
        <div>
            <p
                className={"hoverEffect"}
                onClick={() => { history.goBack() }}
            > Go Home</p>
            <p> Detail id:  {id}</p>
        </div>
    )

}