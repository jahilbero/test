import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mypage';
  menuVisible = false;
  toggleMenu(){
    if(this.menuVisible){
      this.menuVisible=false;
    }else{
      this.menuVisible=true;
    }
}
}

