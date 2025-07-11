

let isDragging=false;
let startScrollTop=0;
let startY=0;


export const update = ()=>{
    const container=document.getElementById('scroll-container');
    const content=document.getElementById('scroll-content');
    const track=document.getElementById('scroll-track');
    const thumb=document.getElementById('scroll-thumb');


    const containerHeight=container.offsetHeight;
    const contentHeight=content.scrollHeight;
    const scrollTop=content.scrollTop;

    const thumbHeight=Math.max(20,(containerHeight/contentHeight)*containerHeight);
    const maxScroll=contentHeight-containerHeight;
    const maxThumbTravel=containerHeight-thumbHeight-20;
    
    const thumbPos=maxScroll>0?(scrollTop/maxScroll)*maxThumbTravel:0;

    thumb.style.height=thumbHeight+'px'
    thumb.style.top=thumbPos+'px';
    
}

export function events(e,content){
        e.preventDefault();        // Stop default page scroll
        content.scrollTop += e.deltaY;  // Scroll our content
        update();
}


export function drag(e,content,container){
    
        isDragging=true;
        startY=e.clientY;
        startScrollTop=content.scrollTop;

        document.addEventListener('mousemove',handleMouseMove);
        document.addEventListener('mouseup',handleMouseup);


    function handleMouseMove(e){
        if(!isDragging) return;
        const movedDistance=e.clientY-startY;
        const containerHeight=container.offsetHeight;
        const contentHeight=content.scrollHeight;

        const scrollRatio=movedDistance/containerHeight;
        content.scrollTop=startScrollTop+(scrollRatio*contentHeight);
        update();
    }

    function handleMouseup(){
        isDragging=false
        document.removeEventListener("mousemove",handleMouseMove);
        document.removeEventListener("mouseup",handleMouseup);
    }
}
