import {createApp} from 'vue';
import Message from '@/components/content/Message.vue';

export const createMessage = (message: string, type: string, timeout = 2000): void => {
  const messageInstance = createApp(Message, {message, type});
  const node = document.createElement('div');
  document.body.appendChild(node);
  messageInstance.mount(node);
  setTimeout(() => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    messageInstance.unmount(node);
    document.body.removeChild(node);
  }, timeout);
};
