<template>
  <form @submit.prevent="submitForm" class="grid grid-cols-1 items-stretch">
    <div class="grid grid-cols-2 h-full gap-4">
      <div
        v-for="(field, index) in fields"
        :key="index"
        class="form-field flex flex-wrap justify-stretch mt-0"
        :class="{
          'col-span-2': field.component === 'services'
        }"
      >
        <h5 v-if="field.groupTitle">{{ field.groupTitle }}</h5>
        <label :for="field.name" class="w-full py-2">{{ field.label }}</label>
        <component
          v-model="formValues[field.name]"
          class="w-full"
          :is="getComponent(field)"
          :name="field.name"
          :required="field.required"
          :options="field.options"
        />
      </div>
    </div>
    <div class="bg-blue-200 h-full">
      <button class="btn btn-primary" type="submit">Save</button>
      <button type="button">Preview</button>
    </div>
  </form>
</template>

<script setup>
import { ref, watch, computed } from "vue";

const props = defineProps({
  fields: {
    type: Array,
    required: true
  }
});

const emit = defineEmits(["submit"]);

const formValues = ref({});

const getComponent = (field) => {
  switch (field.component) {
    case "input":
      return resolveComponent("FormFieldInput");
    case "select":
      return resolveComponent("FormFieldSelect");
    case "services":
      return resolveComponent("FormFieldServices");
    default:
      return resolveComponent("FormFieldInput");
  }
};

// Initialize form values from fields
props.fields.forEach((field) => {
  formValues.value[field.name] = field.value;
});

const submitForm = () => {
  emit("submit", formValues.value);
};
</script>
