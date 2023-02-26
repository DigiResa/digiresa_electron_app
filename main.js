const {app, BrowserWindow, Menu, MenuItem} = require('electron')
const url = require('url')
const path = require('path')
const config = require('./package.json')
const electron = require('electron')

let win
require('update-electron-app')()


app.on('ready', () => {	
    createWindow()
})

function createWindow() {
   win = new BrowserWindow({
        width: 1100, 
        height: 800, 
        minWidth: 1100,
        minHeight: 800,
        resizable: false,
        titleBarStyle: 'hidden',
        
         trafficLightPosition: { x: 10, y: 10 },
        title: config.windowtitle,
        icon: path.join(__dirname, '/build/icon.icns'),
         })
   win.loadURL(url.format ({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
   }))
   setMainMenu();
}
function addUpdateMenuItems (items, position) {
    if (process.mas) return
    items.splice.apply(items, [position, 0])
  }

function setMainMenu() {
    let template = [
        {
            label: 'Edition',
            submenu: [
                {
                   label: 'Recharger la page',
                    role: 'reload'
                },
                {
                  label: 'Outil développeur',

                    role: 'toggledevtools'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'resetzoom'
                },
                {
                    type: 'separator'
                }
            ]
        },
        {
            label: 'Fenêtre',
            role: 'window',
            submenu: [
                {
                    role: 'minimize'
                },
                {
                    role: 'close'
                }
            ]
        },{
          label: 'Corriger un bug',
           role: 'reload'
       },
        {
            label: 'Aide',
            role: 'help',
            submenu: [{
                label: 'Support',
                click: function () {
                    electron.shell.openExternal('https://www.digiresa.com/service-client/')
                }
            },
           {
              label: 'FAQ',
              click: function () {
                  electron.shell.openExternal('https://www.digiresa.com/faq/')
              }
          },{
            label: 'Tutoriels',
            role: 'tuto',
            click: function () {
                electron.shell.openExternal('https://www.digiresa.com/tutoriels/')
            }
        }]
       },
       {
        label: 'Copyright',
        role: 'copyright',
        submenu: [{
            label: 'DigiResa 2023® - Par Esteban Gourdou',
            
        }]
   }
    ];


    win.setWindowButtonVisibility(false)
    if (process.platform === 'darwin') {
        const name = config.windowtitle;
        template.unshift({
          label: `${name}`,
          submenu: [{
            label: `${name}`,
            role: 'about'
          }, {
            type: 'separator'
          }, {
            type: 'separator'
          }, {
            label: `Fermer ${name}`,
            accelerator: 'Command+H',
            role: 'hide'
          }, {
            label: 'Fermer les fenêtres',
            accelerator: 'Command+Alt+H',
            role: 'hideothers'
          }, {
            label: 'Voir tout',
            role: 'unhide'
          }, {
            type: 'separator'
          }, {
            label: 'Quitter',
            accelerator: 'Command+Q',
            click: function () {
              app.quit()
            }
          }]
        })
            
        addUpdateMenuItems(template[0].submenu, 1)
    }
    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}

