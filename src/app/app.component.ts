import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  ngOnInit(){
    console.log('oninit');
  }
  
  ngOnChanges(){
    console.log('onchanges');
  }

  ngDoCheck(){
    console.log('docheck');
  }
  ngAfterContentInit(){
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked()');
  }

  ngAfterViewInit()	{
    console.log('ngAfterViewInit()');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked()');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy()');
  }
}
