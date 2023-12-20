<template>
  <button
    :type="btnType"
    :class="['btn', btnType]">
    <slot></slot>
    <span class="arrow"> &rarr; </span>
    <span></span><span></span><span></span><span></span>
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      btnType: {
        type: String,
        default: "primary",
      },
    },
  };
</script>

<style lang="scss" scoped>
  @import "../assets/css/variables";
  @import "../assets/css/mixins";

  .btn {
    padding: 0.6rem 2.4rem;
    border-radius: 4px;
    font-size: 2.4rem;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in;

    &:hover {
      padding-right: 4rem;
      .arrow {
        opacity: 1;
      }
    }
    &.primary {
      @include apply-gradient-block;
      color: $accent;
    }

    &.secondary {
      // @include apply-gradient-border;
      // box-shadow: 0 0 0 4px #f00, 0 0 0 8px #f80; /* Linear gradient border */
      @include apply-gradient-border-box;

      // @include apply-gradient-block;
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
      outline: 1px solid;
      outline-color: rgba(255, 255, 255, 0.5);
      outline-offset: 0px;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
          0 0 20px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
      }
      &:active {
        box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.5),
          0 0 4px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 2px;
        text-shadow: 1px 1px 2px #427388;
      }
    }
  }
  .arrow {
    position: absolute;
    opacity: 0;
    margin-left: 0.8rem;
    transition: all 0.2s ease-in;
  }
</style>
