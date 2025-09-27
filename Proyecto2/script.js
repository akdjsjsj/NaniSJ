const messages=[
    "Te amo muchisimo💗",
    "Gracias por estar en mi vida💑",
    "Eres mi persona favorita🥰",
    "Tu sonrisa me ilumina😍",
    "Eres la persona mas hermosa💞",
    "Siempre pienso en ti💖"
    ];

    function createTextoBubble(){
        const bubble=document.createElement("div");
        bubble.className="text-bubble";
        bubble.innerText=messages[Math.floor(Math.random()*messages.length)];

        const left=Math.random()*80+10;
        const top=Math.random()*80+10;

        bubble.style.position="absolute";
        bubble.style.left=left+"vw";
        bubble.style.top=top+"vh";

        const container=document.getElementById("bubbles-text");
        container.appendChild(bubble);

        setTimeout(() =>{
            const rect=bubble.getBoundingClientRect();

            if(rect.right>window.innerWidth){
                const newTop=window.innerHeight-rect.height-10;
                bubble.style.left='${newLeft}px';
            }
            if(rect.bottom>window.innerHeight){
                const newTop=window.innerHeight-rect.height-10;
                bubble.style.top='${newtop}px';
            }
            if (rect.left<0){
                bubble.style.left="10px";
            }
            if (rect.top<0){
                bubble.style.top="10px";
            }
        },10);
        setTimeout(()=>{
            bubble.remove();
        },8000);
    }
    setInterval(createTextoBubble,500);