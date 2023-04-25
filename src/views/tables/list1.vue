<template>
<div style="display: flex;flex-wrap: wrap;">
  <div v-for="item in listData" :key="item.id" style="flex: 1;cursor: pointer;" @click="jumpDetail(item)">
    <div>{{item.title}}</div>
    <img width="272" alt="logo" src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png" />
  </div>
</div>
</template>

<script>
const listData = [];
for (let i = 0; i < 24; i++) {
  listData.push({
    id: 'yy' + i,
    href: 'https://www.antdv.com/',
    title: `ant design vue part ${i}`,
    avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
    description:
      'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content:
      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

export default {
  data() {
    return {
      listData,
      pagination: {
        onChange: page => {
          console.log(page);
        },
        pageSize: 3,
      },
      actions: [
        { type: 'star-o', text: '156' },
        { type: 'like-o', text: '156' },
        { type: 'message', text: '2' },
      ],
    };
  },
  methods: {
    // 跳转下一层详情
    jumpDetail(data) {
      this.$router.push({
        name: 'list2',
        query: {
          id: data.id
        }
      })
    }
  }
};
</script>
<style></style>