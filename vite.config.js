import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import basicSsl from '@vitejs/plugin-basic-ssl'
// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  resolve: {
    alias:{
      "@":path.resolve(__dirname,"src"),
      "@static": path.resolve(__dirname, "static"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@mixins": path.resolve(__dirname, "src/mixins"),
      "@comps": path.resolve(__dirname, "src/components"),
      "@views": path.resolve(__dirname, "src/views"),
      "@plugins": path.resolve(__dirname, "src/plugins"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@api": path.resolve(__dirname, "src/api"),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData:`
          @import "${path.resolve(__dirname, './node_modules/ayin-lessmixins/ayin-lessmixins.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color.less')}";
          @import "${path.resolve(__dirname, './node_modules/ayin-color/ayin-color-expand.less')}";
          `
          //The imported less global variable comes from the open source components ayin-color and ayin-lessmixins, visit https://www.npmjs.com/package/ayin-color to view related information
      }
    }
  },
  optimizeDeps: {
    include:['echarts','ayin-color'],
    exclude: ['techui-vue3-toolkit']
  },
  plugins: [
    vue(),
    basicSsl()
  ],

})
