<template>

  <h3>Services</h3>
  <!-- <select 
    :name="name" 
    :value="modelValue" 
    @change="updateValue($event.target.value)" 
    :required="required"
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select> -->
</template>

<script setup>
const props = defineProps({
  name: String,
  modelValue: [String, Number],
  required: Boolean,
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>
