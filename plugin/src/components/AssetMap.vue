<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'assetClickHandler',
  'assetTypeFilter',
  'clusterDistance',
  'context',
  'customFilter',
  'draggable',
  'errorNotification',
  'latitude',
  'locale',
  'localeManager',
  'longitude',
  'markerStyle',
  'model',
  'popup',
  'searchText',
  'selectedAsset',
  'selectedAssetId',
  'sharedAssets',
  'statusFilter',
  'statusIndicator',
  'subtenantFilter',
  'view',
  'wheelZoom',
  'zoomLevel'
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
  'selectedAssetChanged',
  'assetsClicked',
  'searchTextChanged',
  'statusFilterChanged',
  'viewChanged',
  'connected',
  'error',

  'update:modelValue'
]);

const events = [
  'selectedAssetChanged',
  'assetsClicked',
  'searchTextChanged',
  'statusFilterChanged',
  'viewChanged',
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
    case 'searchTextChanged':
      emit('update:modelValue', e.detail)
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
  <mdsp-asset-map
    ref="el"
  ></mdsp-asset-map>
</template>