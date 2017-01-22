import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
//import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {AppComponent} from './components/app/app.components';
import {AppModule} from './components/app/app.module';
import { APP_ROUTER_PROVIDERS } from './components/routes/app.routes';
import {enableProdMode} from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


platformBrowserDynamic().bootstrapModule(AppModule);

declare var _root:any;


/*


if(_root.globals.enviroment != "development"){
  enableProdMode();
}

bootstrap(AppModule, [
  APP_ROUTER_PROVIDERS
]);
*/
