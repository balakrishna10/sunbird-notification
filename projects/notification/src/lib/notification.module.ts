import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationCardComponent } from './notification-card/notification-card.component';

@NgModule({
  declarations: [
    NotificationComponent,
    NotificationCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NotificationComponent,
    NotificationCardComponent
  ]
})
export class NotificationModule {
  static forRoot(notificationService): ModuleWithProviders {
    return {
      ngModule: notificationService,
      providers: [
        {provide: 'NOTIFICATION_SERVICE', useClass: notificationService}
      ]
    };
  }
}
