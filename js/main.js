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
 * Hi~小杨又和大家见面了，今天给大家介绍一下瓜兮兮的我

 * 用代码嗷~~

{transition: all 1s;}
html{background: #eee;}

* 各位看官准备好了咩？

#code{
  border: 1px solid #aaa;
  padding: 16px;}


/* 巴拉拉小魔仙~变界面~布铃bling~*/
.token.selector{ color: #ff00ff; }
.token.property{ color: #FFA500; }


/* Now，放小招了 */
#code{animation: breath 0.8s infinite alternate-reverse;}
#code-wrapper{
  width: 50%; left: 0; position: fixed; 
  height: 100%;}


/* 自我介绍，前方高能*/
#paper > .content {
 display: block;
}


/* 写点啥子勒，让我预测一下你在想啥子 */
`

var css2 = `
/* 是不是太快咯，不晓得这个瓜娃儿在干啥子*/

/* 主次分明，阔以咩*/

/* 你个小机灵鬼 */
`
var md = `

# 爱我吗？

不晓得写点甚嚒

突发奇想，写首诗好了

# 诗名：emmm...猫?

有点编不下去liao
<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="0.1%" color=#000000 SIZE=3>
# 《猫》

我家有野猫
 
隔壁住母猫

整天喵喵喵
 
急死老野猫
<HR style="FILTER: alpha(opacity=100,finishopacity=0,style=1)" width="0.1%" color=#FFFFFF SIZE=3>
# 我是华丽的分割线

    说一点真诚的想法
我有点为人反常，
瓜兮兮，高冷，
这归咎于
出生那天天气不好，
到现在为止，
天气不好的时候
总是引发我写现代诗的冲动。
写现代诗也是个技术活，
比如说这一首《猫》，
其实也算不上完全是我的作品，
另外一个作者嫌这玩意太色情，
不愿意署名，
于是就变成了我的作品。
我生活中大多数经历都和
成为这首《猫》的独作非常相似，
比如说找女盆友，
一般都是别人让给我的。
这点有好有坏，
一部分人想这人是接盘侠，
另外有人想这人挺有魅力，
专门被动挖墙脚。

听完我这一席肺腑之言，
我前前女友和前女友都
不约而同的跑路。
每次想到她们跑了，
我总会紧接着
联想起路边江南皮革厂
卖皮鞋的喇叭：
“老板跑了，老板跑了，原价998，现在只要28......”

这个比喻实际上不太恰当，
女盆友是老板没得错，
我是皮鞋就不对了。
且不论我原来卖998是贵了，
还是便宜了，
现价28实在是太亏了。

# Details(of mine)

SWUFEer
      
188-150
      
Prefer simple-negative-things, which make me uglier. 
      
NTHU_visitor
      
Single
      
Waiting for time to kill me, oops
     
Struggle for being peaceful
     
# Assistance HotLine
      
Email：elioneyangbo@gmail.com
      
WeChat: yb19970105

微信公众号：phrases_tells

# reference： 
  https://github.com/STRML/strml.net
  https://github.com/FrankFang/animating-resume.git
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

