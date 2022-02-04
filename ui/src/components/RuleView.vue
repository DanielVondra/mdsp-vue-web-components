<script setup>
import {
  ref, onMounted, onUnmounted, watch
} from 'vue';

const el = ref(null);

const props = defineProps([
  'assetId',
  'context',
  'errorNotification',
  'locale',
  'localeManager',
  'model',
  'pagerMode',
  'pageSize',
  'tableFormatters',
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
  'selectedRuleChanged',
  'selectedRulesChanged',
  'connected',
  'error'
]);

const events = [
  'selectedRuleChanged',
  'selectedRulesChanged',
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
  <mdsp-rule-view ref="el"></mdsp-rule-view>
</template>

<style>
mdsp-rule-view {
  min-height: 20rem;
}
</style>