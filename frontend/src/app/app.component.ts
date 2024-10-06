import {Component, OnInit} from '@angular/core';
import {Booking} from './model/Booking';
import {MenuItem} from 'primeng/api';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LogisticsEventService} from './service/logisticsEventService';
import {NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: []
})
export class AppComponent implements OnInit {
  title = 'one-record-front';
  menuPos: "bottom" | "top" | "left" | "right" = "bottom";
  items: MenuItem[] | undefined;
  bookings: Booking[] = [];
  messageList: any[] = [];

  constructor(public http: HttpClient, private logisticService: LogisticsEventService, private router: Router) {
  }

  ngOnInit(): void {
    const api_key = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ik1RZFRjMENlbHRlS0N2bkpVQm5RSWd2ckZySUVEbWtDM0FJVTJPUUd1VHMiLCJ0eXAiOiJKV1QifQ.eyJsb2dpc3RpY3NBZ2VudFVSSSI6Imh0dHBzOi8vdGsub25lLXJlY29yZC5saGluZC5kZXYvbG9naXN0aWNzLW9iamVjdHMvMjdmYzZiOWMiLCJ0aWQiOiJiOGE3NDZhNi1jNTQwLTQzZjQtOTJmMy02MTUwYWQwNTcyMTUiLCJhenBhY3IiOiIxIiwic3ViIjoiMGUzNmI2NzctZDE4Mi00NTk2LWJlNDAtZDFmZGIxNTcwNGZlIiwiYXVkIjoiNWI1MDA1YTktN2JmNS00YTlhLWEzMmItYTYyN2QwYmU4M2I5Iiwib2lkIjoiMGUzNmI2NzctZDE4Mi00NTk2LWJlNDAtZDFmZGIxNTcwNGZlIiwidmVyIjoiMi4wIiwiYXpwIjoiNWI1MDA1YTktN2JmNS00YTlhLWEzMmItYTYyN2QwYmU4M2I5IiwiaWF0IjoxNjg3NjI5MDUzLCJleHAiOjE2ODc2MzI2NTMsImlzcyI6Imh0dHBzOi8vYXV0aC5vbmUtcmVjb3JkLmxoaW5kLmRldi9iOGE3NDZhNi1jNTQwLTQzZjQtOTJmMy02MTUwYWQwNTcyMTUvdjIuMC8iLCJuYmYiOjE2ODc2MjkwNTN9.ChjZXeULVT3bXzHceTisU2Vk5tHusn7HS_8FKf5UlmquEedce2SJbPJOSrrfvoaqXhO4KYN5_WH9KBd3Xq0Lur1-LDQ_nyBbNf0-Tbyb5J6RTPOYXRkQiQaqcnjWkkAHdGuBEySdit7QpdknfR355G-XxBjbdcLaFtpCbp_4M3Ugak0O8ES7RUrhzl6HVP9S3LvtWAfJeZr1OkeXgLodnUDJC93QL9plUglOVNlkZPr0XhFo_Et00I6UiMahfQ4T_KzXs2E-Q4MOUbx_m9s9hh9Xmm6w_FrPyD3U4FKsR6cKXbXjgUA2MLfDeJl88h_GFBDrr8CbIFDibibU-UnG9g";

    const headers = new HttpHeaders({
      'Content-Type': 'application/ld+json',
      'Authorization': `Bearer ${api_key}`
    });
    this.getMessageList();

    const requestOptions = {headers: headers};

    /*    this.http.get('https://tk.one-record.lhind.dev/logistics-objects/23524062023', requestOptions)
          .subscribe((res: any) => {
            console.log(res);
          });*/

    this.router.events.subscribe(e => {
      if (e instanceof NavigationEnd) {
        if (this.router.url === '/operation') {
          this.items = [
            {
              label: 'TK Ground Handling Service Operation',
              routerLink: 'operation',
              icon: 'pi pi-fw pi-box'
            },
          ];
        } else {
          this.items = [
            {
              label: 'SLA Management',
              routerLink: 'one-core',
              icon: 'pi pi-fw pi-map'
            },
            {
              label: 'Flight Planning',
              routerLink: 'flight-planning',
              icon: 'pi pi-fw pi-map'
            },
            {
              label: 'Dashboard',
              routerLink: 'dashboard',
              icon: 'pi pi-fw pi-file'
            },
          ];
        }
      }
    });

  }

  getMessageList() {


    let res = [{
      milestone: 'milestone test',
      location: 'istanbul',
      planned: 'test',
      actual: '10.12.2023',
      test1: 'fake data',
      test2: 'cargo',
    }, {
      milestone: 'test3',
      location: 'angara',
      planned: 'not planned',
      actual: '10.11.2023',
      test1: 'other fake data',
      test2: 'technology',
    }
    ]
    this.messageList = res;

  }


  checkOperation() {
    return this.router.url === '/operation'
  }
}
