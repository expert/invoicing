<template>
  <input 
    :name="name" 
    :value="modelValue" 
    @input="updateValue($event.target.value)" 
    :required="required" 
    class="form-control"
  />
</template>

<script setup>
const props = defineProps({
  name: String,
  modelValue: [String, Number],
  required: Boolean,
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (value) => {
  emit('update:modelValue', value)
}
</script>
