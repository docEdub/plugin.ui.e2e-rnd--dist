/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../common/src/oscClient.ts":
/*!**********************************!*\
  !*** ../common/src/oscClient.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OscClient = void 0;
const osc_js_1 = __importDefault(__webpack_require__(/*! osc-js */ "osc-js"));
class OscClient {
    constructor(host, port = 8080) {
        this._previousOscStatus = osc_js_1.default.STATUS.IS_NOT_INITIALIZED;
        this._osc = new osc_js_1.default({ plugin: new osc_js_1.default.WebsocketClientPlugin({ host: host, port: port }) });
        this._osc.open();
        setInterval(() => {
            if (this._osc.status() === osc_js_1.default.STATUS.IS_CLOSED) {
                this._osc.open();
            }
            this._logStatus();
        }, 1000);
        this._osc.on(`*`, (message) => {
            console.debug(`OSC received (${message.address}${0 < message.args.length ? `, ${message.args}` : ``})`);
        });
    }
    on(address, callback) {
        this._osc.on(address, callback);
    }
    send(address, ...args) {
        if (this._osc.status() !== osc_js_1.default.STATUS.IS_OPEN) {
            return;
        }
        this._osc.send(new osc_js_1.default.Message(address, ...args));
    }
    _logStatus() {
        const status = this._osc.status();
        if (status !== this._previousOscStatus) {
            if (osc_js_1.default.STATUS.IS_CLOSED === this._osc.status() || osc_js_1.default.STATUS.IS_CLOSED === this._osc.status()) {
                console.debug(`OSC disconnected`);
            }
            else if (osc_js_1.default.STATUS.IS_CONNECTING === this._osc.status()) {
                console.debug(`OSC connecting ...`);
            }
            else if (osc_js_1.default.STATUS.IS_OPEN === this._osc.status()) {
                console.debug(`OSC connected`);
            }
            else {
                console.warn(`Unknown OSC status`);
            }
            this._previousOscStatus = status;
        }
    }
}
exports.OscClient = OscClient;


/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const oscClient_1 = __webpack_require__(/*! @common/oscClient */ "../common/src/oscClient.ts");
(() => __awaiter(void 0, void 0, void 0, function* () {
    const osc = new oscClient_1.OscClient("localhost", 50000);
    setInterval(() => {
        osc.send("/test", Math.random());
    }, 1000);
}))();


/***/ }),

/***/ "osc-js":
/*!**********************!*\
  !*** external "OSC" ***!
  \**********************/
/***/ ((module) => {

module.exports = OSC;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHLE1BQU0sQ0FBQztTQUNwQztJQUNMLENBQUM7Q0FJSjtBQW5ERCw4QkFtREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQsK0ZBQThDO0FBRTlDLENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU5QyxXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2IsQ0FBQyxFQUFDLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7QUNSTDs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7OztVRXRCQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi9jb21tb24vc3JjL29zY0NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLnRzIiwid2VicGFjazovLy9leHRlcm5hbCB2YXIgXCJPU0NcIiIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPU0MgZnJvbSBcIm9zYy1qc1wiO1xuXG5leHBvcnQgY2xhc3MgT3NjQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihob3N0OiBzdHJpbmcsIHBvcnQ6IG51bWJlciA9IDgwODApIHtcbiAgICAgICAgdGhpcy5fb3NjID0gbmV3IE9TQyh7IHBsdWdpbjogbmV3IE9TQy5XZWJzb2NrZXRDbGllbnRQbHVnaW4oeyBob3N0OiBob3N0LCBwb3J0OiBwb3J0IH0pIH0pO1xuICAgICAgICB0aGlzLl9vc2Mub3BlbigpO1xuXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9vc2Muc3RhdHVzKCkgPT09IE9TQy5TVEFUVVMuSVNfQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fb3NjLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2xvZ1N0YXR1cygpO1xuICAgICAgICB9LCAxMDAwKTtcblxuICAgICAgICB0aGlzLl9vc2Mub24oYCpgLCAobWVzc2FnZTogT1NDLk1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYE9TQyByZWNlaXZlZCAoJHttZXNzYWdlLmFkZHJlc3N9JHswIDwgbWVzc2FnZS5hcmdzLmxlbmd0aCA/IGAsICR7bWVzc2FnZS5hcmdzfWAgOiBgYH0pYCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uKGFkZHJlc3M6IHN0cmluZywgY2FsbGJhY2s6IChtZXNzYWdlOiBPU0MuTWVzc2FnZSkgPT4gdm9pZCkge1xuICAgICAgICB0aGlzLl9vc2Mub24oYWRkcmVzcywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHNlbmQoYWRkcmVzczogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5fb3NjLnN0YXR1cygpICE9PSBPU0MuU1RBVFVTLklTX09QRU4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9vc2Muc2VuZChuZXcgT1NDLk1lc3NhZ2UoYWRkcmVzcywgLi4uYXJncykpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2xvZ1N0YXR1cygpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5fb3NjLnN0YXR1cygpO1xuXG4gICAgICAgIGlmIChzdGF0dXMgIT09IHRoaXMuX3ByZXZpb3VzT3NjU3RhdHVzKSB7XG4gICAgICAgICAgICBpZiAoT1NDLlNUQVRVUy5JU19DTE9TRUQgPT09IHRoaXMuX29zYy5zdGF0dXMoKSB8fCBPU0MuU1RBVFVTLklTX0NMT1NFRCA9PT0gdGhpcy5fb3NjLnN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgT1NDIGRpc2Nvbm5lY3RlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoT1NDLlNUQVRVUy5JU19DT05ORUNUSU5HID09PSB0aGlzLl9vc2Muc3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBPU0MgY29ubmVjdGluZyAuLi5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKE9TQy5TVEFUVVMuSVNfT1BFTiA9PT0gdGhpcy5fb3NjLnN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgT1NDIGNvbm5lY3RlZGApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBVbmtub3duIE9TQyBzdGF0dXNgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fcHJldmlvdXNPc2NTdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vc2M6IE9TQztcbiAgICBwcml2YXRlIF9wcmV2aW91c09zY1N0YXR1czogbnVtYmVyID0gT1NDLlNUQVRVUy5JU19OT1RfSU5JVElBTElaRUQ7XG59XG4iLCJpbXBvcnQgeyBPc2NDbGllbnQgfSBmcm9tIFwiQGNvbW1vbi9vc2NDbGllbnRcIjtcblxuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBvc2MgPSBuZXcgT3NjQ2xpZW50KFwibG9jYWxob3N0XCIsIDUwMDAwKTtcblxuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgb3NjLnNlbmQoXCIvdGVzdFwiLCBNYXRoLnJhbmRvbSgpKTtcbiAgICB9LCAxMDAwKTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IE9TQzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9