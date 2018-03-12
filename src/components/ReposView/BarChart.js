import React from 'react'
import {scaleLinear} from 'd3-scale'
import {max} from 'd3-array'
import {select} from 'd3-selection'
import PropTypes from 'prop-types'

export default class HorizontalBarChart extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: props.repos
    }
  }

  componentDidMount () {
    const scale = scaleLinear()
      .domain([0, max(this.state.data, x => x.val)])
      .range([0, window.innerWidth - 150])

    const chart = select(this.chartRef)
      .attr('height', 40 * this.state.data.length)
      .attr('width', window.innerWidth - 50)

    const bar = chart.selectAll('g')
      .data(this.state.data)
      .enter()
      .append('g')
      .attr('transform', (el, i) => `translate(0, ${i * 40})`)

    const colors = ['#9C27B0', '#7C4DFF', '#8BC34A', '#536DFE', '#FFC107', '#795548']

    bar.append('rect')
      .attr('fill', (el, i) => colors[i])
      .attr('width', (x) => scale(x.val))
      .attr('height', 30)

    bar.append('text')
      .attr('x', 10)
      .attr('y', 15)
      .attr('dy', '0.35em')
      .text((x) => `${x.label} - ${x.val}`)
  }

  render () {
    return (
      <div>
        <svg ref={(r) => (this.chartRef = r)} />
      </div>
    )
  }
}

HorizontalBarChart.propTypes = {
  repos: PropTypes.array
}
