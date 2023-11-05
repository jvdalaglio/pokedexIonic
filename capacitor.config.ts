import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.pokedexIonic',
  appName: 'Pokédex',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
