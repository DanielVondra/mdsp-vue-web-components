<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'assetId',
  'columnSettingsVisible',
  'context',
  'dateRange',
  'errorNotification',
  'filterable',
  'fromDate',
  'locale',
  'localeManager',
  'model',
  'multiSelectable',
  'pagerMode',
  'pageSize',
  'selectable',
  'sharedAssets',
  'sort',
  'sortable',
  'tableFormatters',
  'timeZone',
  'toDate',
  'typeId',
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
  'selectedEventChanged',
  'selectedEventsChanged',
  'columnSettingsChanging',
  'connected',
  'error'
]);

const events = [
  'selectedEventChanged',
  'selectedEventsChanged',
  'columnSettingsChanging',
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
  <mdsp-event-view ref="el"></mdsp-event-view>
</template>

<style>
mdsp-event-view {
  min-height: 20rem;
}
</style>