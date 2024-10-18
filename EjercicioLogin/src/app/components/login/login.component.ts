import { Component, Input, signal} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})


export class LoginComponent {

  @Input() email = '';
  @Input() password = '';

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  enviarUsuario(correo: string, contrasenia: string){
    this.email = correo;
    this.password = contrasenia;
    console.log("Correo: "+this.email, "Contraseña: "+this.password);
  }
}

