// import { XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';




export default function () {

    const data = useSelector(state => state.data.graphData ? state.data.graphData : [])
    const dispatch = useDispatch()
    console.log(data);

    data.sort((a, b) => {
        return (new Date(a.date)).getTime() - (new Date(b.date)).getTime()
    });

    return (
        <div>

            <LineChart
                width={900}
                height={400}
                data={data.map((item) => {
                    return { y: item.saleCount, x: moment(item.date).format("L") }

                })}
            >
                <XAxis dataKey="x"
                    style={{ fontSize: "8px" }} />

                <YAxis dataKey="y"
                    style={{ fontSize: "8px" }}
                    label={{ value: "Sale Count", angle: -90, size: "8px" }}
                />
                <CartesianGrid stroke="#eee" strokeDasharray="10 10" />

                <Line type="monotone" dataKey="x" stroke="#8884d8" />
                <Line type="monotone" dataKey="y" stroke="#825a78" />
                <Tooltip wrapperStyle={{ fontSize: "8px" }} />
                <Legend />
            </LineChart>
        </div >



    )
}