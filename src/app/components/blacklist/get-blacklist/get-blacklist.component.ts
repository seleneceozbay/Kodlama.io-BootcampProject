import { IGetBlacklistResponseModel } from './../../../models/response/blacklist/getBlacklist-response';
import { ActivatedRoute } from '@angular/router';
import { BlacklistService } from 'src/app/services/blacklist/blacklist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-blacklist',
  templateUrl: './get-blacklist.component.html',
  styleUrls: ['./get-blacklist.component.css'],
})
export class GetBlacklistComponent implements OnInit {
  blacklist: IGetBlacklistResponseModel;
  constructor(
    private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.getBlacklist(params['id']);
    });
  }
  getBlacklist(id) {
    this.blacklistService
      .getBlacklist(id)
      .subscribe((data) => (this.blacklist = data));
  }
}
