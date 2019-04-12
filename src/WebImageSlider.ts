import { LitElement, html, customElement, property } from 'lit-element';

@customElement('web-imageslider')
export class WebImageSlider extends LitElement {
  
  @property({ type: Number }) time: number;

  constructor() {
    super();
    this.time = 3;
  }
  
  firstUpdated() {
    this._slide();
  }

  _slide(){
    if (this.querySelectorAll('img').length>1){
      let active = this.querySelector('.active');
      if(!active){
        this.querySelector('img').classList.add('active');
      }else{
        let next = active.nextElementSibling;
        active.classList.remove('active');
        if(next){
          next.classList.add('active')
        }else{
          this.querySelector('img').classList.add('active');
        }
      }

      setTimeout(()=>{
        this._slide()
      }, this.time*1000);
    }else{
      this.querySelector('img').classList.add('active');
    }
  }
  render() {
    return html`
    <style>
        :host{
          display:block;
          overflow:hidden;
          position:relative;
          z-index:0;
          contain: content;
        }
        ::slotted(img) {
          display:none;
          width:100%;
          height:100%;
          object-fit: cover;
          position:absolute;
          top:0px; left:0px;
          opacity: 0;
          transition: opacity ease-out 0.2s;
        }
        ::slotted(img.active){
          display: block !important;
          opacity:1;
        } 
      </style>
      <slot></slot>
      `;
  }
}