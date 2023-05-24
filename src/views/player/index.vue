<template>
  <div id="vs" style="width: 100%;height: 100vh;"></div>
</template>
<script>
import Player from 'xgplayer'
import 'xgplayer/dist/index.min.css'
import MusicPreset from 'xgplayer-music'
import 'xgplayer-music/dist/index.min.css'

export default({
  data() {
    return {
      url: 'https://zhang9898.online/music/周杰伦-红颜如霜.flac',
      list: []
    }
  },
  mounted () {
    this.init();
  },
  methods: {
    init() {
      new Player({
        id: 'vs',
        url: this.url,
        poster: 'https://images6.alphacoders.com/884/884774.jpg',
        title: '这是音乐标题',
        /***以下配置音乐播放器一定要有start***/
        controls: {
          mode: 'flex',
          initShow: true
        },
        marginControls: true,
        mediaType: 'audio', // 视频为video, h265为 xg-video, 音频为audio
        preset: ['default', MusicPreset],
        /***以上配置音乐播放器一定要有ended***/
        music: {
          // 音乐循环播放列表，如果不需要循环播放可以没有
          list: [{
            url: 'xx',
            vid: '123',
            poster: 'ccc',
            title: 'ccc'
          }]
        },
        width: "100%",
        height: 700
      })
    }
  }
})
</script>