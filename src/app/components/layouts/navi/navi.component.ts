import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {
  isAuth:boolean;
  constructor() { }

  ngOnInit(): void {

  }
//  logout(){
//    if(this.isAuth){
// localStorage.clear();
// this.router.navigate(["applicantlogin"]);
//    }
//   }

}
