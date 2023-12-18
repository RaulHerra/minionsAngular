import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  name : string = "";
  @Output() minionName : EventEmitter<string> = new EventEmitter<string>;

  search(name : string){
    this.minionName.emit(name);
  }
}
