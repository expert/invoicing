<template>
  <select 
    class="form-control"
    :name="name" 
    :value="modelValue" 
    :required="required"
    @change="updateValue($event.target.value)" 
  >
    <option v-for="option in options" :key="option" :value="option">
      {{ option }}
    </option>
  </select>
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
