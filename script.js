const speechRecognition=window.speechRecognition || window.webkitSpeechRecognition;
const recognition=new speechRecognition();
let output=document.querySelector('.output')
let button=document.querySelector('.btn')

recognition.continuous=false;
recognition.lang='en-IN';
recognition.interimResult=false;

button.addEventListener('click',()=>{
    recognition.start();
    button.textContent='listening..'
});

recognition.onresult=(e) =>{
    let transcript = e.results[0][0].transcript.toLowerCase(); 
    output.innerHTML=transcript + "...";
        button.textContent='start'
};
recognition.onerror = (event) => {
    console.error('Speech recognition error:', event.error);
};