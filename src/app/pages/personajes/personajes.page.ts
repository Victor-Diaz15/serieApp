import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
})
export class PersonajesPage {

  mike: any = {
    nombre: 'Mike Ross',
    descripcion: 'Un joven inteligente pero sin licencia de abogado que consigue un trabajo como asistente legal en Pearson Hardman.',
    photo: 'https://imgs.search.brave.com/8esgUl9XF8vklg8yPKjT-_dj-cHC2orpkrE1xG8oEWs/rs:fit:568:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5C/ZGoxeFlkOWZvMUZN/Wnh3dG5hbWNnSGFH/TCZwaWQ9QXBp'
  }

  harvey: any = {
    nombre: 'Harvey Specter',
    descripcion: 'Un abogado astuto y ambicioso que se convierte en el mentor y jefe de Mike en la firma.',
    photo: 'https://imgs.search.brave.com/k3xXngkIZMyr2WcTbAMHkO6xnXUfU7JAZRcY34GHuQQ/rs:fit:410:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC43/YWRucEw5TE9JR1hS/blpUUkJSQ0tRSGFJ/aiZwaWQ9QXBp'
  }

  louis: any = {
    nombre: 'Louis Litt',
    descripcion: 'Un abogado ambicioso y competitivo que trabaja en Pearson Hardman y a menudo entra en conflicto con Harvey y Mike.',
    photo: 'https://imgs.search.brave.com/TVvfUzGA0MPo4sVZsZ9dOkfWe2BT-CnAtvRQKpO-z4A/rs:fit:498:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5o/X0x3aUFkZkxCV1Uz/b2pUSklUQlBBSGFI/RCZwaWQ9QXBp'
  }

  constructor(private animationCtrl: AnimationController) {}

  enterAnimation = (baseEl: HTMLElement) => {
    const root = baseEl.shadowRoot;

    const backdropAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('ion-backdrop')!)
      .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = this.animationCtrl
      .create()
      .addElement(root?.querySelector('.modal-wrapper')!)
      .keyframes([
        { offset: 0, opacity: '0', transform: 'scale(0)' },
        { offset: 1, opacity: '0.99', transform: 'scale(1)' },
      ]);

    return this.animationCtrl
      .create()
      .addElement(baseEl)
      .easing('ease-out')
      .duration(500)
      .addAnimation([backdropAnimation, wrapperAnimation]);
  };

  leaveAnimation = (baseEl: HTMLElement) => {
    return this.enterAnimation(baseEl).direction('reverse');
  };

}
