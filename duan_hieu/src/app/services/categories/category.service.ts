import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private htpp: HttpClient) { }
private API = 'http://localhost:8080/api/categories';

 getAllCategory(): Observable<any[]> {
  return this.htpp.get<any[]>(this.API)
 }
//  getOneProduct(id: string | number): Observable<any> {
//   return this.htpp.get<any>(`${this.API}/${id}`)
//  }
 addCategory(product: any): Observable<any> {
  return this.htpp.post<any>(`${this.API}`, product)
 }
 updateCategory(product: any, id: string | number): Observable<any> {
  return this.htpp.put<any>(`${this.API}/${id}`, product)
 }
 deleteCategory(id: string | number): Observable<any> {
  return this.htpp.delete<any>(`${this.API}/${id}`)
 }
}
