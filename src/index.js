// const WorldCloud = require("worldcloud");
// import { WorldCloud } from "worldcloud";

// Canvas settings
var canvas = document.getElementById("word_cloud");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// Data
var db = [
  { word: "Nomina", freq: 70 },
  { word: "name", freq: 38 },
  { word: "false", freq: 38 },
  { word: "var", freq: 28 },
  { word: "rstudio", freq: 26 },
  { word: "true", freq: 22 },
  { word: "Deudas", freq: 20 },
  { word: "url", freq: 20 },
  { word: "server", freq: 20 },
  { word: "financiamiento", freq: 18 },
  { word: "課程", freq: 18 },
  { word: "連結", freq: 18 },
  { word: "openvz", freq: 17 },
  { word: "什麼", freq: 16 },
  { word: "wordcloud", freq: 15 },
  { word: "virtual", freq: 15 },
  { word: "機器", freq: 15 },
  { word: "虛擬", freq: 15 },
  { word: "target", freq: 14 },
  { word: "key", freq: 14 },
  { word: "文字", freq: 14 },
  { word: "sharemessage", freq: 14 },
  { word: "資訊", freq: 13 },
  { word: "字形", freq: 13 },
  { word: "google", freq: 13 },
  { word: "null", freq: 12 },
  { word: "閱讀", freq: 12 },
  { word: "中文", freq: 12 },
  { word: "data", freq: 12 },
  { word: "displaymodefull", freq: 12 },
  { word: "研究", freq: 11 },
  { word: "linux", freq: 11 },
  { word: "animal", freq: 10 },
  { word: "檔案", freq: 10 },
  { word: "系統", freq: 10 },
  { word: "服務", freq: 10 },
  { word: "function", freq: 10 },
  { word: "需要", freq: 9 },
  { word: "diseñador", freq: 9 },
  { word: "desarrollador", freq: 9 },
  { word: "twitter", freq: 9 },
  { word: "titlexdx", freq: 8 },
  { word: "postid", freq: 8 },
  { word: "facebook", freq: 8 },
  { word: "posts", freq: 8 },
  { word: "twitter", freq: 8 },
  { word: "pinterest", freq: 8 },
  { word: "blog", freq: 8 },
  { word: "環境", freq: 8 },
  { word: "facebook", freq: 8 },
  { word: "comments", freq: 8 },
  { word: "運作", freq: 7 },
  { word: "machine", freq: 7 },
  { word: "怎麼", freq: 6 },
  { word: "chinese", freq: 6 },
  { word: "開箱", freq: 6 },
  { word: "語言", freq: 6 },
  { word: "standalone", freq: 5 },
  { word: "environment", freq: 5 },
  { word: "ubuntu", freq: 5 },
  { word: "password", freq: 5 },
  { word: "rs", freq: 5 },
  { word: "ssh", freq: 5 },
  { word: "這個", freq: 5 },
  { word: "密碼", freq: 5 },
  { word: "設定", freq: 5 },
  { word: "draws", freq: 5 },
  { word: "已經", freq: 5 },
  { word: "安裝", freq: 4 },
  { word: "如下", freq: 4 },
  { word: "sans", freq: 4 },
  { word: "學習", freq: 4 },
  { word: "網頁", freq: 4 },
  { word: "撰寫", freq: 4 },
  { word: "架設", freq: 4 },
  { word: "mining", freq: 4 },
  { word: "教學", freq: 4 },
  { word: "stringnoto", freq: 4 },
  { word: "作業", freq: 4 },
  { word: "一樣", freq: 4 },
  { word: "生活", freq: 4 },
  { word: "畫面", freq: 4 },
  { word: "文章", freq: 4 }
];
list = [];
for (var i in db) {
  list.push([db[i]["word"], db[i]["freq"] + 35]);
}

// Wordle
// WordCloud.minFontSize = "20px";

WordCloud(document.getElementById("word_cloud"), {
  list: list,
  color: function(word, weight) {
    return weight >= 45 ? "#000" : "#FFF";
  },
  fontFamily: "Times, serif",
  minSize: 0,
  gridSize: 20,
  origin: [window.innerWidth / 2, window.innerHeight / 2],
  backgroundColor: "red",
  drawOutOfBound: false,
  shrinkToFit: false,
  wait: 100,
  rotationSteps: 2
});
