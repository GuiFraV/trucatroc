"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/SingleBlog.tsx":
/*!***********************************!*\
  !*** ./components/SingleBlog.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SingleBlog; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ri__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ri */ \"(app-client)/./node_modules/react-icons/ri/index.esm.js\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/bs */ \"(app-client)/./node_modules/react-icons/bs/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction SingleBlog(param) {\n    let { key , data , currentUser  } = param;\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const onLike = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/api/like/\".concat(data.id)).then(()=>{\n            router.refresh();\n        }).catch((error)=>{}).finally(()=>{});\n    };\n    const onDelete = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"][\"delete\"](\"/api/blogs/\".concat(data.id)).then(()=>{\n            router.refresh();\n        }).catch((error)=>{}).finally(()=>{});\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[1100px] border-2 p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex gap-2 justify-between items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            width: 400,\n                            className: \"w-[500px] object-contain\",\n                            height: 300,\n                            src: data.imageSrc,\n                            alt: \"Blog Image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[530px] flex flex-col gap-4 leading-[1.5]\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    children: data.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 19\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: data.description\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                    lineNumber: 54,\n                                    columnNumber: 19\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            data.userId === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center gap-4 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiDeleteBin5Line, {\n                        onClick: onDelete,\n                        className: \" cursor-pointer text-[1.5rem]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillPencilFill, {\n                        onClick: ()=>router.push(\"/blogs/\".concat(data.id)),\n                        className: \" cursor-pointer text-[1.2rem]\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                lineNumber: 60,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-sm bg-white rounded-[40px] shadow dark:bg-gray-800 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"#\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                            width: 400,\n                            className: \"w-[500px] rounded-t-[40px] object-contain\",\n                            height: 300,\n                            src: data.imageSrc,\n                            alt: \"Blog Image\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                            lineNumber: 70,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"p-5 bg-[#DFDFDF8A] rounded-b-[40px]\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                href: \"#\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                                    className: \"mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black\",\n                                    children: data.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 21\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-3 font-normal text-gray-700 dark:text-black \",\n                                children: data.description\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                lineNumber: 77,\n                                columnNumber: 17\n                            }, this),\n                            data.userId === (currentUser === null || currentUser === void 0 ? void 0 : currentUser.id) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center gap-4 mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ri__WEBPACK_IMPORTED_MODULE_4__.RiDeleteBin5Line, {\n                                        onClick: onDelete,\n                                        className: \" cursor-pointer text-[1.5rem]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_5__.BsFillPencilFill, {\n                                        onClick: ()=>router.push(\"/blogs/\".concat(data.id)),\n                                        className: \" cursor-pointer text-[1.2rem]\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                        lineNumber: 85,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                                lineNumber: 83,\n                                columnNumber: 27\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                        lineNumber: 73,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\GuiFra\\\\Desktop\\\\Test Trucatroc\\\\components\\\\SingleBlog.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(SingleBlog, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = SingleBlog;\nvar _c;\n$RefreshReg$(_c, \"SingleBlog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9TaW5nbGVCbG9nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUVMO0FBQ2lCO0FBQ0k7QUFDQTtBQVNoQyxTQUFTSyxXQUFXLEtBQWdDLEVBQUU7UUFBbEMsRUFBQ0MsSUFBRyxFQUFDQyxLQUFJLEVBQUNDLFlBQVcsRUFBVyxHQUFoQzs7SUFFL0IsTUFBTUMsU0FBU1AsMERBQVNBO0lBRXhCLE1BQU1RLFNBQVMsSUFBTTtRQUNqQlQsa0RBQVUsQ0FBQyxhQUFxQixPQUFSTSxLQUFLSyxFQUFFLEdBQzlCQyxJQUFJLENBQUMsSUFBTTtZQUNWSixPQUFPSyxPQUFPO1FBQ2hCLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQyxRQUFVLENBQ2xCLEdBQ0NDLE9BQU8sQ0FBQyxJQUFNLENBQ2Y7SUFDSjtJQUVBLE1BQU1DLFdBQVcsSUFBTTtRQUVuQmpCLHVEQUFZLENBQUMsY0FBc0IsT0FBUk0sS0FBS0ssRUFBRSxHQUNqQ0MsSUFBSSxDQUFDLElBQU07WUFDVkosT0FBT0ssT0FBTztRQUNoQixHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVSxDQUNsQixHQUNDQyxPQUFPLENBQUMsSUFBTSxDQUNmO0lBQ0Y7SUFJSixxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNYLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ1gsOERBQUNyQixtREFBS0E7NEJBQUNzQixPQUFPOzRCQUFLRCxXQUFVOzRCQUEyQkUsUUFBUTs0QkFBS0MsS0FBS2pCLEtBQUtrQixRQUFROzRCQUFFQyxLQUFJOzs7Ozs7c0NBRTdGLDhEQUFDTjs0QkFBSUMsV0FBVTs7OENBQ2IsOERBQUNNOzhDQUFJcEIsS0FBS3FCLElBQUk7Ozs7Ozs4Q0FDZCw4REFBQ0M7OENBQUd0QixLQUFLdUIsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFLN0J2QixLQUFLd0IsTUFBTSxLQUFLdkIsQ0FBQUEsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhSSxFQUFFLG1CQUM1Qiw4REFBQ1E7Z0JBQUlDLFdBQVU7O2tDQUNqQiw4REFBQ2xCLDREQUFnQkE7d0JBQUM2QixTQUFTZDt3QkFBVUcsV0FBVTs7Ozs7O2tDQUMvQyw4REFBQ2pCLDREQUFnQkE7d0JBQUM0QixTQUFTLElBQU12QixPQUFPd0IsSUFBSSxDQUFDLFVBQWtCLE9BQVIxQixLQUFLSyxFQUFFO3dCQUFLUyxXQUFVOzs7Ozs7Ozs7Ozs7MEJBTS9FLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNhO3dCQUFFQyxNQUFLO2tDQUNKLDRFQUFDbkMsbURBQUtBOzRCQUFDc0IsT0FBTzs0QkFBS0QsV0FBVTs0QkFBNENFLFFBQVE7NEJBQUtDLEtBQUtqQixLQUFLa0IsUUFBUTs0QkFBRUMsS0FBSTs7Ozs7Ozs7Ozs7a0NBR2xILDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ1gsOERBQUNhO2dDQUFFQyxNQUFLOzBDQUNKLDRFQUFDQztvQ0FBR2YsV0FBVTs4Q0FBd0VkLEtBQUtxQixJQUFJOzs7Ozs7Ozs7OzswQ0FFbkcsOERBQUNDO2dDQUFFUixXQUFVOzBDQUFtRGQsS0FBS3VCLFdBQVc7Ozs7Ozs0QkFLekV2QixLQUFLd0IsTUFBTSxLQUFLdkIsQ0FBQUEsd0JBQUFBLHlCQUFBQSxLQUFBQSxJQUFBQSxZQUFhSSxFQUFFLG1CQUM1Qiw4REFBQ1E7Z0NBQUlDLFdBQVU7O2tEQUNqQiw4REFBQ2xCLDREQUFnQkE7d0NBQUM2QixTQUFTZDt3Q0FBVUcsV0FBVTs7Ozs7O2tEQUMvQyw4REFBQ2pCLDREQUFnQkE7d0NBQUM0QixTQUFTLElBQU12QixPQUFPd0IsSUFBSSxDQUFDLFVBQWtCLE9BQVIxQixLQUFLSyxFQUFFO3dDQUFLUyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFTckcsQ0FBQztHQTdFdUJoQjs7UUFFTEgsc0RBQVNBOzs7S0FGSkciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaW5nbGVCbG9nLnRzeD9kOWYwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB7IFNhZmVMaXN0aW5nLCBTYWZlVXNlciB9IGZyb20gXCJAL3R5cGVzL3R5cGVcIlxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xuaW1wb3J0IHtSaURlbGV0ZUJpbjVMaW5lfSBmcm9tICdyZWFjdC1pY29ucy9yaSdcbmltcG9ydCB7QnNGaWxsUGVuY2lsRmlsbH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnXG5cbmludGVyZmFjZSBCbG9nUHJvcHMge1xuICAgIGtleTpzdHJpbmdcbiAgICBkYXRhOlNhZmVMaXN0aW5nXG4gICAgY3VycmVudFVzZXI/OlNhZmVVc2VyIHwgbnVsbFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpbmdsZUJsb2coe2tleSxkYXRhLGN1cnJlbnRVc2VyfTpCbG9nUHJvcHMpIHtcblxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3Qgb25MaWtlID0gKCkgPT4ge1xuICAgICAgICBheGlvcy5wb3N0KGAvYXBpL2xpa2UvJHtkYXRhLmlkfWApXG4gICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICByb3V0ZXIucmVmcmVzaCgpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgfSlcbiAgICAgICAgLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGNvbnN0IG9uRGVsZXRlID0gKCkgPT4ge1xuXG4gICAgICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9ibG9ncy8ke2RhdGEuaWR9YClcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICAgIHJvdXRlci5yZWZyZXNoKClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICB9KVxuICAgICAgICAuZmluYWxseSgoKSA9PiB7XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgXG4gICAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzExMDBweF0gYm9yZGVyLTIgcC00XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTIganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NDAwfSBjbGFzc05hbWU9XCJ3LVs1MDBweF0gb2JqZWN0LWNvbnRhaW5cIiBoZWlnaHQ9ezMwMH0gc3JjPXtkYXRhLmltYWdlU3JjfSBhbHQ9XCJCbG9nIEltYWdlXCIgLz5cblxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTMwcHhdIGZsZXggZmxleC1jb2wgZ2FwLTQgbGVhZGluZy1bMS41XVwiPlxuICAgICAgICAgICAgICAgICAgPGgxPntkYXRhLm5hbWV9PC9oMT5cbiAgICAgICAgICAgICAgICAgIDxwPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7ZGF0YS51c2VySWQgPT09IGN1cnJlbnRVc2VyPy5pZCAmJiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG10LTRcIj5cbiAgICAgICAgICA8UmlEZWxldGVCaW41TGluZSBvbkNsaWNrPXtvbkRlbGV0ZX0gY2xhc3NOYW1lPVwiIGN1cnNvci1wb2ludGVyIHRleHQtWzEuNXJlbV1cIi8+XG4gICAgICAgICAgPEJzRmlsbFBlbmNpbEZpbGwgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9ibG9ncy8ke2RhdGEuaWR9YCl9IGNsYXNzTmFtZT1cIiBjdXJzb3ItcG9pbnRlciB0ZXh0LVsxLjJyZW1dXCIvPlxuICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC00MDAgcHgtNiBweS0yXCIgb25DbGljaz17b25EZWxldGV9PkRlbGV0ZTwvYnV0dG9uPiAqL31cbiAgICAgICAgICB7LyogPGJ1dHRvbiBjbGFzc05hbWU9XCJiZy15ZWxsb3ctNDAwIHB4LTYgcHktMlwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYmxvZ3MvJHtkYXRhLmlkfWApfT5FZGl0PC9idXR0b24+ICovfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctc20gYmctd2hpdGUgcm91bmRlZC1bNDBweF0gc2hhZG93IGRhcms6YmctZ3JheS04MDAgXCI+XG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxuICAgICAgICAgICAgICAgIDxJbWFnZSB3aWR0aD17NDAwfSBjbGFzc05hbWU9XCJ3LVs1MDBweF0gcm91bmRlZC10LVs0MHB4XSBvYmplY3QtY29udGFpblwiIGhlaWdodD17MzAwfSBzcmM9e2RhdGEuaW1hZ2VTcmN9IGFsdD1cIkJsb2cgSW1hZ2VcIiAvPlxuICAgICAgICAgICAgICAgIHsvKiA8aW1nIGNsYXNzTmFtZT1cInJvdW5kZWQtdC1sZ1wiIHNyYz1cIi9kb2NzL2ltYWdlcy9ibG9nL2ltYWdlLTEuanBnXCIgYWx0PVwiXCIgLz4gKi99XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNSBiZy1bI0RGREZERjhBXSByb3VuZGVkLWItWzQwcHhdXCI+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1iLTIgdGV4dC0yeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgZGFyazp0ZXh0LWJsYWNrXCI+e2RhdGEubmFtZX08L2g1PlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0zIGZvbnQtbm9ybWFsIHRleHQtZ3JheS03MDAgZGFyazp0ZXh0LWJsYWNrIFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIgcHgtMyBweS0yIHRleHQtc20gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgdGV4dC13aGl0ZSBiZy1ibHVlLTcwMCByb3VuZGVkLWxnIGhvdmVyOmJnLWJsdWUtODAwIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1ibHVlLTMwMCBkYXJrOmJnLWJsdWUtNjAwIGRhcms6aG92ZXI6YmctYmx1ZS03MDAgZGFyazpmb2N1czpyaW5nLWJsdWUtODAwXCI+XG4gICAgICAgICAgICAgICAgICAgIFRyb2MgbW9pICFcbiAgICAgICAgICAgICAgICAgICAgPHN2ZyBhcmlhLWhpZGRlbj1cInRydWVcIiBjbGFzc05hbWU9XCJ3LTQgaC00IG1sLTIgLW1yLTFcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgdmlld0JveD1cIjAgMCAyMCAyMFwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj48cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMC4yOTMgMy4yOTNhMSAxIDAgMDExLjQxNCAwbDYgNmExIDEgMCAwMTAgMS40MTRsLTYgNmExIDEgMCAwMS0xLjQxNC0xLjQxNEwxNC41ODYgMTFIM2ExIDEgMCAxMTAtMmgxMS41ODZsLTQuMjkzLTQuMjkzYTEgMSAwIDAxMC0xLjQxNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCI+PC9wYXRoPjwvc3ZnPlxuICAgICAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICAgICAgICAgICAge2RhdGEudXNlcklkID09PSBjdXJyZW50VXNlcj8uaWQgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC00IG10LTRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxSaURlbGV0ZUJpbjVMaW5lIG9uQ2xpY2s9e29uRGVsZXRlfSBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgdGV4dC1bMS41cmVtXVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCc0ZpbGxQZW5jaWxGaWxsIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvYmxvZ3MvJHtkYXRhLmlkfWApfSBjbGFzc05hbWU9XCIgY3Vyc29yLXBvaW50ZXIgdGV4dC1bMS4ycmVtXVwiLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXJlZC00MDAgcHgtNiBweS0yXCIgb25DbGljaz17b25EZWxldGV9PkRlbGV0ZTwvYnV0dG9uPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8YnV0dG9uIGNsYXNzTmFtZT1cImJnLXllbGxvdy00MDAgcHgtNiBweS0yXCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9ibG9ncy8ke2RhdGEuaWR9YCl9PkVkaXQ8L2J1dHRvbj4gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApXG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJheGlvcyIsInVzZVJvdXRlciIsIlJpRGVsZXRlQmluNUxpbmUiLCJCc0ZpbGxQZW5jaWxGaWxsIiwiU2luZ2xlQmxvZyIsImtleSIsImRhdGEiLCJjdXJyZW50VXNlciIsInJvdXRlciIsIm9uTGlrZSIsInBvc3QiLCJpZCIsInRoZW4iLCJyZWZyZXNoIiwiY2F0Y2giLCJlcnJvciIsImZpbmFsbHkiLCJvbkRlbGV0ZSIsImRlbGV0ZSIsImRpdiIsImNsYXNzTmFtZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiaW1hZ2VTcmMiLCJhbHQiLCJoMSIsIm5hbWUiLCJwIiwiZGVzY3JpcHRpb24iLCJ1c2VySWQiLCJvbkNsaWNrIiwicHVzaCIsImEiLCJocmVmIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./components/SingleBlog.tsx\n"));

/***/ })

});