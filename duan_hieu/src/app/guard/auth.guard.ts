import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  private localStorageKey = 'user';
  constructor(private router: Router) {}
  getUser() {
    const userString = localStorage.getItem(this.localStorageKey);
    return JSON.parse(userString!);
  }
  canActivate(): boolean {
    const user = this.getUser();
    const role = user.user.role;
    if (role === "admin") {
      return true;
    } else {
        alert('Ban khong co quyen truy cap trang quan tri!')
      this.router.navigate(['/']); // Chuyển hướng đến trang chủ
      return false;
    }
  }
}
