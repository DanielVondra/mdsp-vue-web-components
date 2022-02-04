<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'allDay',
  'context',
  'dateRange',
  'errorNotification',
  'fixedMode',
  'locale',
  'localeManager',
  'relativeRange',
  'rightAligned',
  'timeZone',
  'validDateRange'
])

Object.keys(props).forEach(key => {
  watch(
    () => props[key],
    (now) => el.value[key] = now
  )
})

defineExpose(
  Object.keys(props).reduce((acc,
    e) => ({
      ...acc,
      [e]: (value) => {
        el.value[e] = value;
      }
    }), {})
)

const emit = defineEmits([
  'dateRangeChanged',
  'connected',
  'error',
]);

const events = [
  'dateRangeChanged',
  'connected',
  'error',
];

const handleEvent = (e) => {
  switch (e.type) {
    case 'connected':
      Object.keys(props).forEach(key => {
        if (!props[key]) return;
        el.value[key] = props[key]
      });
      break;
  }
  emit(e.type, e);
};

onMounted(() => {
  events.forEach((e) => {
    el.value.addEventListener(e, handleEvent);
  });
});

onUnmounted(() => {
  events.forEach((e) => {
    el.value.removeEventListener(e, handleEvent);
  });
});

</script>

<template>
  <mdsp-date-time-range-picker ref="el"></mdsp-date-time-range-picker>
</template>

<style>
mdsp-date-time-range-picker {
  min-height: 20rem;
}
</style>