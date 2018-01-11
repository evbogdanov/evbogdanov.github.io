<template>
  <div class="table">
    <div class="table__head">
      <div class="table__column-name">Day</div>
      <div class="table__column-name">Quantity</div>
      <div class="table__column-name">Price</div>
      <div class="table__column-name">Daily revenue</div>
      <div class="table__column-name">Total revenue</div>
    </div>
    <div class="table__body">
      <div class="table__days">
        <app-day
          v-for="(day, i) in days"
          v-on:recordAdded="addNewRecordForDay"
          v-on:recordChanged="updateRecord"
          v-on:dayNameChanged="updateDayName"
          :key="i"
          :index="i"
          :name="day.name"
          :records="day.records"
          :daily-revenue="dailyRevenues[i]"
        ></app-day>
        <div class="table__day">
          <a class="table__new-day" href="#" @click="addNewDay">New day</a>
        </div>
      </div>
      <div class="table__total-revenue">{{ totalRevenue }}</div>
    </div>
  </div>
</template>

<script src="./Table.js"></script>

<style lang="scss" src="./Table.scss"></style>
