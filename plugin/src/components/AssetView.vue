<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'assetTypeFilter',
  'cardColumnCount',
  'context',
  'countHidden',
  'customCardTemplateId',
  'customFilter',
  'customListTemplateId',
  'customTreeTemplateId',
  'errorNotification',
  'leafAssetHidden',
  'locale',
  'localeManager',
  'model',
  'multiSelectable',
  'searchHidden',
  'searchText',
  'selectedAsset',
  'selectedAssetId',
  'selectedAssetIds',
  'selectedAssets',
  'sharedAssets',
  'showAssetImage',
  'showChildrenCount',
  'showHierarchyPath',
  'statusFilter',
  'statusIndicator',
  'subtenantFilter',
  'view',
  'viewMode',
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
  'selectedAssetsChanged',
  'assetsLoaded',
  'searchTextChanged',
  'statusFilterChanged',
  'connected',
  'error',

  'update:modelValue',
]);

const events = [
  'selectedAssetChanged',
  'selectedAssetsChanged',
  'assetsLoaded',
  'searchTextChanged',
  'statusFilterChanged',
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
  <mdsp-asset-view ref="el"></mdsp-asset-view>
</template>