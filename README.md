## 简介

本项目是一款基于 <a href="https://bpmn.io/toolkit/bpmn-js/" target="_blank">bpmn.js</a> 的流程设计器。
[在线预览](https://bpmn.beta.kim/)

- 暂不提供源码
- 支持 设计/预览 模式
- 支持camunda，flowable，activiti的基本xml配置
- 由于本人对流程引擎配置了解有限，缺少什么配置欢迎提issue，并附上xml。感谢！

<!-- ## 更新日志

[更新日志](https://github.com/sscfaith/vue-bpmn/blob/master/CHANGELOG.md) -->

## 依赖（请自行安装）

element-ui 2.13.2+

```sh
$ npm i element-ui
```

或自行引入 cdn

<br>

## 安装

### 组件

```sh
$ npm i @sscfaith/vue-bpmn
或
$ yarn add @sscfaith/vue-bpmn
```

### 源码

<a href="https://github.com/sscfaith/vue-bpmn" target="_blank">github</a>

```sh
$ yarn
$ yarn serve
```

### html

详见 examples

<br>

## 使用

```
import VueBpmn from "@sscfaith/vue-bpmn"

export default {
  components: { VueBpmn }
}
```

```
<vue-bpmn style="height: 100vh;"
          option="option"
          storage></vue-bpmn>
```

### 属性

| 参数 | 说明 | 类型 | 默认值 | 
| ------ | ------ | ------ | ------ | 
| option | 组件配置（详情见下） | Object | {} | 
| storage | 开启缓存配置 | Boolean | false |

<br>

#### option 字段配置

| 参数 | 说明 | 类型 | 默认值 | 可选值 |
| ------ | ------ | ------ | ------ | ------ |
| mode | 设计/预览模式 | String | 'edit' | 'edit', 'view' |
| toolbar | 顶部工具栏 | Array | ['open', 'create', 'fit', 'zoom-in', 'zoom-out', 'undo', 'redo', 'import', 'preview', 'get', 'download-xml', 'download-svg'] | - |
| engine | 流程引擎 | String | 'camunda' | 'camunda', 'flowable', 'activiti' | - |
| xml | 初始xml | String | '' | - |
| lint | 是否开启模型校验 | Boolean | true | true/false |
| flows | 流转节点颜色配置(mode='view')时生效 | Array | [] | - |

#### flows 字段配置

| 属性          | 说明         | 类型    |          可选值         | 
| ------------- | ------------ | ------- | ----------------------- | 
| id        | 节点id    | String   |      -                 |  
| class | 节点class名（可自定义） | String  | 'nodeSuccess', 'nodeWarn', 'nodeError', 'lineSuccess', 'lineWarn', 'lineError' | 
| tips    | 节点提示 | String | -                       | 

### 事件

| 名称   | 说明           | 回调参数        |
| ------ | -------------- | --------------- |
| get | 获取xml回调 | 当前配置的xml |

<br>

## TODO

- [x] 支持 设计/预览 模式
- [x] 支持camunda，flowable，activiti的基本xml配置

### 流程配置
- [x] id 流程id
- [x] name 名称
- [x] document 描述

### Start Event
- [x] id 节点id
- [x] name 名称
- [x] document 描述
- [x] executionListener 执行监听
- [ ] form 表单配置

### Sequence Flow
- [x] id 节点id
- [x] name 名称
- [x] document 描述
- [x] conditionExpression 流转条件
- [x] executionListener 执行监听

### Gateway
- [x] id 节点id
- [x] name 名称
- [x] document 描述

### User Task
- [x] id 节点id
- [x] name 名称
- [x] document 描述
- [x] assignee 审批人（目前只支持填写）
- [x] candidateUsers 候选用户（目前只支持填写）
- [x] candidateGroups 候选用户组（目前只支持填写）
- [x] multiInstanceLoopCharacteristics 多实例
- [x] loopCardinality 多实例 - 循环基数
- [x] collection 多实例 - 集合
- [x] elementVariable 多实例 - 元素变量
- [x] completionCondition 多实例 - 完成条件
- [x] taskListener 任务监听
- [x] executionListener 执行监听
- [ ] form 表单配置

<br>

## 捐赠

如果你觉得本项目帮助到你的话，可以给作者买杯咖啡。
<img src="http://112.74.43.150/images/donate.png">

## License

<a href="https://github.com/sscfaith/vue-bpmn/blob/master/LICENSE" target="_blank">MIT</a> Copyright (c) 2020-present SSC(273702440@qq.com)
