module.exports = [
"[project]/frontend/fhevm/internal/mock/fhevmMock.ts [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/9e883_@fhevm_mock-utils__esm_861710a9._.js",
  "server/chunks/ssr/frontend_fhevm_internal_mock_fhevmMock_ts_96296e9a._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/fhevm/internal/mock/fhevmMock.ts [app-ssr] (ecmascript)");
    });
});
}),
"[project]/frontend/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "server/chunks/ssr/9e883_ethers_lib_esm_index_5214f867.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[project]/frontend/node_modules/ethers/lib.esm/index.js [app-ssr] (ecmascript)");
    });
});
}),
];