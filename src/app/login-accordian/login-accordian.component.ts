import { Component, OnInit } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';


@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
  selector: 'app-login-accordian',
  templateUrl: './login-accordian.component.html',
  styleUrls: ['./login-accordian.component.css']
})
export class LoginAccordianComponent implements OnInit {

  ngOnInit() {
  }

  isCollapsed = true;
  constructor(private sanitizer: DomSanitizer) { }

  trustSrcUrl = function (data) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(data);
  }

  // Changing the Panel Icon
  ontoggle(idname: string) {
    let icon = "";
    if (idname === "accordion4") {
      icon = "icon4";
    }

    let cN = document.getElementById(icon).className;

    if (icon === "icon4") {

      if (document.getElementById("icon2").className === "glyphicon glyphicon-minus") {
        document.getElementById("icon2").className = "glyphicon glyphicon-plus";
      }

      if (cN === "glyphicon glyphicon-plus") {
        document.getElementById(icon).className = "glyphicon glyphicon-minus";
      }
      else {
        document.getElementById(icon).className = "glyphicon glyphicon-plus";
      }
    }
  }

}
