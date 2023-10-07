import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'TablaDidactica',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "SplashScreen": {
        "launchShowDuration": 1000,
        "showSpinner": false,
        "androidSpinnerStyle": "small",
        "iosSpinnerStyle": "small",
        "splashFullScreen": true,
        "splashImmersive": true,
      }
  }
};

export default config;
