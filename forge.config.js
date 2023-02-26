module.exports = {
  publishers: [
  ],
  packagerConfig: {
    icon: './build/icon'
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-deb',
        config: {
          options: {
            icon: './build/icon.png'
          }
      }
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        // An URL to an ICO file to use as the application icon (displayed in Control Panel > Programs and Features).
        iconUrl: './build/icon.ico',
        // The ICO file to use as the icon for the generated Setup.exe
        setupIcon: './build/icon.ico',
      }
    },
    {
      // Path to a single image that will act as icon for the application
      name: '@electron-forge/maker-deb',
      config: {
        options: {
          icon: './build/icon.png',
        },
      },
    },
    {
      // Path to the icon to use for the app in the DMG window
      name: '@electron-forge/maker-dmg',
      config: {
        icon: './build/icon.icns',
      },
    },
    {
      name: '@electron-forge/maker-wix',
      config: {
        icon: './build/icon.ico',
      },
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {
        certificateFile: './cert.pfx',
        certificatePassword: process.env.CERTIFICATE_PASSWORD,
      }
    },
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
