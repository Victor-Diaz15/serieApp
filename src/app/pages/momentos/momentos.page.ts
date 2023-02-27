import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';
import { Momento } from 'src/app/interfaces/momento.interface';
import { SerieService } from 'src/app/services/serie.service';


@Component({
  selector: 'app-momentos',
  templateUrl: './momentos.page.html',
  styleUrls: ['./momentos.page.scss'],
})
export class MomentosPage implements OnInit {

  momento1!: Momento;
  momento2!: Momento;
  momento3!: Momento;

  constructor(private serieService: SerieService, private animationCtrl: AnimationController) { }

  ngOnInit() {
    this.momento1 = this.serieService.momentos[0];
    this.momento2 = this.serieService.momentos[1];
    this.momento3 = this.serieService.momentos[2];
  }

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
