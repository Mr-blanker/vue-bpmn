<template>
  <div id="app">
    <vue-bpmn style="height: 100vh;"
              :options="options"
              storage
              @get="handleGetXml"></vue-bpmn>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      options: {
        mode: 'edit',
        xml: '',
        flows: [],
      },
      drawerVisible: false
    }
  },
  methods: {
    handleGetXml(xml) {
      console.log(xml)
      this.$message.success('查看控制台')
    }
  }
}
</script>
