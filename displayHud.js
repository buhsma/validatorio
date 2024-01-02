function displayHUD() {
    // Create the main container for HUD
    const hudTop = document.createElement('div');
    hudTop.classList.add('hudTop');

    // Create left, center, and right divs inside hudTop
    const hudTopLeft = document.createElement('div');
    hudTopLeft.classList.add('hudTop__left');

    const hudTopCenter = document.createElement('div');
    hudTopCenter.classList.add('hudTop__center');
    hudTopCenter.textContent = 'STAGE';

    const hudTopCenterStageNr = document.createElement('div');
    hudTopCenterStageNr.classList.add('hudBottom__center__stageNr');
    
    const currStage = parseInt(sessionStorage.getItem('stage')) || 0;;
    hudTopCenterStageNr.textContent = currStage;

    hudTopCenter.appendChild(hudTopCenterStageNr);

    const hudTopRight = document.createElement('div');
    hudTopRight.classList.add('hudTop__right');

    hudTop.appendChild(hudTopLeft);
    hudTop.appendChild(hudTopCenter);
    hudTop.appendChild(hudTopRight);

    // Create the main container for HUD Bottom
    const hudBottom = document.createElement('div');
    hudBottom.classList.add('hudBottom');

    // Create left, center, and right divs inside hudBottom
    const hudBottomLeft = document.createElement('div');
    hudBottomLeft.classList.add('hudBottom__left');

    const hudBottomCenter = document.createElement('div');
    hudBottomCenter.classList.add('hudBottom__center');

    const hudBottomCenterMessage = document.createElement('div');
    hudBottomCenterMessage.classList.add('hudBottom__center__message');

    const hudBottomCenterSubmitBtn = document.createElement('div');
    hudBottomCenterSubmitBtn.classList.add('hudBottom__center__submitBtn');

    const submitBtn = document.createElement('button');
    submitBtn.classList.add('btn');
    submitBtn.id = 'submitBtn';
    submitBtn.setAttribute('onclick', 'gameLoop()');

    const btnTop = document.createElement('div');
    btnTop.classList.add('btn__top', 'text');
    btnTop.textContent = 'Submit';

    const btnBottom = document.createElement('div');
    btnBottom.classList.add('btn__bottom');

    const btnBase = document.createElement('div');
    btnBase.classList.add('btn__base');

    submitBtn.appendChild(btnTop);
    submitBtn.appendChild(btnBottom);
    submitBtn.appendChild(btnBase);

    hudBottomCenterSubmitBtn.appendChild(submitBtn);

    hudBottomCenter.appendChild(hudBottomCenterMessage);
    hudBottomCenter.appendChild(hudBottomCenterSubmitBtn);

    const hudBottomRight = document.createElement('div');
    hudBottomRight.classList.add('hudBottom__right');

    hudBottom.appendChild(hudBottomLeft);
    hudBottom.appendChild(hudBottomCenter);
    hudBottom.appendChild(hudBottomRight);

    // Append both main containers to the document body or any desired parent element
    document.body.appendChild(hudTop);
    document.body.appendChild(hudBottom);
    
    typeMessage();
}


