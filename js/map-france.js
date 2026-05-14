// France Département Choropleth Map
async function renderFranceMap() {
  try {
    // Load data in parallel
    const [geoData, counts] = await Promise.all([
      d3.json('data/departements.geojson'),
      d3.json('data/insee-departements.json')
    ]);

    const container = document.getElementById('map-container');
    if (!container) {
      console.error('Map container not found');
      return;
    }

    // Clear any existing content
    container.innerHTML = '';

    // Set up dimensions
    const containerWidth = container.clientWidth || 960;
    const width = Math.min(containerWidth, 960);
    const height = 600;

    // Create SVG
    const svg = d3.select('#map-container')
      .append('svg')
      .attr('viewBox', [0, 0, width, height])
      .attr('width', '100%')
      .attr('height', 'auto')
      .style('max-width', '100%')
      .style('height', 'auto');

    // Projection for metropolitan France
    const projection = d3.geoConicConformal()
      .center([2.454071, 46.779229])
      .scale(2600)
      .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);

    // Color scale
    const maxCount = Math.max(...Object.values(counts));
    const colorScale = d3.scaleSequential()
      .domain([0, maxCount])
      .interpolator(d3.interpolateBlues);

    // Create tooltip
    const tooltip = d3.select('body')
      .append('div')
      .attr('class', 'map-tooltip')
      .style('position', 'absolute')
      .style('visibility', 'hidden')
      .style('background', 'white')
      .style('padding', '12px')
      .style('border', '1px solid #ccc')
      .style('border-radius', '4px')
      .style('box-shadow', '0 2px 8px rgba(0,0,0,0.15)')
      .style('font-family', 'Inter, sans-serif')
      .style('font-size', '14px')
      .style('pointer-events', 'none')
      .style('z-index', '1000');

    // Draw départements
    svg.selectAll('path')
      .data(geoData.features)
      .join('path')
      .attr('d', path)
      .attr('fill', d => {
        const code = d.properties.code || d.properties.CODE_DEPT;
        const count = counts[code] || 0;
        return count > 0 ? colorScale(count) : '#e5e7eb';
      })
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 0.5)
      .style('cursor', 'pointer')
      .on('mouseover', function(event, d) {
        const code = d.properties.code || d.properties.CODE_DEPT;
        const name = d.properties.nom || d.properties.NOM_DEPT;
        const count = counts[code] || 0;

        d3.select(this)
          .attr('stroke', '#002868')
          .attr('stroke-width', 2)
          .style('opacity', 0.8);

        const nameLabel = name || t('map.tooltip.unknown');
        const codeLabel = code || t('map.tooltip.na');
        const countKey = count === 1 ? 'map.tooltip.single' : 'map.tooltip.plural';
        tooltip
          .style('visibility', 'visible')
          .html(`
            <strong>${nameLabel} (${codeLabel})</strong><br>
            ${count} ${t(countKey)}<br>
            <span style="font-size: 12px; color: #666;">${t('map.tooltip.since')}</span>
          `);
      })
      .on('mousemove', function(event) {
        tooltip
          .style('top', (event.pageY - 60) + 'px')
          .style('left', (event.pageX + 15) + 'px');
      })
      .on('mouseout', function() {
        d3.select(this)
          .attr('stroke', '#ffffff')
          .attr('stroke-width', 0.5)
          .style('opacity', 1);

        tooltip.style('visibility', 'hidden');
      });

    // Add legend
    const legendWidth = 200;
    const legendHeight = 15;
    const legendX = width - legendWidth - 40;
    const legendY = height - 80;

    const legend = svg.append('g')
      .attr('transform', `translate(${legendX}, ${legendY})`);

    // Create gradient for legend
    const defs = svg.append('defs');
    const gradient = defs.append('linearGradient')
      .attr('id', 'legend-gradient')
      .attr('x1', '0%')
      .attr('x2', '100%')
      .attr('y1', '0%')
      .attr('y2', '0%');

    // Add color stops
    const stops = 10;
    for (let i = 0; i <= stops; i++) {
      const offset = i / stops;
      gradient.append('stop')
        .attr('offset', `${offset * 100}%`)
        .attr('stop-color', colorScale(offset * maxCount));
    }

    // Add legend rectangle
    legend.append('rect')
      .attr('width', legendWidth)
      .attr('height', legendHeight)
      .style('fill', 'url(#legend-gradient)')
      .style('stroke', '#999')
      .style('stroke-width', 0.5);

    // Add legend axis
    const legendScale = d3.scaleLinear()
      .domain([0, maxCount])
      .range([0, legendWidth]);

    const legendAxis = d3.axisBottom(legendScale)
      .ticks(5)
      .tickSize(legendHeight + 5)
      .tickFormat(d => Math.round(d));

    legend.append('g')
      .attr('class', 'legend-axis')
      .call(legendAxis)
      .select('.domain')
      .remove();

    legend.selectAll('.legend-axis text')
      .style('font-size', '11px')
      .style('font-family', 'Inter, sans-serif');

    legend.selectAll('.legend-axis line')
      .style('stroke', '#999');

    // Add legend title
    legend.append('text')
      .attr('x', legendWidth / 2)
      .attr('y', -8)
      .attr('text-anchor', 'middle')
      .style('font-size', '12px')
      .style('font-family', 'Inter, sans-serif')
      .style('font-weight', 'bold')
      .style('fill', '#374151')
      .text(t('map.legend.title'));

    console.log(`✓ France map loaded: ${geoData.features.length} départements`);
  } catch (error) {
    console.error('Error loading France map:', error);
    // Show error message in container
    const container = document.getElementById('map-container');
    if (container) {
      container.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: #666;">
          <p><strong>${t('map.unavailable.title')}</strong></p>
          <p>${t('map.unavailable.body')}</p>
        </div>
      `;
    }
  }
}
