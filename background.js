const startPage = "https://inled-group.github.io/start/";

// Establecer la página como página de inicio cuando se instala la extensión
chrome.runtime.onInstalled.addListener(() => {
  console.log("Extensión instalada, configurando página de inicio");
  
  // No podemos establecer la página de inicio directamente con las API de Chrome,
  // pero podemos abrir una página de instrucciones para el usuario
  chrome.tabs.create({
    url: "chrome://settings/onStartup"
  });
  
  // También podríamos abrir la configuración para que el usuario establezca manualmente la página de inicio
  setTimeout(() => {
    chrome.tabs.create({
      url: "chrome://settings/defaultBrowser"
    });
  }, 1000);
});

// Gestionar el clic en el icono de la extensión
chrome.action.onClicked.addListener(() => {
  chrome.tabs.create({
    url: startPage
  });
});
