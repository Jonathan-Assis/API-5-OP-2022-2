import * as Notifications from 'expo-notifications'
import dayjs from 'dayjs'

Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
});

const messages = [
    {
        title: 'Sempre em dia 😎',
        body:'Olá, já verificou as ocorrências de hoje?\nVocê pode verificar agora mesmo na página de Chamados 🙂'
    },
    {
        title: 'Fique alerta 👀',
        body:'Faça a sua parte e não deixe de registrar as ocorrências que você encontrar! ✅'
    },
    {
        title: 'Muitas notificações do OP 📣?',
        body:'Caso não queira receber mais notificações, acesse a página de opções e desative as notificações push. 🤧'
    },
    {
        title: 'Está com dúvidas?',
        body:'Tente acessar a página de Opções e clique em "Ver Tutorial" 👀'
    },
]

 export const scheduledNotifications = async () => {
    const getListOfNotifications = await Notifications.getAllScheduledNotificationsAsync();
  
    if (!getListOfNotifications.length) {
      setRandomNotifications()
    }
}
  
  const setRandomNotifications = async () => {
    for (const message of messages) {
        const now = dayjs()

        const randomInterval = Math.floor(Math.random() * 30000);
        const notificationTime = now.add(randomInterval, 'millisecond').toDate()

        const trigger = {
            date: notificationTime,
            repeats: false,
        }

        const content = {
            title: message.title,
            body: message.body,
            icon: '../assets/Logotype/LogoOP.png',
            sound: 'default'
        }

        await Notifications.scheduleNotificationAsync({
            content,
            trigger
        })
    }
}