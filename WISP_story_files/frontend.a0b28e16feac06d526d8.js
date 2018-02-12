webpackJsonp([9],{

/***/ "5tup":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0;var Module_1=__webpack_require__("/7Ts"),TranslationServiceWrapper_1=__webpack_require__("Cm93"),constants_1=__webpack_require__("FrZg");Module_1.Module.instance().config(["$routeProvider","PROFILE_REGEX","PROFILE_PATH",function(e,o,r){"ngInject";var t=function(){return{favoritesModel:["favoritesModelFactory",function(e){var r=location.pathname.match(o);if(!r)throw"location.pathname '"+location.pathname+"' does not match expected format: "+o;return e.getFavoritesModel(r[1])}],profileModel:["modelCacheService","sharedProfileUxStateService","$location","$rootScope",function(e,r,t,a){var i=location.pathname.match(o);if(!i)throw"location.pathname '"+location.pathname+"' does not match expected format: "+o;return"publish"===i[1]?void t.path("/publish-confirm"):e.getProfileForName(i[1]).then(function(e){return r.viewingProfileName=i[1],r.viewLoaded=!0,r.avatarUrl=e.avatarUrl||e.getGravatarUrl(150),e}).catch(function(){return i=location.pathname.match(o),r.viewingProfileName=null,"publish"===i[1]?t.path("/publish-confirm"):t.path(constants_1.PROFILE_404_PATH).replace(),null})}],isFollowingAuthorBoolean:["loginService","sharedProfileUxStateService",function(e,r){var t=location.pathname.match(o);return e.isFollowing(t[1]).then(function(e){r.isFollowingAuthor=e})}],resolveTranslations:TranslationServiceWrapper_1.resolveTranslations}},a=function(e){return{workbookDetailsModel:["workbookFactoryService","sharedProfileUxStateService","$location","$route","$rootScope","$window",function(t,a,i,n,l,c){var s=location.pathname.match(o);if(!s)throw"location.pathname '"+location.pathname+"' does not match expected format: "+o;var m=function(e){if(a.viewingProfileName=s[1],a.viewingProfileName!==e.profileName){var o=r+"/"+e.profileName,t=i.path(),n=o+"#!"+t;c.location.replace(c.location.origin+n)}return a.viewLoaded=!0,l.metaTag=e.metaTag,e};return e?t.getWorkbookDetailsForSharedView(n.current.params.guid).then(m,function(){return a.viewingProfileName=null,i.path(constants_1.PROFILE_404_PATH).replace(),null}):t.getWorkbookDetailsForName(n.current.params.workbook,n.current.params.view).then(m,function(){return a.viewingProfileName=null,i.path(constants_1.PROFILE_404_PATH).replace(),null})}],profileModel:["sharedProfileUxStateService","modelCacheService",function(e,r){var t=location.pathname.match(o);if(!t)throw"location.pathname '"+location.pathname+"' does not match expected format: "+o;return e.viewingProfileName=t[1],r.getProfileForName(e.viewingProfileName)}],resolveTranslations:TranslationServiceWrapper_1.resolveTranslations}},i=function(){var e=window.location.pathname;if(e&&e.match(/^\/profile\/publish\//i)){var o=e.split("/profile/publish/")[1],r=o.split("/")[0],t=o.split("/")[1];return{workbookDetailsModel:["sharedProfileUxStateService","workbookFactoryService","$rootScope",function(e,o,a){var i=function(o){return e.viewLoaded=!0,e.showToast=!0,a.metaTag=o.metaTag,o};return o.getWorkbookDetailsForName(r,t).then(i,function(){return null})}],profileModel:["sharedProfileUxStateService","workbookApiService","modelCacheService",function(e,o,t){return o.getWorkbookDetails(r).then(function(o){return e.viewingProfileName=o.profileName,t.getProfileForName(o.profileName)})}],resolveTranslations:TranslationServiceWrapper_1.resolveTranslations}}};e.when("/",{template:__webpack_require__("RFJ7"),controller:"profileCtrl",resolve:t()}).when("/publish-confirm",{template:__webpack_require__("eFQ1"),controller:"vizHomeCtrl",resolve:i()}).when("/vizhome/shared/:guid",{template:__webpack_require__("BKbW"),controller:"vizHomeCtrl",resolve:a(!0)}).when("/vizhome/:workbook/:view",{template:__webpack_require__("BKbW"),controller:"vizHomeCtrl",resolve:a(!1)})}]);

/***/ }),

/***/ "7cRL":
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=!0,__webpack_require__("77Dy"),__webpack_require__("FwjY"),__webpack_require__("5tup"),__webpack_require__("UPJH").default("tableau:entrypoints")("Frontend Bundle entrypoint called");

/***/ }),

/***/ "RFJ7":
/***/ (function(module, exports) {

module.exports='<aside class="l-region-author author-container clearfix"><div class=l-inner><div class=author-info><div ng-include=templateUrls.AUTHOR_INFO></div></div></div></aside><section class=l-region-author-profile><div class=l-inner><uib-tabset><uib-tab ng-repeat="profileTab in profileTabs" ng-if=profileTab.show() class={{profileTab.classDef}} active=profileTab.active data-test-id=viewProfileAuthor-{{profileTab.classDef}}-lower><uib-tab-heading><span translate-string-contents={{profileTab.nameCapitalized}} translate-values=\'{"COUNT": {{profileTab.count()}}}\'></span> <span class=counter ng-bind=profileTab.count()></span></uib-tab-heading><div ng-include=profileTab.templateUrl></div></uib-tab></uib-tabset></div></section>';

/***/ }),

/***/ "eFQ1":
/***/ (function(module, exports) {

module.exports='<section class=l-publish><div class="toast action toast--publish" ng-if="sharedProfileUxStateService.canEdit() && sharedProfileUxStateService.showToast" tabia-transition tt-class=shown tt-delay=750><div class=l-inner><h2 class=toast-header translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_SAVE_COMPLETE_MESSAGE></h2><div class="set edit"><a href="" class="white tile tile--l tile--ui" ng-click="sharedProfileUxStateService.toggleEditMode(); editWorkbook(workbook); scrollTo(\'workbookEditForm\');"><i class=icon-edit-pencil></i> <span translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_EDIT_DETAILS_LINK_DESCRIPTION></span> </a><span class=instruction translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_EDIT_DETAILS_INSTRUCTION></span></div><a class=toast__close href="" ng-click="sharedProfileUxStateService.showToast = false;" translate-string-contents=VIZHOME_PUBLISH_WORKBOOK_CLOSE_BUTTON_LABEL></a></div></div><div ng-include=templateUrls.VIZHOME></div></section>';

/***/ })

},["7cRL"]);
//# sourceMappingURL=frontend.a0b28e16feac06d526d8.js.map