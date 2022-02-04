<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'additionalAggregates',
  'context',
  'dataProvider',
  'dateRange',
  'dragMode',
  'errorNotification',
  'highlightMode',
  'legendDisabled',
  'locale',
  'localeManager',
  'model',
  'sharedAssets',
  'timeZone',
  'variablePaths',
  'variablesLimit',
  'variableStyleOptions',
  'view',
  'wheelZoom',
  'zoomDisabled'
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
  'aggregationLevelChanged',
  'connected',
  'error'
]);

const events = [
  'dateRangeChanged',
  'aggregationLevelChanged',
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

<style>
mdsp-time-series-chart {
  min-height: 20rem;
}
</style>