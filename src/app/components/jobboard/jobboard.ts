import { Component } from '@angular/core';
import { Jobform } from "../jobform/jobform";

@Component({
  selector: 'app-jobboard',
  standalone: true,
  templateUrl: './jobboard.html',
  styleUrls: ['./jobboard.scss'],
  imports: [Jobform]
})
export class Jobboard {
  showJobForm: boolean = false

  onJobAdded(job: any) {
    this.showJobForm = false

    console.log('New job added:', job);
  }
}
