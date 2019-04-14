import { customElement, html, LitElement, property } from 'lit-element';
import { style } from './web-imageslider-style';

interface IImageSlider {
  src: string,
  srcset?: string,
  class?: string
}

@customElement('web-imageslider')
export class WebImageSlider extends LitElement {
  
  @property({ type: Number }) time = 3;
  @property({ type: Boolean }) lazy = false;

  private images: IImageSlider[] = [];

  static get styles () {
    return [style]
  };

  constructor(){
    super();
    this.querySelectorAll('img').forEach(i => {
      this.images.push({ src: i.src });
    })
    this.images[0].class = 'active';
  }
  
  firstUpdated() {
    
  }

  _slide(){

    this.images.forEach(img => {
      
    });

    // if (this.querySelectorAll('img').length>1){
    //   let active = this.querySelector('.active');
    //   if(!active){
    //     this.querySelector('img').classList.add('active');
    //   }else{
    //     let next = active.nextElementSibling;
    //     active.classList.remove('active');
    //     if(next){
    //       next.classList.add('active')
    //     }else{
    //       this.querySelector('img').classList.add('active');
    //     }
    //   }

    //   setTimeout(()=>{
    //     this._slide()
    //   }, this.time*1000);
    // }else{
    //   this.querySelector('img').classList.add('active');
    // }
  }
  
  render() {
    return html`
      ${ this.images.map(img => html`<img src="${ img.src }" class="${ img.class }"/>`) }
    `;
  }
}