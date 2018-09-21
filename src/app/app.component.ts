import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  private themeWrapper = document.querySelector('body');
  title = 'app';
  defaultColor = "#555";
  logo = 'http://www.cedrotech.com/wp-content/uploads/2015/10/logo-cedro.png';

  ngOnInit() {
    this.themeWrapper.style.setProperty('--btnBackground', this.defaultColor);
  }
  changeColors(color, logo) {
    this.themeWrapper.style.setProperty('--btnBackground', color);
    this.logo = logo;
  }
}
