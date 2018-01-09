<template>
  <header class="header">
    <ul class="header__languages">
      <li class="header__language header__language_active">
        <a class="header__link" href="#">English</a>
      </li>
      <li class="header__language">
        <a class="header__link" href="#">По-русски</a>
      </li>
    </ul>
    <h1 class="header__title">Mom's calculator</h1>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 3rem 0 4rem;
  text-align: center;
}

.header__languages {
  list-style: none;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
}

.header__language {
  padding: .5rem 1.5rem;
}

.header__language_active {
  background: #f4f4f4;
}

.header__link {
  display: inline-block;
  color: #222;
  text-decoration: none;
  border-bottom: .1rem dashed #222;
  padding-bottom: .2rem;
}

.header__link:hover {
  border-bottom: .1rem solid #222;
}

.header__language_active .header__link {
  border-bottom: none;
  cursor: default;
}

.header__title {
  font-size: 4.8rem;
  font-weight: 400;
  line-height: 6rem;
  margin-top: 1rem;
}

.header__title::after {
  content: '💰';
}
</style>
