export interface Job {
    id: string;
    title: string;
    company?: string;
    location?: string;
    status?: 'saved' | 'applied' | 'interview' | 'offer' | 'rejected';
    createdAt: string;
    notes?: string;
}