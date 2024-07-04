import Chart from 'react-apexcharts'

type ChartProps = {
  options: any
  series: any
  type: string
  width: string
  height: string
  className?: string
}
export default function Chart({
  options,
  series,
  type,
  width,
  height,
  className,
}: ChartProps) {
  return (
    <Chart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
      className={className}
    />
  )
}
