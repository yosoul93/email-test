import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Email } from 'src/app/shared/models/email.interface';
import { EmailListService } from '../email-list.service';

@Component({
  selector: 'app-email-detail',
  templateUrl: './email-detail.component.html',
  styleUrls: ['./email-detail.component.scss']
})
export class EmailDetailComponent implements OnInit {
  
  animationDirection: string = 'left';
  emailDetail: Email;
  
  private _unsubscribeAll: Subject<any>;

  constructor(
    public _emailListService: EmailListService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this._emailListService.getEmailDetail(params['id'])
        .subscribe((email: Email) => {
          takeUntil(this._unsubscribeAll),
          this.emailDetail = email;
          // this.loading = false;
        });
    });
  }

  ngOnDestroy(): void{
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
