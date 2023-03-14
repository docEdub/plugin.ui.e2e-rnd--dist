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
    let i = 1;
    setInterval(() => {
        osc.send("/test", i++);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4RUFBeUI7QUFFekIsTUFBYSxTQUFTO0lBQ2xCLFlBQVksSUFBWSxFQUFFLE9BQWUsSUFBSTtRQWlEckMsdUJBQWtCLEdBQVcsZ0JBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFoRC9ELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxnQkFBRyxDQUFDLEVBQUUsTUFBTSxFQUFFLElBQUksZ0JBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFFakIsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsS0FBSyxnQkFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDcEI7WUFDRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDdEIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBb0IsRUFBRSxFQUFFO1lBQ3ZDLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxFQUFFLENBQUMsT0FBZSxFQUFFLFFBQXdDO1FBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsSUFBSSxDQUFDLE9BQWUsRUFBRSxHQUFHLElBQVc7UUFDaEMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxLQUFLLGdCQUFHLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUMzQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLGdCQUFHLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVPLFVBQVU7UUFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBRWxDLElBQUksTUFBTSxLQUFLLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUNwQyxJQUFJLGdCQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLGdCQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFO2dCQUM1RixPQUFPLENBQUMsS0FBSyxDQUFDLGtCQUFrQixDQUFDLENBQUM7YUFDckM7aUJBQ0ksSUFBSSxnQkFBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDdEQsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJLElBQUksZ0JBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQ2hELE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDLENBQUM7YUFDbEM7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLGtCQUFrQixHQUFHLE1BQU0sQ0FBQztTQUNwQztJQUNMLENBQUM7Q0FJSjtBQW5ERCw4QkFtREM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREQsK0ZBQThDO0FBRTlDLENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDYixDQUFDLEVBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7OztBQ1RMOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9zcmMvb3NjQ2xpZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIHZhciBcIk9TQ1wiIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly8vd2VicGFjay9zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE9TQyBmcm9tIFwib3NjLWpzXCI7XG5cbmV4cG9ydCBjbGFzcyBPc2NDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyID0gODA4MCkge1xuICAgICAgICB0aGlzLl9vc2MgPSBuZXcgT1NDKHsgcGx1Z2luOiBuZXcgT1NDLldlYnNvY2tldENsaWVudFBsdWdpbih7IGhvc3Q6IGhvc3QsIHBvcnQ6IHBvcnQgfSkgfSk7XG4gICAgICAgIHRoaXMuX29zYy5vcGVuKCk7XG5cbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX29zYy5zdGF0dXMoKSA9PT0gT1NDLlNUQVRVUy5JU19DTE9TRUQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9vc2Mub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5fbG9nU3RhdHVzKCk7XG4gICAgICAgIH0sIDEwMDApO1xuXG4gICAgICAgIHRoaXMuX29zYy5vbihgKmAsIChtZXNzYWdlOiBPU0MuTWVzc2FnZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgT1NDIHJlY2VpdmVkICgke21lc3NhZ2UuYWRkcmVzc30kezAgPCBtZXNzYWdlLmFyZ3MubGVuZ3RoID8gYCwgJHttZXNzYWdlLmFyZ3N9YCA6IGBgfSlgKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgb24oYWRkcmVzczogc3RyaW5nLCBjYWxsYmFjazogKG1lc3NhZ2U6IE9TQy5NZXNzYWdlKSA9PiB2b2lkKSB7XG4gICAgICAgIHRoaXMuX29zYy5vbihhZGRyZXNzLCBjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgc2VuZChhZGRyZXNzOiBzdHJpbmcsIC4uLmFyZ3M6IGFueVtdKSB7XG4gICAgICAgIGlmICh0aGlzLl9vc2Muc3RhdHVzKCkgIT09IE9TQy5TVEFUVVMuSVNfT1BFTikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX29zYy5zZW5kKG5ldyBPU0MuTWVzc2FnZShhZGRyZXNzLCAuLi5hcmdzKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfbG9nU3RhdHVzKCkge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLl9vc2Muc3RhdHVzKCk7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gdGhpcy5fcHJldmlvdXNPc2NTdGF0dXMpIHtcbiAgICAgICAgICAgIGlmIChPU0MuU1RBVFVTLklTX0NMT1NFRCA9PT0gdGhpcy5fb3NjLnN0YXR1cygpIHx8IE9TQy5TVEFUVVMuSVNfQ0xPU0VEID09PSB0aGlzLl9vc2Muc3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBPU0MgZGlzY29ubmVjdGVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChPU0MuU1RBVFVTLklTX0NPTk5FQ1RJTkcgPT09IHRoaXMuX29zYy5zdGF0dXMoKSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYE9TQyBjb25uZWN0aW5nIC4uLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoT1NDLlNUQVRVUy5JU19PUEVOID09PSB0aGlzLl9vc2Muc3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBPU0MgY29ubmVjdGVkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFVua25vd24gT1NDIHN0YXR1c2ApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9wcmV2aW91c09zY1N0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX29zYzogT1NDO1xuICAgIHByaXZhdGUgX3ByZXZpb3VzT3NjU3RhdHVzOiBudW1iZXIgPSBPU0MuU1RBVFVTLklTX05PVF9JTklUSUFMSVpFRDtcbn1cbiIsImltcG9ydCB7IE9zY0NsaWVudCB9IGZyb20gXCJAY29tbW9uL29zY0NsaWVudFwiO1xuXG4oYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IG9zYyA9IG5ldyBPc2NDbGllbnQoXCJsb2NhbGhvc3RcIiwgNTAwMDApO1xuXG4gICAgbGV0IGkgPSAxO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgb3NjLnNlbmQoXCIvdGVzdFwiLCBpKyspO1xuICAgIH0sIDEwMDApO1xufSkoKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gT1NDOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9hcHAudHNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=