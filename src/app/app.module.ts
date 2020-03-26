import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CelectorComponent } from './celector/celector.component';
import { OrganizerComponent } from './organizer/organizer.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CelectorComponent,
    OrganizerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
