// Belgium Statistics Bar Chart
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

    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: data.years.map(d => d.year.toString()),
        datasets: [{
          label: 'Boys named Lubin (5+)',
          data: data.years.map(d => d.count),
          backgroundColor: '#002868',
          borderColor: '#002868',
          borderWidth: 1
        }]
      },
      options: {
        indexAxis: 'y', // Horizontal bars
        responsive: true,
        maintainAspectRatio: false,
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
                return '5 or more boys named Lubin';
              },
              afterLabel: () => {
                return '(Exact count not disclosed for privacy)';
              }
            }
          }
        },
        scales: {
          x: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'Number of Boys (5+ reported)',
              font: {
                size: 13,
                weight: 'bold'
              }
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.05)'
            },
            ticks: {
              stepSize: 1,
              font: {
                size: 11
              }
            }
          },
          y: {
            grid: {
              display: false
            },
            ticks: {
              font: {
                size: 12,
                weight: 'bold'
              }
            }
          }
        }
      }
    });

    console.log(`✓ Belgium chart loaded: ${data.years.length} years`);
  } catch (error) {
    console.error('Error loading Belgium chart:', error);
  }
}
