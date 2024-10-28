<template>
  <div class="flex flex-wrap gap-2 mt-2">
    <button class="btn btn-icon" @click="edit"><span class="i-mdi-pencil-outline block h-6 w-6"></span> Edit</button>
    <button class="btn btn-icon"><span class="i-mdi-eye-outline block h-6 w-6"></span> Preview</button>
    <button class="btn btn-icon"><span class="i-mdi-content-copy block h-6 w-6"></span> Duplicate</button>
    <button class="btn btn-icon"><span class="i-mdi-download block h-6 w-6"></span> Download</button>
    <button class="btn btn-icon"><span class="i-ic-outline-document-scanner block h-6 w-6"></span> Generate Act</button>
    <button class="btn btn-icon"><span class="i-mdi-link-variant block h-6 w-6"></span> Copy Link</button>
  </div>
</template>

<script setup>
function edit() {
  // Handle edit logic
}
</script>