import { Component, OnInit, ViewChild } from "@angular/core";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { MatTableDataSource, MatSort, MatPaginator } from "@angular/material";

import { FormControl } from "@angular/forms";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 21, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 22, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 23, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 24, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 25, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 26, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 27, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 28, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 29, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 20, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 31, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 32, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 33, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 34, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 35, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 36, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 37, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 38, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 39, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 40, name: "Neon", weight: 20.1797, symbol: "Ne" },
  { position: 41, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 42, name: "Helium", weight: 4.0026, symbol: "He" },
  { position: 43, name: "Lithium", weight: 6.941, symbol: "Li" },
  { position: 44, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  { position: 45, name: "Boron", weight: 10.811, symbol: "B" },
  { position: 46, name: "Carbon", weight: 12.0107, symbol: "C" },
  { position: 47, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  { position: 48, name: "Oxygen", weight: 15.9994, symbol: "O" },
  { position: 49, name: "Fluorine", weight: 18.9984, symbol: "F" },
  { position: 50, name: "Neon", weight: 20.1797, symbol: "Ne" },
];

export interface data {
  desc: string;
  value: number;
}

@Component({
  selector: "app-form-fill",
  templateUrl: "./form-fill.component.html",
  styleUrls: ["./form-fill.component.css"],
})
export class FormFillComponent implements OnInit {
  select: string;
  objects: data[] = [
    { value: 1, desc: "stam" },
    { value: 2, desc: "stam2" },
    { value: 11, desc: "abc" },
    { value: 12, desc: "abc2" },
    { value: 13, desc: "abc abc" },
  ];
  filterData: Observable<data[]>;
  myControl = new FormControl();
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  displayFn(subject: data) {
    return subject ? subject.desc : undefined;
  }

  ngOnInit() {
    this.filterData = this.myControl.valueChanges.pipe(
      startWith(""),
      map((value) =>
        this.objects.filter((x) =>
          x.desc.toLowerCase().includes(value.toLowerCase())
        )
      )
    );

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    console.log("in filter", filterValue);
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
