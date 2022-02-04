<script setup>
import {
  ref, onMounted, onUnmounted, watch,
} from 'vue';

const el = ref(null);

const props = defineProps([
  'context',
  'countHidden',
  'errorNotification',
  'locale',
  'localeManager',
  'model',
  'searchHidden',
  'searchText',
  'selectedAssetTypeId',
  'sharedAssetTypes',
  'view',
  'viewMode'
])

Object.keys(props).forEach(key => {
  watch(
    () => props[key],
    (now) => el.value[key] = now
  )
})

defineExpose(
  Object.keys(props).reduce((acc, e) => ({
    ...acc, [e]: (value) => {
      el.value[e] = value;
    }
  }), {})
)

const emit = defineEmits([
  'selectedAssetTypeChanged',
  'connected',
  'error',

  // 'update:modelValue',
]);

const events = [
  'selectedAssetTypeChanged',
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

onMounted(async () => {
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
  <mdsp-asset-type-view ref="el"></mdsp-asset-type-view>
</template>

<style>
mdsp-asset-type-view {
  min-height: 20rem;
}
</style>