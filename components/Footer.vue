<template>
  <div>
    <footer class="footer page__footer">
      <div class="footer__container">
        <h2 class="footer__title">
          Спасибо&nbsp;всем,&nbsp;кто помог состояться этому&nbsp;проекту
        </h2>
        <ul class="footer__list">
          <li class="footer__list-item">
            <a class="footer__link" href="#main">Главная</a>
          </li>
          <li class="footer__list-item">
            <a class="footer__link" href="#stories">Истории</a>
          </li>
        </ul>
        <div class="footer__container-link">
          <div class="footer__links">
            <a
              class="container__link"
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
            >
              Мы в <span class="container__link-underline">Инстаграме</span>
            </a>
            <a
              class="container__link"
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
            >
              и <span class="container__link-underline">Youtube</span>
            </a>
          </div>
          <p
            class="container__link container__link_color_another-black"
            @click="togglePopup"
          >
            Поделитесь &#8599;
          </p>
        </div>
      </div>
      <div class="footer__copyright">
        <p class="footer__copyright-text">Рак Лечится 2020</p>
        <p class="footer__copyright-text">
          Сделано студентами Яндекс Практикум
        </p>
      </div>
      <popup v-if="popupShown" @closePopup="togglePopup">
        <h2 class="popup__title">Поделитесь</h2>
        <ul class="popup__list">
          <li>
            <a href class="popup__link">
              <img src="../static/facebook.svg" alt class="popup__link-icon" />
            </a>
          </li>
          <li>
            <a href class="popup__link">
              <img src="../static/twitter.svg" alt class="popup__link-icon" />
            </a>
          </li>
          <li>
            <a href class="popup__link">
              <img src="../static/vk.svg" alt class="popup__link-icon" />
            </a>
          </li>
          <li>
            <a href class="popup__link">
              <img src="../static/ok.svg" alt class="popup__link-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/raklechitsa/"
              target="_blank"
              class="popup__link"
            >
              <img src="../static/instagram.svg" alt class="popup__link-icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/results?search_query=%23%D1%8D%D1%82%D0%BE%D0%BD%D0%B5%D0%BB%D0%B5%D1%87%D0%B8%D1%82%D1%81%D1%8F"
              target="_blank"
              class="popup__link"
            >
              <img src="../static/youTube.svg" alt class="popup__link-icon" />
            </a>
          </li>
        </ul>
      </popup>
    </footer>
  </div>
</template>

<script>
import PopUp from '@/components/PopUp';
export default {
  components: {
    popup: PopUp,
  },
  methods: {
    togglePopup() {
      this.$store.commit('popup/togglePopupSocial');
    },
  },
  computed: {
    popupShown() {
      return this.$store.getters['popup/getPopupSocial'];
    },
  },
};
</script>

<style scoped>
.footer {
  min-height: 356px;
  background-color: #fbfbfb;
  color: #000000;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.page__footer {
  margin: 0;
}
.footer__container {
  margin: 60px 60px 0;
  min-height: 108px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 100px;
}
.footer__title {
  max-width: 340px;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.footer__container-link {
  max-width: 300px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  display: flex;
  grid-column-start: 4;
  justify-content: space-between;
  flex-direction: column;
}

.footer__list {
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  flex-basis: 188px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
}
.footer__list-item {
  max-width: 76px;
}
.footer__link {
  text-decoration: none;
  color: currentColor;
}
.footer__link:hover {
  opacity: 0.8;
}
.container__link {
  text-decoration: none;
  color: currentColor;
  cursor: default;
}
.container__link-underline {
  border-bottom: 1px solid black;
  cursor: pointer;
}
.container__link-underline:hover {
  opacity: 0.8;
}
.container__link_color_another-black {
  width: fit-content;
  color: #121212;
  cursor: pointer;
}
.footer__copyright {
  margin: 0 60px 60px;
  display: flex;
  justify-content: space-between;
  color: #898989;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;
}
.popup__title {
  max-width: 200px;
  margin: 40px auto 0;
  text-align: center;
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
}
.popup__list {
  list-style: none;
  max-width: 388px;
  display: flex;
  justify-content: space-between;
  margin: 100px auto 100px;
  padding: 0;
}
.container__link_color_another-black:hover {
  opacity: 0.8;
}
@media screen and (max-width: 1281px) {
  .footer__container {
    grid-template-columns: repeat(3, 1fr);
    margin: 50px 50px 0;
  }
  .footer__title {
    max-width: 305px;
    font-size: 28px;
    line-height: 32px;
  }
  .footer__list {
    max-width: 178px;
    font-size: 16px;
  }
  .footer__list-item {
    max-width: 68px;
  }
  .footer__container-link {
    grid-column-start: 3;
    max-width: 265px;
    font-size: 16px;
  }
  .footer__copyright {
    margin: 0 50px 50px;
    font-size: 16px;
  }
}
@media screen and (max-width: 1025px) {
  .footer__container {
    grid-column-gap: 30px;
  }
  .footer__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
  .footer__list {
    max-width: 178px;
    font-size: 16px;
  }
  .footer__container-link {
    grid-column-start: 3;
    max-width: 221px;
    font-size: 16px;
  }
  .footer__copyright {
    margin: 0 50px 50px;
  }
}
@media screen and (max-width: 769px) {
  .footer__title {
    max-width: 288px;
    font-size: 24px;
    line-height: 28px;
  }
  .footer__list {
    max-width: 178px;
    font-size: 16px;
    flex-direction: column;
    justify-content: flex-start;
  }
  .footer__list-item {
    margin-bottom: 14px;
  }
  .footer__container-link {
    max-width: 221px;
    font-size: 16px;
    flex-direction: column;
    justify-content: flex-start;
  }
  .container__link_color_another-black {
    margin-top: 14px;
  }
  .footer__copyright {
    margin: 0 50px 50px;
  }
}
@media screen and (max-width: 321px) {
  .footer__container {
    display: inline;
    margin: 50px 15px 0;
    font-size: 13px;
    line-height: 15px;
  }
  .footer__title {
    margin-bottom: 50px;
    max-width: 288px;
    font-size: 18px;
    line-height: 21px;
  }
  .footer__list-item {
    margin-bottom: 18px;
  }
  .footer__container-link {
    margin-top: 18px;
    max-width: 179px;
  }
  .container__link_color_another-black {
    margin-top: 18px;
  }
  .footer__copyright {
    margin: 50px 15px 50px;
    flex-direction: column;
    font-size: 13px;
    line-height: 18px;
  }
  .footer__copyright-text {
    margin-bottom: 10px;
  }
  .popup__title {
    font-size: 18px;
    line-height: 21px;
  }
}
</style>
