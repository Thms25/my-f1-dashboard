import Chart from 'react-apexcharts'

type ChartProps = {
  options: any
  series: any
  width: string
  height: string
  className?: string
}
export default function useChart({
  options,
  series,
  width,
  height,
  className,
}: ChartProps) {
  return (
    <Chart
      options={options}
      series={series}
      width={width}
      height={height}
      className={className}
    />
  )
}
