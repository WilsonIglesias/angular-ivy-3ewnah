import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { WilsonComponentComponent } from './wilson-component/wilson-component.component';
import { WilsonListaComponentComponent } from './wilson-lista-component/wilson-lista-component.component';
import { WilsonDisciplinasServiceService } from './wilson-disciplinas-service.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: WilsonComponentComponent },
      { path: 'list', component: WilsonListaComponentComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    WilsonComponentComponent,
    WilsonListaComponentComponent,
  ],
  bootstrap: [AppComponent],
  providers: [
    WilsonDisciplinasServiceService
    
  ],
})
export class AppModule {}
