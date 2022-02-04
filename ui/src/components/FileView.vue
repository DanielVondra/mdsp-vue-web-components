<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'assetId',
  'context',
  'createdDateRange',
  'errorNotification',
  'filterable',
  'fromCreatedDate',
  'fromUpdatedDate',
  'locale',
  'localeManager',
  'model',
  'multiSelectable',
  'pagerMode',
  'pageSize',
  'selectable',
  'timeZone',
  'toCreatedDate',
  'toUpdatedDate',
  'updatedDateRange',
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
  'selectedFileChanged',
  'selectedFilesChanged',
  'connected',
  'error'
]);

const events = [
  'selectedFileChanged',
  'selectedFilesChanged',
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
  <mdsp-file-view ref="el"></mdsp-file-view>
</template>

<style>
mdsp-file-view {
  min-height: 20rem;
}
</style>