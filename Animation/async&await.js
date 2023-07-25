const aliceTumbling = [
    { transform: 'rotate(0) scale(1)' },
    { transform: 'rotate(360deg) scale(0)' }
  ];
  
  const aliceTiming = {
    duration: 2000,
    iterations: 1,
    fill: 'forwards'
  }
  
  const alice1 = document.querySelector("#alice1");
  const alice2 = document.querySelector("#alice2");
  const alice3 = document.querySelector("#alice3");

async function animationSequence() {
    try {
        alice1.animate(aliceTumbling, aliceTiming);
            
        const pro1 = await alice1.animate(aliceTumbling, aliceTiming).finished;
            
            
        alice2.animate(aliceTumbling, aliceTiming);
                
        const pro2 = await alice2.animate(aliceTumbling, aliceTiming).finished;
        
        alice3.animate(aliceTumbling, aliceTiming);
                
          }
        catch(error) {
            console.error('could not run animation sequence')
        }
}

animationSequence();

