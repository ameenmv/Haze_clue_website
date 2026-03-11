<template>
   <section class="timeline-card">
      <div class="timeline-card__header">
         <div class="timeline-card__header-text">
            <h4 class="timeline-card__title">{{ $t('dashboard.liveSession.timeline.title') }}</h4>
            <p class="timeline-card__subtitle">{{ $t('dashboard.liveSession.timeline.subtitle') }}</p>
         </div>
         <div class="timeline-card__controls">
            <select class="timeline-card__select">
               <option>{{ $t('dashboard.liveSession.timeline.last30') }}</option>
            </select>
            <button class="timeline-card__export">
               <UIcon name="lucide:download" class="w-3.5 h-3.5" style="color: #fff" />
               <span>{{ $t('dashboard.liveSession.timeline.exportData') }}</span>
            </button>
         </div>
      </div>

      <ClientOnly>
         <div class="timeline-card__chart-wrap">
            <canvas ref="chartCanvas" width="1070" height="400" style="width: 100%; height: 100%;" />
         </div>
      </ClientOnly>
   </section>
</template>

<script setup lang="ts">
import {
   CategoryScale,
   Chart as ChartJS,
   Filler,
   Legend,
   LinearScale,
   LineController,
   LineElement,
   PointElement,
   Tooltip
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, LineController, Filler, Tooltip, Legend)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chartInstance: ChartJS | null = null

// Generate realistic attention data
const generateData = () => {
   const labels: string[] = []
   const data: number[] = []
   const now = new Date()
   for (let i = 30; i >= 0; i--) {
      const t = new Date(now.getTime() - i * 60000)
      labels.push(`${t.getHours().toString().padStart(2, '0')}:${t.getMinutes().toString().padStart(2, '0')}`)
      // Simulate fluctuating attention between 65-95%
      const base = 78 + Math.sin(i * 0.4) * 8
      data.push(Math.round(base + (Math.random() - 0.5) * 10))
   }
   return { labels, data }
}

const buildChart = () => {
   if (!chartCanvas.value) return
   const ctx = chartCanvas.value.getContext('2d')
   if (!ctx) return

   // Gradient fill
   const gradient = ctx.createLinearGradient(0, 0, 0, 400)
   gradient.addColorStop(0, 'rgba(36, 107, 253, 0.15)')
   gradient.addColorStop(1, 'rgba(36, 107, 253, 0.01)')

   const { labels, data } = generateData()

   if (chartInstance) chartInstance.destroy()

   chartInstance = new ChartJS(ctx, {
      type: 'line',
      data: {
         labels,
         datasets: [
            {
               label: 'Class Attention %',
               data,
               borderColor: '#246BFD',
               borderWidth: 3,
               backgroundColor: gradient,
               fill: true,
               tension: 0.4,
               pointRadius: 0,
               pointHoverRadius: 6,
               pointHoverBackgroundColor: '#246BFD',
               pointHoverBorderColor: '#FFFFFF',
               pointHoverBorderWidth: 3
            }
         ]
      },
      options: {
         responsive: true,
         maintainAspectRatio: false,
         interaction: {
            intersect: false,
            mode: 'index'
         },
         plugins: {
            legend: { display: false },
            tooltip: {
               backgroundColor: '#1F2937',
               titleColor: '#F3F4F6',
               bodyColor: '#D1D5DB',
               cornerRadius: 8,
               padding: 12,
               displayColors: false,
               callbacks: {
                  label: (ctx) => `Attention: ${ctx.parsed.y}%`
               }
            }
         },
         scales: {
            x: {
               grid: { color: '#F3F4F6', lineWidth: 1 },
               ticks: {
                  font: { family: 'Poppins', size: 12 },
                  color: '#9CA3AF',
                  maxTicksLimit: 10
               }
            },
            y: {
               min: 0,
               max: 100,
               grid: { color: '#F3F4F6', lineWidth: 1 },
               ticks: {
                  font: { family: 'Poppins', size: 12 },
                  color: '#9CA3AF',
                  stepSize: 20,
                  callback: (val) => `${val}%`
               }
            }
         }
      }
   })
}

onMounted(() => {
   setTimeout(() => buildChart(), 100)
})

onBeforeUnmount(() => {
   if (chartInstance) chartInstance.destroy()
})
</script>

<style scoped>
.timeline-card {
   box-sizing: border-box;
   background: #FFFFFF;
   border: 1px solid #E5E7EB;
   box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
   border-radius: 12px;
   padding: 32px 24px 24px;
   display: flex;
   flex-direction: column;
   gap: 24px;
}

:root.dark .timeline-card {
   background: #1a1d27;
   border-color: #2d3040;
}

.timeline-card__header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   flex-wrap: wrap;
   gap: 16px;
}

.timeline-card__header-text {
   display: flex;
   flex-direction: column;
   gap: 0;
}

.timeline-card__title {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 18px;
   line-height: 28px;
   color: #1F2937;
   margin: 0;
}

:root.dark .timeline-card__title {
   color: #F3F4F6;
}

.timeline-card__subtitle {
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #4B5563;
   margin: 0;
}

:root.dark .timeline-card__subtitle {
   color: #9CA3AF;
}

.timeline-card__controls {
   display: flex;
   align-items: center;
   gap: 16px;
}

.timeline-card__select {
   box-sizing: border-box;
   padding: 8px 28px 8px 16px;
   background: #EFEFEF;
   border: 1px solid #D1D5DB;
   border-radius: 8px;
   font-family: 'Poppins', sans-serif;
   font-size: 14px;
   line-height: 14px;
   color: #000;
   cursor: pointer;
   outline: none;
}

:root.dark .timeline-card__select {
   background: #252836;
   border-color: #3d4050;
   color: #D1D5DB;
}

.timeline-card__export {
   display: flex;
   align-items: center;
   gap: 8px;
   padding: 8px 16px;
   background: linear-gradient(87.77deg, #6C4EFD -48.65%, #4C38AF 109.96%);
   border-radius: 8px;
   border: none;
   font-family: 'Poppins', sans-serif;
   font-weight: 400;
   font-size: 14px;
   line-height: 20px;
   color: #FFFFFF;
   cursor: pointer;
   transition: opacity 0.2s;
}

.timeline-card__export:hover {
   opacity: 0.9;
}

.timeline-card__chart-wrap {
   width: 100%;
   height: 400px;
   position: relative;
}
</style>
