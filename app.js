// 全局变量
let novels = [];

// 内置小说数据作为后备（确保在本地文件系统中也能正常工作）
const builtInNovels = [
    {
        category: '悬疑',
        title: '渡口',
        author: '清风',
        filename: '渡口.txt'
    }
];

// 内置小说内容作为后备
const builtInNovelContent = {
    '渡口.txt': `渡口。
By青枫
我醒了，从土地上坐起，眼前是浓烈的雾。
我好像忘记了一切，只知道来到这里的渡口等船。
我重新站在木板上，等着船来接我。
已经等了三天了，自从取号来到这个位子上，我没有看见过一艘船或者舟。平静的水面不带一丝波澜，似乎从来没有航行过的痕迹。
可我确实看见过船的影子，我刚来的时候，水面上的迷雾中闪过一个木船的影子，一瞬便消失了。
为什么说是木船，我也不清楚。这破烂的木板时不时发出声音，这地方草木近乎绝迹，除了只能载两人的小木船，也不会有其它船会来了。这里只有我，没有别人。
木船的解释是另一个人告诉我的，他穿着工作服，看不清面容。我在他手里拿到号，他给我指了路，我才来到这里。
我摸着口袋里的那块玉，他是我身上唯一的东西，还是那位"工作人员"给我的，他叮嘱我，让我一定要带着它，不能丢掉。
玉的内部充满了裂纹，表面摸上去却仍光滑，他是白色的，却因裂纹显得发黑。
我继续站在渡口上。
空气中四散的水汽打在我的脸上，清凉透彻。我的薄衣服已经湿透了，拧一下足以滴水。
我的记忆剩下些什么？朋友、工作、车。
我试着回想我来到那个大门之前到底发生了什么。
可我无论如何回想就是记不起一丝画面，这三个词我也无法理解，无法参透。有可能成为我心中永远的迷了吧。
记忆所剩无几，像这片水面上的雾，虚无、模糊。
想着想着，等着等着，困意再次袭来。
我走回到土地上，准备躺下，在度过这一天。
然而，就当我躺下，闭上眼睛，我听到三下清脆的铃声。
我缓慢睁开眼，又响了三下铃声。
雾，似乎散了一点。
铃声吸引着我，有魔力一般。
我爬起来，看见木板旁多了一艘很小的木舟。一个佝偻的，穿着斗篷的身影站在里面，给我留出了一个位置。
船头上插着一根不高的木棍，上头留出了一个圆孔，铃铛就挂在上面。
我走了过去，站在木舟空出的位置上，木舟剧烈颤抖了一下，向下沉了一点。
铃铛又摇了一下，摆渡人拔出那根木棍——原来是船桨。
木舟摇摇晃晃地出发了。我看着身后的渡口越来越远。
迷雾好像很害怕木舟，和木舟保持着相当远的距离。
耳边只有水流声，还有铃铛的"叮"声。
出于好奇，我蹲下来摸了一下水面。
水流一下子湍急起来，小舟行驶的速度也突然变快。
从水声中，我好像听到了什么。
我尽我所能地压低身子，努力去听到底是什么声音。
终于，我听到了。
那是婴儿的啼哭。

接着，更多的词汇顺着耳朵涌入我的脑海。
社畜、游荡、母亲、哥哥、地震。
我想起来了。
我叫明乐，从小生活在农村，自幼无父，家中有一个哥哥。
家中的钱不够我们两个上学，哥哥把机会让给了我，他用我领的教科书自学，我为他提供帮助。
不负所望，小学、中学、高中，一路顺利。
我没有上大学，而是去了别的城市打工。干的倒不错，和家里也有信息往来。也认识了几个朋友。
听说老家乡村振兴建设，离家五年的我买了火车票准备回家。
那一晚，朋友叫我去他家喝酒。
再去往他家的路上，手机上的新闻突然弹出A县地震的消息，我们乡村也在其范围内。
慌乱之下的我，没有注意车流和红灯，然后......嗯。
也不知道他们怎么样了。
摆渡人轻轻拍了一下我，我抬头，发现已经到了。我要去的地方就是这里，一个小土坡。
我的坟墓。
我对摆渡人轻轻说了声"谢谢。"随即下船。
我走向我的坟墓。
但我顿住了，转身看着摆渡人的身影，紧张又没把握地喊了一声："妈？"
木舟停住了，摆渡人划桨的手也停住了。
没过多久，木舟重新行驶。
看着木舟逐渐远去的影子，我又喊了一声："妈！"我就知道是她，一定是她。
在外漂流多年的孩子终究是被妈妈接回了家。
而门口的工作人员，应该是我哥没错了。
这时，一扇门在我面前竖起。
我知道，我该走了。
可我多想在见他们一面。
我迟迟迈不出第一步。
后悔、自责、害怕的情绪包围着我。
就在我向后退的时候，有个人拍了拍我的肩膀。
"别回头，向前走。"
那是哥哥的声音。
"我来送你了。"哥哥说。
"妈呢？"我问。
"她也在看着你。"
"可我不想走。"五年未见的家人，反而死后相见，又怎肯再次分开？
"你得走，你的朋友给你立了坟，你就得走。"他的语气不容置疑。
我的头被他摁着，无法回头.
"别回头，回头你就走不掉了。"
我不说话。
"去吧。"哥哥把我往前一推，我的右脚踏进了门。
"再见，哥。再见，妈妈。"
我终究还是走进了那扇门。
我转身，在门关上的最后一刻，我看见的是哥哥的笑脸.
......
口袋里的玉感觉碎了，我一看，只剩下一片尘土。
我知道，那是死去的我。过去的，现在的......
没有未来。
——后记——
今天是很难过的一天。
老师带我们去了八年前A县的地震现场。
高楼倒塌，废墟一片。
我们整个班都沉浸在悲伤的氛围里。
临放学前，老师叫住了我："杨小乐！"
"老师，怎么了？"我跑回去，看着老师。
老师夸奖我有同情心，并让我今天写一份观后感，明天上台演讲。
回到家，我搜索着资料。
我看到有一个叔叔因为这场地震威胁着亲人，慌乱之下没有注意到红绿灯，被车撞死了......
我看着那悲惨的文字，眼泪不觉又掉了下来。
我感觉好真实啊，感觉这个叔叔很熟悉，可我不知道怎么描述出来。
可能是因为我是小孩子吧。
很多事情都无法解释。
2025.2.26
晚上。
——全文完——`
};

// DOM元素引用
let novelListSection, readingSection, novelGrid, backToListBtn, currentNovelTitle, currentNovelAuthor, currentNovelCategory, readingContent;
let searchInput, searchBtn, categorySelect, categorySearchBtn;
let currentCategory = 'all'; // 当前选中的分类

// 当前小说内容存储变量，用于搜索功能
let currentNovelContent = '';
let currentNovel = null;

// 初始化函数
async function init() {
    try {
        // 确保DOM元素已加载
        await ensureDomReady();
        
        // 加载小说列表
        await loadNovelList();
        
        // 渲染小说列表
        renderNovelList();
        
        // 添加事件监听器
        backToListBtn.addEventListener('click', showNovelList);
        
        // 搜索按钮事件监听
        if (searchBtn) {
            searchBtn.addEventListener('click', () => {
                const keyword = searchInput ? searchInput.value.trim() : '';
                executeSearch(keyword);
            });
        }
        
        // 搜索框回车事件监听
        if (searchInput) {
            searchInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    const keyword = searchInput.value.trim();
                    executeSearch(keyword);
                }
            });
        }
        
        // 绑定分类搜索事件
        if (categorySelect) {
            categorySelect.addEventListener('change', handleCategorySearch);
        }
        if (categorySearchBtn) {
            categorySearchBtn.addEventListener('click', handleCategorySearch);
        }
        
        // 监听设备方向变化，优化移动设备体验
        window.addEventListener('resize', handleResize);
        window.addEventListener('orientationchange', handleOrientationChange);
    } catch (error) {
        console.error('初始化失败:', error);
        if (novelGrid) {
            novelGrid.innerHTML = '<p class="error-message">加载小说列表失败，但已使用内置数据</p>';
            // 即使出错，也使用内置数据
            novels = builtInNovels;
            renderNovelList();
        }
    }
}

// 确保DOM元素已准备就绪
function ensureDomReady() {
    return new Promise((resolve) => {
        // 尝试获取DOM元素
        novelListSection = document.getElementById('novel-list');
        readingSection = document.getElementById('reading-section');
        novelGrid = document.querySelector('.novel-grid');
        backToListBtn = document.getElementById('back-to-list');
        currentNovelTitle = document.getElementById('current-novel-title');
        currentNovelAuthor = document.getElementById('current-novel-author');
        currentNovelCategory = document.getElementById('current-novel-category');
        readingContent = document.querySelector('.reading-content');
        // 获取搜索相关元素
        searchInput = document.getElementById('search-input');
        searchBtn = document.getElementById('search-btn');
        
        // 获取分类搜索相关元素
        categorySelect = document.getElementById('category-select');
        categorySearchBtn = document.getElementById('category-search-btn');
        
        // 如果所有元素都已存在，直接返回
        if (novelListSection && readingSection && novelGrid && backToListBtn && 
            currentNovelTitle && currentNovelAuthor && currentNovelCategory && readingContent) {
            resolve();
        } else {
            // 否则等待DOMContentLoaded事件
            document.addEventListener('DOMContentLoaded', () => {
                novelListSection = document.getElementById('novel-list');
                readingSection = document.getElementById('reading-section');
                novelGrid = document.querySelector('.novel-grid');
                backToListBtn = document.getElementById('back-to-list');
                currentNovelTitle = document.getElementById('current-novel-title');
                currentNovelAuthor = document.getElementById('current-novel-author');
                currentNovelCategory = document.getElementById('current-novel-category');
                readingContent = document.querySelector('.reading-content');
            
            // 获取分类搜索相关元素
            categorySelect = document.getElementById('category-select');
            categorySearchBtn = document.getElementById('category-search-btn');
            
            resolve();
            });
        }
    });
}

// 处理窗口大小变化
function handleResize() {
    // 如果正在阅读小说，调整阅读区域布局
    if (readingSection.classList.contains('hidden') === false) {
        adjustReadingLayout();
    }
}

// 处理设备方向变化
function handleOrientationChange() {
    // 延迟执行以确保方向已完全切换
    setTimeout(() => {
        handleResize();
        
        // 如果正在阅读小说，保持适当的滚动位置
        if (readingSection.classList.contains('hidden') === false) {
            if (readingContent) {
                readingContent.scrollTop = readingContent.scrollTop;
            }
        }
    }, 300);
}

// 调整阅读区域布局
function adjustReadingLayout() {
    // 移动设备优化：减少不必要的内边距
    const isMobile = window.innerWidth <= 768;
    if (isMobile) {
        readingContent.style.paddingLeft = '10px';
        readingContent.style.paddingRight = '10px';
    } else {
        readingContent.style.paddingLeft = '20px';
        readingContent.style.paddingRight = '20px';
    }
}

// 加载小说列表
async function loadNovelList() {
    try {
        // 尝试读取列表.txt文件
        console.log('尝试从文件加载小说列表...');
        const response = await fetch('re/列表.txt');
        
        // 检查响应是否成功
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const text = await response.text();
        console.log('成功加载列表.txt内容:', text);
        
        // 解析列表内容
        const lines = text.trim().split('\n');
        novels = lines.map(line => {
            const parts = line.split(' ');
            return {
                category: parts[0],
                title: parts[1],
                author: parts.length > 2 ? parts.slice(2).join(' ').replace('作者', '') : '未知作者',
                filename: parts[1] + '.txt'
            };
        });
        
        console.log('成功解析小说列表:', novels);
    } catch (error) {
        console.error('加载小说列表失败，使用内置数据:', error);
        // 使用内置小说数据作为后备
        novels = builtInNovels;
        console.log('使用内置小说列表数据');
    }
}

// 处理分类搜索
function handleCategorySearch() {
    currentCategory = categorySelect ? categorySelect.value : 'all';
    renderNovelList();
}

// 渲染小说列表
function renderNovelList() {
    novelGrid.innerHTML = '';
    
    // 根据当前分类过滤小说
    let filteredNovels = novels;
    if (currentCategory !== 'all') {
        filteredNovels = novels.filter(novel => novel.category === currentCategory);
    }
    
    if (filteredNovels.length === 0) {
        novelGrid.innerHTML = `<p class="no-data">暂无${currentCategory === 'all' ? '' : currentCategory + '类'}小说</p>`;
        return;
    }
    
    filteredNovels.forEach(novel => {
        const card = document.createElement('div');
        card.className = 'novel-card';
        card.innerHTML = `
            <h3>${novel.title}</h3>
            <p><strong>类型：</strong>${novel.category}</p>
            <p><strong>作者：</strong>${novel.author}</p>
        `;
        
        // 添加点击事件
        card.addEventListener('click', () => loadNovelContent(novel));
        
        novelGrid.appendChild(card);
    });
}

// 加载小说内容
async function loadNovelContent(novel) {
    try {
        // 显示加载状态
        readingContent.innerHTML = '<p class="loading">加载中...</p>';
        
        let text;
        
        // 首先尝试从内置数据中获取内容（确保在本地文件系统中也能正常工作）
        if (builtInNovelContent[novel.filename]) {
            console.log('使用内置小说内容');
            text = builtInNovelContent[novel.filename];
        } else {
            // 如果内置数据中没有，尝试从文件读取
            console.log(`尝试从文件加载小说内容: re/${novel.filename}`);
            const response = await fetch(`re/${novel.filename}`);
            
            // 检查响应是否成功
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            text = await response.text();
            console.log('成功加载小说文件内容');
        }
        
        // 处理小说内容（移除VIP相关内容）
        const processedContent = processNovelContent(text);
        
        // 保存当前小说信息和内容，用于搜索功能
        currentNovel = novel;
        currentNovelContent = processedContent;
        
        // 更新阅读区域信息
        currentNovelTitle.textContent = novel.title;
        currentNovelAuthor.textContent = `作者：${novel.author}`;
        currentNovelCategory.textContent = `类型：${novel.category}`;
        
        // 渲染小说内容
        renderNovelContent(processedContent);
        
        // 显示阅读区域，隐藏列表区域
        showReadingSection();
    } catch (error) {
        console.error('加载小说内容失败:', error);
        readingContent.innerHTML = '<p class="error-message">加载小说内容失败，但已使用内置数据</p>';
        
        // 如果有内置内容，尝试使用它
        if (builtInNovelContent[novel.filename]) {
            const processedContent = processNovelContent(builtInNovelContent[novel.filename]);
            currentNovel = novel;
            currentNovelContent = processedContent;
            renderNovelContent(processedContent);
        }
        
        showReadingSection();
    }
}

// 处理小说内容（移除VIP相关内容）
function processNovelContent(content) {
    // 移除VIP收费标记和激活码
    let processed = content.replace(/\/收费\s*激活码[\d\w]+/g, '');
    processed = processed.replace(/\/激活码\s*[\d\w]+/g, '');
    processed = processed.replace(/收费章节/gi, '');
    processed = processed.replace(/付费章节/gi, '');
    processed = processed.replace(/[Vv][Ii][Pp]\s*章节/gi, '');
    processed = processed.replace(/会员章节/gi, '');
    
    // 移除其他可能的付费提示
    processed = processed.replace(/请订阅.*阅读全文/gi, '');
    processed = processed.replace(/购买章节/gi, '');
    processed = processed.replace(/充值/gi, '');
    
    // 清理多余的空白行
    processed = processed.replace(/\n{3,}/g, '\n\n');
    
    return processed;
}

// 渲染小说内容
function renderNovelContent(content) {
    // 清空内容
    readingContent.innerHTML = '';
    
    // 按段落分割并渲染
    const paragraphs = content.split('\n');
    
    // 创建文档片段以减少DOM操作次数
    const fragment = document.createDocumentFragment();
    
    paragraphs.forEach(para => {
        para = para.trim();
        if (para) {
            // 检测是否为标题行（通常以"第X章"开头或全为大写的短行）
            if (/^第[\d一二三四五六七八九十百千]+章/.test(para) || 
                (/^[A-Z\u4e00-\u9fa5]+$/.test(para) && para.length < 20)) {
                const h3 = document.createElement('h3');
                h3.textContent = para;
                fragment.appendChild(h3);
            } else {
                const p = document.createElement('p');
                p.textContent = para;
                fragment.appendChild(p);
            }
        }
    });
    
    // 一次性添加所有内容到DOM
    readingContent.appendChild(fragment);
    
    // 滚动到阅读区域顶部
    readingContent.scrollTop = 0;
}

// 显示阅读区域
function showReadingSection() {
    novelListSection.classList.add('hidden');
    readingSection.classList.remove('hidden');
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 显示小说列表
function showNovelList() {
    readingSection.classList.add('hidden');
    novelListSection.classList.remove('hidden');
    
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 搜索小说内容
function searchInNovel(keyword) {
    if (!keyword || !currentNovelContent) {
        return [];
    }
    
    const results = [];
    const paragraphs = currentNovelContent.split('\n');
    
    paragraphs.forEach((paragraph, index) => {
        if (paragraph.includes(keyword)) {
            // 查找段落中所有匹配的位置
            let startIndex = 0;
            while (true) {
                const foundIndex = paragraph.indexOf(keyword, startIndex);
                if (foundIndex === -1) break;
                
                // 提取上下文
                const contextStart = Math.max(0, foundIndex - 30);
                const contextEnd = Math.min(paragraph.length, foundIndex + keyword.length + 30);
                const context = paragraph.substring(contextStart, contextEnd);
                
                results.push({
                    paragraphIndex: index,
                    position: foundIndex,
                    context: context,
                    fullText: paragraph
                });
                
                startIndex = foundIndex + 1;
            }
        }
    });
    
    return results;
}

// 高亮显示搜索结果
// 显示搜索结果（带分页）
function displaySearchResultsWithPagination(page) {
    const { results, keyword, resultsPerPage } = currentSearch;
    
    if (!results || results.length === 0) {
        readingContent.innerHTML = '<p class="search-no-result">未找到匹配内容</p>';
        return;
    }
    
    // 计算分页信息
    const totalResults = results.length;
    const totalPages = Math.ceil(totalResults / resultsPerPage);
    const startIndex = (page - 1) * resultsPerPage;
    const endIndex = Math.min(startIndex + resultsPerPage, totalResults);
    const currentResults = results.slice(startIndex, endIndex);
    
    // 更新当前页码
    currentSearch.currentPage = page;
    
    // 创建文档片段以减少DOM操作次数
    const fragment = document.createDocumentFragment();
    
    // 添加搜索结果统计
    const statsElement = document.createElement('div');
    statsElement.className = 'search-stats';
    statsElement.textContent = `找到 ${totalResults} 个匹配项 | 第 ${page} / ${totalPages} 页`;
    fragment.appendChild(statsElement);
    
    // 显示当前页的搜索结果
    currentResults.forEach((result, index) => {
        const actualIndex = startIndex + index;
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        // 结果标题，包含段落位置信息
        const resultTitle = document.createElement('div');
        resultTitle.className = 'search-result-title';
        resultTitle.textContent = `结果 ${actualIndex + 1}（第${result.paragraphIndex + 1}段）`;
        resultItem.appendChild(resultTitle);
        
        // 结果内容，高亮关键字
        const resultContent = document.createElement('div');
        resultContent.className = 'search-result-content';
        
        // 高亮关键字
        const highlightedText = result.fullText.replace(
            new RegExp(keyword, 'gi'),
            match => `<span class="search-highlight">${match}</span>`
        );
        resultContent.innerHTML = highlightedText;
        
        // 添加点击返回原文的按钮
        const backToTextBtn = document.createElement('button');
        backToTextBtn.className = 'back-to-text-btn';
        backToTextBtn.textContent = '查看原文';
        backToTextBtn.addEventListener('click', () => {
            scrollToAndHighlightResult(result);
        });
        
        resultItem.appendChild(resultContent);
        resultItem.appendChild(backToTextBtn);
        fragment.appendChild(resultItem);
    });
    
    // 添加分页控制
    const paginationElement = document.createElement('div');
    paginationElement.className = 'search-pagination';
    
    // 上一页按钮
    if (page > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'pagination-btn';
        prevBtn.textContent = '上一页';
        prevBtn.addEventListener('click', () => {
            displaySearchResultsWithPagination(page - 1);
        });
        paginationElement.appendChild(prevBtn);
    }
    
    // 页码按钮
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `pagination-btn ${i === page ? 'active' : ''}`;
        pageBtn.textContent = i;
        pageBtn.addEventListener('click', () => {
            displaySearchResultsWithPagination(i);
        });
        paginationElement.appendChild(pageBtn);
    }
    
    // 下一页按钮
    if (page < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'pagination-btn';
        nextBtn.textContent = '下一页';
        nextBtn.addEventListener('click', () => {
            displaySearchResultsWithPagination(page + 1);
        });
        paginationElement.appendChild(nextBtn);
    }
    
    fragment.appendChild(paginationElement);
    
    // 一次性添加所有内容到DOM
    readingContent.innerHTML = '';
    readingContent.appendChild(fragment);
}

// 滚动到并高亮显示搜索结果
function scrollToAndHighlightResult(result) {
    // 渲染原文
    renderNovelContent(currentNovelContent);
    
    // 滚动到找到的段落
    setTimeout(() => {
        const paragraphs = readingContent.querySelectorAll('p');
        if (paragraphs[result.paragraphIndex]) {
            // 平滑滚动到段落
            paragraphs[result.paragraphIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // 高亮显示找到的段落
            paragraphs[result.paragraphIndex].classList.add('search-highlight-paragraph');
            
            // 高亮段落中的关键字
            const paragraphText = paragraphs[result.paragraphIndex].textContent;
            const highlightedText = paragraphText.replace(
                new RegExp(currentSearch.keyword, 'gi'),
                match => `<span class="search-highlight">${match}</span>`
            );
            paragraphs[result.paragraphIndex].innerHTML = highlightedText;
            
            // 3秒后移除高亮
            setTimeout(() => {
                paragraphs[result.paragraphIndex].classList.remove('search-highlight-paragraph');
                // 恢复原始文本（移除高亮）
                paragraphs[result.paragraphIndex].textContent = paragraphText;
            }, 3000);
        }
    }, 100);
}

// 当前搜索状态
let currentSearch = {
    keyword: '',
    results: [],
    currentPage: 1,
    resultsPerPage: 5
};

// 执行搜索
function executeSearch(keyword) {
    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }
    
    if (!currentNovelContent) {
        alert('请先打开一本小说再进行搜索');
        return;
    }
    
    // 执行搜索
    const results = searchInNovel(keyword);
    
    // 更新搜索状态
    currentSearch = {
        keyword: keyword,
        results: results,
        currentPage: 1,
        resultsPerPage: 5
    };
    
    // 显示搜索结果（带分页）
    displaySearchResultsWithPagination(1);
}

// 添加性能优化的资源预加载
function preloadResources() {
    // 预加载logo图片
    const logoImg = new Image();
    logoImg.src = 're/logo.png';
    
    // 预加载小说文件（如果有多个小说）
    if (novels.length > 0) {
        // 仅预加载第一个小说作为示例
        const preloadLink = document.createElement('link');
        preloadLink.rel = 'prefetch';
        preloadLink.href = `re/${novels[0].filename}`;
        document.head.appendChild(preloadLink);
    }
}

// 添加页面可见性变化时的处理
function handleVisibilityChange() {
    if (document.visibilityState === 'visible') {
        // 页面变为可见时，可以刷新数据或进行其他操作
    }
}

// 初始化应用 - 添加更健壮的初始化逻辑
function initializeApp() {
    try {
        console.log('开始初始化应用...');
        init();
        
        // 添加事件监听器
        document.addEventListener('visibilitychange', handleVisibilityChange);
        
        // 页面完全加载后预加载资源
        window.addEventListener('load', preloadResources);
    } catch (error) {
        console.error('应用初始化出错:', error);
        // 即使初始化失败，也使用内置数据
        novels = builtInNovels;
        // 尝试获取DOM元素并渲染列表
        setTimeout(() => {
            novelListSection = document.getElementById('novel-list');
            novelGrid = document.querySelector('.novel-grid');
            if (novelGrid) {
                renderNovelList();
                console.log('已使用内置数据渲染小说列表');
            }
        }, 100);
    }
}

// 立即执行初始化，不依赖DOMContentLoaded（确保即使DOM加载有问题也能初始化）
if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeApp);
    } else {
        initializeApp();
    }
}

// 错误处理：防止图片加载失败影响用户体验
document.addEventListener('error', (e) => {
    if (e.target.tagName === 'IMG') {
        console.warn('图片加载失败:', e.target.src);
    }
}, true);

// 添加简单的错误边界
try {
    // 预加载资源
    preloadResources();
    
    // 初始化用户须知功能
    initializeTermsAndConditions();
} catch (error) {
    console.error('应用运行时错误:', error);
    document.body.innerHTML += '<div class="error-container">应用出现错误，请刷新页面重试</div>';
}

// 用户须知相关功能
function initializeTermsAndConditions() {
    // 检查用户是否已经接受过用户须知
    const hasAcceptedTerms = localStorage.getItem('hasAcceptedTerms');
    
    // 获取DOM元素
    const termsModal = document.getElementById('terms-modal');
    const termsConfirm = document.getElementById('terms-confirm');
    const showTermsBtn = document.getElementById('show-terms');
    const closeModalBtn = document.querySelector('.close-button');
    const acceptTermsBtn = document.getElementById('accept-terms');
    const readTermsBtn = document.getElementById('read-terms');
    const acceptWithoutReadingBtn = document.getElementById('accept-without-reading');
    
    // 如果用户还未接受，则显示确认对话框
    if (!hasAcceptedTerms && termsConfirm) {
        termsConfirm.style.display = 'flex';
    }
    
    // 显示用户须知模态窗口
    function showTermsModal() {
        if (termsModal) {
            termsModal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // 防止背景滚动
        }
    }
    
    // 隐藏用户须知模态窗口
    function hideTermsModal() {
        if (termsModal) {
            termsModal.style.display = 'none';
            document.body.style.overflow = ''; // 恢复背景滚动
        }
    }
    
    // 隐藏确认对话框
    function hideTermsConfirm() {
        if (termsConfirm) {
            termsConfirm.style.display = 'none';
        }
    }
    
    // 接受用户须知
    function acceptTerms() {
        // 保存到本地存储
        localStorage.setItem('hasAcceptedTerms', 'true');
        
        // 隐藏所有对话框
        hideTermsModal();
        hideTermsConfirm();
        
        console.log('用户已接受用户须知');
    }
    
    // 绑定事件监听器
    if (showTermsBtn) {
        showTermsBtn.addEventListener('click', showTermsModal);
    }
    
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', hideTermsModal);
    }
    
    if (acceptTermsBtn) {
        acceptTermsBtn.addEventListener('click', acceptTerms);
    }
    
    if (readTermsBtn) {
        readTermsBtn.addEventListener('click', function() {
            hideTermsConfirm();
            showTermsModal();
        });
    }
    
    if (acceptWithoutReadingBtn) {
        acceptWithoutReadingBtn.addEventListener('click', acceptTerms);
    }
    
    // 点击模态窗口外部关闭
    window.addEventListener('click', function(event) {
        if (event.target === termsModal) {
            hideTermsModal();
        }
    });
    
    // ESC键关闭模态窗口
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && termsModal && termsModal.style.display === 'block') {
            hideTermsModal();
        }
    });
}