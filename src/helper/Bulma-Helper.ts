
import { nanoid } from "nanoid";
import { BreadCrumbElement, CardElement, CheckBoxElement, ColoumnElement, DropDownElement, FileElement, FooterElement, HeroElement, ImageElement, InputElement, MessageElement, ModalElement, NavBarElement, PaginationElement, PanelElement, ProgressElement, RadioElement, SectionElement, SelectElement, TabsElement, TagElement, TextAreaElement, TileElement } from "../util-types/default-data";
import { BulmaTemplate, DomElement } from "../util-types/bulma-data";
import { CURRENT_ELEMENT_OUTLINE, INITAL_OUTLINE_STATUS, PREV_ELEMENT_ID, PREV_ELEMENT_OUTLINE, SELECTED_ELEMENT_ID, SELECTED_OUTLINE } from "../constants";

type InsertType='default' | 'custom';

export default class BulmaHelper {
    /**
     * Check insert type is custom
     * @param instype - to check type
     * @returns {boolean}
     */
    public static isCustom(instype:string):boolean{
        return instype==='custom';
    }
    /**
     * Check insert type is default
     * @param {string} instype -
     * @returns {boolean}
     */
    public static isDefault(instype:string):boolean{
        return instype === 'default';
    }
    /**
     * Check if element is dom element
     * @param elemType {string}
     * @returns {boolean}
     */
    public static isDomElement(elemType:string):boolean{
        return DomElement.includes(elemType);
    }
    /**
     * Check if element is type of template 
     * @param elemType - element to be checked
     * @returns {boolean}
     */
    public static isTemplate(elemType:string):boolean{
        return BulmaTemplate.includes(elemType);
    }

    /**
     * Generate id 
     * @returns {string} - randow id
     */
    public static generateId():string{
        return nanoid();
    }
    /**
     * Get id of seleceted element
     * @param {Element} element - id of the element to be get
     * @return {string} id
     */
    public static getID(element:Element):string{
        return element.id;
    }
    /**
     * Set id of selected element
     * @param {Element} element - element  to be set
     * @param {string} id - id to be set
     * 
     */
    public static setId(element:Element,id:string):void{
        element.id=id;
    }
    /**
     * Get element with an id
     * @param {string} id - whome element to be find
     * @return {Element} - element
     */
    public static getElementById(id:string):Element{
      let  element=document.getElementById(id);
      return element;
    }
    /**
     * Insert element before the selected element
     * @param {Element} newElement - element to be inserted
     * @param {Element} existingElement - element where to be inserted
     * 
     */
    public static insertBefore(newElement:Element,existingElement:Element):void{
        document.insertBefore(existingElement,newElement);
    }
    /**
     * Insert Adjacent Element
     * @param {InsertPosition} position - position where element should be inserted
     * @param {Element} element - element that will be inserted
     * @param {Element} refElement - Reference element about where element should be inserted
     * 
     */
    public static insertAdjacentElement(position:InsertPosition,element:Element,refElement:Element):void{
        refElement.insertAdjacentElement(position,element);
    }
    /**
     * Insert Adjacent HTML
     * @param {InsertPosition} position - position where element should be inserted
     * @param {string} html - element that will be inserted
     * @param {Element} refElement - Reference element about where element should be inserted
     */
    public static insertAdjacentHTML(position:InsertPosition,html:string,refElement:Element):void{
        refElement.insertAdjacentHTML(position,html);
    }
    /**
     * Get Inner HTML of ELement
     * @param {Element} element - whose inner html to be get
     * @return {string} html - inner html
     */
    public static getInnerHTML(element:Element):string{
        return element.innerHTML;
    }
    /**
     * Set Inner HTML of element
     * @param {Element} element - whome inner html to be set
     * @param {string} html - html to be set
     */
    public static setInnerHTML(element:Element,html:string):void{
        element.innerHTML=html;
    }
    /**
     * Append child element 
     * @param {Element} element - element to be inserted
     * @param {Element} refElement - Reference Element
     */
    public static appendChild(element:Element,refElement:Element):void{
        refElement.appendChild(element);
    }
    /**
     * Get list of classNames of element
     * @param {Element} element
     * @return {Array}
     */
    public static getClassList(element:Element):Array<string>{
        let lst=element.classList.value;
        return lst.split(" ");
    }
    /**
     * Toggle CSS class
     * @param {Element} element
     * @param {string} className
     */
    public static toggleClassName(element:Element,className:string):void{
        element.classList.toggle(className);
    }
    /**
     * Add CSS class
     * @param {Element} element
     * @param {string} className
     */
    public static addCSSClass(element:Element,className:string):void{
        element.classList.add(className);
    }
    /**
     * Remove CSS class
     * @param {Element} element
     * @param {string} className
     */
    public static removeCSSClass(element:Element,className:string):void{
        element.classList.remove(className);
    }
    /**
     * Check if passed variable is a function
     * @param fn - function to check
     * @return {boolean}
     */
    public static isFunction(fn:any):fn is Function{
        return typeof(fn) === 'function';
    }
    /**
     * Check if passed argument is an object
     * @param {*}v - object to check
     * @returns {boolean}
     */
    public static isObject(v:any):v is object{
        return typeof(v) === 'object';
    }
    /**
     * Check if passed argument is a string
     * @param {*v} v - variable to check
     * @returns {boolean}
     */
    public static isString(v:any):v is string {
        return typeof(v)==='string';
    }
    /**
     * Check if passed argument is boolean
     * @param {*v} v - variable to check
     * @returns {boolean}
     */
    public static isBoolean(v:any):v is boolean{
        return typeof(v) === 'boolean';
    }
    /**
     * Check if passed argument is number
     * @param {*} v - vriable to check
     * @returns {boolean}
     */
    public static isNumber(v:any):v is number{
        return typeof(v) === 'number';
    }
    /**
     * Check if passed argument is undefined
     * @param {*} v - variable to check
     * @returns {boolean}
     */
    public static isUndefined(v:any):v is undefined{
        return typeof(v)==='undefined';
    }

    /**
     * Make array from array-like collection
     * @param {ArrayLike} collection - collection to convert
     * @returns {Array}
     */
    public static array(collection:ArrayLike<any>):any[]{
        return Array.prototype.slice.call(collection);
    }
    /**
     * Delay method
     * @param {Function} method - method to execute
     * @param {number} timeout - timeout in ms
     */
    public static delay(method:(...args:any[])=>any,timeout:number){
        return function ():void {
            const context=this,args=arguments;
            window.setTimeout(()=>method.apply(context,args),timeout);
        };
    }
    /**
     * Get file extension
     * @param {File} file - file
     * @returns {string}
     */
    public static getFileExtension(file:File):string{
        return file.name.split('.').pop();
    }
    /**
     * Capitalize first letter of the string
     * @param {string} text - text to capitalize
     * @returns {string}
     */
    public static capitalize(text:string):string{
        return text[0].toUpperCase()+text.slice(1);
    }
    /**
     * Returns valid URL. if it is going outside and valid
     * if url has one slash, then it concatenates with window
     * or when url has two lack it appends only protocol
     * @param {string} url - url to pretty
     */
    public static getValidUrl(url:string):string{
        try{
            const urlObject=new URL(url);
            return urlObject.href;
        }catch(e){
            // do nothing but handle below
        }
        if(url.substring(0,2)==='//'){
            return window.location.protocol+url;
    }else{
        return window.location.origin+url;
    }
    }
    /**
     * Create element with a classname
     * @param {string} className 
     * @returns {Element}
     */
    public static createElement(className:string):Element{
        let el=document.createElement('div');
        el.classList.add(className);
        return el;
    }
    /**
     * Create element of a specific type
     * @param {string} type
     * @param {string} className
     * @returns {Element}
     */
    public static createElementWithType(type:string,className:string):Element{
        let el=document.createElement(type);
        el.classList.add(className);
        return el;
    }
    /**
     * Get component template
     * @param choosenElem {string} - string to be compared
     * @returns {string} - Component template  available on bulma
     */
    public static getBulmaComponent(choosenElem:string):string{
        switch (choosenElem) {
            case 'coloumns':
                return ColoumnElement;
            case 'figure':
            case 'img':
            case 'image':
                return ImageElement;
            case 'progress':
                return ProgressElement;
            case 'tag':
                return TagElement;
            case 'breadcrumb':
                return BreadCrumbElement;
            case 'card':
                return CardElement;
            case 'dropdown':
                return DropDownElement;
            case 'message':
                return MessageElement;
            case 'modal':
                return ModalElement;
            case 'navbar':
                return NavBarElement;
            case 'pagination':
                return PaginationElement;
            case 'panel':
                return PanelElement;
            case 'tabs':
                return TabsElement;
            case 'input':
                return InputElement;
            case 'textarea':
                return TextAreaElement;
            case 'select':
                return SelectElement;
            case 'checkbox':
                return CheckBoxElement;
            case 'radio':
                return RadioElement;
            case 'file':
                return FileElement;
            case 'hero':
                return HeroElement;
            case 'section':
                return SectionElement;
            case 'footer':
                return FooterElement;
            case 'tile':
                return TileElement;
            default:
                break;
        }
    }
    /**
     * Create element method for create / add component
     * @param position - position where element sholud be inserted
     * @param element - element that should be inserted
     * @param refElementid - id of reference element
     * @param createtype - choosen type to create
     */
    public static createElementWithSelection(position:InsertPosition,element:string,refElementid:string,createtype:string):void{
        let refElement=this.getElementById(refElementid);
        if(this.isCustom(createtype)){
            if(this.isDomElement(element)){
                let elem=this.createElementWithType(element,'');
                this.insertAdjacentElement(position,elem,refElement);
            }else{
                let elem=this.createElement(element);
                this.insertAdjacentElement(position,elem,refElement);
            }
        }
        if(this.isDefault(createtype)){
            if(this.isTemplate(element)){
                let html=this.getBulmaComponent(element);
                this.insertAdjacentHTML(position,html,refElement);
            }else{
                let elem=this.createElement(element);
                this.insertAdjacentElement(position,elem,refElement);
            }
        }
    }
    /**
     * Set initial outline status '. like default values
     */
    public static initialOutlineStatus():void{
        window.localStorage.setItem(CURRENT_ELEMENT_OUTLINE,INITAL_OUTLINE_STATUS);
        window.localStorage.setItem(SELECTED_ELEMENT_ID,INITAL_OUTLINE_STATUS);
       // window.localStorage.setItem(PREV_ELEMENT_ID,INITAL_OUTLINE_STATUS);
       // window.localStorage.setItem(PREV_ELEMENT_OUTLINE,INITAL_OUTLINE_STATUS);
    }
    /**
     * Get initial status when a element is selected
     * @returns boolean
     */
    public static isInitialElemEmpty():boolean{
        let initEmp=window.localStorage.getItem(SELECTED_ELEMENT_ID);
        return initEmp===INITAL_OUTLINE_STATUS;
    }
    /**
     * Work with outline of selected element and prev element
     * so we can differentiate between , selected and non-selected element.
     * @param elemId - selected element id
     */
    public static handleOutlineStatus(elemId:string):void{
        let elem=document.getElementById(elemId);
        if(this.isInitialElemEmpty()){
            /**
             * work with first selected element
             */
            window.localStorage.setItem(SELECTED_ELEMENT_ID,elemId);
            window.localStorage.setItem(CURRENT_ELEMENT_OUTLINE,elem.style.outline);
            elem.style.outline=SELECTED_OUTLINE;

            let but=document.createElement('button');
            but.classList.add('button');
            but.classList.add('is-primary')
            but.innerText='Button Bulma';
           // let refEl=document.getElementById(refElid);
            elem.insertAdjacentElement('afterend',but);
        }
        if(!this.isInitialElemEmpty()){
            /**
             * Set previous element his default outline
             */
            let prevElemId=window.localStorage.getItem(SELECTED_ELEMENT_ID);
            let prevElem=document.getElementById(prevElemId);
            prevElem.style.outline=window.localStorage.getItem(CURRENT_ELEMENT_OUTLINE);
            /**
             * work with new selected element
             */
            window.localStorage.setItem(SELECTED_ELEMENT_ID,elemId);
            window.localStorage.setItem(CURRENT_ELEMENT_OUTLINE,elem.style.outline);
            elem.style.outline=SELECTED_OUTLINE;


        }
    }
  }
