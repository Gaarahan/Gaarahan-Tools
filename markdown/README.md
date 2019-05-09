### 在线markdown编辑预览

----- 

1. 使用marked.js进行本地的markdown -> html转化[v]

2. 使用hightlight.js进行代码块的高亮[v]
    - 主题: Pojoaque
    - highlight 使用自定义的包

3. 背景图片消失？[v]
  - 背景图片加载在`.hljs`类上，但此类不存在，使用marked配置项`langPrefix`手动添加

4. `css`样式 使用了github的主题，但是它覆盖了使用highlight.js设置的样式[v]
    + 在上面找到所有和code相关的样式，删掉
    
5. 优化滚动条 ?  https://caniuse.com/#feat=css-scrollbar

6. 使用tab键会在表单元素之间跳转，不能正常缩进[v]
    - 阻止默认事件来防止跳转
    - 手动创建一个事件，来完成两个空格的输入
    
7. 为转化事件加入函数节流
