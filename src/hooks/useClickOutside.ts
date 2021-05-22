import {onMounted, onUnmounted, ref, Ref} from 'vue';

/** 1. 在 mounted 时候添加 click 事件， 在 unmounted 的时候将事件删除
 *  2. 拿到DropDown 的 DOM 元素从而判断，点击的内容是否被这个元素包含
 **/
export const useClickOutside = (elementRef: Ref<null | HTMLElement>): Ref<boolean> => {
  const isClickOutside = ref(false);
  const handler = (event: MouseEvent) => {
    if (elementRef.value) {
      // 点击的区域如果不是 elementRef区域的内容，则设为 true， 否则设为 false
      isClickOutside.value = !elementRef.value?.contains(event.target as HTMLElement);
    }
  };
  onMounted(() => {
    document.addEventListener('click', handler);
  });
  onUnmounted(() => {
    document.removeEventListener('click', handler);
  });
  return isClickOutside;
};
