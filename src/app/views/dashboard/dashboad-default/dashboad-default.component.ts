import { Component, OnInit } from '@angular/core';
import { EChartOption } from 'echarts';
import { echartStyles } from '../../../shared/echart-styles';

@Component({
	selector: 'app-dashboad-default',
	templateUrl: './dashboad-default.component.html',
	styleUrls: ['./dashboad-default.component.css']
})
export class DashboadDefaultComponent implements OnInit {
	chartLineOption1: EChartOption;
	chartLineOption2: EChartOption;
	chartLineOption3: EChartOption;

	constructor() { }

	ngOnInit() {
		this.chartLineOption1 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 40, 20, 50, 40, 80, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(102, 51, 153, .2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#663399',
					},
					itemStyle: {
						color: '#663399'
					}
				}]
			}
		};
		this.chartLineOption2 = {
			...echartStyles.lineFullWidth, ...{
				series: [{
					data: [30, 10, 40, 10, 40, 20, 90],
					...echartStyles.smoothLine,
					markArea: {
						label: {
							show: true
						}
					},
					areaStyle: {
						color: 'rgba(255, 193, 7, 0.2)',
						origin: 'start'
					},
					lineStyle: {
						color: '#FFC107'
					},
					itemStyle: {
						color: '#FFC107'
					}
				}]
			}
		};
		this.chartLineOption2.xAxis.data = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

		this.chartLineOption3 = {
			...echartStyles.lineNoAxis, ...{
				series: [{
					data: [40, 80, 20, 90, 30, 80, 40, 90, 20, 80, 30, 45, 50, 110, 90, 145, 120, 135, 120, 140],
					lineStyle: {
						color: 'rgba(102, 51, 153, 0.86)',
						width: 3,
						...echartStyles.lineShadow
					},
					label: { show: true, color: '#212121' },
					type: 'line',
					smooth: true,
					itemStyle: {
						borderColor: 'rgba(102, 51, 153, 1)'
					}
				}]
			}
		};
		// this.chartLineOption3.xAxis.data = ['1', '2', '3', 'Thu', 'Fri', 'Sat', 'Sun'];

	}

}
