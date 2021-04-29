<template>
  <div>
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <td>ID</td>
          <td>Title</td>
          <td>Contets</td>
        </tr>
      </thead>
      <tbody>
        <!-- 登録情報を表示 -->
        <tr v-for="content in contents" :key="content.id">
          <td>{{ content.id }}</td>
          <td>{{ content.title }}</td>
          <td>{{ content.body }}</td>
        </tr>
      </tbody>
    </table>
    <form class="post-form">
      <!-- 投稿タイトルをバインド -->
      <input v-model="posts.title" type="text" placeholder="Title" />
      <!-- 投稿内容をバインド -->
      <input v-model="posts.body" type="text" placeholder="Content" />
      <button type="button" @click="postPosts()">投稿</button>
    </form>
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
        body: "",
      },
    };
  },
  mounted() {
    // axiosを使用
    this.getContents();
  },
  methods: {
    // APIでコンテンツを取得
    getContents() {
      const instanceGet = axios.create({
        baseURL: "http://localhost:3000/",
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 2000,
      });

      instanceGet
        .get("/contents")
        .then((res) => {
          this.contents = res.data;
        })
        .catch(() => {
          console.error("Error!!!!!!");
        });
    },
    async postPosts() {
      const instancePost = axios.create({
        baseURL: "http://localhost:3000/",
        headers: {
          "Content-Type": "application/json",
        },
        timeout: 2000,
      });

      //urlを定数に代入
      // const url = "http://localhost:3000/posts";
      //awaitでpost リクエストを先に流す
      await instancePost.post("/posts", this.posts);
      //連続してawaitでgetメソッドを流す
      const response = await axios.get("/contents"); // getで再取得
      this.contents = response.data; // 再取得した結果を代入
      this.$swal("保存に成功しました", "クリックしてください", "success");
    },
  },
};
</script>

<style>
.table {
  width: 100%;
}

.thead-dark {
  background-color: #333;
  height: 60px;
  width: 100%;
  color: #fff;
  font-size: 20px;
}
.post-form {
  margin-right: 2rem;
}
</style>
