<template lang="pug">
	header.header
		ul.header__languages
			li.header__language(
				v-bind:class="{header__language_active: isEnglishLang}"
			)
				a.header__link(
					href="#"
					@click="switchLangToEnglish"
				) English
			li.header__language(
				v-bind:class="{header__language_active: isRussianLang}"
			)
				a.header__link(
					href="#"
					@click="switchLangToRussian"
				) По-русски
		h1.header__title
			app-trans(
				en="💰Mom's calculator"
				ru="💰Мамкин калькулятор"
			)
</template>

<script src="./Header.js"></script>

<style lang="scss" src="./Header.scss"></style>
