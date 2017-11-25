import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCalender = false;
  today;
  nextYear;
  currentDate;
  currentMonth;
  currentYear;
  selectedDate;
  selectedYear;
  selectedMonth;
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  daysLabel = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  // daysInMonth = ['31', '28', '31', '30', '31', '30', '31', '31', '30', '31', '30', '31'];
  private row1: any = [];
  private row2: any = [];
  private row3: any = [];
  private row4: any = [];
  private row5: any = [];
  private row6: any = [];
  openCalander() {
    this.isCalender = true;
  }
  constructor() {
    this.today = new Date();
    this.currentDate = this.today.getDate();
    this.nextYear = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
    this.currentMonth = this.today.getMonth();
    this.currentYear = this.today.getFullYear();
    this.selectedYear = this.today.getFullYear();
    this.selectedMonth = this.today.getMonth();
    this.getDates(this.selectedMonth);
  }


      //  currentMonth() {
      //   let n = new Date().getMonth();
      // }
      getMonths(yr) {
        let year = yr.getFullYear();
        this.selectedYear = year;
        this.getDates(this.selectedMonth);
        // if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
        //   this.daysInMonth[1] = '29';
        // }
      }

  getDates(month) {
    this.selectedMonth = month;
    this.row1 = [];
    this.row2 = [];
    this.row3 = [];
    this.row4 = [];
    this.row5 = [];
    this.row6 = [];
    let dayIndex = new Date(this.selectedYear, month, 1).getDay();
    let endIndex = new Date(this.selectedYear, month + 1, 0).getDate();
    let days = this.daysLabel;
    let counter = 1;
    for (let i = 0; i < (dayIndex + endIndex); i++) {
        if ( i < dayIndex) {
          this.row1[i] = null;
          continue;
        }
        if ( i < 7) {
          this.row1[i] = counter;
        }
        else if (i < 14 ) {
          this.row2.push(counter);
        }
        else if (i < 21 ) {
          this.row3.push(counter);
        }
        else if (i < 28 ) {
          this.row4.push(counter);
        }
        else if (i < 35) {
          this.row5.push(counter);
        }
        else if (i < 42) {
          this.row6.push(counter);
        }
        counter++;
    }
  }
  getSelectedDate(pickedDate) {
    this.selectedDate = new Date(this.selectedYear, this.selectedMonth, pickedDate);
  }
}
