/*把code写到#code和style标签里*/
function writeCss(prefix, code, fn){
  let domCode = document.querySelector('#code')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
    styleTag.innerHTML = prefix +  code.substring(0, n)
    domCode.scrollTop = domCode.scrollHeight
    if (n >= code.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 70)
}
function writeMarkdown(markdown, fn){
  let domPaper = document.querySelector('#paper>.content')
  let n = 0
  let id = setInterval(() => {
    n += 1
    domPaper.innerHTML = markdown.substring(0, n)
    domPaper.scrollTop = domPaper.scrollHeight
    if (n >= markdown.length) {
      window.clearInterval(id)
      fn && fn.call()
    }
  }, 35)
}

var css1 = `/* 
 * Hi~又是一年的农历四月一，老王又要来表示表示了，今年就采用我博学的语言形式吧

 * 用代码嗷~~

{transition: all 1s;}
html{background: #eee;}

* 小仙女本人准备好了嘛？

#code{
  border: 1px solid #aaa;
  padding: 16px;}


/* 王大魔法师施法界面~布铃~blong~*/
.token.selector{ color: #ff00ff; }
.token.property{ color: #FFA500; }


/* Now，放小招了 */
#code{animation: breath 0.8s infinite alternate-reverse;}
#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;}


/* 注意注意，前方高能*/
#paper > .content {
 display: block;
}


/* 写点什么呢，让我预测一下你在想啥 */

/* 我猜你在想这是什么东西，要是没啥东西耽误了复习可饶不了你 */
`

var css2 = `
/* 是不是太快咯，不晓得这位魔法师在干啥*/

/* 主次分明，阔以嘛*/

/* 你个小机灵鬼 */
`
var md = `

# 想我吗？

别问，问就是不知道你猜

首先呢，写首诗展示一下我坚实的诗词功底

# 诗名：emmm...杂诗

做好心理准备，这诗可不得了
<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="0.1%" color=#000000 SIZE=3>
# 《杂诗》

李家有女年十八
 
天生丽质难自弃

一朝老王栽你手
 
哑巴吃黄连有...有点想你了
<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="0.1%" color=#FFFFFF SIZE=3>
# 我是华丽的分割线

说一点真诚的想法
这一晃认识你又多一年了，
我俩这又熟了一年，
唯一不好的就是
你在国外我在国内，
8个小时时差加上9200公里，
让你需要有人陪的时候
我只能在微信上当个siri了。
这你以后回来我一定得加倍宠你，
好好弥补一下受到的委屈。
每次想起以前你的点点滴滴，
都会忍不住脸上带着笑意，
别人都好奇咋突然这么开心，
你说我是不是没救啦。
还记得那次我俩坐火车从合肥回上海吗？
你突然说北方女生像你这样像南方女生的不多了，
我这是捡到宝了得好好珍惜。
那神态那语气可爱的能把人的心融化~
还有一次呢我聚完会回来胡思乱想一通，
觉得可能你出国了也会改变，
对自己突然很没有信心了，
结果被你看出来了，然后还假装生气，
和我说了一大堆事情，其实就是想让我有信心吧嘿嘿
还有很多很多事情，
我寻思你可能都记不到了，
但是我都一一记住了，
我这上辈子肯定欠了你不少我寻思。

听到你说最近很忙心情挺烦躁的，
我也是很心疼你的，
不要太累了
在外面没有我只能自己照顾好自己，
暑假回家好好休养休养，
要是还有时间得来上海看看我噢~

最后呢肯定要祝我的小仙女
又是一年十八岁生日快乐咯~
一定得吃好喝好玩好，
不要给自己太多压力，
以后你负责美就完事了~

# Details(of mine)

Wrh
      
183-125
      
Prefer simple-positive-things, which make me happier. 
      
Single
       
# Assistance HotLine
      
Email：wangronghua@sjtu.edu.cn
      
WeChat: 13305600598

`

let css3 = `
/*
 *           G.G ,结束了耶
 *           谢谢观赏~
 */


`

writeCss('', css1, ()=>{ // writeCss call the function
  createPaper(() => {
    writeMarkdown(md, ()=> {
      writeCss(css1, css2, ()=>{
        convertMarkdownToHtml(()=>{
          writeCss(css1 + css2, css3, ()=> {
            console.log('完成')
          })
        })
      })
    })
  })
})




function createPaper(fn){
  var paper = document.createElement('div') 
  paper.id = 'paper'
  var content = document.createElement('pre')
  content.className = 'content'
  paper.appendChild(content)
  document.body.appendChild(paper)
  fn && fn.call()
}

function convertMarkdownToHtml(fn){
  var div = document.createElement('div')  
  div.className = 'html markdown-body'
  div.innerHTML = marked(md)
  let markdownContainer = document.querySelector('#paper > .content')
  markdownContainer.replaceWith(div)
  fn && fn.call()
}

