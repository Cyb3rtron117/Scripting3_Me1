const targets = document.querySelectorAll('.allChests');
const buttons = document.querySelectorAll('.buttons');
goldcount = 0;

async function Reset()
{
    const content = document.querySelector('.ds_chest1');
    targets.forEach(el => {
        el.innerHTML = content.innerHTML;
    });
    Randomise();
    buttons.forEach(el => {
        el.disabled = false;
    });
    goldcount = 0;
    HideCovers()
    
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
}

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
function MimicFrame5(chestNumber)
{
    const content = document.querySelector('.ms_chest5');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}

function GoldFrame3(chestNumber)
{
    const content = document.querySelector('.gs_chest3');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}
function GoldFrame4(chestNumber)
{
    const content = document.querySelector('.gs_chest4');
    const targetChest = document.querySelector(chestNumber);
    targetChest.innerHTML = content.innerHTML;
}
function GoldFrame5(chestNumber)
{
    const content = document.querySelector('.gs_chest5');
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
        opengold(whichChest);
    }
}
function opengold(whichChest)
{
    let currentFrame = 0;
    const totalFrames = 4;
    const timer = setInterval(() => {
    currentFrame++;
    if(currentFrame == 1)
    {
        var soundCoins = document.getElementById('coins');
        soundCoins.volume = 0.5;
        soundCoins.currentTime = 0;
        soundCoins.play();

        defaultFrame2(whichChest);
    }
    if(currentFrame == 2)
    {
        GoldFrame3(whichChest);        
    }
    else if(currentFrame == 3)
    {
        GoldFrame4(whichChest);
    }
    else if(currentFrame == 4)
    {
        GoldFrame5(whichChest);
    }

    if(currentFrame >= totalFrames)
    {
        clearInterval(timer); 


        if(goldcount == 0)
        {
            goldcount++;
        }
        else if(goldcount == 1)
        {
            showWin();
        }
        
    }
    
    }, 100); // Changes frame every 100ms

}

function openMimic(whichChest)
{
    let currentFrame = 0;
    const totalFrames = 4;
    const timer = setInterval(() => {
    currentFrame++;
    if(currentFrame == 1)
    {
        var soundGrowl = document.getElementById('growl');
        soundGrowl.volume = 0.5;
        soundGrowl.currentTime = 0;
        soundGrowl.play();

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
    else if(currentFrame == 4)
    {
        MimicFrame5(whichChest);
    }

    if(currentFrame >= totalFrames)
    {
        clearInterval(timer); 
        showLose();
    }
    
    }, 100);

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
    
    }, 100);

}

function Randomise()
{
    Random_number = Math.floor((Math.random() * 3) + 1);
}

function HideCovers()
{
    var coverDivs = document.querySelectorAll(".coverup")
    coverDivs.forEach(el => {
        el.classList.add("hide")
    });   
    
}
function showWin()
{
    var winScreen = document.querySelector(".winScreen")
    winScreen.classList.remove("hide");
    var soundWin = document.getElementById('victory');
    soundWin.currentTime = 0;
    soundWin.play();
}
function showLose()
{
    var loseScreen = document.querySelector(".loseScreen")
    loseScreen.classList.remove("hide");
    var soundLose = document.getElementById('lose');
    soundLose.currentTime = 0;
    soundLose.play();
}
function openSound()
{
    var soundOpen = document.getElementById('open');
    soundOpen.currentTime = 0;
    soundOpen.play();
}
function playShuffle()
{
    var soundShuffle = document.getElementById('shuffle');
    soundShuffle.volume = 0.4;
    soundShuffle.currentTime = 0;
    soundShuffle.play();
}

