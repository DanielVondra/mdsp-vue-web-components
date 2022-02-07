<script setup>
import {
  ref
} from 'vue';

import AspectVariableSelector from './components/AspectVariableSelector.vue';
import AssetMap from './components/AssetMap.vue';
import AssetTypeView from './components/AssetTypeView.vue';
import AssetView from './components/AssetView.vue';
import CustomMap from './components/CustomMap.vue';
import DateTimeRangePicker from './components/DateTimeRangePicker.vue';
import EventView from './components/EventView.vue';
import FileView from './components/FileView.vue';
import Map from './components/Map.vue';
import MceaViewChart from './components/MceaViewChart.vue';
import RuleView from './components/RuleView.vue';
import TimeSeriesChart from './components/TimeSeriesChart.vue';
import TimeSeriesTable from './components/TimeSeriesTable.vue';


const AspectVariableSelectorElement = ref(null);
const AssetMapElement = ref(null);
const AssetTypeViewElement = ref(null);
const AssetViewElement = ref(null);
const CustomMapElement = ref(null);
const DateTimeRangePickerElement = ref(null);
const EventViewElement = ref(null);
const FileViewElement = ref(null);
const MapElement = ref(null);
const MceaViewChartElement = ref(null);
const RuleViewElement = ref(null);
const TimeSeriesChartElement = ref(null);
const TimeSeriesTableElement = ref(null);

const selectedAssetChangedEvent = e => {
  console.log(e)
  AspectVariableSelectorElement.value.selectedAssetIds([e.detail.assetId])
}

const selectedAspectsAndVariablesChangedEvent = e => {
  // TimeSeriesChartElement.value.variablePaths(e.detail.reduce((assets, asset) => assets.concat(
  //   asset.aspectsDefinition.reduce((aspects, aspect) => aspects.concat({
  //     assetId: aspect.holderAssetId,
  //     aspectName: aspect.name,
  //     variables: aspect.variables.map(variable => variable.name),
  //   }), [])
  // ), []));

  TimeSeriesChartElement.value.variablePaths(e.detail);
}

const dateRangeChangedEvent = e => {
  TimeSeriesChartElement.value.dateRange(e.detail);
}

</script>

<template>
  <aside class="left">
    <AssetView
      ref="AssetViewElement"
      searchText="vdtcz"
      sharedAssets="true"
      @selectedAssetChanged="selectedAssetChangedEvent"
    />
  </aside>
  <main>
    <DateTimeRangePicker @dateRangeChanged="dateRangeChangedEvent" />
    <TimeSeriesChart ref="TimeSeriesChartElement" sharedAssets="true" />
  </main>
  <aside class="right">
    <AspectVariableSelector
      ref="AspectVariableSelectorElement"
      sharedAssets="true"
      viewMode="All"
      @selectedAspectsAndVariablesChanged="selectedAspectsAndVariablesChangedEvent"
    />
    <Map
      ref="MapElement"
      draggable="true"
      latitude="50.0950665011266"
      longitude="14.388862704545424"
      zoomLevel="17"
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
  min-height: 100vh;
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
    grid-template-rows: 1fr auto;
    max-height: 100vh;
    gap: 1rem;
  }
}
</style>
