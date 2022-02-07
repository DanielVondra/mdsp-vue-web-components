<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'context',
  'dateRange',
  'errorNotification',
  'filterable',
  'locale',
  'localeManager',
  'model',
  'pagerMode',
  'pageSize',
  'sharedAssets',
  'sortable',
  'tableFormatters',
  'timeZone',
  'variablePaths',
  'variablesLimit',
  'view'
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
  'connected',
  'error'
]);

const events = [
  'connected',
  'error'
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
  <mdsp-time-series-chart ref="el"></mdsp-time-series-chart>
</template>