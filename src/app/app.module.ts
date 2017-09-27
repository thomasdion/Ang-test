import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { RouterModule, Routes} from '@angular/router';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { HomeComponent } from './home/home.component';

const appRouting : Routes =[
 { path:'', component: HomeComponent },
 { path:'home', component: HomeComponent },
 { path:'servers', component:ServersComponent, data : {title:"Add Server"} }

]
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    RouterModule.forRoot(appRouting, {enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
