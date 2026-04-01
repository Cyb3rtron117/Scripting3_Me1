const targets = document.querySelectorAll('.allChests');
async function Reset()
{
    const content = document.querySelector('.ds_chest1');
    targets.forEach(el => {
        el.innerHTML = content.innerHTML;
    });
    Randomise();
}
document.addEventListener("DOMContentLoaded", Reset);

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

function MimicFrame2(chestNumber)
{
    const content = document.querySelector('.ms_chest2');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}
function MimicFrame3(chestNumber)
{
    const content = document.querySelector('.ms_chest3');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}
function MimicFrame4(chestNumber)
{
    const content = document.querySelector('.ms_chest4');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}

function OpenChest(whichChest, number)
{
    if(number == Random_number)
    {
        openMimic(whichChest);
    }
    else
    {
        openEmpty(whichChest);
    }
}
function opengold(whichChest)
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

function openMimic(whichChest)
{
    let currentFrame = 0;
    const totalFrames = 3;
    const timer = setInterval(() => {
    currentFrame++;
    if(currentFrame == 1)
    {
        MimicFrame2(whichChest);
    }
    else if(currentFrame == 2)
    {
        MimicFrame3(whichChest);
    }
    else if(currentFrame == 3)
    {
        MimicFrame4(whichChest);
    }

    if(currentFrame >= totalFrames)
    {
        clearInterval(timer); 
    }
    
    }, 100); // Changes frame every 100ms (10fps)
    //This is very modifed from a chatbot, and is included in the AI Evidence

}

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

const number = 0;

function Randomise()
{
    Random_number = Math.floor((Math.random() * 3) + 1)
}


