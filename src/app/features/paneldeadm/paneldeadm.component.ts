import { Component } from '@angular/core';

@Component({
  selector: 'app-paneldeadm',
  templateUrl: './paneldeadm.component.html',
  styleUrls: ['./paneldeadm.component.css']
})
export class PaneldeadmComponent {
  selectedModule: string = 'usuarios'; // Por defecto, carga el módulo de usuarios

  // Cambiar el módulo seleccionado
  selectModule(module: string): void {
    this.selectedModule = module;
  }
}
