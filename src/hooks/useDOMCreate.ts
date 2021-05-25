import {onUnmounted} from 'vue';

export const useDOMCreate = (nodeId: string): void => {
  const node = document.createElement('div');
  node.id = nodeId;
  document.body.appendChild(node);
  onUnmounted(() => {
    document.body.removeChild(node);
  });
};
