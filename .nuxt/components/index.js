export { default as Analysis } from '../../components/Analysis.vue'
export { default as BarChart } from '../../components/BarChart.vue'
export { default as Digits } from '../../components/Digits.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'

export const LazyAnalysis = import('../../components/Analysis.vue' /* webpackChunkName: "components/analysis" */).then(c => c.default || c)
export const LazyBarChart = import('../../components/BarChart.vue' /* webpackChunkName: "components/bar-chart" */).then(c => c.default || c)
export const LazyDigits = import('../../components/Digits.vue' /* webpackChunkName: "components/digits" */).then(c => c.default || c)
export const LazyVuetifyLogo = import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c)
