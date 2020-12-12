// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
define(["jimu/DataSourceManager","jimu/statisticsUtils","../utils"],function(n,p,f){return{getSingleValueForServerStatFeature:function(a){a=a&&a[0]&&a[0].attributes;if(!a)return null;var b=Object.keys(a)[0];return Number(a[b])},getResultForExtraStatFeature:function(a,b){a=this._getValueForExtraStatFeatures(a&&a[0],b);return Number(a)},_getValueForExtraStatFeatures:function(a,b){a=a.attributes;if(!a)return"count"===b.type?0:void 0;b="count"===b.type?"STAT_COUNT":f.upperCaseString(b.field+"_"+b.type);
var c=a[b];"undefined"===typeof c&&(b=f.lowerCaseString(b),c=a[b]);return c},statistic:function(a,b,c,d){return a&&b&&c?"DATA_SOURCE_FEATURE_LAYER_FROM_MAP"===b.dataSourceType?this.getStatisticResultFromFeatures(c,a):"Features"===this._getExtalDataSourceType(b,d)?this.getStatisticResultFromFeatures(c,a):this.statisticExtraStatSource(a,c):null},formatterRangeNumber:function(a){if(!a&&0!==a)return!1;"number"!==typeof a&&(a=Number(a));this.isFolatNumber(a)&&(a=a.toFixed(2),a=Number(a));return a},isFolatNumber:function(a){return"number"!==
typeof a?!1:/^\d+(\.\d+)$/.test(a)},statisticExtraStatSource:function(a,b){if(b){if(0===b.length)var c=void 0;else if(1===b.length)c=this._getValueForExtraStatFeatures(b[0],a);else if(1<b.length){var d={count:0,sum:0},e,k,l,m=0,g=0;b.forEach(function(h){e=this._getValueForExtraStatFeatures(h,a);switch(a.type){case "count":d.count+=e;break;case "sum":d.sum+=e;break;case "min":d.min="undefined"===typeof d.min?e:Math.min(d.min,e);break;case "max":d.max="undefined"===typeof d.max?e:Math.max(d.max,e);
break;case "avg":l=this._getValueForExtraStatFeatures(h,{type:"count"}),k=this._getValueForExtraStatFeatures(h,{field:a.field,type:"sum"}),m+=k,g+=l}}.bind(this));"avg"===a.type&&(d.avg=0===g?0:m/g);c=d[a.type]}return c}},_getCountValueFromFeatureOfExtraStatFeatures:function(a){if(a&&a.attributes){a=a.attributes;var b="STAT_COUNT";var c=a[b];"undefined"===typeof c&&(b=f.lowerCaseString(b),c=a[b]);return c||0}},getStatisticResultFromFeatures:function(a,b){if(a){if("count"===b.type)return a.length;
var c=b.type;return p.getStatisticsResultFromClientSync({featureSet:{features:a},fieldName:b.field,statisticTypes:[c]})[c+"Field"]}},_getExtalDataSourceType:function(a,b){return this._getExtalDataSourceInfo(a,b).type},_getExtalDataSourceInfo:function(a,b){if(a){b=b||this.appConfig;var c=a.frameWorkDsId;if("undefined"!==typeof c){var d={};return d=(b=b&&b.dataSource&&b.dataSource.dataSources)?b[c]:n.getInstance().getDataSourceConfig(a.frameWorkDsId)}}}}});