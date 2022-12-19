import { ApplicantService } from '../../../services/applicant/applicant.service';
import { BlacklistService } from '../../../services/blacklist/blacklist.service';
import { ActivatedRoute } from '@angular/router';
import { IGetAllBlacklistResponseModel } from '../../../models/response/blacklist/getAllBlacklist-response';
import { Component, OnInit, enableProdMode } from '@angular/core';

@Component({
  selector: 'app-blacklist',
  templateUrl: './blacklist.component.html',
  styleUrls: ['./blacklist.component.css']
})
export class BlacklistComponentInstructor implements OnInit {

  blacklist: IGetAllBlacklistResponseModel[] = [];
  constructor(private blacklistService: BlacklistService,
    private activatedRoute: ActivatedRoute,
    private applicantService:ApplicantService) { }

  ngOnInit(): void {
    this.getAllBlacklist();
  }
  getAllBlacklist() {
    this.blacklistService
      .getAllBlacklist()
      .subscribe((data) => (this.blacklist = data));
  }

  getApplicantById(id:number){
    this.applicantService.getApplicantById(id).subscribe(data=>{
     console.log(data.firstName)
    })
   }
  
   removeApplicant(id: number, applicantId: number) {
    this.blacklistService.removeApplicant(id).subscribe((response) => {
      // this.toastrService.warning('Aplicant deleted from black list');
      this.applicantService.updateState(applicantId, 1).subscribe();
      // this.toastrService.success('Black list updated');
      // this.router.navigate(['admin-panel/applicant-list']);
    });
  }

}
