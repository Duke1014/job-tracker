import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Job } from '../models/job'

@Injectable({ providedIn: 'root' })
export class JobService {
    private storageKey = 'job-tracker.jobs.v1'
    private jobsSubject = new BehaviorSubject<Job[]>(this.loadFromStorage())

    jobs$ = this.jobsSubject.asObservable()

    private loadFromStorage(): Job[] {
        try {
            const data = localStorage.getItem(this.storageKey)
            return data ? JSON.parse(data) as Job[] : []
        } catch {
            return []
        }
    }
}