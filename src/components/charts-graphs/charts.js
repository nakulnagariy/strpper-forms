import React, { Component } from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    VerticalBarSeries,
    Sunburst,
    Hint
} from 'react-vis';

import { EXTENDED_DISCRETE_COLOR_RANGE as COLORS } from 'react-vis/dist/theme';

import './charts.scss';

class charts extends Component {
    state = {
        hoveredCell: false
    };
    render() {
        const DATA = {
            children: [
                {
                    children: [
                        { bigness: 1, children: [], clr: COLORS[1], name: 'excellent' },
                        { bigness: 1, children: [], clr: COLORS[2], name: 'chart' }
                    ],
                    clr: COLORS[3]
                },
                {
                    bigness: 1,
                    children: [],
                    clr: COLORS[4],
                    name: 'cool',
                    labelStyle: {
                        fontSize: 15,
                        fontWeight: 'bold'
                    }
                },
                { bigness: 1, children: [], clr: COLORS[5], name: 'dogs' },
                { bigness: 1, children: [], clr: COLORS[6], name: 'sunglasses' },
                {
                    children: [
                        { bigness: 1, children: [], clr: COLORS[7], name: 'great' },
                        { bigness: 1, children: [], clr: COLORS[8], name: 'label' }
                    ],
                    clr: COLORS[9]
                }
            ]
        };

        const tipStyle = {
            display: 'flex',
            color: '#fff',
            background: 'red',
            alignItems: 'center',
            padding: '5px',
        };

        const boxStyle = { height: '10px', width: '10px' };

        function buildValue(hoveredCell) {
            const { radius, angle, angle0 } = hoveredCell;
            const truedAngle = (angle + angle0) / 2;
            return {
                x: radius * Math.cos(truedAngle),
                y: radius * Math.sin(truedAngle)
            };
        };

        const { hoveredCell } = this.state;
        console.log(hoveredCell)
        return (
            <div className='container'>
                <div className='relative'>
                    <h3>Example 1</h3>
                    <XYPlot margin={{ bottom: 70 }} xType="ordinal" width={300} height={300}>
                        <VerticalGridLines />
                        <HorizontalGridLines />
                        <XAxis tickLabelAngle={-45} />
                        <YAxis tickLabelAngle={-45} />
                        <VerticalBarSeries
                            data={[
                                { x: 'Apples', y: 10 },
                                { x: 'Bananas', y: 5 },
                                { x: 'Cranberries', y: 15 }
                            ]}
                        />
                        <VerticalBarSeries
                            data={[
                                { x: 'Apples', y: 12 },
                                { x: 'Bananas', y: 2 },
                                { x: 'Cranberries', y: 11 }
                            ]}
                        />
                    </XYPlot>
                </div>
                <div className='relative'>
                    <h3>Example 2</h3>
                    <Sunburst
                        data={DATA}
                        style={{ stroke: '#fff' }}
                        onValueMouseOver={v =>
                            this.setState({ hoveredCell: v.x && v.y ? v : false })
                        }
                        onValueMouseOut={v => this.setState({ hoveredCell: false })}
                        height={300}
                        margin={{ top: 50, bottom: 50, left: 50, right: 50 }}
                        getLabel={d => d.name}
                        getSize={d => d.bigness}
                        getColor={d => d.clr}
                        width={300}
                        padAngle={() => 0.02}
                    >
                        {hoveredCell ? (
                            <Hint className="chart-tooltip " value={buildValue(hoveredCell)}>
                                <div style={tipStyle}>
                                    <div style={{ ...boxStyle, background: hoveredCell.clr }} />
                                    {hoveredCell.clr}
                                </div>
                            </Hint>
                        ) : null}
                    </Sunburst>
                </div>
            </div>
        );
    }
}

export default charts;