import { DiscordSDK } from '@discord/embedded-app-sdk';

const discordSdk = new DiscordSDK(import.meta.env.VITE_CLIENT_ID);

async function init() {
  await discordSdk.ready();
  
  discordSdk.subscribe('READY', async () => {
    await discordSdk.commands.setActivity({
      activity: {
        type: 0,
        details: '🖤 Black Souls II',
        state: 'The mystery, woven beyond the night sky...',
        assets: {
          large_image: 'Valentine3',  // Your Mabel PNG
          large_text: "Won't you look comical?",
          small_image: 'avatar',
          small_text: 'Mabel Route'
        },
        party: { size: [1, 1] }
      }
    });
  });
}

init();
