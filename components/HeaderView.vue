<script lang="ts">
export default {
  data() {
    return {
      isChecked: this.$i18n.locale == "de" ? false : true,
    };
  },
  methods: {
    changeLocale() {
      if (this.isChecked) {
        this.$i18n.setLocale("en");
      } else {
        this.$i18n.setLocale("de");
      }
    },
  },
};
</script>

<template>
  <header>
    <NuxtLinkLocale class="link" to="/"
      ><Icon class="icon" name="uil:home-alt" />{{
        $t("header.home")
      }}</NuxtLinkLocale
    >
    <NuxtLinkLocale class="link" to="/projects"
      ><Icon class="icon" name="uil:layer-group" />{{
        $t("header.projects")
      }}</NuxtLinkLocale
    >
    <NuxtLinkLocale class="link" to="/experiences"
      ><Icon class="icon" name="uil:file-bookmark-alt" />{{
        $t("header.experiences")
      }}</NuxtLinkLocale
    >
    <NuxtLinkLocale class="link" to="/about"
      ><Icon class="icon" name="uil:user" />{{
        $t("header.about")
      }}</NuxtLinkLocale
    >
    <div id="lang-slider">
      <Icon class="icon" name="flag:de-4x3" />
      <label class="switch">
        <input type="checkbox" v-model="isChecked" @change="changeLocale" />
        <span class="slider round"></span>
      </label>
      <Icon class="icon" name="flag:us-4x3" />
    </div>
  </header>
</template>

<style scoped>
header {
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

header .link {
  padding: 0.5rem 1rem;
  position: relative;
  width: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

header .link::before {
  content: "";
  position: absolute;
  left: calc(50% - 1rem);
  margin: 1rem;
  margin-top: 50px;
  width: 0;
  height: 3px;
  background-color: #dddddd;
  transition: width 0.7s, left 0.7s;
}

header .link:hover::before {
  left: 0;
  width: calc(100% - 2rem);
  transition: width 0.3s, left 0.3s;
}

header .link .icon {
  width: 25px;
  height: 25px;
  margin-right: 5px;
}

header #lang-slider {
  padding: 0 1rem;
  display: flex;
  align-items: center;
  gap: 0 1rem;
}

header #lang-slider .icon {
  height: 25px;
  border-radius: 8px;
}

/* The switch - the box around the slider */
header #lang-slider .switch {
  position: relative;
  display: inline-block;
  width: 50px;
  height: 29px;
}

/* Hide default HTML checkbox */
header #lang-slider .switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
header #lang-slider .slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 34px;
}

header #lang-slider .slider:before {
  position: absolute;
  content: "";
  height: 20px;
  width: 20px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
  border-radius: 50%;
}

header #lang-slider input:checked + .slider:before {
  -webkit-transform: translateX(21px);
  -ms-transform: translateX(21px);
  transform: translateX(21px);
}
</style>
