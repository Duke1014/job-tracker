import { CommonModule } from '@angular/common'
import { Component, Input, Output, EventEmitter, } from '@angular/core'
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-jobform',
  standalone: true,
  templateUrl: './jobform.html',
  styleUrls: ['./jobform.scss'],
  imports: [FormsModule, CommonModule]
})
export class Jobform {
    @Input() showJobForm: boolean = false
    @Output() jobAdded = new EventEmitter<any>()

    job = {
        company: '',
        title: '',
        url: '',
        location: ''
    }

    addJob() {
        this.jobAdded.emit(this.job)
        this.job = { company: '', title: '', url: '', location: '' }
    }
}
