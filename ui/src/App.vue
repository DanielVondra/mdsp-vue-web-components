<script setup>
import {
  ref
} from 'vue';


const AspectVariableSelectorElement = ref(null);
const AssetViewElement = ref(null);
const AssetMapElement = ref(null);
const TimeSeriesChartElement = ref(null);

const selectedAssetChangedEvent = e => {
  console.log(e)
  AspectVariableSelectorElement.value.selectedAssetIds([e.detail.assetId])
  AssetMapElement.value.selectedAssetId(e.detail.assetId)
}
const selectedAspectsAndVariablesChangedEvent = e => {
  TimeSeriesChartElement.value.variablePaths(e.detail);
}
const dateRangeChangedEvent = e => {
  TimeSeriesChartElement.value.dateRange(e.detail);
}

</script>

<template>
  <aside class="left">
    <mdspvue-asset-view
      ref="AssetViewElement"
      searchText="vdtcz"
      sharedAssets="true"
      @selectedAssetChanged="selectedAssetChangedEvent"
    />
  </aside>
  <main>
    <mdspvue-date-time-range-picker
      relativeRange="Last30Days"
      @dateRangeChanged="dateRangeChangedEvent"
    />
    <mdspvue-time-series-chart ref="TimeSeriesChartElement" sharedAssets="true" />
  </main>
  <aside class="right">
    <mdspvue-aspect-variable-selector
      ref="AspectVariableSelectorElement"
      sharedAssets="true"
      viewMode="All"
      @selectedAspectsAndVariablesChanged="selectedAspectsAndVariablesChangedEvent"
    />
  </aside>
</template>

<style lang="scss">
body {
  margin: 0;
}
* {
  box-sizing: border-box;
}
#app {
  display: grid;
  grid-template-columns: minmax(15rem, 1fr) 3fr minmax(15rem, 1fr);
  min-height: calc(100vh - 44px); //OSbar + ::before Sadge
  padding: 1rem;
  gap: 1rem;
}

main {
  display: grid;
  grid-template-rows: auto 1fr;

  & > mdsp-date-time-range-picker {
    justify-self: center;
  }
}

aside {
  display: grid;

  &.right {
    grid-template-rows: 1fr;
    max-height: 100vh;
    gap: 1rem;
  }
}
</style>
