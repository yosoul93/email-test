import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material/table';
import { EmailListService } from './email-list.service';
import { Email } from 'src/app/shared/models/email.type';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Animations } from 'src/app/shared/animations';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.scss'],
  animations: Animations
})
export class EmailListComponent implements OnInit, OnDestroy {

  loading: boolean = true;
  displayedColumns: string[] = ['from', 'to', 'subject', 'date'];
  dataSource!: MatTableDataSource<Email>;

  dateRange: FormGroup = new FormGroup({
    startDate: new FormControl( new Date("Sun Oct 27 2020")),
    endDate: new FormControl(new Date()),
  });

  @ViewChild(MatSort) sort: MatSort;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private router: Router,
    public _emailListService: EmailListService
  ) {
    this._unsubscribeAll = new Subject();
    
  }

  ngOnInit(): void {
    this._emailListService.getEmailList()
      .subscribe((res: Email[]) => {
        takeUntil(this._unsubscribeAll),
        this.dataSource = new MatTableDataSource<Email>(res);
        // subscribe to filter data by date range
        this.dataSource.filterPredicate = (data) => {
          let dateRange = JSON.parse(JSON.stringify(this.dateRange.value));
          if (dateRange.startDate && dateRange.endDate) {
            return data.date >= dateRange.startDate && data.date <= dateRange.endDate;
          }
          return true;
        }
        // sort data
        setTimeout(() => this.dataSource.sort = this.sort );
        this.loading = false;
      });
  }

  applyPeriodFilter(): any {
    if(this.dataSource){
      this.dataSource.filter = ''+Math.random();
    }
  }

  goToDetail(id): void {
    this.router.navigate(['email-list/detail/'+id])
  }


  ngOnDestroy(): void{
    if(this._unsubscribeAll){
      this._unsubscribeAll.next();
      this._unsubscribeAll.complete();
    }
  }

}
