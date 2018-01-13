<template lang="pug">
	span(v-if="isRussianLang") {{ ru }}
	span(v-else) {{ en }}
</template>

<script src="./Translation.js"></script>
