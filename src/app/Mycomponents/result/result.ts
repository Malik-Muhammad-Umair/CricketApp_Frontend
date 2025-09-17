import { Component } from '@angular/core';
import { NgApexchartsModule, ApexChart, ApexNonAxisChartSeries, ApexResponsive } from 'ng-apexcharts';
import { Cricketservice } from '../../Myservices/cricketservice';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-result',
  imports: [NgApexchartsModule],
  templateUrl: './result.html',
  styleUrl: './result.css'
})
export class Result {
  constructor(private match: Cricketservice) {}

  chartLabels: string[] = [];
  chartSeries: ApexNonAxisChartSeries = [];
  overallWinner: string = "";   // 👈 final winner store karne ke liye

  chartDetails: ApexChart = {
    height: 350, 
    width: 400
  };

  responsive: ApexResponsive[] = [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 300
        },
        legend: {
          position: "bottom"
        }
      }
    }
  ];

  ngOnInit() {
    this.match.getallMatches().subscribe((data: CricketForm[]) => {
      const counts: { [key: string]: number } = {};

      // 🔹 Step 1: Count frequency of each winner
      data.forEach(match => {
        counts[match.winner] = (counts[match.winner] || 0) + 1;
      });

      // 🔹 Step 2: Chart labels & values
      this.chartLabels = Object.keys(counts);   // ["Pakistan","India","Australia"]
      this.chartSeries = Object.values(counts); // [3,2,1]

      // 🔹 Step 3: Decide overall winner (max count)
      const maxCount = Math.max(...this.chartSeries);
      const winnerIndex = this.chartSeries.indexOf(maxCount);
      this.overallWinner = this.chartLabels[winnerIndex]; 
      
    });
  }
}
