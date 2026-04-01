const targets = document.querySelectorAll('.allChests');
async function Start()
{
    const content = document.querySelector('.ds_chest1');
    targets.forEach(el => {
        el.innerHTML = content.innerHTML;
    });
}
document.addEventListener("DOMContentLoaded", Start);

function defaultFrame1(chestNumber)
{
    const content = document.querySelector('.ds_chest1');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}
function defaultFrame2(chestNumber)
{
    const content = document.querySelector('.ds_chest2');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
    
}
function defaultFrame3(chestNumber)
{
    const content = document.querySelector('.ds_chest3');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}
function defaultFrame4(chestNumber)
{
    const content = document.querySelector('.ds_chest4');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}//This is very modifed from a chatbot, and is included in the AI Evidence

function openEmpty(whichChest)
{
    let currentFrame = 0;
    const totalFrames = 3;
    const timer = setInterval(() => {
    currentFrame++;
    if(currentFrame == 1)
    {
        defaultFrame2(whichChest);
    }
    else if(currentFrame == 2)
    {
        defaultFrame3(whichChest);
    }
    else if(currentFrame == 3)
    {
        defaultFrame4(whichChest);
    }

    if(currentFrame >= totalFrames)
    {
        clearInterval(timer); 
    }
    
    }, 100); // Changes frame every 100ms (10fps)
    //This is very modifed from a chatbot, and is included in the AI Evidence

}



