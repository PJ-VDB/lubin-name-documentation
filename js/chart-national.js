// National INSEE Time Series Chart
async function renderNationalChart() {
  try {
    const response = await fetch('data/insee-national.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);

    const data = await response.json();
    const ctx = document.getElementById('national-chart');

    if (!ctx) {
      console.error('National chart canvas not found');
      return;
    }

    // Create gradient for area fill
    const gradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(0, 40, 104, 0.2)');
    gradient.addColorStop(1, 'rgba(0, 40, 104, 0.02)');

    new Chart(ctx, {
      type: 'line',
      data: {
        labels: data.years.map(d => d.year),
        datasets: [{
          label: 'Boys named Lubin',
          data: data.years.map(d => d.count),
          borderColor: '#002868',
          backgroundColor: gradient,
          fill: true,
          tension: 0.3,
          pointRadius: 0,
          pointHoverRadius: 6,
          pointHoverBackgroundColor: '#002868',
          pointHoverBorderColor: 'white',
          pointHoverBorderWidth: 2,
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            padding: 12,
            titleFont: {
              size: 14,
              weight: 'bold'
            },
            bodyFont: {
              size: 13
            },
            callbacks: {
              title: (context) => `Year ${context[0].label}`,
              label: (context) => {
                const count = context.parsed.y;
                return `${count} boy${count !== 1 ? 's' : ''} named Lubin`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Year',
              font: {
                size: 13,
                weight: 'bold'
              }
            },
            grid: {
              display: false
            },
            ticks: {
              maxTicksLimit: 15,
              font: {
                size: 11
              }
            }
          },
          y: {
            beginAtZero: true,
            title: {
              display: true,
              text: 'Number of Births',
              font: {
                size: 13,
                weight: 'bold'
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              font: {
                size: 11
              }
            }
          }
        }
      }
    });

    console.log(`✓ National chart loaded: ${data.years.length} years, ${data.metadata.total} total births`);
  } catch (error) {
    console.error('Error loading national chart:', error);
  }
}
