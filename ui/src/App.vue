<script setup>
import {
  ref
} from 'vue';
import AssetView from './components/AssetView.vue';
import AspectVariableSelector from './components/AspectVariableSelector.vue';
import AssetMap from './components/AssetMap.vue';

const AssetViewElement = ref(null);
const AspectVariableSelectorElement = ref(null);
const AssetMapElement = ref(null);

const DefaultEvent = e => console.log(e)

const selectedAssetChangedAssetViewEvent = (e) => {
  AspectVariableSelectorElement.value.selectedAssetIds([e.detail.assetId])
}
const selectedAssetChangedAssetMapEvent = (e) => {
}
const assetsClickedAssetMapEvent = (e) => {
  DefaultEvent(e);
  AssetMapElement.value.selectedAssetId(e.detail.assets[0].assetId)
  AspectVariableSelectorElement.value.selectedAssetIds(e.detail.assets.map(f => f.assetId))
}
</script>

<template>
  <p>
    {{search}}
  </p>
  <AssetView
    ref="AssetViewElement"

    @selectedAssetChanged="selectedAssetChangedAssetViewEvent"
    @selectedAssetsChanged="AssetViewEvent"
    @assetsLoaded="AssetViewEvent"
    @searchTextChanged="AssetViewEvent"
    @statusFilterChanged="AssetViewEvent"
    @connected="AssetViewEvent"
    @error="AssetViewEvent"
  />
  <AspectVariableSelector
    ref="AspectVariableSelectorElement"

    @selectedAspectsAndVariablesChanged="AspectVariableSelectorEvent"
    @connected="AspectVariableSelectorEvent"
    @error="AspectVariableSelectorEvent"
  />
  <AssetMap
    ref="AssetMapElement"

    @selectedAssetChanged="selectedAssetChangedAssetMapEvent"
    @assetsClicked="assetsClickedAssetMapEvent"
  />
</template>

<style>
#app {
  display: grid;
}
</style>
