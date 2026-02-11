* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Georgia', 'Times New Roman', serif;
    background: linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow-x: hidden;
}

.hearts-background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

.heart {
    position: absolute;
    font-size: 20px;
    animation: float 6s ease-in infinite;
    opacity: 0;
}

.heart:nth-child(1) { left: 10%; animation-delay: 0s; }
.heart:nth-child(2) { left: 30%; animation-delay: 1s; font-size: 30px; }
.heart:nth-child(3) { left: 50%; animation-delay: 2s; font-size: 25px; }
.heart:nth-child(4) { left: 70%; animation-delay: 3s; }
.heart:nth-child(5) { left: 90%; animation-delay: 4s; font-size: 35px; }

@keyframes float {
    0% {
        bottom: -100px;
        opacity: 1;
    }
    100% {
        bottom: 100%;
        opacity: 0;
        transform: rotate(360deg);
    }
}

.container {
    position: relative;
    z-index: 2;
    max-width: 800px;
    width: 90%;
    margin: 20px;
}

.proposal-box {
    background: rgba(255, 240, 245, 0.95);
    border-radius: 20px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(255, 105, 180, 0.3);
    text-align: center;
    animation: slideIn 1s ease-out;
    border: 3px solid #ff69b4;
}

@keyframes slideIn {
    from {
        opacity: 0;
        transform: translateY(-50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.greeting {
    color: #c71585;
    font-size: 2em;
    margin-bottom: 10px;
    animation: pulse 2s infinite;
    font-family: 'Brush Script MT', cursive;
}

.message {
    color: #db7093;
    font-size: 1.5em;
    margin-bottom: 10px;
    font-family: 'Brush Script MT', cursive;
}

.question {
    color: #b0306e;
    font-size: 1.2em;
    margin-bottom: 20px;
}

.big-question {
    color: #ff1493;
    font-size: 2.2em;
    margin-bottom: 30px;
    text-shadow: 2px 2px 4px rgba(255, 20, 147, 0.2);
    animation: heartbeat 1.5s infinite;
    font-weight: bold;
}

@keyframes heartbeat {
    0% { transform: scale(1); }
    14% { transform: scale(1.1); }
    28% { transform: scale(1); }
    42% { transform: scale(1.1); }
    70% { transform: scale(1); }
}

.buttons {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 30px;
}

button {
    padding: 15px 40px;
    font-size: 1.2em;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: bold;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.yes-btn {
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: white;
    border: 2px solid #ff69b4;
}

.yes-btn:hover {
    transform: scale(1.1);
    box-shadow: 0 8px 20px rgba(255, 105, 180, 0.4);
}

.no-btn {
    background: white;
    color: #ff1493;
    border: 2px solid #ff1493;
}

.no-btn:hover {
    background: #ff1493;
    color: white;
}

#responseMessage {
    margin-top: 30px;
    animation: fadeIn 1.5s;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}

@keyframes fadeIn {
    from { 
        opacity: 0; 
        transform: scale(0.9); 
    }
    to { 
        opacity: 1; 
        transform: scale(1); 
    }
}

.love-message {
    background: linear-gradient(145deg, #fff0f5, #ffe4e1);
    padding: 40px;
    border-radius: 30px;
    color: #b0306e;
    font-size: 1.3em;
    line-height: 1.8;
    border: 3px solid #ffb6c1;
    box-shadow: 0 10px 30px rgba(255, 182, 193, 0.5);
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
    font-family: 'Brush Script MT', 'Georgia', cursive;
    letter-spacing: 1px;
    word-spacing: 5px;
}

.hidden {
    display: none !important;
}

@media (max-width: 600px) {
    .proposal-box {
        padding: 20px;
    }
    
    .greeting { font-size: 1.5em; }
    .message { font-size: 1.2em; }
    .big-question { font-size: 1.8em; }
    
    .buttons {
        flex-direction: column;
        align-items: center;
    }
    
    button {
        width: 200px;
    }
    
    .love-message {
        padding: 25px;
        font-size: 1.1em;
    }
}
