import { Component, OnInit } from '@angular/core';
import { Survey } from "../types/Survey";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  statuses: string[] = ['All', 'Active', 'Completed'];
  categories: string[] = ['Development', 'Workplace', 'Hardware'];
  filteredList: Survey[];

  status = 'status';
  category = "category";

  selectedStatus = null;
  selectedCategory = null;

  surveyList: Survey[] = [
    {
      title: "Designer Survey",
      category: "Workplace",
      status: "Active",
      label: "New Framework",
    },
    {
      title: "Developer Survey",
      category: "Development",
      status: "Active",
      label: "Education",
    },
    {
      title: "Backend Survey",
      category: "Hardware",
      status: "Completed",
      label: "Personal",
    }
  ]

  constructor() {
    this.filteredList = JSON.parse(JSON.stringify(this.surveyList));
  }

  ngOnInit() {

  }

  onFilterSelected(filter: string, type: string) {
    this.filteredList = JSON.parse(JSON.stringify(this.surveyList));


    if (type === this.status) {
      this.selectedStatus = filter;
    }

    if (type === this.category) {
      this.selectedCategory = filter;
    }


    if (this.selectedStatus && this.selectedStatus !== 'All') {
      this.filteredList = this.filteredList.filter((oData: Survey) => {
        return oData.status === this.selectedStatus;
      })
    }

    if (this.selectedCategory) {
      this.filteredList = this.filteredList.filter((oData: Survey) => {
        return oData.category === this.selectedCategory;
      })
    }
  }
}
