window.chartBelgium = null;

async function renderBelgiumChart() {
  try {
    const response = await fetch('data/belgium.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const ctx = document.getElementById('belgium-chart');

    if (!ctx) {
      console.error('Belgium chart canvas not found');
      return;
    }

    if (window.chartBelgium) {
      window.chartBelgium.destroy();
    }

    window.chartBelgium = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.years.map(d => d.year.toString()),
        datasets: [{
          label: t('chart.belgium.dataset'),
          data: data.years.map(d => d.count),
          backgroundColor: '#002868',
          borderColor: '#002868',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: { size: 14, weight: 'bold' },
            bodyFont: { size: 13 },
            callbacks: {
              title: (context) => `${t('chart.belgium.tooltip.year')} ${context[0].label}`,
              label: () => t('chart.belgium.tooltip.label'),
              afterLabel: () => t('chart.belgium.tooltip.afterLabel')
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: t('chart.belgium.xaxis'),
              font: { size: 13, weight: 'bold' }
            },
            grid: { color: 'rgba(0, 0, 0, 0.05)' },
            ticks: { stepSize: 1, font: { size: 11 } }
          },
          y: {
            grid: { display: false },
            ticks: { font: { size: 12, weight: 'bold' } }
          }
        }
      }
    });

    console.log(`✓ Belgium chart loaded: ${data.years.length} years`);
  } catch (error) {
    console.error('Error loading Belgium chart:', error);
  }
}

function updateBelgiumChart() {
  if (!window.chartBelgium) return;
  const chart = window.chartBelgium;
  chart.data.datasets[0].label = t('chart.belgium.dataset');
  chart.options.scales.x.title.text = t('chart.belgium.xaxis');
  chart.options.plugins.tooltip.callbacks.title =
    (context) => `${t('chart.belgium.tooltip.year')} ${context[0].label}`;
  chart.options.plugins.tooltip.callbacks.label = () => t('chart.belgium.tooltip.label');
  chart.options.plugins.tooltip.callbacks.afterLabel = () => t('chart.belgium.tooltip.afterLabel');
  chart.update();
}
