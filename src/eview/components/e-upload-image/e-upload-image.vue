<template>
  <div class='e-upload-image'>
    <div class="upload-list" v-for="item in uploadList">
      <template v-if="item.status === 'finished'">
        <img :src="item.url">
        <div class="upload-list-cover">
          <Icon type="ios-eye-outline" @click.native="handleView(item)"></Icon>
          <Icon type="ios-trash-outline" @click.native="handleRemove(item)"></Icon>
        </div>
      </template>
      <template v-else>
        <Progress v-if="item.showProgress" :percent="item.percentage" hide-info></Progress>
      </template>
    </div>
    <Upload
      ref="upload"
      :show-upload-list="false"
      :default-file-list="defaultList"
      :on-success="handleSuccess"
      :format="['jpg', 'jpeg', 'png']"
      :max-size="maxSize"
      :on-format-error="handleFormatError"
      :on-exceeded-size="handleMaxSize"
      :before-upload="handleBeforeUpload"
      multiple
      type="drag"
      :action="action"
      style="display: inline-block;width:58px;">
      <div style="width: 58px;height:58px;line-height: 58px;">
        <Icon type="camera" size="20"></Icon>
      </div>
    </Upload>
    <Modal v-model="visible" :closable='false'>
      <img :src="currentImage" v-if="visible" style='width:100%'>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>
<script>

export default {
  props: {
    maxCount: {
      type: Number,
      default: 1
    },
    action: {
      type: String
    },
    maxSize: {
      type: Number,
      default: 2048
    },
    defaultList: {
      type: Array
    }
  },
  data () {
    return {
      // defaultList: [],
      currentImage: '',
      visible: false,
      uploadList: []
    }
  },
  methods: {
    handleView (item) {
      this.currentImage = item.url
      this.visible = true
    },
    handleRemove (file) {
      // 从 upload 实例删除数据
      const { fileList } = this.$refs.upload
      fileList.splice(fileList.indexOf(file), 1)
    },
    handleSuccess (res, file) {
      file.url = res.url
      file.name = res.url
    },
    handleFormatError (file) {
      this.$Notice.warning({
        title: '文件格式不正确',
        desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg 或 png 格式的图片。'
      })
    },
    handleMaxSize (file) {
      this.$Notice.warning({
        title: '超出文件大小限制',
        desc: '文件 ' + file.name + ' 太大，不能超过 2M。'
      })
    },
    handleBeforeUpload () {
      const check = this.uploadList.length < this.maxCount
      if (!check) {
        this.$Notice.warning({
          title: `最多只能上传 ${this.maxCount} 张图片。`
        })
      }
      return check
    }
  },
  mounted () {
    this.uploadList = this.$refs.upload.fileList
  }
}
</script>
