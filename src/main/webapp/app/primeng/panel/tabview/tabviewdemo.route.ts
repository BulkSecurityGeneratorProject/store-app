import { Route } from '@angular/router';
import { UserRouteAccessService } from '../../../core/auth/user-route-access-service';
import { TabViewDemoComponent } from './tabviewdemo.component';

export const tabviewDemoRoute: Route = {
  path: 'tabview',
  component: TabViewDemoComponent,
  data: {
    authorities: ['ROLE_USER'],
    pageTitle: 'primeng.panel.tabview.title'
  },
  canActivate: [UserRouteAccessService]
};
