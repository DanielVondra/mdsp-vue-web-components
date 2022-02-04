<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'assetClickHandler',
  'assetId',
  'clusterDistance',
  'context',
  'customFilter',
  'disableDeepNavigation',
  'draggable',
  'errorNotification',
  'hierarchyClusterDistance',
  'hierarchyMarkerStyle',
  'locale',
  'localeManager',
  'markerStyle',
  'searchText',
  'selectedAsset',
  'selectedAssetId',
  'sharedAssets',
  'statusFilter',
  'statusIndicator',
  'subtenantFilter',
  'toolbarMode',
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
  'searchTextChanged',
  'statusFilterChanged',
  'selectedAssetChanged',
  'assetsClicked',
  'viewChanged',
  'connected',
  'error',

  'update:modelValue',
]);

const events = [
  'searchTextChanged',
  'statusFilterChanged',
  'selectedAssetChanged',
  'assetsClicked',
  'viewChanged',
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
  <mdsp-custom-map ref="el"></mdsp-custom-map>
</template>

<style>
mdsp-custom-map {
  min-height: 20rem;
}
</style>