import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { backToTopPlugin } from '@vuepress/plugin-back-to-top'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { nprogressPlugin } from '@vuepress/plugin-nprogress'

export default defineUserConfig({
  title: 'Daily Interview - 面试必看',
  description: '每一个面试者面试之前必看一遍的小面经',
  base: process.env.NODE_ENV === 'production' ? '/daily-interview/' : '/',
  dest: 'dist',

  bundler: viteBundler(),

  theme: defaultTheme({
    navbar: [
      { text: '首页', link: '/' },
      { text: '算法基础', link: '/01-algorithm-basics/' },
      { text: '编程语言', link: '/02-programming-languages/' },
      { text: '计算机基础', link: '/03-computer-basics/' },
      { text: 'AI算法', link: '/04-ai-algorithms/' },
      { text: '系统设计', link: '/05-system-design/' },
      { text: '开发技术', link: '/06-development-tech/' },
      { text: '项目经验', link: '/07-project-experience/' },
      { text: '面试技巧', link: '/09-interview-tips/' }
    ],

    sidebar: {
      '/01-algorithm-basics/': [
        {
          text: '算法基础',
          children: [
            '/01-algorithm-basics/README.md',
            {
              text: '数据结构',
              children: [
                '/01-algorithm-basics/data-structures/arrays-and-strings.md',
                '/01-algorithm-basics/data-structures/linked-lists.md',
                '/01-algorithm-basics/data-structures/trees-and-graphs.md',
                '/01-algorithm-basics/data-structures/string.md',
                '/01-algorithm-basics/data-structures/graph.md'
              ]
            },
            {
              text: '算法思想',
              children: [
                '/01-algorithm-basics/algorithm-concepts/sorting-algorithms.md',
                '/01-algorithm-basics/algorithm-concepts/search-algorithms.md',
                '/01-algorithm-basics/algorithm-concepts/dynamic-programming.md',
                '/01-algorithm-basics/algorithm-concepts/greedy-algorithms.md'
              ]
            }
          ]
        }
      ],
      '/02-programming-languages/': [
        {
          text: '编程语言',
          children: [
            '/02-programming-languages/README.md',
            {
              text: 'Java',
              children: [
                '/02-programming-languages/Java/java-fundamentals.md'
              ]
            },
            {
              text: 'JavaScript',
              children: [
                '/02-programming-languages/JavaScript/javascript-fundamentals.md',
                '/02-programming-languages/JavaScript/NodeJS.md'
              ]
            }
          ]
        }
      ],
      '/03-computer-basics/': [
        {
          text: '计算机基础',
          children: [
            '/03-computer-basics/README.md',
            {
              text: '操作系统',
              children: [
                '/03-computer-basics/operating-system/processes-and-threads.md'
              ]
            },
            {
              text: '计算机网络',
              children: [
                '/03-computer-basics/computer-network/network-protocols.md',
                '/03-computer-basics/computer-network/http-protocol.md'
              ]
            },
            {
              text: '数据库',
              children: [
                '/03-computer-basics/database/sql-fundamentals.md'
              ]
            },
            {
              text: '数学基础',
              children: [
                '/03-computer-basics/mathematics/probability-statistics.md',
                '/03-computer-basics/mathematics/discrete-mathematics.md'
              ]
            }
          ]
        }
      ],
      '/04-ai-algorithms/': [
        {
          text: 'AI算法',
          children: [
            '/04-ai-algorithms/README.md',
            {
              text: '机器学习',
              children: [
                {
                  text: '基础理论',
                  children: [
                    '/04-ai-algorithms/machine-learning/fundamentals/ml-fundamentals.md',
                    '/04-ai-algorithms/machine-learning/fundamentals/overfitting-underfitting.md',
                    '/04-ai-algorithms/machine-learning/fundamentals/gradient-descent.md',
                    '/04-ai-algorithms/machine-learning/fundamentals/HMM.md',
                    '/04-ai-algorithms/machine-learning/fundamentals/CRF.md',
                    '/04-ai-algorithms/machine-learning/fundamentals/Prophet.md'
                  ]
                },
                {
                  text: '监督学习',
                  children: [
                    '/04-ai-algorithms/machine-learning/supervised-learning/linear-logistic-regression.md',
                    '/04-ai-algorithms/machine-learning/supervised-learning/DecisionTree.md',
                    '/04-ai-algorithms/machine-learning/supervised-learning/SVM.md',
                    '/04-ai-algorithms/machine-learning/supervised-learning/NaiveBayes.md',
                    '/04-ai-algorithms/machine-learning/supervised-learning/kNN.md'
                  ]
                },
                {
                  text: '无监督学习',
                  children: [
                    '/04-ai-algorithms/machine-learning/unsupervised-learning/kmeans.md'
                  ]
                },
                {
                  text: '集成学习',
                  children: [
                    '/04-ai-algorithms/machine-learning/ensemble-learning/EnsembleLearning.md',
                    '/04-ai-algorithms/machine-learning/ensemble-learning/RandomForest.md',
                    '/04-ai-algorithms/machine-learning/ensemble-learning/Adaboost.md',
                    '/04-ai-algorithms/machine-learning/ensemble-learning/XGBoost.md',
                    '/04-ai-algorithms/machine-learning/ensemble-learning/LightGBM.md',
                    '/04-ai-algorithms/machine-learning/ensemble-learning/Catboost.md',
                    '/04-ai-algorithms/machine-learning/ensemble-learning/TreeEmbedding.md'
                  ]
                },
                {
                  text: '模型评估',
                  children: [
                    '/04-ai-algorithms/machine-learning/model-evaluation/metrics.md',
                    '/04-ai-algorithms/machine-learning/model-evaluation/ABTest.md'
                  ]
                }
              ]
            },
            {
              text: '计算机视觉',
              children: [
                '/04-ai-algorithms/computer-vision/cv-fundamentals.md',
                '/04-ai-algorithms/computer-vision/object-detection.md'
              ]
            },
            {
              text: '自然语言处理',
              children: [
                '/04-ai-algorithms/nlp/text-representation.md',
                '/04-ai-algorithms/nlp/deep-learning-models.md'
              ]
            },
            {
              text: '推荐系统',
              children: [
                '/04-ai-algorithms/recommendation/collaborative_filtering.md',
                '/04-ai-algorithms/recommendation/deepfm.md',
                '/04-ai-algorithms/recommendation/gbdt_lr.md'
              ]
            },
            {
              text: '大语言模型',
              children: [
                '/04-ai-algorithms/llm/llm-interview-questions.md'
              ]
            }
          ]
        }
      ],
      '/05-system-design/': [
        {
          text: '系统设计',
          children: [
            '/05-system-design/README.md'
          ]
        }
      ],
      '/06-development-tech/': [
        {
          text: '开发技术',
          children: [
            '/06-development-tech/README.md',
            {
              text: '前端开发',
              children: [
                '/06-development-tech/frontend/HTML_CSS.md',
                '/06-development-tech/frontend/css-advanced.md',
                '/06-development-tech/frontend/frontend-frameworks.md'
              ]
            },
            {
              text: '大数据',
              children: [
                '/06-development-tech/big-data/hadoop-ecosystem.md',
                '/06-development-tech/big-data/mapreduce.md',
                '/06-development-tech/big-data/big-data-interview.md',
                '/06-development-tech/big-data/README.md'
              ]
            }
          ]
        }
      ],
      '/07-project-experience/': [
        {
          text: '项目经验',
          children: [
            '/07-project-experience/README.md'
          ]
        }
      ],
      '/08-behavioral-interview/': [
        {
          text: '行为面试',
          children: [
            '/08-behavioral-interview/README.md'
          ]
        }
      ],
      '/09-interview-tips/': [
        {
          text: '面试技巧',
          children: [
            '/09-interview-tips/README.md',
            '/09-interview-tips/mock-interview.md'
          ]
        }
      ]
    },

    lastUpdated: '最后更新',
    repo: 'datawhalechina/daily-interview',
    repoLabel: 'GitHub',
    docsDir: 'docs',
    docsBranch: 'master',
    editLink: true,
    editLinkText: '在 GitHub 上编辑此页',

    // 启用页面导航
    prev: true,
    next: true,

    // 启用贡献者信息
    contributors: true
  }),

  plugins: [
    searchPlugin({
      maxSuggestions: 10
    }),
    backToTopPlugin(),
    mediumZoomPlugin(),
    nprogressPlugin()
  ]
})
