// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const surpriseBtn = document.getElementById('surpriseBtn');
    const surprise = document.getElementById('surprise');
    
    // Add click event to surprise button
    surpriseBtn.addEventListener('click', function() {
        // Toggle the hidden class
        surprise.classList.toggle('hidden');
        
        // Change button text
        if (surprise.classList.contains('hidden')) {
            surpriseBtn.textContent = 'Clique para uma surpresa! 🎁';
        } else {
            surpriseBtn.textContent = 'Esconder surpresa 💕';
            
            // Add some sparkle effects
            createSparkles();
        }
    });
    
    // Create sparkle animation when surprise is revealed
    function createSparkles() {
        const sparkleContainer = document.createElement('div');
        sparkleContainer.style.position = 'fixed';
        sparkleContainer.style.top = '0';
        sparkleContainer.style.left = '0';
        sparkleContainer.style.width = '100%';
        sparkleContainer.style.height = '100%';
        sparkleContainer.style.pointerEvents = 'none';
        sparkleContainer.style.zIndex = '1000';
        
        document.body.appendChild(sparkleContainer);
        
        // Create multiple sparkles
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                createSparkle(sparkleContainer);
            }, i * 100);
        }
        
        // Remove container after animation
        setTimeout(() => {
            document.body.removeChild(sparkleContainer);
        }, 3000);
    }
    
    function createSparkle(container) {
        const sparkle = document.createElement('div');
        sparkle.innerHTML = '✨';
        sparkle.style.position = 'absolute';
        sparkle.style.fontSize = '20px';
        sparkle.style.left = Math.random() * 100 + '%';
        sparkle.style.top = Math.random() * 100 + '%';
        sparkle.style.animation = 'sparkle 2s ease-out forwards';
        
        container.appendChild(sparkle);
        
        // Remove sparkle after animation
        setTimeout(() => {
            if (container.contains(sparkle)) {
                container.removeChild(sparkle);
            }
        }, 2000);
    }
    
    // Add CSS for sparkle animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkle {
            0% {
                transform: scale(0) rotate(0deg);
                opacity: 1;
            }
            50% {
                transform: scale(1) rotate(180deg);
                opacity: 1;
            }
            100% {
                transform: scale(0) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add some celebration messages that appear randomly
    const celebrationMessages = [
        "💖 Você é incrível!",
        "🌟 Meu mundo é melhor com você!",
        "💕 Te amo infinitamente!",
        "🦋 Você faz meu coração voar!",
        "🌙 Você é minha lua e estrelas!"
    ];
    
    // Show random celebration message every 10 seconds
    setInterval(() => {
        showCelebrationMessage();
    }, 10000);
    
    function showCelebrationMessage() {
        const message = celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)];
        
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '20px';
        messageDiv.style.right = '20px';
        messageDiv.style.background = 'rgba(255, 182, 193, 0.95)';
        messageDiv.style.color = '#d63384';
        messageDiv.style.padding = '15px 20px';
        messageDiv.style.borderRadius = '20px';
        messageDiv.style.fontSize = '1.1rem';
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
        messageDiv.style.zIndex = '1001';
        messageDiv.style.animation = 'slideIn 0.5s ease-out, slideOut 0.5s ease-out 3s forwards';
        
        document.body.appendChild(messageDiv);
        
        // Remove message after 4 seconds
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 4000);
    }
    
    // Add CSS for message animations
    const messageStyle = document.createElement('style');
    messageStyle.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @keyframes slideOut {
            from {
                transform: translateX(0);
                opacity: 1;
            }
            to {
                transform: translateX(100%);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(messageStyle);
    
    // Add click effect to candles with celebration
    const candles = document.querySelectorAll('.candle');
    let candlesBlown = 0;
    
    candles.forEach(candle => {
        candle.addEventListener('click', function() {
            const flame = this.querySelector('.flame');
            flame.style.animation = 'blowOut 0.5s ease-out forwards';
            candlesBlown++;
            
            // Show special message when all candles are blown
            if (candlesBlown === candles.length) {
                setTimeout(() => {
                    showSpecialMessage("🎉 Parabéns! Seu pedido vai se realizar! 🎉");
                    createConfetti();
                }, 500);
            }
            
            setTimeout(() => {
                flame.style.animation = 'flicker 1.5s ease-in-out infinite alternate';
            }, 3000);
        });
    });
    
    // Fireworks functionality
    const fireworksBtn = document.getElementById('fireworksBtn');
    const fireworksContainer = document.getElementById('fireworksContainer');
    
    fireworksBtn.addEventListener('click', function() {
        launchFireworks();
    });
    
    function launchFireworks() {
        // Launch multiple sequences of fireworks
        for (let sequence = 0; sequence < 3; sequence++) {
            setTimeout(() => {
                for (let i = 0; i < 4; i++) {
                    setTimeout(() => {
                        createFirework();
                    }, i * 200);
                }
            }, sequence * 800);
        }
    }
    
    function createFirework() {
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d', '#ff8a80', '#ea80fc', '#66bb6a', '#ffa726', '#ab47bc'];
        const x = Math.random() * (fireworksContainer.offsetWidth - 100) + 50;
        const y = Math.random() * (fireworksContainer.offsetHeight - 100) + 50;
        const mainColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Create explosion center
        const explosion = document.createElement('div');
        explosion.className = 'firework';
        explosion.style.left = x + 'px';
        explosion.style.top = y + 'px';
        explosion.style.background = mainColor;
        explosion.style.color = mainColor;
        
        fireworksContainer.appendChild(explosion);
        
        // Create more particles for bigger explosion
        const particleCount = 16 + Math.floor(Math.random() * 8);
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'firework-particle';
            particle.style.left = x + 'px';
            particle.style.top = y + 'px';
            
            // Use similar colors for particles
            const particleColor = i % 3 === 0 ? mainColor : colors[Math.floor(Math.random() * colors.length)];
            particle.style.background = particleColor;
            particle.style.color = particleColor;
            
            const angle = (i * (360 / particleCount)) * Math.PI / 180;
            const distance = 60 + Math.random() * 40;
            const endX = x + Math.cos(angle) * distance;
            const endY = y + Math.sin(angle) * distance;
            
            fireworksContainer.appendChild(particle);
            
            // Enhanced particle animation with gravity effect
            particle.animate([
                { 
                    transform: 'translate(0, 0) scale(1)', 
                    opacity: 1 
                },
                { 
                    transform: `translate(${(endX - x) * 0.7}px, ${(endY - y) * 0.7}px) scale(1.2)`, 
                    opacity: 0.9,
                    offset: 0.3 
                },
                { 
                    transform: `translate(${endX - x}px, ${endY - y + 20}px) scale(0.5)`, 
                    opacity: 0 
                }
            ], {
                duration: 2000 + Math.random() * 500,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });
            
            setTimeout(() => {
                if (fireworksContainer.contains(particle)) {
                    fireworksContainer.removeChild(particle);
                }
            }, 2500);
        }
        
        // Add trailing sparks
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const spark = document.createElement('div');
                spark.style.position = 'absolute';
                spark.style.width = '2px';
                spark.style.height = '2px';
                spark.style.background = mainColor;
                spark.style.borderRadius = '50%';
                spark.style.left = (x + (Math.random() - 0.5) * 20) + 'px';
                spark.style.top = (y + (Math.random() - 0.5) * 20) + 'px';
                spark.style.opacity = '0.8';
                spark.style.boxShadow = `0 0 5px ${mainColor}`;
                
                fireworksContainer.appendChild(spark);
                
                spark.animate([
                    { transform: 'scale(1)', opacity: 0.8 },
                    { transform: 'scale(0)', opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                });
                
                setTimeout(() => {
                    if (fireworksContainer.contains(spark)) {
                        fireworksContainer.removeChild(spark);
                    }
                }, 1000);
            }, i * 100);
        }
        
        setTimeout(() => {
            if (fireworksContainer.contains(explosion)) {
                fireworksContainer.removeChild(explosion);
            }
        }, 2000);
    }
    
    function createConfetti() {
        const confettiContainer = document.createElement('div');
        confettiContainer.style.position = 'fixed';
        confettiContainer.style.top = '0';
        confettiContainer.style.left = '0';
        confettiContainer.style.width = '100%';
        confettiContainer.style.height = '100%';
        confettiContainer.style.pointerEvents = 'none';
        confettiContainer.style.zIndex = '1000';
        
        document.body.appendChild(confettiContainer);
        
        const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffd93d'];
        
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'absolute';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.transform = 'rotate(' + Math.random() * 360 + 'deg)';
            
            confettiContainer.appendChild(confetti);
            
            confetti.animate([
                { transform: 'translateY(-10px) rotate(0deg)', opacity: 1 },
                { transform: 'translateY(100vh) rotate(720deg)', opacity: 0 }
            ], {
                duration: 3000 + Math.random() * 2000,
                easing: 'ease-in'
            });
        }
        
        setTimeout(() => {
            if (document.body.contains(confettiContainer)) {
                document.body.removeChild(confettiContainer);
            }
        }, 5000);
    }
    
    function showSpecialMessage(message) {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        messageDiv.style.position = 'fixed';
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        messageDiv.style.background = 'rgba(255, 107, 107, 0.95)';
        messageDiv.style.color = 'white';
        messageDiv.style.padding = '30px 40px';
        messageDiv.style.borderRadius = '20px';
        messageDiv.style.fontSize = '1.5rem';
        messageDiv.style.fontWeight = 'bold';
        messageDiv.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
        messageDiv.style.zIndex = '1001';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.animation = 'specialMessage 0.5s ease-out';
        
        document.body.appendChild(messageDiv);
        
        setTimeout(() => {
            if (document.body.contains(messageDiv)) {
                document.body.removeChild(messageDiv);
            }
        }, 4000);
    }
    
    // Add CSS for blow out animation
    const candleStyle = document.createElement('style');
    candleStyle.textContent = `
        @keyframes blowOut {
            0% {
                transform: scale(1);
                opacity: 1;
            }
            50% {
                transform: scale(1.5);
                opacity: 0.5;
            }
            100% {
                transform: scale(0);
                opacity: 0;
            }
        }
        
        @keyframes specialMessage {
            0% {
                transform: translate(-50%, -50%) scale(0);
                opacity: 0;
            }
            50% {
                transform: translate(-50%, -50%) scale(1.1);
                opacity: 1;
            }
            100% {
                transform: translate(-50%, -50%) scale(1);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(candleStyle);
});
