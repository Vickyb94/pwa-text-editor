const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// Adding an event handler to store triggered events
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPropmt = event;
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
