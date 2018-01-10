<template>
  <div class="table__day">
    <div class="table__day-name">
      <input
        class="table__input table__input_big" 
        type="text"
        :value="name"
        @input="updateName">
    </div>
    <div class="table__records">
      <app-record
        v-for="(record, i) in records"
        v-on:recordChanged="updateRecord"
        :key="i"
        :index="i"
        :quantity="record.quantity"
        :price="record.price"
        ></app-record>
      <div class="table__record">
        <a class="table__new-record" href="#" @click="addNewRecord">New record</a>
      </div>
    </div>
    <div class="table__daily-revenue">{{ dailyRevenue }}</div>
  </div>
</template>


<script>
  import Record from './Record.vue'

  export default {
    props: [
      'index',
      'name',
      'records',
      'daily-revenue'
    ],
    components: {
      'app-record': Record
    },
    methods: {
      addNewRecord(ev) {
        ev.preventDefault()
        this.$emit('recordAdded', this.index)
      },
      updateRecord(recordIndex, price, quantity) {
        this.$emit('recordChanged', this.index, recordIndex, price, quantity)
      },
      updateName(ev) {
        this.$emit('dayNameChanged', this.index, ev.target.value)
      }
    }
  }
</script>
