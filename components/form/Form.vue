<template>
  <form @submit.prevent="submitForm">
    <div v-for="(field, index) in fields" :key="index" class="form-field">
      <label :for="field.name">{{ field.label }}</label>
      <component
        :is="getComponent(field)"
        :name="field.name"
        v-model="formValues[field.name]"
        :required="field.required"
        :options="field.options"
      />

    </div>
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
import { ref, watch, computed } from 'vue'

const props = defineProps({
  fields: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['submit'])

const formValues = ref({})

const getComponent = (field) => {
  switch (field.component) {
    case 'input':
      return resolveComponent('FormFieldInput')
    case 'select':
      return resolveComponent('FormFieldSelect')
    case 'services':
      return resolveComponent('FormFieldServices')
    default:
      return resolveComponent('FormFieldInput')
  }
}

// Initialize form values from fields
props.fields.forEach((field) => {
  formValues.value[field.name] = field.value
})

const submitForm = () => {
  emit('submit', formValues.value)
}

</script>
