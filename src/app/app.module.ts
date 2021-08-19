import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { UpdateBackgroundPipe } from './update-background.pipe';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, UpdateBackgroundPipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
