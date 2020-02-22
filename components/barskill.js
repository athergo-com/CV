export default class BarSkill extends HTMLElement {
    static get observedAttributes(){ return ["percent"];}
    constructor(){
        super();
        const shadowRoot = this.attachShadow({ mode: 'open'});
        this._percent = this.getAttribute("percent");
        shadowRoot.innerHTML = `
        <style>
         #bar-skill{
            position:relative;
            height:0.5rem;
            margin:2rem 0;
            background-color: var(--hint);
         }

         #bar-skill-progress {
            position:absolute;
            height:0.5rem;
            background-color: var(--primary);
            top:0;
            left:0;
            width:` + this.percent +`
         }

        #bar-skill-dot {
            position:absolute;
            height:1rem;
            width:1rem;
            background:var(--dark);
            top:-0.25rem;
            transform:rotate(45deg);
            left: calc(`+ this.percent +` - 0.5rem);
        }

        </style>
        <div id="bar-skill">
            <div id="bar-skill-progress"></div>
            <div id="bar-skill-dot"></div>
        </div>
        `
     
    }

    get percent() {
        return this._percent;
      }

      set percent(v) {
        this.setAttribute("percent", v);
      }
    connectedCallback(){

    }

    disconnectedCallback(){

    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'percent' && oldValue !== newValue){
            this._percent = newValue; 
        }
       
    }
}

window.customElements.define('bar-skill',BarSkill);