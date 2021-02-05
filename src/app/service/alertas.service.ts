import { Injectable } from '@angular/core';
import { BsComponentRef } from 'ngx-bootstrap/component-loader';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { AlertasComponent } from '../alertas/alertas.component';

@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(
    private bdModalService: BsModalService
  ) { }

  private showAlert(msg: string, type: string){
    const bsModalRef: BsModalRef = this.bdModalService.show(AlertasComponent)
    bsModalRef.content.type = type
    bsModalRef.content.message = msg

  }
  showAlertDanger(message: string){
    this.showAlert(message, 'danger')
  }
  showAlerSuccess(message: string){
    this.showAlert(message, 'success')
  }
  showAlerInfo(message: string){
    this.showAlert(message, 'info')
  }
}
