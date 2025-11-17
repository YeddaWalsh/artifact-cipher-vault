module.exports = [
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/frontend/fhevm/internal/constants.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SDK_CDN_URL",
    ()=>SDK_CDN_URL
]);
const SDK_CDN_URL = "https://cdn.zama.ai/relayer-sdk-js/0.2.0/relayer-sdk-js.umd.cjs";
}),
"[project]/frontend/fhevm/internal/RelayerSDKLoader.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "RelayerSDKLoader",
    ()=>RelayerSDKLoader,
    "isFhevmWindowType",
    ()=>isFhevmWindowType
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$constants$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/constants.ts [app-ssr] (ecmascript)");
;
class RelayerSDKLoader {
    _trace;
    constructor(options){
        this._trace = options.trace;
    }
    isLoaded() {
        if ("TURBOPACK compile-time truthy", 1) {
            throw new Error("RelayerSDKLoader: can only be used in the browser.");
        }
        return isFhevmWindowType(window, this._trace);
    }
    load() {
        console.log("[RelayerSDKLoader] load...");
        // Ensure this only runs in the browser
        if ("TURBOPACK compile-time truthy", 1) {
            console.log("[RelayerSDKLoader] window === undefined");
            return Promise.reject(new Error("RelayerSDKLoader: can only be used in the browser."));
        }
        //TURBOPACK unreachable
        ;
    }
}
function isFhevmRelayerSDKType(o, trace) {
    if (typeof o === "undefined") {
        trace?.("RelayerSDKLoader: relayerSDK is undefined");
        return false;
    }
    if (o === null) {
        trace?.("RelayerSDKLoader: relayerSDK is null");
        return false;
    }
    if (typeof o !== "object") {
        trace?.("RelayerSDKLoader: relayerSDK is not an object");
        return false;
    }
    if (!objHasProperty(o, "initSDK", "function", trace)) {
        trace?.("RelayerSDKLoader: relayerSDK.initSDK is invalid");
        return false;
    }
    if (!objHasProperty(o, "createInstance", "function", trace)) {
        trace?.("RelayerSDKLoader: relayerSDK.createInstance is invalid");
        return false;
    }
    if (!objHasProperty(o, "SepoliaConfig", "object", trace)) {
        trace?.("RelayerSDKLoader: relayerSDK.SepoliaConfig is invalid");
        return false;
    }
    if ("__initialized__" in o) {
        if (o.__initialized__ !== true && o.__initialized__ !== false) {
            trace?.("RelayerSDKLoader: relayerSDK.__initialized__ is invalid");
            return false;
        }
    }
    return true;
}
function isFhevmWindowType(win, trace) {
    if (typeof win === "undefined") {
        trace?.("RelayerSDKLoader: window object is undefined");
        return false;
    }
    if (win === null) {
        trace?.("RelayerSDKLoader: window object is null");
        return false;
    }
    if (typeof win !== "object") {
        trace?.("RelayerSDKLoader: window is not an object");
        return false;
    }
    if (!("relayerSDK" in win)) {
        trace?.("RelayerSDKLoader: window does not contain 'relayerSDK' property");
        return false;
    }
    return isFhevmRelayerSDKType(win.relayerSDK);
}
function objHasProperty(obj, propertyName, propertyType, trace) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    if (!(propertyName in obj)) {
        trace?.(`RelayerSDKLoader: missing ${String(propertyName)}.`);
        return false;
    }
    const value = obj[propertyName];
    if (value === null || value === undefined) {
        trace?.(`RelayerSDKLoader: ${String(propertyName)} is null or undefined.`);
        return false;
    }
    if (typeof value !== propertyType) {
        trace?.(`RelayerSDKLoader: ${String(propertyName)} is not a ${propertyType}.`);
        return false;
    }
    return true;
}
}),
"[project]/frontend/fhevm/internal/PublicKeyStorage.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "publicKeyStorageGet",
    ()=>publicKeyStorageGet,
    "publicKeyStorageSet",
    ()=>publicKeyStorageSet
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$idb$2f$build$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/idb/build/index.js [app-ssr] (ecmascript)");
;
let __dbPromise = undefined;
async function _getDB() {
    if (__dbPromise) {
        return __dbPromise;
    }
    if ("TURBOPACK compile-time truthy", 1) {
        return undefined;
    }
    //TURBOPACK unreachable
    ;
}
function assertFhevmStoredPublicKey(value) {
    if (typeof value !== "object") {
        throw new Error(`FhevmStoredPublicKey must be an object`);
    }
    if (value === null) {
        return;
    }
    if (!("publicKeyId" in value)) {
        throw new Error(`FhevmStoredPublicKey.publicKeyId does not exist`);
    }
    if (typeof value.publicKeyId !== "string") {
        throw new Error(`FhevmStoredPublicKey.publicKeyId must be a string`);
    }
    if (!("publicKey" in value)) {
        throw new Error(`FhevmStoredPublicKey.publicKey does not exist`);
    }
    if (!(value.publicKey instanceof Uint8Array)) {
        throw new Error(`FhevmStoredPublicKey.publicKey must be a Uint8Array`);
    }
}
function assertFhevmStoredPublicParams(value) {
    if (typeof value !== "object") {
        throw new Error(`FhevmStoredPublicParams must be an object`);
    }
    if (value === null) {
        return;
    }
    if (!("publicParamsId" in value)) {
        throw new Error(`FhevmStoredPublicParams.publicParamsId does not exist`);
    }
    if (typeof value.publicParamsId !== "string") {
        throw new Error(`FhevmStoredPublicParams.publicParamsId must be a string`);
    }
    if (!("publicParams" in value)) {
        throw new Error(`FhevmStoredPublicParams.publicParams does not exist`);
    }
    if (!(value.publicParams instanceof Uint8Array)) {
        throw new Error(`FhevmStoredPublicParams.publicParams must be a Uint8Array`);
    }
}
async function publicKeyStorageGet(aclAddress) {
    const db = await _getDB();
    if (!db) {
        return {
            publicParams: null
        };
    }
    let storedPublicKey = null;
    try {
        const pk = await db.get("publicKeyStore", aclAddress);
        if (pk?.value) {
            assertFhevmStoredPublicKey(pk.value);
            storedPublicKey = pk.value;
        }
    } catch  {
    //
    }
    let storedPublicParams = null;
    try {
        const pp = await db.get("paramsStore", aclAddress);
        if (pp?.value) {
            assertFhevmStoredPublicParams(pp.value);
            storedPublicParams = pp.value;
        }
    } catch  {
    //
    }
    const publicKeyData = storedPublicKey?.publicKey;
    const publicKeyId = storedPublicKey?.publicKeyId;
    const publicParams = storedPublicParams ? {
        "2048": storedPublicParams
    } : null;
    let publicKey = undefined;
    if (publicKeyId && publicKeyData) {
        publicKey = {
            id: publicKeyId,
            data: publicKeyData
        };
    }
    return {
        ...publicKey !== undefined && {
            publicKey
        },
        publicParams
    };
}
async function publicKeyStorageSet(aclAddress, publicKey, publicParams) {
    assertFhevmStoredPublicKey(publicKey);
    assertFhevmStoredPublicParams(publicParams);
    const db = await _getDB();
    if (!db) {
        return;
    }
    if (publicKey) {
        await db.put("publicKeyStore", {
            acl: aclAddress,
            value: publicKey
        });
    }
    if (publicParams) {
        await db.put("paramsStore", {
            acl: aclAddress,
            value: publicParams
        });
    }
}
}),
"[project]/frontend/fhevm/internal/fhevm.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FhevmAbortError",
    ()=>FhevmAbortError,
    "FhevmReactError",
    ()=>FhevmReactError,
    "createFhevmInstance",
    ()=>createFhevmInstance
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/address/checks.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/providers/provider-jsonrpc.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/RelayerSDKLoader.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/PublicKeyStorage.ts [app-ssr] (ecmascript)");
;
;
;
class FhevmReactError extends Error {
    code;
    constructor(code, message, options){
        super(message, options);
        this.code = code;
        this.name = "FhevmReactError";
    }
}
function throwFhevmError(code, message, cause) {
    throw new FhevmReactError(code, message, cause ? {
        cause
    } : undefined);
}
const isFhevmInitialized = ()=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        return false;
    }
    return window.relayerSDK.__initialized__ === true;
};
const fhevmLoadSDK = ()=>{
    const loader = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RelayerSDKLoader"]({
        trace: console.log
    });
    return loader.load();
};
const fhevmInitSDK = async (options)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        throw new Error("window.relayerSDK is not available");
    }
    const result = await window.relayerSDK.initSDK(options);
    window.relayerSDK.__initialized__ = result;
    if (!result) {
        throw new Error("window.relayerSDK.initSDK failed.");
    }
    return true;
};
function checkIsAddress(a) {
    if (typeof a !== "string") {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$address$2f$checks$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAddress"])(a)) {
        return false;
    }
    return true;
}
class FhevmAbortError extends Error {
    constructor(message = "FHEVM operation was cancelled"){
        super(message);
        this.name = "FhevmAbortError";
    }
}
async function getChainId(providerOrUrl) {
    if (typeof providerOrUrl === "string") {
        const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](providerOrUrl);
        return Number((await provider.getNetwork()).chainId);
    }
    const chainId = await providerOrUrl.request({
        method: "eth_chainId"
    });
    return Number.parseInt(chainId, 16);
}
async function getWeb3Client(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("web3_clientVersion", []);
        return version;
    } catch (e) {
        throwFhevmError("WEB3_CLIENTVERSION_ERROR", `The URL ${rpcUrl} is not a Web3 node or is not reachable. Please check the endpoint.`, e);
    } finally{
        rpc.destroy();
    }
}
async function tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl) {
    const version = await getWeb3Client(rpcUrl);
    if (typeof version !== "string" || !version.toLowerCase().includes("hardhat")) {
        // Not a Hardhat Node
        return undefined;
    }
    try {
        const metadata = await getFHEVMRelayerMetadata(rpcUrl);
        if (!metadata || typeof metadata !== "object") {
            return undefined;
        }
        if (!("ACLAddress" in metadata && typeof metadata.ACLAddress === "string" && metadata.ACLAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("InputVerifierAddress" in metadata && typeof metadata.InputVerifierAddress === "string" && metadata.InputVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        if (!("KMSVerifierAddress" in metadata && typeof metadata.KMSVerifierAddress === "string" && metadata.KMSVerifierAddress.startsWith("0x"))) {
            return undefined;
        }
        return metadata;
    } catch  {
        // Not a FHEVM Hardhat Node
        return undefined;
    }
}
async function getFHEVMRelayerMetadata(rpcUrl) {
    const rpc = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$providers$2f$provider$2d$jsonrpc$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["JsonRpcProvider"](rpcUrl);
    try {
        const version = await rpc.send("fhevm_relayer_metadata", []);
        return version;
    } catch (e) {
        throwFhevmError("FHEVM_RELAYER_METADATA_ERROR", `The URL ${rpcUrl} is not a FHEVM Hardhat node or is not reachable. Please check the endpoint.`, e);
    } finally{
        rpc.destroy();
    }
}
async function resolve(providerOrUrl, mockChains) {
    // Resolve chainId
    const chainId = await getChainId(providerOrUrl);
    // Resolve rpc url
    let rpcUrl = typeof providerOrUrl === "string" ? providerOrUrl : undefined;
    const _mockChains = {
        31337: "http://localhost:8545",
        ...mockChains ?? {}
    };
    // Help Typescript solver here:
    if (Object.hasOwn(_mockChains, chainId)) {
        if (!rpcUrl) {
            rpcUrl = _mockChains[chainId];
        }
        return {
            isMock: true,
            chainId,
            rpcUrl
        };
    }
    return {
        isMock: false,
        chainId,
        rpcUrl
    };
}
const createFhevmInstance = async (parameters)=>{
    const throwIfAborted = ()=>{
        if (signal.aborted) throw new FhevmAbortError();
    };
    const notify = (status)=>{
        if (onStatusChange) onStatusChange(status);
    };
    const { signal, onStatusChange, provider: providerOrUrl, mockChains } = parameters;
    // Resolve chainId
    const { isMock, rpcUrl, chainId } = await resolve(providerOrUrl, mockChains);
    if (isMock) {
        // Throws an error if cannot connect or url does not refer to a Web3 client
        const fhevmRelayerMetadata = await tryFetchFHEVMHardhatNodeRelayerMetadata(rpcUrl);
        if (fhevmRelayerMetadata) {
            // fhevmRelayerMetadata is defined, which means rpcUrl refers to a FHEVM Hardhat Node
            notify("creating");
            //////////////////////////////////////////////////////////////////////////
            // 
            // WARNING!!
            // ALWAY USE DYNAMIC IMPORT TO AVOID INCLUDING THE ENTIRE FHEVM MOCK LIB 
            // IN THE FINAL PRODUCTION BUNDLE!!
            // 
            //////////////////////////////////////////////////////////////////////////
            const fhevmMock = await __turbopack_context__.A("[project]/frontend/fhevm/internal/mock/fhevmMock.ts [app-ssr] (ecmascript, async loader)");
            const mockInstance = await fhevmMock.fhevmMockCreateInstance({
                rpcUrl,
                chainId,
                metadata: fhevmRelayerMetadata
            });
            throwIfAborted();
            return mockInstance;
        }
    }
    throwIfAborted();
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$RelayerSDKLoader$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isFhevmWindowType"])(window, console.log)) {
        notify("sdk-loading");
        // throws an error if failed
        await fhevmLoadSDK();
        throwIfAborted();
        notify("sdk-loaded");
    }
    // notify that state === "sdk-loaded"
    if (!isFhevmInitialized()) {
        notify("sdk-initializing");
        // throws an error if failed
        await fhevmInitSDK();
        throwIfAborted();
        notify("sdk-initialized");
    }
    const relayerSDK = window.relayerSDK;
    const aclAddress = relayerSDK.SepoliaConfig.aclContractAddress;
    if (!checkIsAddress(aclAddress)) {
        throw new Error(`Invalid address: ${aclAddress}`);
    }
    const pub = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicKeyStorageGet"])(aclAddress);
    throwIfAborted();
    const config = {
        ...relayerSDK.SepoliaConfig,
        network: providerOrUrl,
        publicKey: pub.publicKey,
        publicParams: pub.publicParams
    };
    // notify that state === "creating"
    notify("creating");
    const instance = await relayerSDK.createInstance(config);
    // Save the key even if aborted
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$PublicKeyStorage$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["publicKeyStorageSet"])(aclAddress, instance.getPublicKey(), instance.getPublicParams(2048));
    throwIfAborted();
    return instance;
};
}),
"[project]/frontend/fhevm/useFhevm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useFhevm",
    ()=>useFhevm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/internal/fhevm.ts [app-ssr] (ecmascript)");
;
;
function _assert(condition, message) {
    if (!condition) {
        const m = message ? `Assertion failed: ${message}` : `Assertion failed.`;
        console.error(m);
        throw new Error(m);
    }
}
function useFhevm(parameters) {
    const { provider, chainId, initialMockChains, enabled = true } = parameters;
    const [instance, _setInstance] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [status, _setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [error, _setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(undefined);
    const [_isRunning, _setIsRunning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(enabled);
    const [_providerChanged, _setProviderChanged] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const _abortControllerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const _providerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(provider);
    const _chainIdRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(chainId);
    const _mockChainsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(initialMockChains);
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        // Provider or chainId has changed. Abort immediately
        if (_abortControllerRef.current) {
            // Make sure _providerRef.current + _chainIdRef.current are undefined during abort
            _providerRef.current = undefined;
            _chainIdRef.current = undefined;
            _abortControllerRef.current.abort();
            _abortControllerRef.current = null;
        }
        _providerRef.current = provider;
        _chainIdRef.current = chainId;
        // Nullify instance immediately
        _setInstance(undefined);
        _setError(undefined);
        _setStatus("idle");
        if (provider !== undefined) {
            // Force call main useEffect
            _setProviderChanged((prev)=>prev + 1);
        }
    // Do not modify the running flag.
    }, [
        provider,
        chainId
    ]);
    // Merge in main useEffect!!!
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        refresh();
    }, [
        refresh
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        _setIsRunning(enabled);
    }, [
        enabled
    ]);
    // Main useEffect
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // is _providerRef.current valid here ?
        // even if the first useEffect is rendered in the same render-cycle ?
        if (_isRunning === false) {
            // cancelled
            console.log("cancelled");
            if (_abortControllerRef.current) {
                _abortControllerRef.current.abort();
                _abortControllerRef.current = null;
            }
            // May already be null if provider was changed in the previous render-cycle
            _setInstance(undefined);
            _setError(undefined);
            _setStatus("idle");
            return;
        }
        if (_isRunning === true) {
            if (_providerRef.current === undefined) {
                // instance should be undefined
                // this code below should be unecessary
                _setInstance(undefined);
                _setError(undefined);
                _setStatus("idle");
                return;
            }
            if (!_abortControllerRef.current) {
                _abortControllerRef.current = new AbortController();
            }
            _assert(!_abortControllerRef.current.signal.aborted, "!controllerRef.current.signal.aborted");
            // Keep old instance
            // Was set to undefined if provider changed
            _setStatus("loading");
            _setError(undefined);
            const thisSignal = _abortControllerRef.current.signal;
            const thisProvider = _providerRef.current;
            // Can be undefined, if so, call eth_chainId
            const thisRpcUrlsByChainId = _mockChainsRef.current;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$internal$2f$fhevm$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createFhevmInstance"])({
                signal: thisSignal,
                provider: thisProvider,
                mockChains: thisRpcUrlsByChainId,
                onStatusChange: (s)=>console.log(`[useFhevm] createFhevmInstance status changed: ${s}`)
            }).then((i)=>{
                console.log(`[useFhevm] createFhevmInstance created!`);
                //console.log(`completed (runId=${thisRunId})...`);
                if (thisSignal.aborted) return;
                // is there a edge case where the assert below would fail ?
                // it's not possible to have a _providerRef modified without a prior abort
                _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                _setInstance(i);
                _setError(undefined);
                _setStatus("ready");
            }).catch((e)=>{
                console.log(`Error Was thrown !!! error... ` + e.name);
                if (thisSignal.aborted) return;
                // it's not possible to have a _providerRef modified without a prior abort
                _assert(thisProvider === _providerRef.current, "thisProvider === _providerRef.current");
                _setInstance(undefined);
                _setError(e);
                _setStatus("error");
            });
        }
    }, [
        _isRunning,
        _providerChanged
    ]);
    return {
        instance,
        refresh,
        error,
        status
    };
}
}),
"[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/EthereumConfig__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "EthereumConfig__factory",
    ()=>EthereumConfig__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/factory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "protocolId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561000f575f5ffd5b5061013661005a60408051608080820183525f808352602080840182905283850182905260609384018290528451928301855281835282018190529281018390529081019190915290565b80517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e464970080546001600160a01b03199081166001600160a01b039384161790915560208301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497018054831691841691909117905560408301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497028054831691841691909117905560608301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497038054909216921691909117905550565b604b806101425f395ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c8063da1f12ab14602a575b5f5ffd5b600160405190815260200160405180910390f3fea164736f6c634300081b000a";
const isSuperArgs = (xs)=>xs.length > 1;
class EthereumConfig__factory extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFactory"] {
    constructor(...args){
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/SepoliaConfig__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "SepoliaConfig__factory",
    ()=>SepoliaConfig__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/factory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        inputs: [],
        name: "protocolId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561000f575f5ffd5b5061018a6100ae604080516080810182525f80825260208201819052918101829052606081019190915250604080516080810182527350157cffd6bbfa2dece204a89ec419c23ef5755d815273cd3ab3bd6bcc0c0bf3e27912a92043e817b1cf69602082015273a02cda4ca3a71d7c46997716f4283aa851c2881291810191909152731364cbbf2cdf5032c47d8226a6f6fbd2afcdacac606082015290565b80517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e464970080546001600160a01b03199081166001600160a01b039384161790915560208301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497018054831691841691909117905560408301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497028054831691841691909117905560608301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497038054909216921691909117905550565b604c806101965f395ff3fe6080604052348015600e575f5ffd5b50600436106026575f3560e01c8063da1f12ab14602a575b5f5ffd5b61271160405190815260200160405180910390f3fea164736f6c634300081b000a";
const isSuperArgs = (xs)=>xs.length > 1;
class SepoliaConfig__factory extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFactory"] {
    constructor(...args){
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$config$2f$ZamaConfig$2e$sol$2f$EthereumConfig_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/EthereumConfig__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$config$2f$ZamaConfig$2e$sol$2f$SepoliaConfig_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/SepoliaConfig__factory.ts [app-ssr] (ecmascript)");
;
;
}),
"[project]/types/factories/@fhevm/solidity/config/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$config$2f$ZamaConfig$2e$sol$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/index.ts [app-ssr] (ecmascript) <locals>");
;
}),
"[project]/types/factories/@fhevm/solidity/lib/FHE.sol/FHE__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "FHE__factory",
    ()=>FHE__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/factory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [],
        name: "HandlesAlreadySavedForRequestID",
        type: "error"
    },
    {
        inputs: [],
        name: "InvalidKMSSignatures",
        type: "error"
    },
    {
        inputs: [],
        name: "NoHandleFoundForRequestID",
        type: "error"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestID",
                type: "uint256"
            }
        ],
        name: "DecryptionFulfilled",
        type: "event"
    }
];
const _bytecode = "0x602c6032600b8282823980515f1a607314602657634e487b7160e01b5f525f60045260245ffd5b305f52607381538281f3fe730000000000000000000000000000000000000000301460806040525f5ffdfea164736f6c634300081b000a";
const isSuperArgs = (xs)=>xs.length > 1;
class FHE__factory extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFactory"] {
    constructor(...args){
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/lib/FHE.sol/IDecryptionOracle__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "IDecryptionOracle__factory",
    ()=>IDecryptionOracle__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestID",
                type: "uint256"
            },
            {
                internalType: "bytes32[]",
                name: "ctsHandles",
                type: "bytes32[]"
            },
            {
                internalType: "bytes4",
                name: "callbackSelector",
                type: "bytes4"
            }
        ],
        name: "requestDecryption",
        outputs: [],
        stateMutability: "payable",
        type: "function"
    }
];
class IDecryptionOracle__factory {
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/lib/FHE.sol/IKMSVerifier__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "IKMSVerifier__factory",
    ()=>IKMSVerifier__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "handlesList",
                type: "bytes32[]"
            },
            {
                internalType: "bytes",
                name: "decryptedResult",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "decryptionProof",
                type: "bytes"
            }
        ],
        name: "verifyDecryptionEIP712KMSSignatures",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
class IKMSVerifier__factory {
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/lib/FHE.sol/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$FHE_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/FHE__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$IDecryptionOracle_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/IDecryptionOracle__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$IKMSVerifier_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/IKMSVerifier__factory.ts [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IACL__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "IACL__factory",
    ()=>IACL__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "allow",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32[]",
                name: "handlesList",
                type: "bytes32[]"
            }
        ],
        name: "allowForDecryption",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ciphertext",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "allowTransient",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "cleanTransientStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "account",
                type: "address"
            }
        ],
        name: "isAllowed",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "handle",
                type: "bytes32"
            }
        ],
        name: "isAllowedForDecryption",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    }
];
class IACL__factory {
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IFHEVMExecutor__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "IFHEVMExecutor__factory",
    ()=>IFHEVMExecutor__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            },
            {
                internalType: "enum FheType",
                name: "toType",
                type: "uint8"
            }
        ],
        name: "cast",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheAdd",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheBitAnd",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheBitOr",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheBitXor",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheDiv",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheEq",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheGe",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheGt",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "control",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "ifTrue",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "ifFalse",
                type: "bytes32"
            }
        ],
        name: "fheIfThenElse",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheLe",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheLt",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheMax",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheMin",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheMul",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheNe",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            }
        ],
        name: "fheNeg",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "ct",
                type: "bytes32"
            }
        ],
        name: "fheNot",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "enum FheType",
                name: "randType",
                type: "uint8"
            }
        ],
        name: "fheRand",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "upperBound",
                type: "uint256"
            },
            {
                internalType: "enum FheType",
                name: "randType",
                type: "uint8"
            }
        ],
        name: "fheRandBounded",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheRem",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheRotl",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheRotr",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheShl",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheShr",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "lhs",
                type: "bytes32"
            },
            {
                internalType: "bytes32",
                name: "rhs",
                type: "bytes32"
            },
            {
                internalType: "bytes1",
                name: "scalarByte",
                type: "bytes1"
            }
        ],
        name: "fheSub",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getInputVerifierAddress",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "ct",
                type: "uint256"
            },
            {
                internalType: "enum FheType",
                name: "toType",
                type: "uint8"
            }
        ],
        name: "trivialEncrypt",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes32",
                name: "inputHandle",
                type: "bytes32"
            },
            {
                internalType: "address",
                name: "callerAddress",
                type: "address"
            },
            {
                internalType: "bytes",
                name: "inputProof",
                type: "bytes"
            },
            {
                internalType: "enum FheType",
                name: "inputType",
                type: "uint8"
            }
        ],
        name: "verifyCiphertext",
        outputs: [
            {
                internalType: "bytes32",
                name: "result",
                type: "bytes32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    }
];
class IFHEVMExecutor__factory {
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IInputVerifier__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "IInputVerifier__factory",
    ()=>IInputVerifier__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [],
        name: "cleanTransientStorage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
class IInputVerifier__factory {
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/@fhevm/solidity/lib/Impl.sol/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$IACL_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IACL__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$IFHEVMExecutor_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IFHEVMExecutor__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$IInputVerifier_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IInputVerifier__factory.ts [app-ssr] (ecmascript)");
;
;
;
}),
"[project]/types/factories/@fhevm/solidity/lib/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/index.ts [app-ssr] (ecmascript) <locals>");
;
;
}),
"[project]/types/factories/@fhevm/solidity/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$config$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/config/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/index.ts [app-ssr] (ecmascript) <locals>");
;
;
}),
"[project]/types/factories/@fhevm/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/index.ts [app-ssr] (ecmascript) <locals>");
;
}),
"[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([
    "EncryptedArtifactVoting__factory",
    ()=>EncryptedArtifactVoting__factory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/contract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/contract/factory.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/ethers/lib.esm/abi/interface.js [app-ssr] (ecmascript) <locals>");
;
const _abi = [
    {
        inputs: [],
        stateMutability: "nonpayable",
        type: "constructor"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "yesVotes",
                type: "uint32"
            },
            {
                indexed: false,
                internalType: "uint32",
                name: "noVotes",
                type: "uint32"
            },
            {
                indexed: false,
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        name: "ResultsDecrypted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                indexed: false,
                internalType: "string",
                name: "artifactName",
                type: "string"
            },
            {
                indexed: false,
                internalType: "address",
                name: "requester",
                type: "address"
            }
        ],
        name: "TransferRequestCreated",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address"
            }
        ],
        name: "VoteSubmitted",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                indexed: true,
                internalType: "address",
                name: "voter",
                type: "address"
            }
        ],
        name: "VoterAuthorized",
        type: "event"
    },
    {
        inputs: [],
        name: "admin",
        outputs: [
            {
                internalType: "address",
                name: "",
                type: "address"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "bytes",
                name: "encryptedArtifactName",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "encryptedDescription",
                type: "bytes"
            },
            {
                internalType: "address[]",
                name: "authorizedVoters",
                type: "address[]"
            }
        ],
        name: "createTransferRequest",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            }
        ],
        name: "decryptResults",
        outputs: [
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            },
            {
                internalType: "uint32",
                name: "",
                type: "uint32"
            }
        ],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                internalType: "uint32",
                name: "finalYesCount",
                type: "uint32"
            },
            {
                internalType: "uint32",
                name: "finalNoCount",
                type: "uint32"
            }
        ],
        name: "finalizeResults",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [],
        name: "getAllRequestIds",
        outputs: [
            {
                internalType: "uint256[]",
                name: "",
                type: "uint256[]"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            }
        ],
        name: "getAuthorizedVoterCount",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            }
        ],
        name: "getEncryptedVoteCounts",
        outputs: [
            {
                internalType: "euint32",
                name: "yesVotes",
                type: "bytes32"
            },
            {
                internalType: "euint32",
                name: "noVotes",
                type: "bytes32"
            },
            {
                internalType: "euint32",
                name: "totalVotes",
                type: "bytes32"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            }
        ],
        name: "getTransferRequest",
        outputs: [
            {
                internalType: "uint256",
                name: "id",
                type: "uint256"
            },
            {
                internalType: "string",
                name: "artifactName",
                type: "string"
            },
            {
                internalType: "string",
                name: "description",
                type: "string"
            },
            {
                internalType: "bytes",
                name: "encryptedArtifactName",
                type: "bytes"
            },
            {
                internalType: "bytes",
                name: "encryptedDescription",
                type: "bytes"
            },
            {
                internalType: "address",
                name: "requester",
                type: "address"
            },
            {
                internalType: "uint256",
                name: "createdAt",
                type: "uint256"
            },
            {
                internalType: "bool",
                name: "active",
                type: "bool"
            },
            {
                internalType: "bool",
                name: "decrypted",
                type: "bool"
            },
            {
                internalType: "uint32",
                name: "finalYesCount",
                type: "uint32"
            },
            {
                internalType: "uint32",
                name: "finalNoCount",
                type: "uint32"
            },
            {
                internalType: "bool",
                name: "approved",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "voter",
                type: "address"
            }
        ],
        name: "hasVoted",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                internalType: "address",
                name: "voter",
                type: "address"
            }
        ],
        name: "isAuthorizedVoter",
        outputs: [
            {
                internalType: "bool",
                name: "",
                type: "bool"
            }
        ],
        stateMutability: "view",
        type: "function"
    },
    {
        inputs: [],
        name: "protocolId",
        outputs: [
            {
                internalType: "uint256",
                name: "",
                type: "uint256"
            }
        ],
        stateMutability: "pure",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                internalType: "uint8",
                name: "vote",
                type: "uint8"
            }
        ],
        name: "simpleVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    },
    {
        inputs: [
            {
                internalType: "uint256",
                name: "requestId",
                type: "uint256"
            },
            {
                internalType: "externalEuint8",
                name: "vote",
                type: "bytes32"
            },
            {
                internalType: "bytes",
                name: "inputProof",
                type: "bytes"
            }
        ],
        name: "submitVote",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function"
    }
];
const _bytecode = "0x608060405234801561000f575f5ffd5b5061018a6100ae604080516080810182525f80825260208201819052918101829052606081019190915250604080516080810182527350157cffd6bbfa2dece204a89ec419c23ef5755d815273cd3ab3bd6bcc0c0bf3e27912a92043e817b1cf69602082015273a02cda4ca3a71d7c46997716f4283aa851c2881291810191909152731364cbbf2cdf5032c47d8226a6f6fbd2afcdacac606082015290565b80517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e464970080546001600160a01b03199081166001600160a01b039384161790915560208301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497018054831691841691909117905560408301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497028054831691841691909117905560608301517f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497038054909216921691909117905550565b5f80546001600160a01b03191633179055611c9a806101a85f395ff3fe608060405234801561000f575f5ffd5b50600436106100da575f3560e01c806399807e4c11610088578063d36f424d11610063578063d36f424d1461023f578063da1f12ab14610252578063ec1e6bd61461025a578063f851a4401461026f575f5ffd5b806399807e4c146101ac578063ab17e8f7146101d7578063b1b2409c14610207575f5ffd5b806343859632116100b8578063438596321461015557806381ddb364146101785780639929380214610199575f5ffd5b80630425c357146100de57806319ec0791146100f35780633fb7510114610142575b5f5ffd5b6100f16100ec366004611674565b610299565b005b6101226101013660046116c3565b5f90815260016020526040902060088101546009820154600a909201549092565b604080519384526020840192909252908201526060015b60405180910390f35b6100f16101503660046116f2565b610598565b610168610163366004611741565b610719565b6040519015158152602001610139565b61018b6101863660046116c3565b610745565b604051908152602001610139565b6100f16101a736600461176b565b610760565b6101bf6101ba3660046116c3565b6109d9565b6040516101399c9b9a999897969594939291906117cc565b6101ea6101e53660046116c3565b610cbf565b6040805163ffffffff938416815292909116602083015201610139565b610168610215366004611741565b5f9182526003602090815260408084206001600160a01b0393909316845291905290205460ff1690565b61018b61024d36600461187d565b610e20565b61271161018b565b61026261105c565b604051610139919061194d565b5f54610281906001600160a01b031681565b6040516001600160a01b039091168152602001610139565b5f84815260016020526040902060070154849060ff166102f95760405162461bcd60e51b815260206004820152601660248201527514995c5d595cdd08191bd95cc81b9bdd08195e1a5cdd60521b60448201526064015b60405180910390fd5b5f858152600360209081526040808320338452909152902054859060ff166103635760405162461bcd60e51b815260206004820152601460248201527f4e6f7420617574686f72697a656420766f74657200000000000000000000000060448201526064016102f0565b5f868152600460209081526040808320338452909152902054869060ff16156103be5760405162461bcd60e51b815260206004820152600d60248201526c105b1c9958591e481d9bdd1959609a1b60448201526064016102f0565b5f8781526001602090815260408083208151601f8901849004840281018401909252878252929161040a918a918a908a90819084018382808284375f920191909152506110b292505050565b90505f6104546104238361041e60016110c6565b6110d5565b61042d60016110c6565b61044f61043d8661041e5f6110c6565b6104465f6110c6565b61044f5f6110c6565b611103565b90505f6104616001611117565b905061048b846008015461048661047c8561041e60016110c6565b8461044f5f611117565b611129565b600885015560098401546104a99061048661047c8561041e5f6110c6565b6009850155600a8401546104bd9082611129565b600a85015560088401546104d090611157565b506104de8460090154611157565b506104ec84600a0154611157565b5060088401545f5461050791906001600160a01b0316611166565b5060098401545f5461052291906001600160a01b0316611166565b50600a8401545f5461053d91906001600160a01b0316611166565b505f8b8152600460209081526040808320338085529252808320805460ff191660011790555190918d917ff4a95e0ccff9e012051fb09885c2134c4034ed409e70914a95e1f7c561d206fd9190a35050505050505050505050565b5f83815260016020526040902060070154839060ff166105f35760405162461bcd60e51b815260206004820152601660248201527514995c5d595cdd08191bd95cc81b9bdd08195e1a5cdd60521b60448201526064016102f0565b5f848152600160205260409020600b81015460ff16156106555760405162461bcd60e51b815260206004820152601160248201527f416c72656164792066696e616c697a656400000000000000000000000000000060448201526064016102f0565b600b8101805460ff19690100000000000000000063ffffffff87811690891681811183029390931669ff0000000000000000ff1965010000000000830268ffffffff00000000001961010087021668ffffffffffffffff0019909716969096179590951794909416939093176001179384905560408051928352602083019390935290920460ff1615159082015285907f2f6a8244ff4b19360a84b53fa1d3ca2bc12e7588adf1c4ce18bae6c93bb210299060600160405180910390a25050505050565b5f8281526004602090815260408083206001600160a01b038516845290915290205460ff165b92915050565b6002545f90610754575f610757565b60015b60ff1692915050565b5f82815260016020526040902060070154829060ff166107bb5760405162461bcd60e51b815260206004820152601660248201527514995c5d595cdd08191bd95cc81b9bdd08195e1a5cdd60521b60448201526064016102f0565b5f838152600360209081526040808320338452909152902054839060ff166108255760405162461bcd60e51b815260206004820152601460248201527f4e6f7420617574686f72697a656420766f74657200000000000000000000000060448201526064016102f0565b5f848152600460209081526040808320338452909152902054849060ff16156108805760405162461bcd60e51b815260206004820152600d60248201526c105b1c9958591e481d9bdd1959609a1b60448201526064016102f0565b60ff8416158061089357508360ff166001145b6108df5760405162461bcd60e51b815260206004820152601360248201527f566f7465206d7573742062652030206f7220310000000000000000000000000060448201526064016102f0565b5f8581526001602081905260409091209060ff8616900361094157600181600b0160018282829054906101000a900463ffffffff1661091e91906119a3565b92506101000a81548163ffffffff021916908363ffffffff160217905550610984565b600181600b0160058282829054906101000a900463ffffffff1661096591906119a3565b92506101000a81548163ffffffff021916908363ffffffff1602179055505b5f868152600460209081526040808320338085529252808320805460ff1916600117905551909188917ff4a95e0ccff9e012051fb09885c2134c4034ed409e70914a95e1f7c561d206fd9190a3505050505050565b5f81815260016020819052604082208054600582015460068301546007840154600b85015495850180546060978897889788978c978897889788978897889788979096909593946002880194600389019460048a01946001600160a01b0390941693919260ff908116928082169263ffffffff6101008304811693650100000000008404909116926901000000000000000000900416908b90610a7b906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610aa7906119bf565b8015610af25780601f10610ac957610100808354040283529160200191610af2565b820191905f5260205f20905b815481529060010190602001808311610ad557829003601f168201915b50505050509a50898054610b05906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610b31906119bf565b8015610b7c5780601f10610b5357610100808354040283529160200191610b7c565b820191905f5260205f20905b815481529060010190602001808311610b5f57829003601f168201915b50505050509950888054610b8f906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610bbb906119bf565b8015610c065780601f10610bdd57610100808354040283529160200191610c06565b820191905f5260205f20905b815481529060010190602001808311610be957829003601f168201915b50505050509850878054610c19906119bf565b80601f0160208091040260200160405190810160405280929190818152602001828054610c45906119bf565b8015610c905780601f10610c6757610100808354040283529160200191610c90565b820191905f5260205f20905b815481529060010190602001808311610c7357829003601f168201915b505050505097509c509c509c509c509c509c509c509c509c509c509c509c505091939597999b5091939597999b565b5f818152600160205260408120600701548190839060ff16610d1c5760405162461bcd60e51b815260206004820152601660248201527514995c5d595cdd08191bd95cc81b9bdd08195e1a5cdd60521b60448201526064016102f0565b5f848152600160205260409020600b81015460ff1615610d7e5760405162461bcd60e51b815260206004820152601160248201527f416c72656164792064656372797074656400000000000000000000000000000060448201526064016102f0565b600b81018054690100000000000000000065010000000000820463ffffffff9081166101008404909116818111830269ff0000000000000000ff19909416939093176001179384905560408051848152602081018390529290940460ff16151582850152925191929188917f2f6a8244ff4b19360a84b53fa1d3ca2bc12e7588adf1c4ce18bae6c93bb21029919081900360600190a290945092505050915091565b6002545f908190610e329060016119f7565b5f81815260016020526040902081815590915060038101610e54898b83611a6a565b5060048101610e64878983611a6a565b5060408051602081019091525f81526001820190610e829082611b24565b5060408051602081019091525f81526002820190610ea09082611b24565b506005810180547fffffffffffffffffffffffff0000000000000000000000000000000000000000163317905542600682015560078101805460ff19166001179055610eeb5f611117565b6008820155610ef95f611117565b6009820155610f075f611117565b600a8201555f5b84811015610fd9575f838152600360205260408120600191888885818110610f3857610f38611bdf565b9050602002016020810190610f4d9190611bf3565b6001600160a01b0316815260208101919091526040015f20805460ff1916911515919091179055858582818110610f8657610f86611bdf565b9050602002016020810190610f9b9190611bf3565b6001600160a01b0316837f3472268c878450e0a658ae0f35954d9f22e16ae6e92cf9322237f8e6a50d982160405160405180910390a3600101610f0e565b50600280546001810182555f9182527f405787fa12a823e0f2b7631cc41b3ba8828b3321ca811111fa75cd3aa3bb5ace01839055604080518181529081019190915233602082015282907f6839f9a72d42aa328bd55cea18c7101837e77e341d46accf1cfd02a95d7accb69060600160405180910390a250979650505050505050565b606060028054806020026020016040519081016040528092919081815260200182805480156110a857602002820191905f5260205f20905b815481526020019060010190808311611094575b5050505050905090565b5f6110bf83836002611178565b9392505050565b5f61073f8260ff166002611298565b5f826110e7576110e45f6110c6565b92505b816110f8576110f55f6110c6565b91505b6110bf83835f61134d565b5f61110f848484611448565b949350505050565b5f61073f8263ffffffff166004611298565b5f8261113b576111385f611117565b92505b8161114c576111495f611117565b91505b6110bf83835f6114f1565b5f61116282306115a6565b5090565b5f61117183836115a6565b5090919050565b7f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497015460405163196d0b9b60e01b81525f917f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e4649700916001600160a01b039091169063196d0b9b906111f1908890339089908990600401611c2c565b6020604051808303815f875af115801561120d573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906112319190611c62565b8154604051630f8e573b60e21b8152600481018390523360248201529193506001600160a01b031690633e395cec906044015f604051808303815f87803b15801561127a575f5ffd5b505af115801561128c573d5f5f3e3d5ffd5b50505050509392505050565b7f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e464970154604051639cd07acb60e01b81525f917f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e4649700916001600160a01b0390911690639cd07acb9061130d9087908790600401611c79565b6020604051808303815f875af1158015611329573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061110f9190611c62565b5f5f82156113605750600160f81b611363565b505f5b7f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497015460405163f77f3f1d60e01b815260048101879052602481018690527fff00000000000000000000000000000000000000000000000000000000000000831660448201527f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e4649700916001600160a01b03169063f77f3f1d906064015b6020604051808303815f875af115801561141a573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061143e9190611c62565b9695505050505050565b5f807f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497006001810154604051637702dcff60e01b81526004810188905260248101879052604481018690529192506001600160a01b031690637702dcff906064016020604051808303815f875af11580156114c4573d5f5f3e3d5ffd5b505050506040513d601f19601f820116820180604052508101906114e89190611c62565b95945050505050565b5f5f82156115045750600160f81b611507565b505f5b7f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497015460405163022f65e760e31b815260048101879052602481018690527fff00000000000000000000000000000000000000000000000000000000000000831660448201527f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e4649700916001600160a01b03169063117b2f38906064016113fe565b5f7f9e7b61f58c47dc699ac88507c4f5bb9f121c03808c5676a8078fe583e46497008054604051635ca4b5b160e11b8152600481018690526001600160a01b03858116602483015292935091169063b9496b62906044015f604051808303815f87803b158015611614575f5ffd5b505af1158015611626573d5f5f3e3d5ffd5b50505050505050565b5f5f83601f84011261163f575f5ffd5b50813567ffffffffffffffff811115611656575f5ffd5b60208301915083602082850101111561166d575f5ffd5b9250929050565b5f5f5f5f60608587031215611687575f5ffd5b8435935060208501359250604085013567ffffffffffffffff8111156116ab575f5ffd5b6116b78782880161162f565b95989497509550505050565b5f602082840312156116d3575f5ffd5b5035919050565b803563ffffffff811681146116ed575f5ffd5b919050565b5f5f5f60608486031215611704575f5ffd5b83359250611714602085016116da565b9150611722604085016116da565b90509250925092565b80356001600160a01b03811681146116ed575f5ffd5b5f5f60408385031215611752575f5ffd5b823591506117626020840161172b565b90509250929050565b5f5f6040838503121561177c575f5ffd5b82359150602083013560ff81168114611793575f5ffd5b809150509250929050565b5f81518084528060208401602086015e5f602082860101526020601f19601f83011685010191505092915050565b8c815261018060208201525f6117e661018083018e61179e565b82810360408401526117f8818e61179e565b9050828103606084015261180c818d61179e565b90508281036080840152611820818c61179e565b9150506001600160a01b03891660a08301528760c083015261184660e083018815159052565b94151561010082015263ffffffff938416610120820152919092166101408201529015156101609091015298975050505050505050565b5f5f5f5f5f5f60608789031215611892575f5ffd5b863567ffffffffffffffff8111156118a8575f5ffd5b6118b489828a0161162f565b909750955050602087013567ffffffffffffffff8111156118d3575f5ffd5b6118df89828a0161162f565b909550935050604087013567ffffffffffffffff8111156118fe575f5ffd5b8701601f8101891361190e575f5ffd5b803567ffffffffffffffff811115611924575f5ffd5b8960208260051b8401011115611938575f5ffd5b60208201935080925050509295509295509295565b602080825282518282018190525f918401906040840190835b81811015611984578351835260209384019390920191600101611966565b509095945050505050565b634e487b7160e01b5f52601160045260245ffd5b63ffffffff818116838216019081111561073f5761073f61198f565b600181811c908216806119d357607f821691505b6020821081036119f157634e487b7160e01b5f52602260045260245ffd5b50919050565b8082018082111561073f5761073f61198f565b634e487b7160e01b5f52604160045260245ffd5b601f821115611a6557805f5260205f20601f840160051c81016020851015611a435750805b601f840160051c820191505b81811015611a62575f8155600101611a4f565b50505b505050565b67ffffffffffffffff831115611a8257611a82611a0a565b611a9683611a9083546119bf565b83611a1e565b5f601f841160018114611ac7575f8515611ab05750838201355b5f19600387901b1c1916600186901b178355611a62565b5f83815260208120601f198716915b82811015611af65786850135825560209485019460019092019101611ad6565b5086821015611b12575f1960f88860031b161c19848701351681555b505060018560011b0183555050505050565b815167ffffffffffffffff811115611b3e57611b3e611a0a565b611b5281611b4c84546119bf565b84611a1e565b6020601f821160018114611b84575f8315611b6d5750848201515b5f19600385901b1c1916600184901b178455611a62565b5f84815260208120601f198516915b82811015611bb35787850151825560209485019460019092019101611b93565b5084821015611bd057868401515f19600387901b60f8161c191681555b50505050600190811b01905550565b634e487b7160e01b5f52603260045260245ffd5b5f60208284031215611c03575f5ffd5b6110bf8261172b565b60548110611c2857634e487b7160e01b5f52602160045260245ffd5b9052565b8481526001600160a01b0384166020820152608060408201525f611c53608083018561179e565b90506114e86060830184611c0c565b5f60208284031215611c72575f5ffd5b5051919050565b828152604081016110bf6020830184611c0c56fea164736f6c634300081b000a";
const isSuperArgs = (xs)=>xs.length > 1;
class EncryptedArtifactVoting__factory extends __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$factory$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ContractFactory"] {
    constructor(...args){
        if (isSuperArgs(args)) {
            super(...args);
        } else {
            super(_abi, _bytecode, args[0]);
        }
    }
    getDeployTransaction(overrides) {
        return super.getDeployTransaction(overrides || {});
    }
    deploy(overrides) {
        return super.deploy(overrides || {});
    }
    connect(runner) {
        return super.connect(runner);
    }
    static bytecode = _bytecode;
    static abi = _abi;
    static createInterface() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$abi$2f$interface$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Interface"](_abi);
    }
    static connect(address, runner) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$contract$2f$contract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Contract"](address, _abi, runner);
    }
}
}),
"[project]/types/factories/contracts/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)");
;
}),
"[project]/types/factories/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/contracts/index.ts [app-ssr] (ecmascript) <locals>");
;
;
}),
"[project]/types/index.ts [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/* Autogenerated file. Do not edit manually. */ /* tslint:disable */ /* eslint-disable */ __turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/factories/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$config$2f$ZamaConfig$2e$sol$2f$EthereumConfig_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/EthereumConfig__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$config$2f$ZamaConfig$2e$sol$2f$SepoliaConfig_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/config/ZamaConfig.sol/SepoliaConfig__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$FHE_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/FHE__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$IDecryptionOracle_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/IDecryptionOracle__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$FHE$2e$sol$2f$IKMSVerifier_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/FHE.sol/IKMSVerifier__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$IACL_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IACL__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$IFHEVMExecutor_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IFHEVMExecutor__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f40$fhevm$2f$solidity$2f$lib$2f$Impl$2e$sol$2f$IInputVerifier_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/@fhevm/solidity/lib/Impl.sol/IInputVerifier__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
}),
"[project]/frontend/src/config/contracts.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Contract addresses - update these after deployment
__turbopack_context__.s([
    "CONTRACT_ADDRESSES",
    ()=>CONTRACT_ADDRESSES,
    "getContractAddress",
    ()=>getContractAddress
]);
const CONTRACT_ADDRESSES = {
    localhost: '0xCf7Ed3AccA5a467e9e704C703E8D87F634fB0Fc9',
    sepolia: '0xd0703851f993c86e5683a6dCFE5fc7ef8E9e4431'
};
const getContractAddress = (chainId)=>{
    switch(chainId){
        case 31337:
        case 1337:
            return CONTRACT_ADDRESSES.localhost;
        case 11155111:
            return CONTRACT_ADDRESSES.sepolia;
        default:
            throw new Error(`Unsupported chain ID: ${chainId}`);
    }
};
}),
"[project]/frontend/src/hooks/useArtifactVoting.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useArtifactVoting",
    ()=>useArtifactVoting
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useWriteContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
;
;
;
;
function useArtifactVoting() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(chainId);
    // Read contract functions
    const { data: allRequestIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
        functionName: 'getAllRequestIds'
    });
    // Write contract functions
    const { writeContractAsync } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useWriteContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useWriteContract"])();
    const createTransferRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (artifactName, description, authorizedVoters)=>{
        if (!address) throw new Error('Wallet not connected');
        return await writeContractAsync({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
            functionName: 'createTransferRequest',
            args: [
                artifactName,
                description,
                authorizedVoters
            ]
        });
    }, [
        writeContractAsync,
        address,
        contractAddress
    ]);
    const submitVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId, encryptedVote, inputProof)=>{
        if (!address) throw new Error('Wallet not connected');
        return await writeContractAsync({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
            functionName: 'submitVote',
            args: [
                BigInt(requestId),
                encryptedVote,
                inputProof
            ]
        });
    }, [
        writeContractAsync,
        address,
        contractAddress
    ]);
    const simpleVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId, vote)=>{
        if (!address) throw new Error('Wallet not connected');
        return await writeContractAsync({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
            functionName: 'simpleVote',
            args: [
                BigInt(requestId),
                vote
            ]
        });
    }, [
        writeContractAsync,
        address,
        contractAddress
    ]);
    const decryptResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId)=>{
        if (!address) throw new Error('Wallet not connected');
        return await writeContractAsync({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
            functionName: 'decryptResults',
            args: [
                BigInt(requestId)
            ]
        });
    }, [
        writeContractAsync,
        address,
        contractAddress
    ]);
    const finalizeResults = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId, finalYesCount, finalNoCount)=>{
        if (!address) throw new Error('Wallet not connected');
        return await writeContractAsync({
            address: contractAddress,
            abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
            functionName: 'finalizeResults',
            args: [
                BigInt(requestId),
                finalYesCount,
                finalNoCount
            ]
        });
    }, [
        writeContractAsync,
        address,
        contractAddress
    ]);
    // Note: Read operations should be handled by components using useReadContract directly
    // to avoid React Hooks rules violations. This hook focuses on write operations.
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getTransferRequest = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId)=>{
        // This should be implemented by components using useReadContract
        console.warn('getTransferRequest should be called via useReadContract in components');
        return null;
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const isAuthorizedVoter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId, voter)=>{
        console.warn('isAuthorizedVoter should be called via useReadContract in components');
        return false;
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const hasVoted = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId, voter)=>{
        console.warn('hasVoted should be called via useReadContract in components');
        return false;
    }, []);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const getEncryptedVoteCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId)=>{
        console.warn('getEncryptedVoteCounts should be called via useReadContract in components');
        return null;
    }, []);
    return {
        // Data
        allRequestIds,
        // Actions
        createTransferRequest,
        submitVote,
        simpleVote,
        decryptResults,
        finalizeResults,
        getTransferRequest,
        isAuthorizedVoter,
        hasVoted,
        getEncryptedVoteCounts
    };
}
}),
"[project]/frontend/src/hooks/useVotingWithFHE.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useVotingWithFHE",
    ()=>useVotingWithFHE
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/usePublicClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/fhevm/useFhevm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useArtifactVoting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useArtifactVoting.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
;
;
;
;
;
// FHEVM type constants (kept for future use)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const FhevmType = {
    euint8: 0,
    euint16: 1,
    euint32: 2
};
function useVotingWithFHE() {
    const { address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const publicClient = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$usePublicClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePublicClient"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    // Fix FHEVM provider initialization based on documentation issues
    const fhevmProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        if (publicClient?.chain?.id === 31337) {
            // Localhost: use RPC URL string as expected by useFhevm
            return "http://127.0.0.1:8545";
        } else if (publicClient?.chain?.id === 11155111) {
            // Sepolia: use RPC URL string for better compatibility
            return `https://sepolia.infura.io/v3/${process.env.NEXT_PUBLIC_INFURA_API_KEY || 'b18fb7e6ca7045ac83c41157ab93f990'}`;
        } else {
            // For other networks, use raw EIP-1193 provider
            return ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : undefined;
        }
    }, [
        publicClient?.chain?.id
    ]);
    // Initialize FHEVM instance
    const { instance: fhevm, status: fhevmStatus, error: fhevmError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$fhevm$2f$useFhevm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useFhevm"])({
        provider: fhevmProvider,
        chainId: chainId || 31337,
        enabled: !!fhevmProvider
    });
    const artifactVoting = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useArtifactVoting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useArtifactVoting"])();
    const [isEncrypting, setIsEncrypting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const createEncryptedVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (vote)=>{
        if (!fhevm || !address) {
            throw new Error('FHEVM instance not available or wallet not connected');
        }
        try {
            setIsEncrypting(true);
            // Create encrypted input for the contract and user
            const currentContractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(chainId || 31337);
            const encryptedInput = fhevm.createEncryptedInput(currentContractAddress, address);
            // Add the vote value (0 or 1) as uint8 and encrypt
            const finalInput = await encryptedInput.add8(vote).encrypt();
            return {
                handles: finalInput.handles.map((h)=>'0x' + Buffer.from(h).toString('hex')),
                inputProof: '0x' + Buffer.from(finalInput.inputProof).toString('hex')
            };
        } catch (error) {
            console.error('Error encrypting vote:', error);
            throw error;
        } finally{
            setIsEncrypting(false);
        }
    }, [
        fhevm,
        address,
        chainId
    ]);
    const getEncryptedVoteCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId)=>{
        if (!address) {
            throw new Error('Wallet not connected');
        }
        try {
            return await artifactVoting.getEncryptedVoteCounts(requestId);
        } catch (error) {
            console.error('Error getting encrypted vote counts:', error);
            throw error;
        }
    }, [
        address,
        artifactVoting
    ]);
    const decryptVoteCounts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId)=>{
        try {
            // Use ethers directly to get contract data, similar to TransferRequestList
            const { ethers } = await __turbopack_context__.A("[project]/frontend/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)");
            const provider = new ethers.BrowserProvider(window.ethereum);
            const contract = new ethers.Contract((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(31337), artifactVoting.interface || artifactVoting.abi, provider);
            const requestData = await contract.getTransferRequest(requestId);
            if (!requestData) {
                console.log('No request data found for ID:', requestId);
                return {
                    yesVotes: 0,
                    noVotes: 0
                };
            }
            // Extract vote counts - requestData is an array
            const finalYesCount = Number(requestData[7]); // finalYesCount
            const finalNoCount = Number(requestData[8]); // finalNoCount
            console.log('Decrypted vote counts for request', requestId, ':', {
                finalYesCount,
                finalNoCount
            });
            return {
                yesVotes: finalYesCount || 0,
                noVotes: finalNoCount || 0
            };
        } catch (error) {
            console.error('Error decrypting vote counts:', error);
            return {
                yesVotes: 0,
                noVotes: 0
            };
        }
    }, [
        artifactVoting
    ]);
    const submitEncryptedVote = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (requestId, vote)=>{
        if (!fhevm || !address) {
            throw new Error('FHEVM instance not available or wallet not connected');
        }
        try {
            setIsEncrypting(true);
            // Create encrypted vote using FHEVM
            const encryptedVote = await createEncryptedVote(vote);
            // Submit the vote to the contract
            await artifactVoting.submitVote(requestId, encryptedVote.handles[0], encryptedVote.inputProof);
            return true;
        } catch (error) {
            console.error('Error submitting encrypted vote:', error);
            throw error;
        } finally{
            setIsEncrypting(false);
        }
    }, [
        fhevm,
        address,
        createEncryptedVote,
        artifactVoting
    ]);
    return {
        // FHEVM status
        fhevmReady: fhevmStatus === 'ready',
        fhevmError,
        isEncrypting,
        // Contract operations
        ...artifactVoting,
        simpleVote: artifactVoting.simpleVote,
        // FHE-enhanced operations
        createEncryptedVote,
        submitEncryptedVote,
        decryptVoteCounts,
        getEncryptedVoteCounts
    };
}
}),
"[project]/frontend/src/components/CreateTransferRequest.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreateTransferRequest",
    ()=>CreateTransferRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useVotingWithFHE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useVotingWithFHE.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function CreateTransferRequest({ onBack, onSuccess }) {
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const { createTransferRequest, fhevmReady } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useVotingWithFHE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVotingWithFHE"])();
    const [artifactName, setArtifactName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [authorizedVoters, setAuthorizedVoters] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([
        ''
    ]);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const addVoter = ()=>{
        setAuthorizedVoters([
            ...authorizedVoters,
            ''
        ]);
    };
    const removeVoter = (index)=>{
        if (authorizedVoters.length > 1) {
            setAuthorizedVoters(authorizedVoters.filter((_, i)=>i !== index));
        }
    };
    const updateVoter = (index, address)=>{
        const newVoters = [
            ...authorizedVoters
        ];
        newVoters[index] = address;
        setAuthorizedVoters(newVoters);
    };
    const isValidAddress = (addr)=>{
        return /^0x[a-fA-F0-9]{40}$/.test(addr);
    };
    const isFormValid = ()=>{
        const validVoters = authorizedVoters.filter((voter)=>voter.trim() && isValidAddress(voter.trim()));
        return artifactName.trim() && description.trim() && validVoters.length > 0;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!isFormValid() || !isConnected || !fhevmReady) return;
        // Check if connected to the correct network (Hardhat localhost)
        if (chainId !== 31337) {
            console.warn('Please connect to the Hardhat Localhost network in your wallet.');
            return;
        }
        setIsSubmitting(true);
        try {
            // Encrypt sensitive data using FHEVM
            const encryptedArtifactName = await encryptString(artifactName);
            const encryptedDescription = await encryptString(description);
            await createTransferRequest(encryptedArtifactName, encryptedDescription, authorizedVoters.filter((v)=>v.trim() && isValidAddress(v.trim())));
            // Transfer request created successfully
            console.log('Calling onSuccess callback');
            onSuccess?.(); // Trigger refresh before going back
            // Add a small delay to ensure data is updated before navigating back
            setTimeout(()=>{
                onBack();
            }, 1000);
        } catch (error) {
            console.error('Error creating transfer request:', error);
            // Provide more specific error messages
            let errorMessage = 'Failed to create transfer request. ';
            if (error.message?.includes('network')) {
                errorMessage += 'Please ensure you are connected to the Hardhat Localhost network.';
            } else if (error.message?.includes('gas')) {
                errorMessage += 'Transaction failed due to gas issues.';
            } else {
                errorMessage += 'Please check the console for details and try again.';
            }
            console.error('Create transfer request error:', errorMessage);
        } finally{
            setIsSubmitting(false);
        }
    };
    // Helper function to encrypt strings using FHEVM
    const encryptString = async (text)=>{
        try {
            // Convert string to bytes
            const encoder = new TextEncoder();
            const bytes = encoder.encode(text);
            // For demo purposes, we'll create a simple encrypted representation
            // In a real implementation, this would use proper FHE encryption
            const encrypted = new Uint8Array(bytes.length + 4);
            // Add length prefix
            new DataView(encrypted.buffer).setUint32(0, bytes.length, true);
            // Add data
            encrypted.set(bytes, 4);
            // Convert to hex string for Solidity
            const hexString = '0x' + Array.from(encrypted).map((b)=>b.toString(16).padStart(2, '0')).join('');
            return hexString;
        } catch (error) {
            console.error('Error encrypting string:', error);
            throw error;
        }
    };
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'rgba(0, 0, 0, 0.9)',
                        marginBottom: '16px'
                    },
                    children: "Create Transfer Request"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                    lineNumber: 129,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    style: {
                        color: 'rgba(0, 0, 0, 0.7)',
                        marginBottom: '24px'
                    },
                    children: "Please connect your wallet to create a transfer request."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "btn btn-secondary",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
            lineNumber: 128,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'rgba(0, 0, 0, 0.9)',
                    marginBottom: '24px'
                },
                children: "Create Artifact Transfer Request"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                lineNumber: 150,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: 'rgba(0, 0, 0, 0.8)',
                                    marginBottom: '8px',
                                    display: 'block'
                                },
                                children: "Artifact Name *"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: artifactName,
                                onChange: (e)=>setArtifactName(e.target.value),
                                placeholder: "e.g., Ancient Ceramic Vase #42",
                                className: "form-input",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.9)'
                                },
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 170,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                        lineNumber: 160,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: 'rgba(0, 0, 0, 0.8)',
                                    marginBottom: '8px',
                                    display: 'block'
                                },
                                children: "Description *"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 182,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                value: description,
                                onChange: (e)=>setDescription(e.target.value),
                                placeholder: "Describe the artifact and transfer details...",
                                rows: 4,
                                className: "form-textarea",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.9)'
                                },
                                required: true
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                style: {
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    color: 'rgba(0, 0, 0, 0.8)',
                                    marginBottom: '8px',
                                    display: 'block'
                                },
                                children: "Authorized Voters *"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '0.875rem',
                                    color: 'rgba(0, 0, 0, 0.6)',
                                    marginBottom: '16px'
                                },
                                children: "Add Ethereum addresses of users authorized to vote on this transfer request."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 212,
                                columnNumber: 11
                            }, this),
                            authorizedVoters.map((voter, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        gap: '12px',
                                        marginBottom: '12px',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: voter,
                                            onChange: (e)=>updateVoter(index, e.target.value),
                                            placeholder: "0x1234...abcd",
                                            style: {
                                                flex: 1,
                                                padding: '0.75rem 1rem',
                                                border: voter && !isValidAddress(voter) ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.2)',
                                                borderRadius: '8px',
                                                background: 'rgba(255, 255, 255, 0.05)',
                                                color: 'rgba(0, 0, 0, 0.9)',
                                                outline: 'none',
                                                fontSize: '1rem',
                                                fontWeight: 400,
                                                transition: 'all 0.2s ease',
                                                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                            lineNumber: 222,
                                            columnNumber: 15
                                        }, this),
                                        authorizedVoters.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>removeVoter(index),
                                            style: {
                                                padding: '0.75rem 1rem',
                                                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                                                color: 'white',
                                                border: 'none',
                                                borderRadius: '8px',
                                                cursor: 'pointer',
                                                fontWeight: 500,
                                                fontSize: '0.875rem',
                                                transition: 'all 0.2s ease',
                                                boxShadow: '0 4px 12px rgba(220, 38, 38, 0.4)',
                                                whiteSpace: 'nowrap'
                                            },
                                            children: "Remove"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                            lineNumber: 242,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                    lineNumber: 221,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: addVoter,
                                style: {
                                    padding: '0.75rem 1.5rem',
                                    background: 'linear-gradient(135deg, #10b981, #059669)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)',
                                    alignSelf: 'flex-start',
                                    marginTop: '8px'
                                },
                                children: "+ Add Voter"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 265,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            gap: '16px',
                            paddingTop: '24px',
                            borderTop: '1px solid rgba(0, 0, 0, 0.1)',
                            marginTop: '32px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: onBack,
                                style: {
                                    padding: '0.75rem 1.5rem',
                                    background: 'linear-gradient(135deg, #6b7280, #4b5563)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: 'pointer',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    transition: 'all 0.2s ease',
                                    boxShadow: '0 4px 12px rgba(107, 114, 128, 0.4)',
                                    flex: '0 0 auto'
                                },
                                children: "Back"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                disabled: !isFormValid() || isSubmitting,
                                style: {
                                    flex: 1,
                                    padding: '0.75rem 1.5rem',
                                    background: !isFormValid() || isSubmitting ? 'linear-gradient(135deg, #9ca3af, #6b7280)' : 'linear-gradient(135deg, #6366f1, #8b5cf6)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '8px',
                                    cursor: !isFormValid() || isSubmitting ? 'not-allowed' : 'pointer',
                                    fontWeight: 500,
                                    fontSize: '0.875rem',
                                    transition: 'all 0.2s ease',
                                    boxShadow: !isFormValid() || isSubmitting ? '0 2px 8px rgba(0, 0, 0, 0.2)' : '0 4px 12px rgba(99, 102, 241, 0.4)',
                                    opacity: !isFormValid() || isSubmitting ? 0.5 : 1
                                },
                                children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    style: {
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px',
                                        justifyContent: 'center'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                width: '16px',
                                                height: '16px',
                                                border: '2px solid rgba(255, 255, 255, 0.3)',
                                                borderTop: '2px solid white',
                                                borderRadius: '50%',
                                                animation: 'spin 1s linear infinite'
                                            }
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                            lineNumber: 337,
                                            columnNumber: 17
                                        }, this),
                                        "Creating..."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                    lineNumber: 336,
                                    columnNumber: 15
                                }, this) : 'Create Request'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                                lineNumber: 313,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
                lineNumber: 159,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/CreateTransferRequest.tsx",
        lineNumber: 149,
        columnNumber: 5
    }, this);
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[project]/frontend/src/components/TransferRequestList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TransferRequestList",
    ()=>TransferRequestList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__ = __turbopack_context__.i("[project]/frontend/node_modules/ethers/lib.esm/ethers.js [app-ssr] (ecmascript) <export * as ethers>");
'use client';
;
;
;
;
;
;
function TransferRequestList({ onVoteRequest, onDecryptRequest, refreshTrigger }) {
    const { address, chainId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const [requests, setRequests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(chainId || 31337);
    // Use useReadContract directly to get all request IDs
    const { data: allRequestIds, refetch, isLoading, contractError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
        functionName: 'getAllRequestIds',
        query: {
            enabled: !!contractAddress
        }
    });
    console.log('TransferRequestList useEffect triggered, refreshTrigger:', refreshTrigger);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadRequests = async ()=>{
            console.log('loadRequests called with:', {
                allRequestIds,
                address,
                refreshTrigger
            });
            // Refetch data when refreshTrigger changes
            if (refreshTrigger && refreshTrigger > 0) {
                console.log('Refetching data due to refresh trigger');
                await refetch();
            }
            // Handle allRequestIds - it might be a Result object from ethers
            let requestIds = [];
            if (allRequestIds) {
                // Handle ethers Result object
                if (Array.isArray(allRequestIds)) {
                    requestIds = allRequestIds;
                } else if (allRequestIds.length !== undefined) {
                    // It's a Result object, convert to array
                    requestIds = Array.from(allRequestIds);
                } else {
                    console.error('Unexpected allRequestIds format:', allRequestIds);
                    requestIds = [];
                }
            }
            // If still no requestIds, try manual call
            if (!requestIds || requestIds.length === 0) {
                console.log('No requestIds from hook, trying manual call...');
                try {
                    const provider = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].BrowserProvider(window.ethereum);
                    const contract = new __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$ethers$2f$lib$2e$esm$2f$ethers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__ethers$3e$__["ethers"].Contract(contractAddress, __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi, provider);
                    // First check if contract exists
                    const code = await provider.getCode(contractAddress);
                    if (code === '0x') {
                        const errorMsg = `Contract not deployed at address: ${contractAddress}. Please redeploy the contract.`;
                        console.error('❌', errorMsg);
                        setError(errorMsg);
                        setRequests([]);
                        setLoading(false);
                        return;
                    }
                    const manualResult = await contract.getAllRequestIds();
                    console.log('✅ Manual call result:', manualResult);
                    // Handle manual result - might also be a Result object
                    if (Array.isArray(manualResult)) {
                        requestIds = manualResult;
                    } else if (manualResult && manualResult.length !== undefined) {
                        requestIds = Array.from(manualResult);
                    } else {
                        requestIds = [];
                    }
                } catch (manualError) {
                    const errorMsg = `Failed to load transfer requests: ${manualError.message}. This usually means the contract needs to be redeployed.`;
                    console.error('❌', errorMsg);
                    setError(errorMsg);
                    setRequests([]);
                    setLoading(false);
                    return;
                }
            }
            // Ensure requestIds is actually iterable
            if (!requestIds) {
                console.log('requestIds is null/undefined');
                setRequests([]);
                setLoading(false);
                return;
            }
            // Convert to proper array if needed
            let iterableIds = [];
            try {
                if (Array.isArray(requestIds)) {
                    iterableIds = requestIds;
                } else if (requestIds.length !== undefined && typeof requestIds[Symbol.iterator] === 'function') {
                    // It's iterable, convert to array
                    iterableIds = Array.from(requestIds);
                } else {
                    console.error('requestIds is not iterable:', requestIds);
                    setRequests([]);
                    setLoading(false);
                    return;
                }
            } catch (error) {
                console.error('Error processing requestIds:', error);
                setRequests([]);
                setLoading(false);
                return;
            }
            console.log('Using iterableIds:', iterableIds);
            if (iterableIds.length === 0) {
                console.log('No requests found');
                setRequests([]);
                setLoading(false);
                return;
            }
            if (!address) {
                console.log('Skipping loadRequests - wallet not connected');
                return;
            }
            try {
                // Import ethers here to avoid SSR issues
                const { ethers } = await __turbopack_context__.A("[project]/frontend/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)");
                // Create a read-only provider
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = new ethers.Contract(contractAddress, __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi, provider);
                // Load requests sequentially to avoid overwhelming the development server
                const loadedRequests = [];
                for (const id of iterableIds){
                    try {
                        console.log('Fetching request for id:', id);
                        const request = await contract.getTransferRequest(id);
                        if (!request) continue;
                        // Check voter authorization and voting status sequentially
                        const isAuthorized = await contract.isAuthorizedVoter(id, address);
                        const hasAlreadyVoted = await contract.hasVoted(id, address);
                        const transferRequest = {
                            id: BigInt(request[0]),
                            artifactName: request[1] || '',
                            description: request[2] || '',
                            requester: request[3],
                            createdAt: BigInt(request[6]),
                            active: request[7],
                            decrypted: request[8],
                            finalYesCount: BigInt(request[9]),
                            finalNoCount: BigInt(request[10]),
                            approved: request[11]
                        };
                        // Decrypt encrypted data for display
                        let displayName = transferRequest.artifactName;
                        let displayDescription = transferRequest.description;
                        if (request[3] && request[3].length > 0) {
                            // Has encrypted artifact name (index 3), try to decrypt
                            try {
                                displayName = await decryptBytes(request[3]);
                                console.log('Decrypted artifact name:', `"${displayName}"`, 'from:', request[3]);
                            } catch (error) {
                                console.log('Could not decrypt artifact name:', error, 'using plaintext');
                            }
                        }
                        if (request[4] && request[4].length > 0) {
                            // Has encrypted description (index 4), try to decrypt
                            try {
                                displayDescription = await decryptBytes(request[4]);
                                console.log('Decrypted description:', `"${displayDescription}"`, 'from:', request[4]);
                            } catch (error) {
                                console.log('Could not decrypt description:', error, 'using plaintext');
                            }
                        }
                        transferRequest.artifactName = displayName;
                        transferRequest.description = displayDescription;
                        loadedRequests.push({
                            ...transferRequest,
                            canVote: isAuthorized && !hasAlreadyVoted && transferRequest.active && !transferRequest.decrypted,
                            canDecrypt: true
                        });
                    } catch (error) {
                        console.error(`Error loading request ${id}:`, error);
                    // Continue with other requests even if one fails
                    }
                }
                const filteredRequests = loadedRequests.filter((req)=>req !== null);
                setRequests(filteredRequests);
            } catch (error) {
                console.error('Error loading requests:', error);
                setError(`Failed to load transfer requests: ${error.message}`);
            } finally{
                setLoading(false);
            }
        };
        loadRequests();
    }, [
        allRequestIds,
        address,
        contractAddress,
        refreshTrigger
    ]);
    // Additional effect to force re-render when request data changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (allRequestIds && allRequestIds.length > 0) {
            // Force a re-render by updating a dummy state
            setRequests((prev)=>[
                    ...prev
                ]);
        }
    }, [
        allRequestIds
    ]);
    const formatAddress = (addr)=>{
        return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
    };
    const formatDate = (timestamp)=>{
        // Convert seconds to milliseconds if timestamp is small (likely seconds from blockchain)
        const timestampNum = Number(timestamp);
        const date = timestampNum > 1e10 ? new Date(timestampNum) : new Date(timestampNum * 1000);
        return date.toLocaleDateString();
    };
    // Helper function to decrypt bytes back to string
    const decryptBytes = async (encryptedData)=>{
        try {
            // Handle different data formats
            let bytes;
            if (encryptedData instanceof Uint8Array) {
                bytes = encryptedData;
            } else if (typeof encryptedData === 'string' && encryptedData.startsWith('0x')) {
                // Convert hex string to bytes
                const hex = encryptedData.slice(2);
                bytes = new Uint8Array(hex.length / 2);
                for(let i = 0; i < bytes.length; i++){
                    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
                }
            } else if (Array.isArray(encryptedData)) {
                bytes = new Uint8Array(encryptedData);
            } else {
                return '';
            }
            // For demo purposes, reverse the simple encryption
            // In a real FHE implementation, this would use FHEVM decryption
            if (bytes.length < 4) {
                return '';
            }
            const dataView = new DataView(bytes.buffer);
            const length = dataView.getUint32(0, true);
            const textBytes = bytes.slice(4, 4 + length);
            const decoder = new TextDecoder();
            return decoder.decode(textBytes);
        } catch (error) {
            console.error('Error decrypting bytes:', error);
            return '';
        }
    };
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    style: {
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        color: 'rgba(0, 0, 0, 0.9)',
                        marginBottom: '16px'
                    },
                    children: "Transfer Requests"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                    lineNumber: 299,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: {
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '40px 20px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            style: {
                                marginLeft: '12px',
                                color: 'rgba(0, 0, 0, 0.6)',
                                fontSize: '0.875rem'
                            },
                            children: "Loading requests..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                            lineNumber: 314,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                    lineNumber: 307,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
            lineNumber: 298,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                style: {
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    color: 'rgba(0, 0, 0, 0.9)',
                    marginBottom: '24px'
                },
                children: "Artifact Transfer Requests"
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                lineNumber: 326,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: '#fef2f2',
                    border: '1px solid #fecaca',
                    borderRadius: '8px',
                    padding: '16px',
                    marginBottom: '24px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '8px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: '#dc2626',
                                    fontSize: '1.25rem',
                                    marginRight: '8px'
                                },
                                children: "⚠️"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 348,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                style: {
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    color: '#dc2626',
                                    margin: 0
                                },
                                children: "Contract Error"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 353,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                        lineNumber: 343,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: '#991b1b',
                            fontSize: '0.875rem',
                            margin: 0,
                            marginBottom: '12px'
                        },
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                        lineNumber: 362,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: '#f3f4f6',
                            borderRadius: '4px',
                            padding: '8px',
                            fontFamily: 'monospace',
                            fontSize: '0.75rem',
                            color: '#374151'
                        },
                        children: [
                            "To fix this, run:",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 378,
                                columnNumber: 30
                            }, this),
                            "cd artifact-cipher",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 379,
                                columnNumber: 31
                            }, this),
                            "node fix-contract.js"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                        lineNumber: 370,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this),
            requests.length === 0 && !error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    textAlign: 'center',
                    padding: '40px 20px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            color: 'rgba(0, 0, 0, 0.8)',
                            marginBottom: '8px'
                        },
                        children: "No transfer requests found."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                        lineNumber: 387,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            fontSize: '0.875rem',
                            color: 'rgba(0, 0, 0, 0.6)',
                            margin: 0
                        },
                        children: "Create a new request to get started with artifact transfers."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                        lineNumber: 395,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                lineNumber: 386,
                columnNumber: 9
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                },
                children: requests.map((request)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-card",
                        style: {
                            marginBottom: 0
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '12px',
                                    marginBottom: '12px'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            flex: 1,
                                            minWidth: 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                style: {
                                                    fontSize: '1.125rem',
                                                    fontWeight: 700,
                                                    color: 'rgba(0, 0, 0, 0.9)',
                                                    marginBottom: '8px',
                                                    wordBreak: 'break-word'
                                                },
                                                children: request.artifactName
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                lineNumber: 418,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                style: {
                                                    fontSize: '0.875rem',
                                                    color: 'rgba(0, 0, 0, 0.7)',
                                                    wordBreak: 'break-all'
                                                },
                                                children: [
                                                    "Requested by ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontFamily: 'monospace',
                                                            fontSize: '0.75rem'
                                                        },
                                                        children: formatAddress(request.requester)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 430,
                                                        columnNumber: 34
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            marginLeft: '8px'
                                                        },
                                                        children: [
                                                            "on ",
                                                            formatDate(request.createdAt)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 431,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                lineNumber: 425,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                        lineNumber: 417,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2 flex-shrink-0",
                                        children: [
                                            request.decrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `badge ${request.approved ? 'badge-success' : 'badge-danger'}`,
                                                children: request.approved ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3 h-3",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M5 13l4 4L19 7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                                lineNumber: 442,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                            lineNumber: 441,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Approved"
                                                    ]
                                                }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: "w-3 h-3",
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            viewBox: "0 0 24 24",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                strokeWidth: 2,
                                                                d: "M6 18L18 6M6 6l12 12"
                                                            }, void 0, false, {
                                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                                lineNumber: 449,
                                                                columnNumber: 29
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                            lineNumber: 448,
                                                            columnNumber: 27
                                                        }, this),
                                                        "Rejected"
                                                    ]
                                                }, void 0, true)
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                lineNumber: 436,
                                                columnNumber: 21
                                            }, this),
                                            request.active && !request.decrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "badge badge-warning",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                        className: "w-3 h-3",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: 2,
                                                            d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                            lineNumber: 459,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 458,
                                                        columnNumber: 23
                                                    }, this),
                                                    "Voting Active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                lineNumber: 457,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                        lineNumber: 434,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 411,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: 'rgba(0, 0, 0, 0.8)',
                                    marginBottom: '12px',
                                    lineHeight: 1.6,
                                    fontSize: '0.875rem'
                                },
                                children: request.description
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 467,
                                columnNumber: 15
                            }, this),
                            request.decrypted && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    padding: '12px 16px',
                                    background: 'rgba(0, 0, 0, 0.03)',
                                    borderRadius: '8px',
                                    marginBottom: '12px',
                                    borderLeft: '3px solid rgba(102, 126, 234, 0.3)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        style: {
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: 'rgba(0, 0, 0, 0.8)',
                                            marginBottom: '8px'
                                        },
                                        children: "Final Results"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                        lineNumber: 482,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            gap: '24px',
                                            fontSize: '0.875rem'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#10b981',
                                                            fontWeight: 700,
                                                            fontSize: '1rem'
                                                        },
                                                        children: request.finalYesCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(0, 0, 0, 0.7)',
                                                            fontSize: '0.75rem'
                                                        },
                                                        children: "Yes Votes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 491,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                lineNumber: 489,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: '8px'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: '#ef4444',
                                                            fontWeight: 700,
                                                            fontSize: '1rem'
                                                        },
                                                        children: request.finalNoCount
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            color: 'rgba(0, 0, 0, 0.7)',
                                                            fontSize: '0.75rem'
                                                        },
                                                        children: "No Votes"
                                                    }, void 0, false, {
                                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                                lineNumber: 493,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                        lineNumber: 488,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 475,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '8px',
                                    paddingTop: '12px',
                                    borderTop: '1px solid rgba(0, 0, 0, 0.1)'
                                },
                                children: [
                                    request.canVote && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onVoteRequest(Number(request.id)),
                                        className: "btn btn-primary flex-1",
                                        style: {
                                            padding: '0.5rem 1rem',
                                            fontSize: '0.875rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Vote"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                            lineNumber: 520,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                        lineNumber: 509,
                                        columnNumber: 19
                                    }, this),
                                    request.canDecrypt && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>onDecryptRequest(Number(request.id)),
                                        className: "btn flex-1",
                                        style: {
                                            padding: '0.5rem 1rem',
                                            fontSize: '0.875rem',
                                            background: 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                                            borderColor: '#8b5cf6',
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-medium",
                                            children: "Decrypt Results"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                            lineNumber: 539,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                        lineNumber: 525,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                                lineNumber: 501,
                                columnNumber: 15
                            }, this)
                        ]
                    }, request.id, true, {
                        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                        lineNumber: 406,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/TransferRequestList.tsx",
        lineNumber: 325,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/VoteOnRequest.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VoteOnRequest",
    ()=>VoteOnRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useArtifactVoting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useArtifactVoting.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useVotingWithFHE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useVotingWithFHE.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function VoteOnRequest({ requestId, onBack }) {
    const { isConnected, address } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const { submitEncryptedVote, fhevmReady, fhevmError, isEncrypting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useVotingWithFHE$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useVotingWithFHE"])();
    const { simpleVote } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useArtifactVoting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useArtifactVoting"])();
    const [vote, setVote] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [requestDetails, setRequestDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(31337); // Use localhost for now
    // Get request details directly from contract
    const { data: requestData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
        functionName: 'getTransferRequest',
        args: [
            BigInt(requestId)
        ],
        query: {
            enabled: !!contractAddress && requestId !== null
        }
    });
    // Check if user has already voted
    const { data: hasVoted } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
        functionName: 'hasVoted',
        args: [
            BigInt(requestId),
            address
        ],
        query: {
            enabled: !!contractAddress && !!address && requestId !== null
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (requestData && Array.isArray(requestData)) {
            try {
                let artifactName = requestData[1] || '';
                let description = requestData[2] || '';
                // Try to decrypt encrypted data
                if (requestData[10] && requestData[10].length > 0) {
                    try {
                        artifactName = decryptBytes(requestData[10]);
                    } catch  {
                        console.log('Could not decrypt artifact name, using available data');
                    }
                }
                if (requestData[11] && requestData[11].length > 0) {
                    try {
                        description = decryptBytes(requestData[11]);
                    } catch  {
                        console.log('Could not decrypt description, using available data');
                    }
                }
                const request = {
                    id: requestData[0],
                    artifactName: artifactName,
                    description: description,
                    requester: requestData[3],
                    createdAt: requestData[4],
                    active: requestData[5],
                    decrypted: requestData[6],
                    finalYesCount: BigInt(requestData[7]),
                    finalNoCount: BigInt(requestData[8]),
                    approved: requestData[9]
                };
                setRequestDetails(request);
            } catch (error) {
                console.error('Error parsing request data:', error);
            }
        }
    }, [
        requestData
    ]);
    // Helper function to decrypt bytes back to string
    const decryptBytes = (encryptedData)=>{
        try {
            // Handle different data formats
            let bytes;
            if (encryptedData instanceof Uint8Array) {
                bytes = encryptedData;
            } else if (typeof encryptedData === 'string' && encryptedData.startsWith('0x')) {
                // Convert hex string to bytes
                const hex = encryptedData.slice(2);
                bytes = new Uint8Array(hex.length / 2);
                for(let i = 0; i < bytes.length; i++){
                    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
                }
            } else if (Array.isArray(encryptedData)) {
                bytes = new Uint8Array(encryptedData);
            } else {
                return '';
            }
            // For demo purposes, reverse the simple encryption
            if (bytes.length < 4) {
                return '';
            }
            const dataView = new DataView(bytes.buffer);
            const length = dataView.getUint32(0, true);
            const textBytes = bytes.slice(4, 4 + length);
            const decoder = new TextDecoder();
            return decoder.decode(textBytes);
        } catch (error) {
            console.error('Error decrypting bytes:', error);
            return '';
        }
    };
    const handleVote = async ()=>{
        if (!vote || !isConnected || !fhevmReady) return;
        setIsSubmitting(true);
        try {
            const voteValue = vote === 'yes' ? 1 : 0;
            // For demo purposes, use simpleVote instead of FHE voting
            // This ensures vote counts are properly updated and displayed
            await simpleVote(requestId, voteValue);
            // Vote submitted successfully
            onBack();
        } catch (error) {
            console.error('Error submitting vote:', error);
            // Check if it's a duplicate vote error
            const errorMessage = error?.message || String(error);
            if (errorMessage.includes('notVoted') || errorMessage.includes('already voted') || errorMessage.includes('Already voted')) {
            // User has already voted on this request
            } else {
                console.error('Failed to submit vote:', error);
            }
        } finally{
            setIsSubmitting(false);
        }
    };
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    style: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    },
                    children: "Vote on Transfer Request"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 173,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 mb-6",
                    children: "Please connect your wallet to vote on transfer requests."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "btn btn-secondary",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 177,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
            lineNumber: 172,
            columnNumber: 7
        }, this);
    }
    if (fhevmError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    style: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    },
                    children: "Vote on Transfer Request"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 187,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-red-50 border border-red-200 rounded-lg p-4 mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-lg",
                                    style: {
                                        color: 'rgba(0, 0, 0, 0.9)'
                                    },
                                    children: "❌"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "font-semibold",
                                    style: {
                                        color: 'rgba(0, 0, 0, 0.9)'
                                    },
                                    children: "FHEVM Error"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                    lineNumber: 193,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-2",
                            style: {
                                color: 'rgba(0, 0, 0, 0.8)'
                            },
                            children: [
                                "Failed to initialize homomorphic encryption: ",
                                fhevmError.message
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 195,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-2",
                            style: {
                                color: 'rgba(0, 0, 0, 0.8)'
                            },
                            children: "Please refresh the page and try again."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 190,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "btn btn-secondary",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 202,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
            lineNumber: 186,
            columnNumber: 7
        }, this);
    }
    if (!requestDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    style: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    },
                    children: "Vote on Transfer Request"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 216,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 text-gray-700",
                            children: "Loading request details..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 217,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                    lineNumber: 215,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
            lineNumber: 211,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6",
                style: {
                    color: 'rgba(0, 0, 0, 0.9)'
                },
                children: [
                    "Vote on Transfer Request #",
                    requestId
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-3",
                        style: {
                            color: 'rgba(0, 0, 0, 0.9)'
                        },
                        children: requestDetails.artifactName
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 230,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 leading-relaxed",
                        style: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        },
                        children: requestDetails.description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 231,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm space-y-1",
                        style: {
                            color: 'rgba(0, 0, 0, 0.7)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Requested by: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: [
                                            requestDetails.requester.slice(0, 6),
                                            "...",
                                            requestDetails.requester.slice(-4)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                        lineNumber: 233,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Created: ",
                                    (()=>{
                                        const timestampNum = Number(requestDetails.createdAt);
                                        const date = timestampNum > 1e10 ? new Date(timestampNum) : new Date(timestampNum * 1000);
                                        return date.toLocaleDateString();
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 234,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                lineNumber: 229,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold mb-4",
                        style: {
                            color: 'rgba(0, 0, 0, 0.9)'
                        },
                        children: "Cast Your Vote"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 243,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6",
                        style: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        },
                        children: "Your vote will be encrypted using homomorphic encryption. The voting content remains private, but the final tally will be transparently computed on-chain."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    hasVoted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-2xl",
                                    children: "🗳️"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                    lineNumber: 252,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-lg font-bold",
                                            style: {
                                                color: 'rgba(0, 0, 0, 0.9)'
                                            },
                                            children: "Already Voted"
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                            lineNumber: 254,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                color: 'rgba(0, 0, 0, 0.8)'
                                            },
                                            children: "You have already cast your vote on this request. Each address can only vote once."
                                        }, void 0, false, {
                                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                            lineNumber: 255,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                    lineNumber: 253,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 251,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 250,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setVote('yes'),
                                className: `py-6 px-6 rounded-xl font-semibold transition-all ${vote === 'yes' ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg transform scale-105 border-2 border-green-400' : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-green-300'}`,
                                style: vote === 'yes' ? {} : {
                                    color: 'rgba(0, 0, 0, 0.8)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl mb-2",
                                        children: "✅"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                        lineNumber: 272,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg",
                                        children: "Approve Transfer"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                        lineNumber: 273,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 263,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setVote('no'),
                                className: `py-6 px-6 rounded-xl font-semibold transition-all ${vote === 'no' ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white shadow-lg transform scale-105 border-2 border-red-400' : 'bg-white hover:bg-gray-50 border-2 border-gray-200 hover:border-red-300'}`,
                                style: vote === 'no' ? {} : {
                                    color: 'rgba(0, 0, 0, 0.8)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-2xl mb-2",
                                        children: "❌"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                        lineNumber: 284,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-lg",
                                        children: "Reject Transfer"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                        lineNumber: 285,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 275,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 262,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                lineNumber: 242,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box mb-6",
                style: {
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(16, 185, 129, 0.1))',
                    borderColor: 'rgba(99, 102, 241, 0.3)'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "font-semibold mb-3 flex items-center gap-2",
                        style: {
                            color: 'rgba(0, 0, 0, 0.9)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xl",
                                children: "🔒"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 296,
                                columnNumber: 11
                            }, this),
                            " Privacy Protection"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 295,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm space-y-2",
                        style: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Your vote is encrypted before submission"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 299,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Individual votes remain private during voting"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Only the final tally is decrypted by the admin"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Protects against responsibility exposure in disputes"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                lineNumber: 302,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 298,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                lineNumber: 291,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onBack,
                        className: "btn btn-secondary",
                        children: "Back"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, this),
                    hasVoted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        disabled: true,
                        className: "btn",
                        style: {
                            opacity: 0.5,
                            cursor: 'not-allowed',
                            background: '#6b7280'
                        },
                        children: "Already Voted"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleVote,
                        disabled: !vote || isSubmitting || isEncrypting,
                        className: `btn ${vote && !isSubmitting && !isEncrypting ? 'btn-primary' : ''}`,
                        style: !vote || isSubmitting || isEncrypting ? {
                            opacity: 0.5,
                            cursor: 'not-allowed'
                        } : {},
                        children: isSubmitting || isEncrypting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-4 w-4 border-b-2 border-white"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                                    lineNumber: 327,
                                    columnNumber: 15
                                }, this),
                                isEncrypting ? 'Encrypting Vote...' : 'Submitting Vote...'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                            lineNumber: 326,
                            columnNumber: 13
                        }, this) : 'Submit Vote'
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                        lineNumber: 319,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
                lineNumber: 306,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/VoteOnRequest.tsx",
        lineNumber: 224,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/AdminDecryptResults.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AdminDecryptResults",
    ()=>AdminDecryptResults
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useReadContract.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useChainId.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useArtifactVoting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/hooks/useArtifactVoting.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/types/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/types/factories/contracts/EncryptedArtifactVoting__factory.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/config/contracts.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
function AdminDecryptResults({ requestId, onBack }) {
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    const chainId = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useChainId$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useChainId"])();
    const { decryptResults } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$hooks$2f$useArtifactVoting$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useArtifactVoting"])();
    const [isDecrypting, setIsDecrypting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [requestDetails, setRequestDetails] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [decrypted, setDecrypted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const contractAddress = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(31337); // Use localhost for now
    // Get request details directly from contract
    const { data: requestData, refetch: refetchRequestData } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useReadContract$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useReadContract"])({
        address: contractAddress,
        abi: __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi,
        functionName: 'getTransferRequest',
        args: [
            BigInt(requestId)
        ],
        query: {
            enabled: !!contractAddress && requestId !== null
        }
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (requestData && Array.isArray(requestData)) {
            try {
                let artifactName = requestData[1] || '';
                let description = requestData[2] || '';
                // Try to decrypt encrypted data
                if (requestData[10] && requestData[10].length > 0) {
                    try {
                        artifactName = decryptBytes(requestData[10]);
                    } catch  {
                        console.log('Could not decrypt artifact name, using available data');
                    }
                }
                if (requestData[11] && requestData[11].length > 0) {
                    try {
                        description = decryptBytes(requestData[11]);
                    } catch  {
                        console.log('Could not decrypt description, using available data');
                    }
                }
                const request = {
                    id: requestData[0],
                    artifactName: artifactName,
                    description: description,
                    requester: requestData[5],
                    createdAt: requestData[6],
                    active: requestData[7],
                    decrypted: requestData[8],
                    finalYesCount: BigInt(requestData[9]),
                    finalNoCount: BigInt(requestData[10]),
                    approved: requestData[11]
                };
                setRequestDetails(request);
                // If already decrypted, show results immediately
                if (request.decrypted) {
                    setResults({
                        yesVotes: Number(request.finalYesCount),
                        noVotes: Number(request.finalNoCount),
                        approved: request.approved
                    });
                    setDecrypted(true);
                }
            } catch (error) {
                console.error('Error parsing request data:', error);
            }
        }
    }, [
        requestData,
        requestId
    ]);
    // Helper function to decrypt bytes back to string
    const decryptBytes = (encryptedData)=>{
        try {
            // Handle different data formats
            let bytes;
            if (encryptedData instanceof Uint8Array) {
                bytes = encryptedData;
            } else if (typeof encryptedData === 'string' && encryptedData.startsWith('0x')) {
                // Convert hex string to bytes
                const hex = encryptedData.slice(2);
                bytes = new Uint8Array(hex.length / 2);
                for(let i = 0; i < bytes.length; i++){
                    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
                }
            } else if (Array.isArray(encryptedData)) {
                bytes = new Uint8Array(encryptedData);
            } else {
                return '';
            }
            // For demo purposes, reverse the simple encryption
            if (bytes.length < 4) {
                return '';
            }
            const dataView = new DataView(bytes.buffer);
            const length = dataView.getUint32(0, true);
            const textBytes = bytes.slice(4, 4 + length);
            const decoder = new TextDecoder();
            return decoder.decode(textBytes);
        } catch (error) {
            console.error('Error decrypting bytes:', error);
            return '';
        }
    };
    const handleDecrypt = async ()=>{
        if (!isConnected || !requestDetails) return;
        setIsDecrypting(true);
        try {
            // 如果已经在当前会话中显示过结果，跳过
            if (decrypted) {
                console.log('Results already displayed in current session, skipping');
                return;
            }
            // 如果合约中已经标记为已解密，直接显示结果
            if (requestDetails.decrypted) {
                console.log('Request already decrypted in contract, displaying results');
                const yesVotes = Number(requestDetails.finalYesCount);
                const noVotes = Number(requestDetails.finalNoCount);
                const approved = yesVotes > noVotes;
                setResults({
                    yesVotes,
                    noVotes,
                    approved
                });
                setDecrypted(true);
                console.log('Results were already decrypted:', {
                    yesVotes,
                    noVotes,
                    approved
                });
                return;
            }
            // 调用真正的FHE解密函数，这会触发MetaMask弹窗
            console.log('Starting FHE decryption for request:', requestId);
            const txHash = await decryptResults(requestId);
            // 等待交易确认
            console.log('Transaction hash:', txHash);
            const { ethers } = await __turbopack_context__.A("[project]/frontend/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)");
            const provider = new ethers.BrowserProvider(window.ethereum);
            const receipt = await provider.waitForTransaction(txHash);
            console.log('Transaction confirmed in block:', receipt.blockNumber);
            // 解析事件日志获取解密结果
            const events = receipt.logs.map((log)=>{
                try {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].createInterface().parseLog(log);
                } catch  {
                    return null;
                }
            }).filter(Boolean);
            const decryptEvent = events.find((event)=>event?.name === 'ResultsDecrypted');
            if (decryptEvent) {
                const { yesVotes, noVotes, approved } = decryptEvent.args;
                console.log('Decryption result from event:', {
                    yesVotes,
                    noVotes,
                    approved
                });
                // 显示结果
                setResults({
                    yesVotes: Number(yesVotes),
                    noVotes: Number(noVotes),
                    approved
                });
                setDecrypted(true);
                console.log('Results decrypted successfully:', {
                    yesVotes,
                    noVotes,
                    approved
                });
                // Refetch the request data to update the UI
                await refetchRequestData();
            } else {
                // 如果没有找到事件，从合约重新读取数据
                console.log('No decrypt event found, refetching data...');
                // 重新获取请求详情以显示解密结果
                const { ethers } = await __turbopack_context__.A("[project]/frontend/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)");
                const provider = new ethers.BrowserProvider(window.ethereum);
                const contract = new ethers.Contract((0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$config$2f$contracts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getContractAddress"])(chainId || 31337), __TURBOPACK__imported__module__$5b$project$5d2f$types$2f$factories$2f$contracts$2f$EncryptedArtifactVoting_$5f$factory$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EncryptedArtifactVoting__factory"].abi, provider);
                const updatedRequest = await contract.getTransferRequest(requestId);
                const yesVotes = Number(updatedRequest[9]);
                const noVotes = Number(updatedRequest[10]);
                const approved = updatedRequest[11];
                setResults({
                    yesVotes,
                    noVotes,
                    approved
                });
                setDecrypted(true);
                console.log('Results decrypted successfully:', {
                    yesVotes,
                    noVotes,
                    approved
                });
                // Refetch the request data to update the UI
                await refetchRequestData();
            }
        } catch (error) {
            console.error('Error decrypting results:', error);
            console.error('Error details:', error);
            console.error('Failed to decrypt results:', error);
        } finally{
            setIsDecrypting(false);
        }
    };
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    style: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    },
                    children: "Decrypt Voting Results"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-700 mb-6",
                    children: "Please connect your wallet to decrypt voting results."
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                    lineNumber: 251,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "btn btn-secondary",
                    children: "Back"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                    lineNumber: 252,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
            lineNumber: 247,
            columnNumber: 7
        }, this);
    }
    if (!requestDetails) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "panel-card",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-bold mb-4",
                    style: {
                        color: 'rgba(0, 0, 0, 0.9)'
                    },
                    children: "Decrypt Voting Results"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 text-gray-700",
                            children: "Loading request details..."
                        }, void 0, false, {
                            fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                    lineNumber: 265,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
            lineNumber: 261,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "panel-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-bold mb-6",
                style: {
                    color: 'rgba(0, 0, 0, 0.9)'
                },
                children: [
                    "Decrypt Voting Results - Request #",
                    requestId
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                lineNumber: 275,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "info-box mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-bold mb-3",
                        style: {
                            color: 'rgba(0, 0, 0, 0.9)'
                        },
                        children: requestDetails.artifactName
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 280,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-4 leading-relaxed",
                        style: {
                            color: 'rgba(0, 0, 0, 0.8)'
                        },
                        children: requestDetails.description
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 281,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-sm space-y-1",
                        style: {
                            color: 'rgba(0, 0, 0, 0.7)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Requested by: ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-mono",
                                        children: [
                                            requestDetails.requester.slice(0, 6),
                                            "...",
                                            requestDetails.requester.slice(-4)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 283,
                                        columnNumber: 30
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 283,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    "Created: ",
                                    (()=>{
                                        const timestampNum = Number(requestDetails.createdAt);
                                        const date = timestampNum > 1e10 ? new Date(timestampNum) : new Date(timestampNum * 1000);
                                        return date.toLocaleDateString();
                                    })()
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 284,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 282,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                lineNumber: 279,
                columnNumber: 7
            }, this),
            !decrypted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-box mb-6",
                        style: {
                            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.08), rgba(245, 158, 11, 0.05))',
                            borderColor: 'rgba(245, 158, 11, 0.2)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "font-bold mb-3 flex items-center gap-2 text-lg",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.9)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-2xl",
                                        children: "🔐"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 299,
                                        columnNumber: 15
                                    }, this),
                                    " Encrypted Results"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 298,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-4",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.8)'
                                },
                                children: "The voting results are currently encrypted. Anyone can decrypt and reveal the final outcome."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 301,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm text-left space-y-1",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.7)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Votes were computed homomorphically on-chain"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 305,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Individual votes remain private"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 306,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: "• Final tally is encrypted until decryption"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 307,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 304,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 294,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleDecrypt,
                        disabled: isDecrypting,
                        className: "btn",
                        style: {
                            background: isDecrypting ? 'linear-gradient(135deg, #6b7280, #4b5563)' : 'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                            borderColor: isDecrypting ? '#6b7280' : '#8b5cf6',
                            color: 'white',
                            padding: '1rem 2rem',
                            fontSize: '1.125rem'
                        },
                        children: isDecrypting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-5 w-5 border-b-2 border-white"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                    lineNumber: 325,
                                    columnNumber: 17
                                }, this),
                                "Decrypting Results..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                            lineNumber: 324,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xl",
                                    children: "🔓"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                    lineNumber: 330,
                                    columnNumber: 17
                                }, this),
                                " Decrypt Results"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                            lineNumber: 329,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 311,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                lineNumber: 293,
                columnNumber: 9
            }, this) : results ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `panel-card mb-6 ${results.approved ? 'border-green-500' : 'border-red-500'}`,
                        style: {
                            borderWidth: '2px',
                            background: results.approved ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(16, 185, 129, 0.05))' : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(239, 68, 68, 0.05))'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: `text-3xl font-bold mb-6`,
                                style: {
                                    color: 'rgba(0, 0, 0, 0.9)'
                                },
                                children: results.approved ? '✅ Transfer Approved' : '❌ Transfer Rejected'
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 347,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold mb-2",
                                                style: {
                                                    color: 'rgba(0, 0, 0, 0.9)'
                                                },
                                                children: results.yesVotes
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 353,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: 'rgba(0, 0, 0, 0.8)'
                                                },
                                                children: "Yes Votes"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 354,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold mb-2",
                                                style: {
                                                    color: 'rgba(0, 0, 0, 0.9)'
                                                },
                                                children: results.noVotes
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold",
                                                style: {
                                                    color: 'rgba(0, 0, 0, 0.8)'
                                                },
                                                children: "No Votes"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 351,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm font-medium",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.8)'
                                },
                                children: [
                                    "Decision: ",
                                    results.yesVotes > results.noVotes ? 'Approved by majority vote' : 'Rejected by majority vote'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 362,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 337,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "info-box",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "font-semibold mb-3 flex items-center gap-2",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.9)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl",
                                        children: "📊"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this),
                                    " Voting Summary"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 368,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-sm space-y-2 text-left",
                                style: {
                                    color: 'rgba(0, 0, 0, 0.8)'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Total Votes Cast:"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 372,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            results.yesVotes + results.noVotes
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 372,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Approval Threshold:"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 373,
                                                columnNumber: 20
                                            }, this),
                                            " Majority (50% + 1)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Result:"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                                lineNumber: 374,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            results.approved ? 'Transfer Approved' : 'Transfer Rejected'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                        lineNumber: 374,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                                lineNumber: 371,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                        lineNumber: 367,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                lineNumber: 336,
                columnNumber: 9
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-center mt-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onBack,
                    className: "btn btn-secondary",
                    children: "Back to Requests"
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                    lineNumber: 381,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
                lineNumber: 380,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/frontend/src/components/AdminDecryptResults.tsx",
        lineNumber: 274,
        columnNumber: 5
    }, this);
}
}),
"[project]/frontend/src/components/ArtifactVotingApp.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArtifactVotingApp",
    ()=>ArtifactVotingApp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/node_modules/wagmi/dist/esm/hooks/useAccount.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CreateTransferRequest$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/CreateTransferRequest.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$TransferRequestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/TransferRequestList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$VoteOnRequest$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/VoteOnRequest.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$AdminDecryptResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/AdminDecryptResults.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$NetworkGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/frontend/src/components/NetworkGuard.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
function ArtifactVotingApp() {
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('list');
    const [selectedRequestId, setSelectedRequestId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHydrated, setIsHydrated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [refreshKey, setRefreshKey] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const { isConnected } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$wagmi$2f$dist$2f$esm$2f$hooks$2f$useAccount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAccount"])();
    // Prevent hydration mismatch by waiting for client-side hydration
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsHydrated(true);
    }, []);
    // Function to refresh data after creating new requests
    const refreshData = ()=>{
        setRefreshKey((prev)=>prev + 1);
    };
    const handleViewChange = (mode, requestId)=>{
        setViewMode(mode);
        if (requestId !== undefined) {
            setSelectedRequestId(requestId);
        }
    };
    const handleBackToList = ()=>{
        setViewMode('list');
        setSelectedRequestId(null);
        // Refresh data when returning to list (e.g., after creating a new request)
        refreshData();
    };
    // Show loading state during hydration
    if (!isHydrated) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center min-h-[40vh]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "panel-card text-center max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                        lineNumber: 49,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: 'rgba(0, 0, 0, 0.7)'
                        },
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                        lineNumber: 50,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                lineNumber: 48,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
            lineNumber: 47,
            columnNumber: 7
        }, this);
    }
    // Show wallet connection prompt if not connected
    if (!isConnected) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '60px 24px 40px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '800px',
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    fontWeight: 800,
                                    color: 'white',
                                    marginBottom: '16px',
                                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    lineHeight: 1.2
                                },
                                children: "Encrypted Artifact Transfer Voting"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.25rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    marginBottom: '32px',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    maxWidth: '600px',
                                    margin: '0 auto 32px'
                                },
                                children: "Secure voting system for artifact transfer approvals using Fully Homomorphic Encryption (FHE) technology. Your privacy is protected through advanced cryptographic methods."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 77,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 16,
                                    justifyContent: 'center',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px 24px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "🔒 FHE Encrypted"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px 24px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "🗳️ Private Voting"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 103,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px 24px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "🔐 Secure & Transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 113,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 87,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                        lineNumber: 66,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    style: {
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px 60px',
                        width: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "panel-card",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                textAlign: 'center'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        color: 'rgba(0, 0, 0, 0.8)',
                                        marginBottom: '16px'
                                    },
                                    children: "Connect Your Wallet"
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                    lineNumber: 136,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    style: {
                                        color: 'rgba(0, 0, 0, 0.6)',
                                        fontSize: '1rem',
                                        marginBottom: '24px'
                                    },
                                    children: "Please connect your MetaMask wallet to start participating in secure artifact transfer voting."
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                    lineNumber: 144,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                            lineNumber: 135,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                        lineNumber: 134,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                    lineNumber: 128,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$NetworkGuard$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NetworkGuard"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                minHeight: '100vh'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    style: {
                        padding: '60px 24px 40px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxWidth: '800px',
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                                    fontWeight: 800,
                                    color: 'white',
                                    marginBottom: '16px',
                                    textShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                                    lineHeight: 1.2
                                },
                                children: "Encrypted Artifact Transfer Voting"
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: '1.25rem',
                                    color: 'rgba(255, 255, 255, 0.9)',
                                    marginBottom: '32px',
                                    textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                    maxWidth: '600px',
                                    margin: '0 auto 32px'
                                },
                                children: "Secure voting system for artifact transfer approvals using Fully Homomorphic Encryption (FHE) technology. Your privacy is protected through advanced cryptographic methods."
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    gap: 16,
                                    justifyContent: 'center',
                                    flexWrap: 'wrap'
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px 24px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "🔒 FHE Encrypted"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px 24px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "🗳️ Private Voting"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            padding: '12px 24px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '8px',
                                            color: 'white',
                                            fontSize: '0.9rem',
                                            fontWeight: 500
                                        },
                                        children: "🔐 Secure & Transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 217,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                        lineNumber: 167,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                    lineNumber: 162,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    style: {
                        maxWidth: '1200px',
                        margin: '0 auto',
                        padding: '0 24px 60px',
                        width: '100%'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-fade-in",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "panel-card",
                                style: {
                                    marginBottom: '24px'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '8px'
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            display: 'flex',
                                            flexDirection: 'row',
                                            gap: '8px',
                                            flexWrap: 'wrap'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleViewChange('list'),
                                                style: {
                                                    flex: 1,
                                                    minWidth: '150px',
                                                    padding: '12px 24px',
                                                    borderRadius: '12px',
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    border: 'none',
                                                    ...viewMode === 'list' ? {
                                                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                                                        color: 'white',
                                                        boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                                                    } : {
                                                        background: 'rgba(0, 0, 0, 0.05)',
                                                        color: 'rgba(0, 0, 0, 0.7)'
                                                    }
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (viewMode !== 'list') {
                                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                                                    }
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (viewMode !== 'list') {
                                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                                                    }
                                                },
                                                children: "View Requests"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                                lineNumber: 252,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleViewChange('create'),
                                                style: {
                                                    flex: 1,
                                                    minWidth: '150px',
                                                    padding: '12px 24px',
                                                    borderRadius: '12px',
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    border: 'none',
                                                    ...viewMode === 'create' ? {
                                                        background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                                                        color: 'white',
                                                        boxShadow: '0 4px 12px rgba(16, 185, 129, 0.4)'
                                                    } : {
                                                        background: 'rgba(0, 0, 0, 0.05)',
                                                        color: 'rgba(0, 0, 0, 0.7)'
                                                    }
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (viewMode !== 'create') {
                                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                                                    }
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (viewMode !== 'create') {
                                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                                                    }
                                                },
                                                children: "Create Request"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                                lineNumber: 286,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleViewChange('decrypt'),
                                                style: {
                                                    flex: 1,
                                                    minWidth: '150px',
                                                    padding: '12px 24px',
                                                    borderRadius: '12px',
                                                    fontWeight: 600,
                                                    fontSize: '0.9rem',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.3s ease',
                                                    border: 'none',
                                                    ...viewMode === 'decrypt' ? {
                                                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                                                        color: 'white',
                                                        boxShadow: '0 4px 12px rgba(245, 158, 11, 0.4)'
                                                    } : {
                                                        background: 'rgba(0, 0, 0, 0.05)',
                                                        color: 'rgba(0, 0, 0, 0.7)'
                                                    }
                                                },
                                                onMouseEnter: (e)=>{
                                                    if (viewMode !== 'decrypt') {
                                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.1)';
                                                    }
                                                },
                                                onMouseLeave: (e)=>{
                                                    if (viewMode !== 'decrypt') {
                                                        e.currentTarget.style.background = 'rgba(0, 0, 0, 0.05)';
                                                    }
                                                },
                                                children: "Decrypt Results"
                                            }, void 0, false, {
                                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                                lineNumber: 320,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 246,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 240,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    viewMode === 'list' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$TransferRequestList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TransferRequestList"], {
                                        refreshTrigger: refreshKey,
                                        onVoteRequest: (requestId)=>handleViewChange('vote', requestId),
                                        onDecryptRequest: (requestId)=>handleViewChange('decrypt', requestId)
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 361,
                                        columnNumber: 15
                                    }, this),
                                    viewMode === 'create' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$CreateTransferRequest$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CreateTransferRequest"], {
                                        onBack: handleBackToList,
                                        onSuccess: refreshData
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this),
                                    viewMode === 'vote' && selectedRequestId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$VoteOnRequest$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VoteOnRequest"], {
                                        requestId: selectedRequestId,
                                        onBack: handleBackToList
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 373,
                                        columnNumber: 15
                                    }, this),
                                    viewMode === 'decrypt' && selectedRequestId && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$frontend$2f$src$2f$components$2f$AdminDecryptResults$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AdminDecryptResults"], {
                                        requestId: selectedRequestId,
                                        onBack: handleBackToList
                                    }, void 0, false, {
                                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                        lineNumber: 380,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                                lineNumber: 359,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
                    lineNumber: 232,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
            lineNumber: 160,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/frontend/src/components/ArtifactVotingApp.tsx",
        lineNumber: 159,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__417b01e8._.js.map