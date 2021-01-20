export { default as CustomTable } from '../../components/CustomTable.vue'
export { default as TimeZoomChart } from '../../components/TimeZoomChart.vue'

export const LazyCustomTable = import('../../components/CustomTable.vue' /* webpackChunkName: "components/custom-table" */).then(c => c.default || c)
export const LazyTimeZoomChart = import('../../components/TimeZoomChart.vue' /* webpackChunkName: "components/time-zoom-chart" */).then(c => c.default || c)
