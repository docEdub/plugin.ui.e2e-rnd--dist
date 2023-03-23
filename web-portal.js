/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../common/src/osc.ts":
/*!****************************!*\
  !*** ../common/src/osc.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OscNode = void 0;
const osc_js_1 = __importDefault(__webpack_require__(/*! osc-js */ "osc-js"));
class OscNode {
    constructor(osc) {
        this.previousOscStatus = osc_js_1.default.STATUS.IS_NOT_INITIALIZED;
        this.osc = osc;
        setInterval(() => {
            if (this.osc.status() === osc_js_1.default.STATUS.IS_CLOSED) {
                this.osc.open();
            }
            this.logStatus();
        }, 1000);
        this.osc.on(`*`, (message) => {
            console.debug(`OSC received (${message.address}${0 < message.args.length ? `, ${message.args}` : ``})`);
        });
        this.osc.open();
    }
    on(address, callback) {
        this.osc.on(address, callback);
    }
    send(address, ...args) {
        if (this.osc.status() !== osc_js_1.default.STATUS.IS_OPEN) {
            return;
        }
        this.osc.send(new osc_js_1.default.Message(address, ...args));
    }
    logStatus() {
        const status = this.osc.status();
        if (status !== this.previousOscStatus) {
            if (osc_js_1.default.STATUS.IS_CLOSED === this.osc.status() || osc_js_1.default.STATUS.IS_CLOSED === this.osc.status()) {
                console.debug(`OSC closed`);
            }
            else if (osc_js_1.default.STATUS.IS_CONNECTING === this.osc.status()) {
                console.debug(`OSC connecting ...`);
            }
            else if (osc_js_1.default.STATUS.IS_OPEN === this.osc.status()) {
                console.debug(`OSC open`);
            }
            else {
                console.warn(`Unknown OSC status`);
            }
            this.previousOscStatus = status;
        }
    }
}
exports.OscNode = OscNode;


/***/ }),

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
const osc_1 = __webpack_require__(/*! @common/osc */ "../common/src/osc.ts");
class OscClient extends osc_1.OscNode {
    constructor(host, port = 50000) {
        super(new osc_js_1.default({ plugin: new osc_js_1.default.WebsocketClientPlugin({ host: host, port: port }) }));
    }
}
exports.OscClient = OscClient;


/***/ }),

/***/ "./src/web-portal.ts":
/*!***************************!*\
  !*** ./src/web-portal.ts ***!
  \***************************/
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
    osc.on(`*`, (message) => {
        console.debug(`OSC on(${message.address}${0 < message.args.length ? `, ${message.args}` : ``})`);
    });
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/web-portal.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ViLXBvcnRhbC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsOEVBQXlCO0FBT3pCLE1BQWEsT0FBTztJQUNoQixZQUFZLEdBQVE7UUFrRFosc0JBQWlCLEdBQVcsZ0JBQUcsQ0FBQyxNQUFNLENBQUMsa0JBQWtCLENBQUM7UUFqRDlELElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBRWYsV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsS0FBSyxnQkFBRyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQzVDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDbkI7WUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckIsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRVQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsT0FBb0IsRUFBRSxFQUFFO1lBQ3RDLE9BQU8sQ0FBQyxLQUFLLENBQUMsaUJBQWlCLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM1RyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELEVBQUUsQ0FBQyxPQUFlLEVBQUUsUUFBd0M7UUFDeEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFFRCxJQUFJLENBQUMsT0FBZSxFQUFFLEdBQUcsSUFBVztRQUNoQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEtBQUssZ0JBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFO1lBQzFDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksZ0JBQUcsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU8sU0FBUztRQUNiLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFakMsSUFBSSxNQUFNLEtBQUssSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ25DLElBQUksZ0JBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksZ0JBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQzFGLE9BQU8sQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDL0I7aUJBQ0ksSUFBSSxnQkFBRyxDQUFDLE1BQU0sQ0FBQyxhQUFhLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsRUFBRTtnQkFDckQsT0FBTyxDQUFDLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJLElBQUksZ0JBQUcsQ0FBQyxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEVBQUU7Z0JBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDN0I7aUJBQ0k7Z0JBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3RDO1lBRUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLE1BQU0sQ0FBQztTQUNuQztJQUNMLENBQUM7Q0FJSjtBQXBERCwwQkFvREM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0RELDhFQUF5QjtBQUV6Qiw2RUFBc0M7QUFFdEMsTUFBYSxTQUFVLFNBQVEsYUFBTztJQUNsQyxZQUFZLElBQVksRUFBRSxPQUFlLEtBQUs7UUFDMUMsS0FBSyxDQUFDLElBQUksZ0JBQUcsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLGdCQUFHLENBQUMscUJBQXFCLENBQUMsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7Q0FDSjtBQUpELDhCQUlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQsK0ZBQThDO0FBRTlDLENBQUMsR0FBUyxFQUFFO0lBQ1IsTUFBTSxHQUFHLEdBQUcsSUFBSSxxQkFBUyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUU5QyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDVixXQUFXLENBQUMsR0FBRyxFQUFFO1FBQ2IsR0FBRyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMzQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFFVCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ3BCLE9BQU8sQ0FBQyxLQUFLLENBQUMsVUFBVSxPQUFPLENBQUMsT0FBTyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDckcsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLEVBQUMsRUFBRSxDQUFDOzs7Ozs7Ozs7OztBQ2JMOzs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7O1VFdEJBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4uL2NvbW1vbi9zcmMvb3NjLnRzIiwid2VicGFjazovLy8uLi9jb21tb24vc3JjL29zY0NsaWVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViLXBvcnRhbC50cyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgdmFyIFwiT1NDXCIiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovLy93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgT1NDIGZyb20gXCJvc2MtanNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJT3NjTm9kZSB7XG4gICAgb24oYWRkcmVzczogc3RyaW5nLCBjYWxsYmFjazogKG1lc3NhZ2U6IE9TQy5NZXNzYWdlKSA9PiB2b2lkKTogdm9pZDtcbiAgICBzZW5kKGFkZHJlc3M6IHN0cmluZywgLi4uYXJnczogYW55W10pOiB2b2lkO1xufVxuXG5leHBvcnQgY2xhc3MgT3NjTm9kZSBpbXBsZW1lbnRzIElPc2NOb2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihvc2M6IE9TQykge1xuICAgICAgICB0aGlzLm9zYyA9IG9zYztcblxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vc2Muc3RhdHVzKCkgPT09IE9TQy5TVEFUVVMuSVNfQ0xPU0VEKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vc2Mub3BlbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5sb2dTdGF0dXMoKTtcbiAgICAgICAgfSwgMTAwMCk7XG5cbiAgICAgICAgdGhpcy5vc2Mub24oYCpgLCAobWVzc2FnZTogT1NDLk1lc3NhZ2UpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUuZGVidWcoYE9TQyByZWNlaXZlZCAoJHttZXNzYWdlLmFkZHJlc3N9JHswIDwgbWVzc2FnZS5hcmdzLmxlbmd0aCA/IGAsICR7bWVzc2FnZS5hcmdzfWAgOiBgYH0pYCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMub3NjLm9wZW4oKTtcbiAgICB9XG5cbiAgICBvbihhZGRyZXNzOiBzdHJpbmcsIGNhbGxiYWNrOiAobWVzc2FnZTogT1NDLk1lc3NhZ2UpID0+IHZvaWQpIHtcbiAgICAgICAgdGhpcy5vc2Mub24oYWRkcmVzcywgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHNlbmQoYWRkcmVzczogc3RyaW5nLCAuLi5hcmdzOiBhbnlbXSkge1xuICAgICAgICBpZiAodGhpcy5vc2Muc3RhdHVzKCkgIT09IE9TQy5TVEFUVVMuSVNfT1BFTikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3NjLnNlbmQobmV3IE9TQy5NZXNzYWdlKGFkZHJlc3MsIC4uLmFyZ3MpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvZ1N0YXR1cygpIHtcbiAgICAgICAgY29uc3Qgc3RhdHVzID0gdGhpcy5vc2Muc3RhdHVzKCk7XG5cbiAgICAgICAgaWYgKHN0YXR1cyAhPT0gdGhpcy5wcmV2aW91c09zY1N0YXR1cykge1xuICAgICAgICAgICAgaWYgKE9TQy5TVEFUVVMuSVNfQ0xPU0VEID09PSB0aGlzLm9zYy5zdGF0dXMoKSB8fCBPU0MuU1RBVFVTLklTX0NMT1NFRCA9PT0gdGhpcy5vc2Muc3RhdHVzKCkpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmRlYnVnKGBPU0MgY2xvc2VkYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChPU0MuU1RBVFVTLklTX0NPTk5FQ1RJTkcgPT09IHRoaXMub3NjLnN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgT1NDIGNvbm5lY3RpbmcgLi4uYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChPU0MuU1RBVFVTLklTX09QRU4gPT09IHRoaXMub3NjLnN0YXR1cygpKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5kZWJ1ZyhgT1NDIG9wZW5gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgVW5rbm93biBPU0Mgc3RhdHVzYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNPc2NTdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9zYzogT1NDO1xuICAgIHByaXZhdGUgcHJldmlvdXNPc2NTdGF0dXM6IG51bWJlciA9IE9TQy5TVEFUVVMuSVNfTk9UX0lOSVRJQUxJWkVEO1xufVxuIiwiaW1wb3J0IE9TQyBmcm9tIFwib3NjLWpzXCI7XG5cbmltcG9ydCB7IE9zY05vZGUgfSBmcm9tIFwiQGNvbW1vbi9vc2NcIjtcblxuZXhwb3J0IGNsYXNzIE9zY0NsaWVudCBleHRlbmRzIE9zY05vZGUge1xuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyID0gNTAwMDApIHtcbiAgICAgICAgc3VwZXIobmV3IE9TQyh7IHBsdWdpbjogbmV3IE9TQy5XZWJzb2NrZXRDbGllbnRQbHVnaW4oeyBob3N0OiBob3N0LCBwb3J0OiBwb3J0IH0pIH0pKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBPc2NDbGllbnQgfSBmcm9tIFwiQGNvbW1vbi9vc2NDbGllbnRcIjtcblxuKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBvc2MgPSBuZXcgT3NjQ2xpZW50KFwibG9jYWxob3N0XCIsIDUwMDAwKTtcblxuICAgIGxldCBpID0gMTtcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgIG9zYy5zZW5kKFwiL3Rlc3RcIiwgaSsrKTtcbiAgICB9LCAxMDAwKTtcblxuICAgIG9zYy5vbihgKmAsIChtZXNzYWdlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZGVidWcoYE9TQyBvbigke21lc3NhZ2UuYWRkcmVzc30kezAgPCBtZXNzYWdlLmFyZ3MubGVuZ3RoID8gYCwgJHttZXNzYWdlLmFyZ3N9YCA6IGBgfSlgKTtcbiAgICB9KTtcbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IE9TQzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvd2ViLXBvcnRhbC50c1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==