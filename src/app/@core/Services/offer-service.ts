import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OfferModel } from '../../pages/dashboard/Models/offer-model';

@Injectable({providedIn:'root'})
export class OfferService {
    constructor(private http: HttpClient) {}
    private apiUrl = 'https://localhost:7171/api/Offer/GetActiveOffer';
    // GET: Retrieve a specific task by ID
  getOfferByStaffId(customerId: number): Observable<OfferModel> {
    const url = `${this.apiUrl}?id=${customerId}`;
    let result = this.http.get<OfferModel>(url);
    return result
  }
} 

/* 
Örnekler

  getAllTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // GET: Retrieve a specific task by ID
  getTaskById(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.get<any>(url);
  }

  // POST: Create a new task
  createTask(taskData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, taskData);
  }

  // POST: Update an existing task by ID
  updateTask(taskId: number, taskData: any): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.post<any>(url, taskData);
  }

  // POST: Delete a task by ID
  deleteTask(taskId: number): Observable<any> {
    const url = `${this.apiUrl}/${taskId}`;
    return this.http.delete<any>(url);
  }


*/ 