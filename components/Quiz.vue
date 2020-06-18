<template>
  <div class="quiz">
    <h3 class="quiz__title">{{ currentQuestion.title }}</h3>
    <p class="quiz__question">
      <span class="quiz__question-main">{{ currentQuestion.question }}</span>
      <span
        v-if="currentQuestion.questionAdditional"
        class="quiz__question-additional"
        >{{ currentQuestion.questionAdditional }}</span
      >
    </p>
    <nxt-input
      class="input"
      :placeholder="'Напишите тут'"
      :type="'text'"
      v-model="answer"
    />
    <div class="quiz__buttons">
      <my-button class="button_type_back" @Click="prevQuestions"
        >Назад</my-button
      >
      <my-button class="button" @Click="nextQuestions">Далее</my-button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/ui/Button';
import PopupInput from '@/components/ui/PopupInput';
import TextArea from '@/components/ui/TextArea';

export default {
  components: {
    'my-button': Button,
    'nxt-input': PopupInput,
    'nxt-textarea': TextArea,
  },
  data() {
    return {
      answer: '',
    };
  },
  computed: {
    currentQuestion() {
      const { currentQuestion, questions } = this.$store.state.quiz;
      return questions[currentQuestion];
    },
    initialAnswer() {
      const { currentQuestion, answers } = this.$store.state.quiz;
      return answers[currentQuestion];
    },
  },
  methods: {
    async nextQuestions() {
      await this.$store.dispatch('quiz/NEXT_QUESTION', {
        answer: this.answer,
      });
      this.answer = this.initialAnswer || '';
    },

    async prevQuestions() {
      await this.$store.dispatch('quiz/PREV_QUESTION');
      this.answer = this.initialAnswer || '';
    },
  },
};
</script>

<style scoped>
.quiz__title {
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 36px;
  margin: 40px 40px 0;
}
.quiz__question {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;
  margin: 40px 40px 0;
}
.quiz__question-additional {
  color: #666666;
}
.quiz__buttons {
  margin-top: 210px;
  position: absolute;
  left: 40px;
  bottom: 40px;
}
.button {
  width: 226px;
}
.button_type_back {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #666666;
  max-width: 48px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  outline: none;
}
</style>
