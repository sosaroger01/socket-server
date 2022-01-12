const lblOnline=document.querySelector("#lblOnline");
const lblOffline=document.querySelector("#lblOffline");

const txtMsg = document.querySelector("#txtMsg");
const btnSend = document.querySelector("#btnSend");


const socket = io();

socket.on("connect", () => {
    lblOffline.style.display= 'none';
    lblOnline.style.display= '';
});



socket.on("disconnect", () => {
    lblOnline.style.display= 'none';
    lblOffline.style.display= '';
});

socket.on("message", (payload) => {
    console.log(payload);
});

btnSend.addEventListener("click",()=>{
    const msg=txtMsg.value;
    const payload= {
        msg,
        id:'123',
        date: new Date().getTime()
    }
    socket.emit("message", payload, (id)=>{
        console.log("desde el server",id);
    });
});