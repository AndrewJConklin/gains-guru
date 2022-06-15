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
    name: "",
    calories: 0,
    date: this.today,
    carbs: 0,
    fat: 0,
    protein: 0
  }

  updatedEntry: Entry = {
    id: 0,
    name: "",
    calories: 0,
    date: "",
    carbs: 0,
    fat: 0,
    protein: 0
  }

  activeUpdate: boolean = false

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
        this.refreshDaily();
        this.resetNewEntry()
      })
  }

  updateEntry() {
    console.log(this.updatedEntry)
    this.entryService.updateEntry(this.updatedEntry)
      .subscribe(response => {
        this.activeUpdate = false
        this.refreshEntries();
        this.refreshDaily();
        this.resetUpdatedEntry();
      })
  }

  deleteEntry(id: number) {
    this.entryService.deleteEntry(id)
      .subscribe(response => {
        console.log(`Set with ID = ${id}`)
        this.refreshEntries();
        this.refreshDaily()
      })
  }

  update(entry: Entry) {
    console.log(entry)
    this.activeUpdate = true
    this.updatedEntry = entry
  }

  cancelUpdate() {
    this.activeUpdate = false
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

  resetUpdatedEntry() {
    this.updatedEntry.id = 0;
    this.updatedEntry.name = "";
    this.updatedEntry.calories = 0;
    this.updatedEntry.date = "";
    this.updatedEntry.carbs = 0;
    this.updatedEntry.fat = 0;
    this.updatedEntry.protein = 0
  }

  resetNewEntry() {
    this.newEntry.id = 0;
    this.newEntry.name = "";
    this.newEntry.calories = 0;
    this.newEntry.date = "";
    this.newEntry.carbs = 0;
    this.newEntry.fat = 0;
    this.newEntry.protein = 0
  }
}
