<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  address: string
  explorerUrl: string
}>()

const copied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | undefined

async function copyAddress() {
  await navigator.clipboard.writeText(props.address)
  copied.value = true
  clearTimeout(resetTimer)
  resetTimer = setTimeout(() => {
    copied.value = false
  }, 1600)
}
</script>

<template>
  <span class="address-link">
    <a :href="explorerUrl" target="_blank" rel="noopener noreferrer" :title="`View ${address} on the block explorer`">
      {{ address }}
    </a>
    <button type="button" :aria-label="copied ? 'Address copied' : `Copy address ${address}`" :title="copied ? 'Copied' : 'Copy address'" @click="copyAddress">
      <svg v-if="copied" viewBox="0 0 24 24" aria-hidden="true">
        <path d="m5 12 4 4L19 6" />
      </svg>
      <svg v-else viewBox="0 0 24 24" aria-hidden="true">
        <rect x="8" y="8" width="11" height="11" rx="2" />
        <path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3" />
      </svg>
    </button>
  </span>
</template>
