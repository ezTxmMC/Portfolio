<template>
  <header>
    <a href="/projects">{{ $t("header.projects") }}</a>
    <a href="/experiences">Erfahrungen</a>
    <a href="/about">Über mich</a>
  </header>
</template>

<style scoped>
header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

header a {
  padding: 0.5rem 1rem;
  position: relative;
  width: max-content;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  transition: color 0.2s ease-in-out;
}

header a::before {
  content: "";
  position: absolute;
  left: calc(50% - 1rem);
  margin: 1rem;
  margin-top: 22px;
  width: 0;
  height: 3px;
  background-color: #dddddd;
  transition: width 0.7s, left 0.7s;
}

header a:hover::before {
  left: 0;
  width: calc(100% - 2rem);
  transition: width 0.3s, left 0.3s;
}
</style>
