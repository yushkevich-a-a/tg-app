declare const window: {
    Telegram: any;
  }
const tg = window.Telegram.WebApp;

export const useTelegram = () => {
    const onReady = () => {
        tg.ready();
    }
    const onClose = () => {
        tg.close();
    }

    
    return {
        tg,
        onReady,
        onClose,
        user: tg.initDataUnsafe?.user
    }
}
