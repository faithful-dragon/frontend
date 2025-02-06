import { Component, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-transaction',
  imports: [],
  templateUrl: './transaction.component.html',
  styleUrl: './transaction.component.scss'
})
export class TransactionComponent {
  @ViewChild('dateModal') dateModal!: ElementRef;
//   document.getElementById('customBtn').addEventListener('click', () => {
//     document.getElementById('dateModal').style.display = 'flex';
// });

customBtn(){
  this.dateModal.nativeElement.style.display = 'flex';
}
closeModal(){
  this.dateModal.nativeElement.style.display = "none";
}
// document.querySelector('.modal-btn.cancel').addEventListener('click', () => {
//     document.getElementById('dateModal').style.display = 'none';
// });

// document.querySelectorAll('.filter-btn').forEach(button => {
//     button.addEventListener('click', () => {
//         document.querySelectorAll('.filter-btn').forEach(btn => {
//             btn.classList.remove('active');
//         });
//         button.classList.add('active');
//     });
// });

}
