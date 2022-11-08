import global from 'global';

/**
 * Get element from mouse touch point
 * 
 * @param x 
 * @param y 
 * @returns 
 */

export const deepElementFromPoint=(x:number,y:number)=>{
    const element=global.document.elementFromPoint(x,y);

    const crawlShadows=(node:Element):Element =>{
        if(node && node.shadowRoot){
            // elementFromPoint() doesn't exist in Shadow Root
            const nestedElement=(node.shadowRoot as any).elementFromPoint(x,y);

            // nested node is same as the root one
            if (node.isEqualNode(nestedElement)){
                return node;
            }
            // The nested node has shadow DOM too so continue crawling
            if(nestedElement.shadowRoot){
                return crawlShadows(nestedElement);
            }
            // No more shadow DOM
            return nestedElement;
        }
        return node;
    };
    const shadowElement = crawlShadows(element);
    return shadowElement || element;
}