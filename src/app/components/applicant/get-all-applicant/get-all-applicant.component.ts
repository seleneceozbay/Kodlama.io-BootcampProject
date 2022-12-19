import { UserService } from './../../../services/user.service';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IGetAllApplicantResponseModel } from './../../../models/response/applicant/getAllApplicant-response';
import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-get-all-applicant',
  templateUrl: './get-all-applicant.component.html',
  styleUrls: ['./get-all-applicant.component.css']
})
export class GetAllApplicantComponent implements OnInit {

  applicants:IGetAllApplicantResponseModel[]=[];
  constructor(private applicantService:ApplicantService,
    private userService:UserService) { }

  ngOnInit(): void {
    this.getAllApplicant();
  }

  getAllApplicant(){
    this.applicantService.getAllApplicant().subscribe(data=>this.applicants=data)
  }

  // deleteApplicant(data):void{
  //   this.applicants=this.applicants.filter((c)=> c !== data);
  //   this.applicantService.applicantDelete(data).subscribe();
  //   this.userService.applicantDelete(data).subscribe();
  // }
  deleteApplicant(id:number){
    const swalWithBootstrapButtons=Swal.mixin({
      customClass:{
        confirmButton:'btn bg-gradient-info active ms-3',
        cancelButton:'btn bg-gradient-primary active',
      },
      buttonsStyling:false,

    });
    swalWithBootstrapButtons.fire({
      title:'Emin misiniz',
      text:'Bu işlem geri alınamaz',
      icon:'warning',
      showCancelButton:true,
      confirmButtonText:'Evet',
      cancelButtonText:'Hayır',
      reverseButtons:true,
    })
    .then((result)=>{
      if(result.isConfirmed){
        this.applicantService.applicantDelete(id).subscribe(()=>{
          swalWithBootstrapButtons.fire(
            'Silindi',
            'İstediğiniz veri silindi',
            'success'
          );
        }),
        setTimeout(()=>{
          window.location.reload();
        },1000);
      }else if(result.dismiss===Swal.DismissReason.cancel){
        swalWithBootstrapButtons.fire(
          'İptal Edildi',
          'Veriniz hala güvende',
          'error'
        );
      }
    })
  }

  

}
