var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { customElement, html, LitElement, property } from 'lit-element';
import { style } from './web-imageslider-style';
let WebImageSlider = class WebImageSlider extends LitElement {
    constructor() {
        super();
        this.time = 3;
        this.lazy = false;
        this.querySelectorAll('img').forEach(i => {
            console.log(i);
            this.images.push({ src: i.src });
        });
    }
    static get styles() {
        return [style];
    }
    ;
    firstUpdated() {
        this._slide();
    }
    _slide() {
    }
    render() {
        return html `
      ${this.images.map(img => {
        })}
    `;
    }
};
__decorate([
    property({ type: Number })
], WebImageSlider.prototype, "time", void 0);
__decorate([
    property({ type: Boolean })
], WebImageSlider.prototype, "lazy", void 0);
WebImageSlider = __decorate([
    customElement('web-imageslider')
], WebImageSlider);
export { WebImageSlider };
//# sourceMappingURL=web-imageslider.js.map