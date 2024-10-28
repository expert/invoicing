<template>
  <nav class="flex flex-col w-full">
    <NuxtLink 
      v-for="(item, index) of navItems" 
      :key="index" 
      :to="item.link"
      class="p-4 text-primary-blue no-underline flex items-center hover:bg-primary-highlight ![&.router-link-active]:bg-primary-blue [&.router-link-active]:text-white rounded-[5px_0_0_5px]"
      >
      <span class="w-6 h-6 block mr-2" :class="item.icon"></span>
      {{ item.text }}
    </NuxtLink>
  </nav>
</template>

<script lang="ts" setup>
const navItems = [
  {
    link: '/',
    text: 'Dashboard',
    icon: 'i-ic-outline-dashboard'
  },
  {
    link: '/invoices',
    text: 'Invoices',
    icon: 'i-ic-baseline-list-alt'
  },
  {
    link: '/payments',
    text: 'Payments',
    icon: 'i-ic-outline-payments'
  },
  {
    link: '/settings',
    text: 'Settings',
    icon: 'i-ic-outline-settings'
  },
]
</script>