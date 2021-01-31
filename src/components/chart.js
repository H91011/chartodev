import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'



export default function () {

    const data = useSelector(state => state.data.graphData ? state.data.graphData : [])
    const dispatch = useDispatch()
    console.log(data);

    data.sort((a, b) => {
        return (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
    });


    return (

        <XYPlot
            width={800}
            height={800}
        >
            <HorizontalGridLines />
            <LineSeries
                data={data.map((item) => {
                    return { y: item.saleCount, x: new Date(item.date).getTime() }

                })} />
            <XAxis
                tickFormat={(d) => {
                    return <tspan style={{ fontSize: "6px" }}>{moment(d).format("L")} </tspan>
                }}
                tickLabelAngle={70}
            />
            <YAxis />
        </XYPlot>

    )
}