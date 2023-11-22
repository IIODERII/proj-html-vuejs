<template>
  <div class="py-5 container">
    <div class="form d-flex flex-column justify-content-center">
      <div class="d-flex justify-content-around">
        <input type="text" placeholder="First Name" class="rounded-pill" />
        <input type="text" placeholder="Last Name" class="rounded-pill" />
        <input type="email" placeholder="Email Address" class="rounded-pill" />
      </div>
      <button class="btn btn-dark rounded-pill d-block mx-auto my-5">
        Subscribe
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "FormComponent",
};
</script>

<style lang="scss" scoped>
@use "../../assets/styles/partials/variables" as *;
.form {
  background-image: url("/images/form-bg-1.png");
  background-size: cover;
  min-height: 400px;

  input {
    width: 20%;
    background-color: transparent;
    border: 1px solid $textColor;
    color: $textColor;
    padding: 10px 20px;

    &:focus {
      outline: none;
      border-width: 2px;
    }

    &::placeholder {
      color: $textColor;
    }
  }

  button {
    padding: 15px 40px;
    font-weight: bold;
  }
}
</style>
