简体中文 | [English](./README.md)

<h1 align="center">
<b>TechUI-Toolkit</b>
</h1>
<div align="center">TechUI-Toolkit 是一个从TechUI核心库中提取部分组件和函数形成的一个便捷的工具库。</div>

<p align="center">
  <a href="https://toolkit.techui.net/docs">文档</a> •
  <a href="https://toolkit.techui.net/">演示站</a> •
  <a href="https://www.npmjs.com/package/techui-vue3-toolkit">核心库</a> •
  <a href="https://techui.net/docs">TechUI</a> •
  <a href="https://lite.techui.net/docs">TechUI-Lite</a> •
  <a href="https://t.me/ayin86cn">Telgram</a>
</p>

## 🛡️声明

<span style="color:red">**本仓库的内容均为源码，除了TechUI-Toolkit（以下简称TUI-TK）之外，使用TUI-TK需要获取授权。** </span>



TUI-TK在本仓库中，的主要作用为如下几点：

- 使用adaptivePanel对页面进行适配处理
- 使用PanelGyro对部分Dom进行3D化
- 使用EchartsInit进行图表的初始化

**如不需要上述特性，可以把当前工程中的TUI-TK剥离后，仅使用源码部分，除了TUI-TK之外，其余代码均可免费商用。**



**可以免费获取授权，只需要在我的以下项目存储库点击给我Star，即可获得1年的免费授权，有效期内可以用于商用。**

- [techui-vue2](https://github.com/ayin86/techui-vue2)
- [techui-vue3-lite](https://github.com/ayin86/techui-vue3-lite)
- techui-toolkit (current)
- [ayin-color](https://github.com/ayin86)
- [ayin-lessmixins](https://github.com/ayin86/ayin-lessmixins)

-----

**我此前写了一个较为复杂的纯前端许可证用来保护TechUI-Core的版权，基于TUI-TK实现了另外一套逻辑较为简单的许可证功能，主要目的其实并不是为了保护TUI-TK，而仅仅为了技术验证。**

关于纯前端许可证的技术实现方式，请参考我的 [Youtube频道](https://www.youtube.com/playlist?list=PLZ2oeruLJzZMXTRhgo-vxRqsk3sCos6F0) 普通话含中英文字幕。



-----

## 📑许可证说明

**本仓库内置一个为期1年的有期限许可证，使用范围为测试和体验，无法用于商业授权。**

许可证分为两个类型：

- **有期限许可证**
  - 在时限范围内有效
- **永久许可证**
  - 一旦发放终身有效有效

生成许可证的时候，会指定授权范围，如中国范围或全球范围（通常来说无任何限制）。

**如果许可证过期，或者无许可证的情况下**，TUI-TK也可以正常运行，每次进入页面会生成一个临时Key，有效期为10分钟，过期后，部分组件异常无法正常使用。这时仅需要关闭当前窗口再打开，或者清除sessionStroage即可正常访问。



**注意！请勿在互联网上泄漏许可证的key，否则会在下个TUI-TK版本中泄漏的key会加入黑名单中。**

-----



## ✨内置组件

- **adaptivePanel-自适应面板**

  - 可以对任意设备进行自适应处理，再无需写繁琐的响应式布局，处理多种跨度的分辨率，无论移动端还是PC端，甚至企业拼接屏，均可以用此组件完美的适配。

- **Panel3D-3D面板**

  - 可以使任意dom元素3D化的组件，用于PC端，使用光标交互。

- **PanelGyro-陀螺仪面板（移动端陀螺仪交互）**

  - 可以使任意dom元素3D化的组件，用于移动端，使用移动端内置陀螺仪进行交互。

- **EchartsInit-图表组件**

  - Echarts二次封装组件，可直接使用techui-vue3中的图表组件

- **DigitalTransform-数字翻牌器**

  - 三方组件

- **内置方法、状态组件、EventBus等**

  

-----


## 📜更新说明

- **20230804 发布TechUI-Toolkit开发包和演示网站，文档正在编撰中**

  

-----




## 📖安装教程

1.  `cnpm i` 安装依赖，建议使用cnpm
2.  `npm run dev` 启动项目即可预览

开发包介绍和使用方式请查阅 [文档](https://toolkit.techui.net/docs)


-----


## 🛠️兼容性和Nodejs版本

1. nodejs 16-18 支持良好其他版本未测试
2. 除IE外的主流浏览器均支持良好，包括移动端浏览器。

-----

## 🌟合作洽谈

**关于TechUI-Toolkit许可证的价格：**

**只需￥99元，即可获得一份可以永久在中国境内任何项目上使用的不受限许可证。**

**只需$99元，即可获得一份可以永久在全球范围内任意项目上使用的不受限许可证。**

**永久许可证一旦发放，则无法撤回，所以不支持退款，无需许可证的情况下也可以进行测试和体验。**

数据可视化TechGroupQQ群:119059920 技术交流

或者添加 [TechUI discord](https://discord.gg/JXgn5Gq2)讨论群组。

或者添加 [TechUI Telgram](https://t.me/+RJZ4cmDrcCFmNWNl)讨论群组。

对于付费服务，如定制开发、技术支持，或购买高级许可证，请通过以下联系方式与我联系

微信：ayin86cn

<img src="./demoImage/QRcode.png" width="300" />

海外客户，请通过邮件联系  ayin86cn@gmail.com

也可以添加TechUI的Telgram讨论群组 [TechUI](https://t.me/+RJZ4cmDrcCFmNWNl)

-----
## ❤️我能提供的服务

作者本人，由UI设计师转为前端开发，从业15年之久，在一个项目或产品的开发中，可以承担的职责有：产品经理、UI设计师、前端开发。

所以，可以说是初创公司最佳且划算的合作伙伴，欢迎洽谈合作。


#### 可以具体做的工作

- UI设计图
- 产品、项目的规划和设计
- 可视化项目开发
- GEO项目开发（echarts+geojson+在线地图）
- Rust开发WASM模块
- 任意类型的业务系统
- 移动端开发
- 文档编撰
- 前端安全，加解密

