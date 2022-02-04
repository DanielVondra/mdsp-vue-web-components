var b=Object.defineProperty,y=Object.defineProperties;var w=Object.getOwnPropertyDescriptors;var _=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable;var C=(c,r,n)=>r in c?b(c,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):c[r]=n,u=(c,r)=>{for(var n in r||(r={}))V.call(r,n)&&C(c,n,r[n]);if(_)for(var n of _(r))S.call(r,n)&&C(c,n,r[n]);return c},p=(c,r)=>y(c,w(r));import{r as d,w as f,o as A,a as m,b as h,c as v,d as k,t as I,e as g,F as T,f as F}from"./vendor.16c2be84.js";const L=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}};L();const O={props:["assetTypeFilter","cardColumnCount","context","countHidden","customCardTemplateId","customFilter","customListTemplateId","customTreeTemplateId","errorNotification","leafAssetHidden","locale","localeManager","model","multiSelectable","searchHidden","searchText","selectedAsset","selectedAssetId","selectedAssetIds","selectedAssets","sharedAssets","showAssetImage","showChildrenCount","showHierarchyPath","statusFilter","statusIndicator","subtenantFilter","view","viewMode"],emits:["selectedAssetChanged","selectedAssetsChanged","assetsLoaded","searchTextChanged","statusFilterChanged","connected","error","update:modelValue"],setup(c,{expose:r,emit:n}){const a=c,t=d(null);Object.keys(a).forEach(e=>{f(()=>a[e],s=>t.value[e]=s)}),r(Object.keys(a).reduce((e,s)=>p(u({},e),{[s]:i=>{t.value[s]=i}}),{}));const o=["selectedAssetChanged","selectedAssetsChanged","assetsLoaded","searchTextChanged","statusFilterChanged","connected","error"],l=e=>{switch(e.type){case"connected":Object.keys(a).forEach(s=>{!a[s]||(t.value[s]=a[s])});break;case"searchTextChanged":n("update:modelValue",e.detail);break}n(e.type,e)};return A(()=>{o.forEach(e=>{t.value.addEventListener(e,l)})}),m(()=>{o.forEach(e=>{t.value.removeEventListener(e,l)})}),(e,s)=>(h(),v("mdsp-asset-view",{ref_key:"el",ref:t},null,512))}};var E=(c,r)=>{const n=c.__vccOpts||c;for(const[a,t]of r)n[a]=t;return n};const M={props:["category","context","dataTypes","errorNotification","locale","localeManager","model","selectedAssetIds","selectionChangedEventDebounceTime","sharedAssets","timeSeriesInfo","variablePaths","view","viewMode"],emits:["selectedAspectsAndVariablesChanged","connected","error"],setup(c,{expose:r,emit:n}){const a=c,t=d(null);Object.keys(a).forEach(e=>{f(()=>a[e],s=>t.value[e]=s)}),r(Object.keys(a).reduce((e,s)=>p(u({},e),{[s]:i=>{t.value[s]=i}}),{}));const o=["selectedAspectsAndVariablesChanged","connected","error"],l=e=>{switch(e.type){case"connected":Object.keys(a).forEach(s=>{!a[s]||(t.value[s]=a[s])});break}n(e.type,e)};return A(()=>{o.forEach(e=>{t.value.addEventListener(e,l)})}),m(()=>{o.forEach(e=>{t.value.removeEventListener(e,l)})}),(e,s)=>(h(),v("mdsp-aspect-variable-selector",{ref_key:"el",ref:t},null,512))}};var x=E(M,[["__scopeId","data-v-54cdd2da"]]);const j={props:["assetClickHandler","assetTypeFilter","clusterDistance","context","customFilter","draggable","errorNotification","latitude","locale","localeManager","longitude","markerStyle","model","popup","searchText","selectedAsset","selectedAssetId","sharedAssets","statusFilter","statusIndicator","subtenantFilter","view","wheelZoom","zoomLevel"],emits:["selectedAssetChanged","assetsClicked","searchTextChanged","statusFilterChanged","viewChanged","connected","error","update:modelValue"],setup(c,{expose:r,emit:n}){const a=c,t=d(null);Object.keys(a).forEach(e=>{f(()=>a[e],s=>t.value[e]=s)}),r(Object.keys(a).reduce((e,s)=>p(u({},e),{[s]:i=>{t.value[s]=i}}),{}));const o=["selectedAssetChanged","assetsClicked","searchTextChanged","statusFilterChanged","viewChanged","connected","error"],l=e=>{switch(e.type){case"connected":Object.keys(a).forEach(s=>{!a[s]||(t.value[s]=a[s])});break;case"searchTextChanged":n("update:modelValue",e.detail);break}n(e.type,e)};return A(()=>{o.forEach(e=>{t.value.addEventListener(e,l)})}),m(()=>{o.forEach(e=>{t.value.removeEventListener(e,l)})}),(e,s)=>(h(),v("mdsp-asset-map",{ref_key:"el",ref:t},null,512))}};var N=E(j,[["__scopeId","data-v-911b660a"]]);const H={setup(c){const r=d(null),n=d(null),a=d(null),t=e=>{n.value.selectedAssetIds([e.detail.assetId])},o=e=>{},l=e=>{a.value.selectedAssetId(e.detail.assets[0].assetId),n.value.selectedAssetIds(e.detail.assets.map(s=>s.assetId))};return(e,s)=>(h(),v(T,null,[k("p",null,I(e.search),1),g(O,{ref_key:"AssetViewElement",ref:r,onSelectedAssetChanged:t,onSelectedAssetsChanged:e.AssetViewEvent,onAssetsLoaded:e.AssetViewEvent,onSearchTextChanged:e.AssetViewEvent,onStatusFilterChanged:e.AssetViewEvent,onConnected:e.AssetViewEvent,onError:e.AssetViewEvent},null,8,["onSelectedAssetsChanged","onAssetsLoaded","onSearchTextChanged","onStatusFilterChanged","onConnected","onError"]),g(x,{ref_key:"AspectVariableSelectorElement",ref:n,onSelectedAspectsAndVariablesChanged:e.AspectVariableSelectorEvent,onConnected:e.AspectVariableSelectorEvent,onError:e.AspectVariableSelectorEvent},null,8,["onSelectedAspectsAndVariablesChanged","onConnected","onError"]),g(N,{ref_key:"AssetMapElement",ref:a,onSelectedAssetChanged:o,onAssetsClicked:l},null,512)],64))}};F(H).mount("#app");