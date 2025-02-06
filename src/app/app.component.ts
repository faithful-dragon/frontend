import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { transition } from '@angular/animations';
import { TransactionComponent } from './transaction/transaction.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,TransactionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  toogle: boolean = true;
  title = 'frontend';

}