<template>
  <div>
    <!-- 登録情報を表示 -->
    <div v-for="content in contents" :key="content.id">
      <span>{{ content.id }}</span>
      <span>{{ content.title }}</span>
      <span>{{ content.body }}</span>
    </div>
    <form>
      <!-- 投稿フォーム -->
      <span>title</span>
      <!-- 投稿タイトルをバインド -->
      <input v-model="posts.title" type="text" />
      <span>author</span>
      <!-- 投稿内容をバインド -->
      <input v-model="posts.author" type="text" />
    </form>
    <button type="button" @click="postPosts()">投稿</button>
  </div>
</template>
<script>
//axiosをインポート
import axios from "axios";

export default {
  data() {
    return {
      //jsonファイルが持つcontentを表示させる空の配列を作る
      contents: [],
      //title,authorを保存させる空のデータを作る
      posts: {
        title: "",
        author: "",
      },
    };
  },
  //Vueインスタンスのmount後にjsonデータを取得させる
  mounted() {
    // axiosを使用
    this.getContents();
    // async/awaitを使用
    // this.getContentsAsync();
  },
  methods: {
    // APIでコンテンツを取得
    getContents() {
      const url = "http://localhost:3000/contents";
      axios
        .get(url)
        .then((res) => {
          this.contents = res.data;
        })
        .catch(() => {
          console.error("Error!!!!!!");
        });
    },
    postPosts() {
      const url = "http://localhost:3000/posts";
      axios
        .post(url, this.posts)
        .then((res) => {
          // 成功処理
          this.contents = res.data;
          console.log(this.contents);
          this.$swal("保存に成功しました", "クリックしてください", "success");
        })
        .catch((e) => {
          // 失敗処理
          console.error(e);
        });
    },
    async getContentsAsync() {
      try {
        const url = "http://localhost:3000/contents";
        const res = await axios.get(url);
        this.contents = res.data;
      } catch (error) {
        console.error("Error!!!");
      }
    },
  },
};
</script>
