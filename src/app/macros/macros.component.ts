import { Component, OnInit } from '@angular/core';
import { EntriesApiIntegrationService } from '../entries-api-integration.service';
import { Entry } from '../models/Entry';

import { formatDate } from '@angular/common';


@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit {
  public entries: Entry[] = []
  dailyFat = 0
  dailyProtein = 0
  dailyCarbs = 0
  dailyCals = 0
  today = formatDate(new Date(), 'yyyy-MM-dd', 'en');

  newEntry: Entry = {
    id: 0,
    name: "food",
    calories: 0,
    date: this.today,
    carbs: 0,
    fat: 0,
    protein: 0
  }


  constructor(private entryService: EntriesApiIntegrationService) { }

  ngOnInit(): void {
    this.refreshEntries()
    this.entryService.getEntries()
      .subscribe(response => {
        this.entries = response.entries.filter(entry => entry.date == this.today)


        this.dailyFat = this.entries.reduce(function (acc, entry) {
          return acc + entry.fat
        }, 0)
        this.dailyProtein = this.entries.reduce(function (acc, entry) {
          return acc + entry.protein
        }, 0)
        this.dailyCarbs = this.entries.reduce(function (acc, entry) {
          return acc + entry.carbs
        }, 0)
        this.dailyCals = this.entries.reduce(function (acc, entry) {
          return acc + entry.calories
        }, 0)
      })
  }

  refreshEntries() {
    this.entryService.getEntries()
      .subscribe(response => {
        this.entries = response.entries.filter(entry => entry.date == this.today)
      })
  }

  addEntry() {
    this.entryService.addEntry(this.newEntry)
      .subscribe(response => {
        this.refreshEntries();
        this.refreshDaily()
      })
  }

  deleteSet(id: number) {
    this.entryService.deleteEntry(id)
      .subscribe(response => {
        console.log(`Set with ID = ${id}`)
        this.refreshEntries();
      })
  }

  refreshDaily() {
    this.entryService.getEntries()
      .subscribe(response => {
        this.entries = response.entries.filter(entry => entry.date == this.today)


        this.dailyFat = this.entries.reduce(function (acc, entry) {
          return acc + entry.fat
        }, 0)
        this.dailyProtein = this.entries.reduce(function (acc, entry) {
          return acc + entry.protein
        }, 0)
        this.dailyCarbs = this.entries.reduce(function (acc, entry) {
          return acc + entry.carbs
        }, 0)
        this.dailyCals = this.entries.reduce(function (acc, entry) {
          return acc + entry.calories
        }, 0)
      })
  }

}
