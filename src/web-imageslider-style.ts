import { css } from 'lit-element';

export const style = css`
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
    transition: opacity ease-out 0.4s;
  }
  ::slotted(img.active){
    display: block !important;
    transition: opacity ease-out 0.2s;
    opacity:1;
  } 
`;