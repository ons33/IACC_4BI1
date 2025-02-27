import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  VAR1="SAE";
  VAR2="data:image/jpeg;base64,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";

  myList=["SAE1","SAE2","SAE3","SAE4","SAE5","SAE6","SAE7","SAE8","SAE9","SAE10"];
  myFirstFunction() {alert("Hello SAE8");}
}