import TableRow from "./tableRow"
import { useSelector, useDispatch } from 'react-redux'

export default function () {
    const data = useSelector(state => state.data.nodes ? state.data.nodes : [])
    const tableHeader = useSelector(state => state.tableHeader)
    const dispatch = useDispatch()
    return (
        <table className={"table"}>
            <thead>
                <tr>
                    {
                        tableHeader.map((item, index) => {
                            return (
                                <td key={index}>
                                    {item}
                                </td>
                            )
                        })
                    }
                </tr>

            </thead>

            <tbody>
                {
                    data.map((item, index) => {

                        const { accountId, accountType, displayName, role } = item
                        const style = index % 2 === 0 ? "evenrow" : "oddrow"
                        return <TableRow
                            rowstyle={style}
                            key={index}
                            id={item.id}
                            index={index}
                            data={[
                                accountId,
                                accountType,
                                displayName,
                                role
                            ]}
                        />
                    })
                }

            </tbody>
        </table>
    )
}