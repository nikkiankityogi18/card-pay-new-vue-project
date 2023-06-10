<template>
  <div class="flex">
    <div class="flex w-1/4 bg-img-wrapper relative">
      <CardSection :getDataObj="dataFromCardForm" />
    </div>
    <div class="flex w-3/4 justify-center items-center">
      <CardForm @data-updated="handleDataFromChild" />
    </div>
  </div>
</template>

<script>
import CardForm from "./CardForm.vue";
import CardSection from "./CardSection.vue";

export default {
  name: "HomePage",

  data() {
    return {
      dataFromCardForm: {
        cardNumber: "0000 0000 0000 0000",
        cardName: "Jane Appleseed",
        yy: "00",
        mm: "00",
        cvc: "000",
      },
    };
  },

  components: { CardForm, CardSection },
  methods: {
    handleDataFromChild(data) {
      this.dataFromCardForm = data;
    },
  },
};
</script>

<style>
.bg-img-wrapper {
  background-image: url("/image/background.png");
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>
