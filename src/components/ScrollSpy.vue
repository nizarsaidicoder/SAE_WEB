<template>
  <div class="scroll-spy">
    <ul>
      <li
        v-for="section in sections"
        :key="section.id">
        <a>{{ section.section }}</a>
        <span
          v-if="
            activeSection &&
            activeSection.includes(section.section) &&
            section.subSections.length > 0
          "
          class="navigation-arrow">
          &darr;
        </span>
        <span
          v-if="
            activeSection &&
            !activeSection.includes(section.section) &&
            section.subSections.length > 0
          "
          class="navigation-arrow"
          >&rarr;
        </span>
        <ul class="sub-sections">
          <li
            v-for="subSection in section.subSections"
            :key="subSection.id">
            <a>{{ subSection }}</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: ["sections", "activeSection"],
    data() {
      return {};
    },
  };
</script>

<style lang="scss">
  @import "@/assets/css/variables";
  .active {
    color: red;
  }
  .child {
    margin-left: 2rem;
  }

  .scroll-spy > ul {
    display: flex;
    flex-direction: column;
    position: relative;
  }
  .sub-sections {
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
    position: relative;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: -5%;
      height: 100%;
      width: 1px;
      border-radius: 10px;
      background-color: $accent;
      opacity: 1;
    }
  }
</style>
