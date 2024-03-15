import { Bar,  YAxis,  XAxis,  Tooltip,  BarChart,  CartesianGrid,  ResponsiveContainer} from 'recharts'

function Chart ({ data }) {

  return (
    <ResponsiveContainer width="100%" height={300} margin={{ top: 50 }}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="6 6"/>
        <XAxis dataKey="date"/>
        <YAxis allowDecimals={false}/>
        <Tooltip/>
        <Bar dataKey="count" fillOpacity={0.6} fill="#3b82f6" barSize={75}/>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default Chart
