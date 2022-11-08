import { DecoratorFunction, useEffect } from "@storybook/addons";
import type {AnyFramework, PartialStoryFn as StoryFunction, StoryContext} from '@storybook/csf';
import BulmaHelper from "../helper/Bulma-Helper";
import { deepElementFromPoint } from "../helper/deepElement";

let nodeAtPointerRef:Element;
function findElement(x:number,y:number){
    nodeAtPointerRef=deepElementFromPoint(x,y);
    if(!nodeAtPointerRef.id){
       nodeAtPointerRef.id=BulmaHelper.generateId();
    }
    BulmaHelper.handleOutlineStatus(nodeAtPointerRef.id);
   
}
export const withBulma:DecoratorFunction=(
    StoryFn: StoryFunction<AnyFramework>,
    context:StoryContext<AnyFramework>
)=>{
    const {bulmaEnabled}=context.globals;

    useEffect(()=>{
        const onclick=(event:MouseEvent)=>{
            window.requestAnimationFrame(()=>{
                event.stopPropagation();
                findElement(event.clientX,event.clientY);
            });
        }
        if(bulmaEnabled){
            BulmaHelper.initialOutlineStatus();
           document.addEventListener('click',onclick);
        }
        return ()=>{
            document.removeEventListener('click',onclick);
        }
    },[]);

    return StoryFn();

}