const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Adding an event handler to store triggered events
window.addEventListener('beforeinstallprompt', (event) => {
    
    window.deferredPropmt = event;

    butInstall.classList.toggle('hidden', false);
});

// initialize a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    
    const promptEvent = window.deferredPropmt;

    if(!promptEvent) {
        return;
    }
    //show prompt
    promptEvent.prompt();
    //reset the deferred propmt variable
    window.deferredPropmt = null;

    butInstall.classList.toggle('hidden', true);
});

//Adding an handler for the `appinstalled` event to clear prompt
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null
});
