import { defineConfig } from 'vitepress'

export default defineConfig({
    title: 'Daily Interview - 面试必看',
    description: '每一个面试者面试之前必看一遍的小面经',
    base: '/',
    ignoreDeadLinks: true,

    themeConfig: {
        // 导航栏
        nav: [
            { text: '首页', link: '/' },
            { text: '算法基础', link: '/01-algorithm-basics/' },
            { text: '编程语言', link: '/02-programming-languages/' },
            { text: '计算机基础', link: '/03-computer-basics/' },
            { text: 'AI算法', link: '/04-ai-algorithms/' },
            { text: '系统设计', link: '/05-system-design/' },
            { text: '开发技术', link: '/06-development-tech/' },
            { text: '项目经验', link: '/07-project-experience/' },
            { text: '行为面试', link: '/08-behavioral-interview/' },
            { text: '面试技巧', link: '/09-interview-tips/' }
        ],

        // 侧边栏配置 - 完整的层次结构
        sidebar: {
            '/01-algorithm-basics/': [
                {
                    text: '算法基础',
                    items: [
                        { text: '概述', link: '/01-algorithm-basics/' },
                        {
                            text: '数据结构',
                            collapsed: false,
                            items: [
                                { text: '数组与字符串', link: '/01-algorithm-basics/data-structures/arrays-and-strings' },
                                { text: '链表', link: '/01-algorithm-basics/data-structures/linked-lists' },
                                { text: '树与图', link: '/01-algorithm-basics/data-structures/trees-and-graphs' },
                                { text: 'String', link: '/01-algorithm-basics/data-structures/string' },
                                { text: 'Graph', link: '/01-algorithm-basics/data-structures/graph' }
                            ]
                        },
                        {
                            text: '算法思想',
                            collapsed: false,
                            items: [
                                { text: '排序算法', link: '/01-algorithm-basics/algorithm-concepts/sorting-algorithms' },
                                { text: '搜索算法', link: '/01-algorithm-basics/algorithm-concepts/search-algorithms' },
                                { text: '动态规划', link: '/01-algorithm-basics/algorithm-concepts/dynamic-programming' },
                                { text: '贪心算法', link: '/01-algorithm-basics/algorithm-concepts/greedy-algorithms' }
                            ]
                        }
                    ]
                }
            ],
            '/02-programming-languages/': [
                {
                    text: '编程语言',
                    items: [
                        { text: '概述', link: '/02-programming-languages/' },
                        {
                            text: 'Java',
                            collapsed: false,
                            items: [
                                { text: 'Java基础', link: '/02-programming-languages/Java/java-fundamentals' }
                            ]
                        },
                        {
                            text: 'JavaScript',
                            collapsed: false,
                            items: [
                                { text: 'JavaScript基础', link: '/02-programming-languages/JavaScript/javascript-fundamentals' },
                                { text: 'NodeJS', link: '/02-programming-languages/JavaScript/NodeJS' }
                            ]
                        }
                    ]
                }
            ],
            '/03-computer-basics/': [
                {
                    text: '计算机基础',
                    items: [
                        { text: '概述', link: '/03-computer-basics/' },
                        {
                            text: '操作系统',
                            collapsed: false,
                            items: [
                                { text: '进程与线程', link: '/03-computer-basics/operating-system/processes-and-threads' }
                            ]
                        },
                        {
                            text: '计算机网络',
                            collapsed: false,
                            items: [
                                { text: '网络协议', link: '/03-computer-basics/computer-network/network-protocols' },
                                { text: 'HTTP协议', link: '/03-computer-basics/computer-network/http-protocol' }
                            ]
                        },
                        {
                            text: '数据库',
                            collapsed: false,
                            items: [
                                { text: 'SQL基础', link: '/03-computer-basics/database/sql-fundamentals' }
                            ]
                        },
                        {
                            text: '数学基础',
                            collapsed: false,
                            items: [
                                { text: '概率统计', link: '/03-computer-basics/mathematics/probability-statistics' },
                                { text: '离散数学', link: '/03-computer-basics/mathematics/discrete-mathematics' }
                            ]
                        }
                    ]
                }
            ],
            '/04-ai-algorithms/': [
                {
                    text: 'AI算法',
                    items: [
                        { text: '概述', link: '/04-ai-algorithms/' },
                        {
                            text: '机器学习',
                            collapsed: false,
                            items: [
                                {
                                    text: '基础理论',
                                    collapsed: false,
                                    items: [
                                        { text: '机器学习基础', link: '/04-ai-algorithms/machine-learning/fundamentals/ml-fundamentals' },
                                        { text: '过拟合与欠拟合', link: '/04-ai-algorithms/machine-learning/fundamentals/overfitting-underfitting' },
                                        { text: '梯度下降', link: '/04-ai-algorithms/machine-learning/fundamentals/gradient-descent' },
                                        { text: 'HMM', link: '/04-ai-algorithms/machine-learning/fundamentals/HMM' },
                                        { text: 'CRF', link: '/04-ai-algorithms/machine-learning/fundamentals/CRF' },
                                        { text: 'Prophet', link: '/04-ai-algorithms/machine-learning/fundamentals/Prophet' }
                                    ]
                                },
                                {
                                    text: '监督学习',
                                    collapsed: false,
                                    items: [
                                        { text: '线性回归+逻辑回归', link: '/04-ai-algorithms/machine-learning/supervised-learning/linear-logistic-regression' },
                                        { text: '决策树', link: '/04-ai-algorithms/machine-learning/supervised-learning/DecisionTree' },
                                        { text: 'SVM', link: '/04-ai-algorithms/machine-learning/supervised-learning/SVM' },
                                        { text: '朴素贝叶斯', link: '/04-ai-algorithms/machine-learning/supervised-learning/NaiveBayes' },
                                        { text: 'kNN', link: '/04-ai-algorithms/machine-learning/supervised-learning/kNN' }
                                    ]
                                },
                                {
                                    text: '无监督学习',
                                    collapsed: false,
                                    items: [
                                        { text: 'K-means', link: '/04-ai-algorithms/machine-learning/unsupervised-learning/kmeans' }
                                    ]
                                },
                                {
                                    text: '集成学习',
                                    collapsed: false,
                                    items: [
                                        { text: '集成学习基础', link: '/04-ai-algorithms/machine-learning/ensemble-learning/EnsembleLearning' },
                                        { text: '随机森林', link: '/04-ai-algorithms/machine-learning/ensemble-learning/RandomForest' },
                                        { text: 'AdaBoost', link: '/04-ai-algorithms/machine-learning/ensemble-learning/Adaboost' },
                                        { text: 'XGBoost', link: '/04-ai-algorithms/machine-learning/ensemble-learning/XGBoost' },
                                        { text: 'LightGBM', link: '/04-ai-algorithms/machine-learning/ensemble-learning/LightGBM' },
                                        { text: 'CatBoost', link: '/04-ai-algorithms/machine-learning/ensemble-learning/Catboost' },
                                        { text: 'Tree Embedding', link: '/04-ai-algorithms/machine-learning/ensemble-learning/TreeEmbedding' }
                                    ]
                                },
                                {
                                    text: '模型评估',
                                    collapsed: false,
                                    items: [
                                        { text: '评估指标', link: '/04-ai-algorithms/machine-learning/model-evaluation/metrics' },
                                        { text: 'A/B测试', link: '/04-ai-algorithms/machine-learning/model-evaluation/ABTest' }
                                    ]
                                }
                            ]
                        },
                        {
                            text: '计算机视觉',
                            collapsed: false,
                            items: [
                                { text: 'CV基础', link: '/04-ai-algorithms/computer-vision/cv-fundamentals' },
                                { text: '目标检测', link: '/04-ai-algorithms/computer-vision/object-detection' }
                            ]
                        },
                        {
                            text: '自然语言处理',
                            collapsed: false,
                            items: [
                                { text: '文本表征方式', link: '/04-ai-algorithms/nlp/text-representation' },
                                { text: '深度学习模型', link: '/04-ai-algorithms/nlp/deep-learning-models' }
                            ]
                        },
                        {
                            text: '推荐系统',
                            collapsed: false,
                            items: [
                                { text: '协同过滤', link: '/04-ai-algorithms/recommendation/collaborative_filtering' },
                                { text: 'DeepFM', link: '/04-ai-algorithms/recommendation/deepfm' },
                                { text: 'GBDT+LR', link: '/04-ai-algorithms/recommendation/gbdt_lr' }
                            ]
                        },
                        {
                            text: '大语言模型',
                            collapsed: false,
                            items: [
                                { text: 'LLM面试题', link: '/04-ai-algorithms/llm/llm-interview-questions' }
                            ]
                        }
                    ]
                }
            ],
            '/05-system-design/': [
                {
                    text: '系统设计',
                    items: [
                        { text: '概述', link: '/05-system-design/' }
                    ]
                }
            ],
            '/06-development-tech/': [
                {
                    text: '开发技术',
                    items: [
                        { text: '概述', link: '/06-development-tech/' },
                        {
                            text: '前端开发',
                            collapsed: false,
                            items: [
                                { text: 'HTML & CSS', link: '/06-development-tech/frontend/HTML_CSS' },
                                { text: 'CSS进阶', link: '/06-development-tech/frontend/css-advanced' },
                                { text: '前端框架', link: '/06-development-tech/frontend/frontend-frameworks' }
                            ]
                        },
                        {
                            text: '大数据',
                            collapsed: false,
                            items: [
                                { text: 'Hadoop生态', link: '/06-development-tech/big-data/hadoop-ecosystem' },
                                { text: 'MapReduce', link: '/06-development-tech/big-data/mapreduce' },
                                { text: '大数据面试题', link: '/06-development-tech/big-data/big-data-interview' },
                                { text: '大数据概述', link: '/06-development-tech/big-data/' }
                            ]
                        }
                    ]
                }
            ],
            '/07-project-experience/': [
                {
                    text: '项目经验',
                    items: [
                        { text: '概述', link: '/07-project-experience/' }
                    ]
                }
            ],
            '/08-behavioral-interview/': [
                {
                    text: '行为面试',
                    items: [
                        { text: '概述', link: '/08-behavioral-interview/' }
                    ]
                }
            ],
            '/09-interview-tips/': [
                {
                    text: '面试技巧',
                    items: [
                        { text: '概述', link: '/09-interview-tips/' },
                        { text: '模拟面试', link: '/09-interview-tips/mock-interview' }
                    ]
                }
            ]
        },

        // 搜索配置
        search: {
            provider: 'local'
        },

        // 编辑链接
        editLink: {
            pattern: 'https://github.com/datawhalechina/daily-interview/edit/master/docs/:path',
            text: '在 GitHub 上编辑此页'
        },

        // 社交链接
        socialLinks: [
            { icon: 'github', link: 'https://github.com/datawhalechina/daily-interview' }
        ],

        // 大纲配置
        outline: {
            level: [2, 3],
            label: '页面导航'
        }
    },

    // Markdown配置
    markdown: {
        theme: {
            light: 'github-light',
            dark: 'github-dark'
        },
        lineNumbers: true,
        math: true,
        languages: [
            'javascript',
            'typescript',
            'python',
            'java',
            'c',
            'cpp',
            'sql',
            'bash',
            'shell',
            'json',
            'yaml',
            'xml',
            'html',
            'css',
            'markdown'
        ],
        // 语言别名映射
        languageAlias: {
            'int': 'c',
            'mysql': 'sql'
        }
    },

    // Vite配置 - 使用VitePress默认设置
    vite: {
        server: {
            fs: {
                allow: ['..']
            }
        }
    }
})