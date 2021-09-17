(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{572:function(v,s,a){"use strict";a.r(s);var e=a(5),t=Object(e.a)({},(function(){var v=this,s=v.$createElement,a=v._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("p",[v._v("JS 语言不像 C/C++, 让程序员自己去开辟或者释放内存，而是类似Java，采用自己的一套垃圾回收算法进行自动的内存管理。作为一名资深的前端工程师，对于JS内存回收的机制是需要非常清楚, 以便于在极端的环境下能够分析出系统性能的瓶颈，另一方面，学习这其中的机制，也对我们深入理解JS的闭包特性、以及对内存的高效使用，都有很大的帮助。")]),v._v(" "),a("h2",{attrs:{id:"v8-内存限制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#v8-内存限制"}},[v._v("#")]),v._v(" V8 内存限制")]),v._v(" "),a("p",[v._v("在其他的后端语言中，如Java/Go, 对于内存的使用没有什么限制，但是JS不一样，V8只能使用系统的一部分内存，具体来说，在"),a("code",[v._v("64")]),v._v("位系统下，V8最多只能分配"),a("code",[v._v("1.4G")]),v._v(", 在 32 位系统中，最多只能分配"),a("code",[v._v("0.7G")]),v._v("。你想想在前端这样的大内存需求其实并不大，但对于后端而言，nodejs如果遇到一个2G多的文件，那么将无法全部将其读入内存进行各种操作了。")]),v._v(" "),a("p",[v._v("我们知道对于栈内存而言，当ESP指针下移，也就是上下文切换之后，栈顶的空间会自动被回收。但对于堆内存而言就比较复杂了，我们下面着重分析堆内存的垃圾回收。")]),v._v(" "),a("p",[v._v("上一篇我们提到过了，所有的对象类型的数据在JS中都是通过堆进行空间分配的。当我们构造一个对象进行赋值操作的时候，其实相应的内存已经分配到了堆上。你可以不断的这样创建对象，让 V8 为它分配空间，直到堆的大小达到上限。")]),v._v(" "),a("p",[v._v("那么问题来了，V8 为什么要给它设置内存上限？明明我的机器大几十G的内存，只能让我用这么一点？")]),v._v(" "),a("p",[v._v("究其根本，是由两个因素所共同决定的，一个是JS单线程的执行机制，另一个是JS垃圾回收机制的限制。")]),v._v(" "),a("p",[v._v("首先JS是单线程运行的，这意味着一旦进入到垃圾回收，那么其它的各种运行逻辑都要暂停; 另一方面垃圾回收其实是非常耗时间的操作，V8 官方是这样形容的:")]),v._v(" "),a("blockquote",[a("p",[v._v("以 1.5GB 的垃圾回收堆内存为例，V8 做一次小的垃圾回收需要50ms 以上，做一次非增量式(ps:后面会解释)的垃圾回收甚至要 1s 以上。")])]),v._v(" "),a("p",[v._v("可见其耗时之久，而且在这么长的时间内，我们的JS代码执行会一直没有响应，造成应用卡顿，导致应用性能和响应能力直线下降。因此，V8 做了一个简单粗暴的选择，那就是限制堆内存，也算是一种权衡的手段，因为大部分情况是不会遇到操作几个G内存这样的场景的。")]),v._v(" "),a("p",[v._v("不过，如果你想调整这个内存的限制也不是不行。配置命令如下:")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 这是调整老生代这部分的内存，单位是MB。后面会详细介绍新生代和老生代内存")]),v._v("\nnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("--")]),v._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("old"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("space"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("2048")]),v._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("js \n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("p",[v._v("或者")]),v._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[v._v("// 这是调整新生代这部分的内存，单位是 KB。")]),v._v("\nnode "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("--")]),v._v("max"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("new")]),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("space"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("-")]),v._v("size"),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("2048")]),v._v(" xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[v._v(".")]),v._v("js\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br")])]),a("h2",{attrs:{id:"新生代内存的回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新生代内存的回收"}},[v._v("#")]),v._v(" 新生代内存的回收")]),v._v(" "),a("p",[v._v("V8 把堆内存分成了两部分进行处理——新生代内存和老生代内存。顾名思义，新生代就是临时分配的内存，存活时间短， 老生代是常驻内存，存活的时间长。V8 的堆内存，也就是两个内存之和。")]),v._v(" "),a("p",[a("img",{attrs:{src:v.$withBase("/week07/2.jpg"),alt:"project"}})]),v._v(" "),a("p",[v._v("根据这两种不同种类的堆内存，V8 采用了不同的回收策略，来根据不同的场景做针对性的优化。")]),v._v(" "),a("p",[v._v("首先是新生代的内存，刚刚已经介绍了调整新生代内存的方法，那它的内存默认限制是多少？在 64 位和 32 位系统下分别为 32MB 和 16MB。够小吧，不过也很好理解，新生代中的变量存活时间短，来了马上就走，不容易产生太大的内存负担，因此可以将它设的足够小。")]),v._v(" "),a("p",[v._v("那好了，新生代的垃圾回收是怎么做的呢？")]),v._v(" "),a("p",[v._v("首先将新生代内存空间一分为二:")]),v._v(" "),a("p",[a("img",{attrs:{src:v.$withBase("/week07/3.jpg"),alt:"project"}})]),v._v(" "),a("p",[v._v("其中From部分表示正在使用的内存，To 是目前闲置的内存。")]),v._v(" "),a("p",[v._v("当进行垃圾回收时，V8 将From部分的对象检查一遍，如果是存活对象那么复制到To内存中(在To内存中按照顺序从头放置的)，如果是非存活对象直接回收即可。")]),v._v(" "),a("p",[v._v("当所有的From中的存活对象按照顺序进入到To内存之后，From 和 To 两者的角色"),a("code",[v._v("对调")]),v._v("，From现在被闲置，To为正在使用，如此循环。")]),v._v(" "),a("p",[v._v("那你很可能会问了，直接将非存活对象回收了不就万事大吉了嘛，为什么还要后面的一系列操作？")]),v._v(" "),a("p",[v._v("注意，我刚刚特别说明了，在To内存中按照顺序从头放置的，这是为了应对这样的场景:")]),v._v(" "),a("p",[a("img",{attrs:{src:v.$withBase("/week07/4.jpg"),alt:"project"}})]),v._v(" "),a("p",[v._v("深色的小方块代表存活对象，白色部分表示待分配的内存，由于堆内存是连续分配的，这样零零散散的空间可能会导致稍微大一点的对象没有办法进行空间分配，这种零散的空间也叫做"),a("strong",[v._v("内存碎片")]),v._v("。刚刚介绍的新生代垃圾回收算法也叫"),a("strong",[v._v("Scavenge算法")]),v._v("。")]),v._v(" "),a("p",[v._v("Scavenge 算法主要就是解决内存碎片的问题，在进行一顿复制之后，To空间变成了这个样子:")]),v._v(" "),a("p",[a("img",{attrs:{src:v.$withBase("/week07/5.jpg"),alt:"project"}})]),v._v(" "),a("p",[v._v("是不是整齐了许多？这样就大大方便了后续连续空间的分配。")]),v._v(" "),a("p",[v._v("不过Scavenge 算法的劣势也非常明显，就是内存只能使用新生代内存的一半，但是它只存放生命周期短的对象，这种对象"),a("code",[v._v("一般很少")]),v._v("，因此"),a("code",[v._v("时间")]),v._v("性能非常优秀。")]),v._v(" "),a("h2",{attrs:{id:"老生代内存的回收"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#老生代内存的回收"}},[v._v("#")]),v._v(" 老生代内存的回收")]),v._v(" "),a("p",[v._v("刚刚介绍了新生代的回收方式，那么新生代中的变量如果经过多次回收后依然存在，那么就会被放入到"),a("code",[v._v("老生代内存")]),v._v("中，这种现象就叫"),a("code",[v._v("晋升")]),v._v("。")]),v._v(" "),a("p",[v._v("发生晋升其实不只是这一种原因，我们来梳理一下会有那些情况触发晋升:")]),v._v(" "),a("ul",[a("li",[v._v("已经经历过一次 Scavenge 回收。")]),v._v(" "),a("li",[v._v("To（闲置）空间的内存占用超过25%。")])]),v._v(" "),a("p",[v._v("现在进入到老生代的垃圾回收机制当中，老生代中累积的变量空间一般都是很大的，当然不能用"),a("code",[v._v("Scavenge")]),v._v("算法啦，浪费一半空间不说，对庞大的内存空间进行复制岂不是劳民伤财？")]),v._v(" "),a("p",[v._v("那么对于老生代而言，究竟是采取怎样的策略进行垃圾回收的呢？")]),v._v(" "),a("p",[v._v("第一步，进行标记-清除。这个过程在《JavaScript高级程序设计(第三版)》中有过详细的介绍，主要分成两个阶段，即标记阶段和清除阶段。首先会遍历堆中的所有对象，对它们做上标记，然后对于代码环境中"),a("code",[v._v("使用的变量")]),v._v("以及被"),a("code",[v._v("强引用")]),v._v("的变量取消标记，剩下的就是要删除的变量了，在随后的"),a("code",[v._v("清除阶段")]),v._v("对其进行空间的回收。")]),v._v(" "),a("p",[v._v("当然这又会引发内存碎片的问题，存活对象的空间不连续对后续的空间分配造成障碍。老生代又是如何处理这个问题的呢？")]),v._v(" "),a("p",[v._v("第二步，整理内存碎片。V8 的解决方式非常简单粗暴，在清除阶段结束后，把存活的对象全部往一端靠拢。")]),v._v(" "),a("p",[a("img",{attrs:{src:v.$withBase("/week07/6.jpg"),alt:"project"}})]),v._v(" "),a("p",[v._v("由于是移动对象，它的执行速度不可能很快，事实上也是整个过程中最耗时间的部分。")]),v._v(" "),a("h2",{attrs:{id:"增量标记"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#增量标记"}},[v._v("#")]),v._v(" 增量标记")]),v._v(" "),a("p",[v._v('由于JS的单线程机制，V8 在进行垃圾回收的时候，不可避免地会阻塞业务逻辑的执行，倘若老生代的垃圾回收任务很重，那么耗时会非常可怕，严重影响应用的性能。那这个时候为了避免这样问题，V8 采取了增量标记的方案，即将一口气完成的标记任务分为很多小的部分完成，每做完一个小的部分就"歇"一下，就js应用逻辑执行一会儿，然后再执行下面的部分，如果循环，直到标记阶段完成才进入内存碎片的整理上面来。其实这个过程跟React Fiber的思路有点像，这里就不展开了。')]),v._v(" "),a("p",[v._v("经过增量标记之后，垃圾回收过程对JS应用的阻塞时间减少到原来了1 / 6, 可以看到，这是一个非常成功的改进。")]),v._v(" "),a("p",[v._v("JS垃圾回收的原理就介绍到这里了，其实理解起来是非常简单的，重要的是理解它"),a("code",[v._v("为什么要这么做")]),v._v("，而不仅仅是"),a("code",[v._v("如何做的")]),v._v("，希望这篇总结能够对你有所启发。")])])}),[],!1,null,null,null);s.default=t.exports}}]);