import { customElement, html, LitElement, property } from 'lit-element';
import { style } from './web-imageslider-style';

interface ImageSlider{
  src: String,
  srcset?: String
}

@customElement('web-imageslider')
export class WebImageSlider extends LitElement {
  
  @property({ type: Number }) time = 3;
  @property({ type: Boolean }) lazy = false;

  private images: ImageSlider[];

  static get styles () {
    return [style]
  };

  constructor(){
    super();
    this.querySelectorAll('img').forEach(i => {
      console.log(i)
      this.images.push({ src: i.src });
    })
  }
  
  firstUpdated() {
    this._slide();
  }

  _slide(){

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
      ${ this.images.map(img => { 
        
       }) }
    `;
  }
}