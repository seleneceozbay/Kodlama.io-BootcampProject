import  Swal  from 'sweetalert2';
import { IGetAllEmployeeResponseModel } from './../../../models/response/employee/getAllEmployee-response';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../../services/employee/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-all-employee',
  templateUrl: './get-all-employee.component.html',
  styleUrls: ['./get-all-employee.component.css']
})
export class GetAllEmployeeComponent implements OnInit {
  employees:IGetAllEmployeeResponseModel[]=[];
  constructor(
    private employeeService:EmployeeService,
    private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => this.getAllEmployee());
  }

  getAllEmployee(){
    this.employeeService
    .getAllEmployee()
    .subscribe((data) => (this.employees = data));
  }
  // deleteEmployee(employee){
  //   this.employees = this.employees.filter((a) => a !== employee);
  //   this.employeeService.deleteEmployee(employee).subscribe();
  // }
  deleteEmployee(id:number){
    const swalWithBootstrapButtons=Swal.mixin({
      customClass:{
        confirmButton:'btn bg-gradient-info active ms-3',
        cancelButton:'btn bg-gradient-primary active',

      },
      buttonsStyling:false,
    });
    swalWithBootstrapButtons.fire({
      title: 'Emin misiniz ?',
      text: 'Bu işlem geri alınamaz',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Evet',
      cancelButtonText: 'Hayır',
      reverseButtons: true,
    })
    .then((result)=>{
      if(result.isConfirmed){
        this.employeeService.delete(id).subscribe(()=>{
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
          'iptal edildi',
          'Veriniz güvende',
          'error'
        )
      }
    })
  }
}
