// vite.config.js
import { defineConfig } from "file:///E:/01%20frontend-ui-dev/github/react-js-app/react-vite-apifetchdata/node_modules/vite/dist/node/index.js";
import react from "file:///E:/01%20frontend-ui-dev/github/react-js-app/react-vite-apifetchdata/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig(({ mode }) => {
  return {
    base: mode === "staging" ? "/staging/" : "/",
    plugins: [react()]
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFwwMSBmcm9udGVuZC11aS1kZXZcXFxcZ2l0aHViXFxcXHJlYWN0LWpzLWFwcFxcXFxyZWFjdC12aXRlLWFwaWZldGNoZGF0YVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcMDEgZnJvbnRlbmQtdWktZGV2XFxcXGdpdGh1YlxcXFxyZWFjdC1qcy1hcHBcXFxccmVhY3Qtdml0ZS1hcGlmZXRjaGRhdGFcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6LzAxJTIwZnJvbnRlbmQtdWktZGV2L2dpdGh1Yi9yZWFjdC1qcy1hcHAvcmVhY3Qtdml0ZS1hcGlmZXRjaGRhdGEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZygoeyBtb2RlIH0pID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgYmFzZTogbW9kZSA9PT0gJ3N0YWdpbmcnID8gJy9zdGFnaW5nLycgOiAnLycsXHJcbiAgICBwbHVnaW5zOiBbcmVhY3QoKV0sXHJcbiAgfTtcclxufSk7Il0sCiAgIm1hcHBpbmdzIjogIjtBQUFpWSxTQUFTLG9CQUFvQjtBQUM5WixPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsU0FBTztBQUFBLElBQ0wsTUFBTSxTQUFTLFlBQVksY0FBYztBQUFBLElBQ3pDLFNBQVMsQ0FBQyxNQUFNLENBQUM7QUFBQSxFQUNuQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
