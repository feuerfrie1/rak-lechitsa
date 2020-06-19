<template>
  <div class="popup">
    <overlay @overlayClick="$emit('closePopup')" />
    <div class="popup__container">
      <img
        src="../static/close-icon.svg"
        alt
        class="close-icon"
        @click="$emit('closePopup')"
      />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import Overlay from '@/components/ui/Overlay';
export default {
  components: {
    overlay: Overlay,
  },
};
</script>

<style scoped>
.popup {
}
.popup__container {
  min-width: 920px;
  background-color: #ffffff;
  padding: 40px;
  min-height: 324px;
  display: flex;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
}
.close-icon {
  position: absolute;
  top: 35px;
  right: 35px;
  cursor: pointer;
}
@media screen and (max-width: 1281px) {
  .popup__container {
    min-width: 800px;
  }
}
@media screen and (max-width: 769px) {
  .popup__container {
    min-width: 580px;
  }
}
@media screen and (max-width: 321px) {
  .popup__container {
    min-width: 290px;
    min-height: 191px;
  }
  .close-icon {
    top: 13px;
    right: 12px;
  }
}
</style>
