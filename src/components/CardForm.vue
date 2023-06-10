<template>
  <div v-if="!submitted" class="flex flex-col">
    <div class="flex flex-col mt-5">
      <span class="font-sans font-medium text-xs text-gray-800"
        >CARDHOLDER NAME</span
      >

      <input
        class="border-2 border-gray-300 rounded-md w-80 mt-1 text-lg p-1 outline-none"
        :class="cardName ? 'border-blue-900 ' : ''"
        type="text"
        placeholder="e.g. Jane Appleseed"
        v-model="cardName"
        @input="sendDataToCardSection"
      />
      <span v-if="!cardName" class="text-error text-xs mt-1 font-sans"
        >Can't be blank</span
      >
    </div>
    <div class="flex flex-col mt-5">
      <span class="font-sans font-medium text-xs text-gray-800"
        >CARD NUMBER</span
      >
      <input
        class="border border-2 border-gray-300 rounded-md w-80 mt-1 text-lg p-1 outline-none"
        :class="
          !isNumberCorrect && cardNumber ? 'border-red-400 outline-none' : ''
        "
        type="text"
        placeholder="e.g. 0000 0000 0000 0000"
        v-model="cardNumber"
        @input="checkNumberSendData"
      />
      <span v-if="!cardNumber" class="text-error text-xs mt-1 font-sans">
        Can't be blank
      </span>
      <span
        v-if="!isNumberCorrect && cardNumber"
        class="text-error text-xs mt-1 font-sans"
      >
        Wrong Formet,Number Only
      </span>
    </div>
    <div class="flex flex-row mt-5">
      <div class="flex flex-col">
        <span class="font-sans font-medium text-xs text-gray-800"
          >EXP. DATE (MM/YY)</span
        >
        <div class="flex flex-col">
          <div>
            <input
              class="border border-2 border-gray-300 rounded-lg w-16 mt-1 text-lg p-1"
              type="text"
              v-model="mm"
              placeholder="MM"
              maxlength="2"
              @input="sendDataToCardSection"
            />
            <input
              class="border border-2 border-gray-300 rounded-lg w-16 mt-1 text-lg p-1 ml-2"
              type="text"
              v-model="yy"
              placeholder="YY"
              maxlength="2"
              @input="sendDataToCardSection"
            />
          </div>
          <span v-if="!mm || !yy" class="text-error text-xs mt-1 font-sans"
            >Can't be blank</span
          >
        </div>
      </div>
      <div class="flex flex-col ml-6">
        <span class="font-sans font-medium text-xs text-gray-800">CVC</span>
        <input
          class="border border-2 border-gray-300 rounded-md w-40 mt-1 text-lg p-1"
          type="text"
          v-model="cvc"
          placeholder="e.g. 123"
          maxlength="3"
          @input="sendDataToCardSection"
        />
        <span v-if="!cvc" class="text-error text-xs mt-1 font-sans"
          >Can't be blank</span
        >
      </div>
    </div>
    <div
      class="bg-black text-white text-center py-2 mt-4 font-sans font-medium"
    >
      <button @click="submitForm">Confirm</button>
    </div>
  </div>
  <div v-else class="flex flex-col justify-center items-center">
    <img class="mb-4" :src="iconComplete" />
    <span class="font-sans text-xl font-bold">Thank you!</span>
    <span class="font-sans text-base text-gray-600"
      >We've added your card details</span
    >
    <div
      class="flex bg-black text-white text-center rounded-lg py-2 mt-4 font-sans font-medium"
    >
      <button class="w-64" @click="submitForm">Continue</button>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardForm",
  data() {
    return {
      cardNumber: "",
      mm: "",
      yy: "",
      cvc: "",
      cardName: "",
      isNumberCorrect: false,
      submitted: false,
      iconComplete: "./image/icon-complete.svg",
    };
  },
  methods: {
    checkNumber() {
      const input = Number(this.cardNumber);
      this.isNumberCorrect = !isNaN(input);
    },

    sendDataToCardSection() {
      const data = {
        cardNumber: this.cardNumber,
        mm: this.mm,
        yy: this.yy,
        cvc: this.cvc,
        cardName: this.cardName,
      };
      this.$emit("data-updated", data);
    },
    checkNumberSendData() {
      this.checkNumber();
      this.sendDataToCardSection();
    },
    submitForm() {
      this.submitted = !this.submitted;
    },
  },
};
</script>
