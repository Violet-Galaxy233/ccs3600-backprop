import type { LectureSection } from "./types";

/**
 * The enhanced 22-slide deck rebuilt as native content.
 * `en` is the source of truth; `zh` is the Phase-1 reviewed translation;
 * `ms` falls back to `en` per-field (see lib/i18n-content.pickLang) and is
 * signposted by the in-product translation banner until the Phase-2 pass.
 */
export const lecture: LectureSection[] = [
  {
    id: "introduction",
    part: "foundations",
    slideRef: 1,
    title: {
      en: "Backpropagation in Neural Networks",
      zh: "神经网络中的反向传播",
      ms: "Perambatan Balik dalam Rangkaian Neural",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "Backpropagation is the engine of modern deep learning. It is the algorithm that allows a neural network to learn from its mistakes by efficiently distributing the output error back through every layer and adjusting the weights accordingly. This lecture builds the idea from feed-forward networks up to real-world applications.",
          zh: "反向传播是现代深度学习的引擎。它是一种让神经网络能够从错误中学习的算法——把输出误差高效地沿着每一层向后分配，并据此调整权重。本讲从前馈网络出发，一直讲到真实世界的应用。",
        },
      },
      {
        type: "callout",
        variant: "note",
        text: {
          en: "CCS3600 Artificial Intelligence — Enhanced Teaching Materials. Original lecture by Maslina @ SSK5603.",
          zh: "CCS3600 人工智能 —— 增强版教学材料。原始讲义由 Maslina @ SSK5603 提供。",
        },
      },
    ],
  },
  {
    id: "learning-objectives",
    part: "foundations",
    slideRef: 2,
    title: {
      en: "What You Will Learn",
      zh: "你将学到什么",
      ms: "Apa Yang Anda Akan Pelajari",
    },
    body: [
      {
        type: "list",
        items: [
          {
            en: "Fundamentals — feed-forward neural network architecture and how information flows.",
            zh: "基础——前馈神经网络的架构以及信息如何流动。",
          },
          {
            en: "Algorithm — the mathematics of backpropagation: loss functions, the chain rule, and gradient computation.",
            zh: "算法——反向传播的数学：损失函数、链式法则与梯度计算。",
          },
          {
            en: "Applications — pattern recognition, face recognition with CNNs, and speech recognition.",
            zh: "应用——模式识别、基于 CNN 的人脸识别以及语音识别。",
          },
          {
            en: "Evaluation — the history, advantages, and limitations of backpropagation in modern AI.",
            zh: "评估——反向传播在现代 AI 中的历史、优点与局限。",
          },
        ],
      },
    ],
  },
  {
    id: "what-is-backpropagation",
    part: "foundations",
    slideRef: 3,
    title: {
      en: "What is Backpropagation?",
      zh: "什么是反向传播？",
      ms: "Apakah Perambatan Balik?",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: '"Backpropagation" is short for backward propagation of errors. After a forward pass produces an output, the error is propagated backward through the network to fine-tune the weights based on the error rate of the previous iteration.',
          zh: "“反向传播”是 backward propagation of errors（误差的反向传播）的简称。在前向传播产生输出后，误差会沿网络向后传播，根据上一轮迭代的误差率来微调权重。",
        },
      },
      {
        type: "list",
        items: [
          {
            en: "Fine-tunes weights to reduce prediction error.",
            zh: "微调权重以减小预测误差。",
          },
          {
            en: "Computes the gradient needed for learning.",
            zh: "计算学习所需的梯度。",
          },
          {
            en: "Is the foundation of supervised learning in deep networks.",
            zh: "是深度网络中监督学习的基础。",
          },
          { en: "Updates each weight individually.", zh: "单独更新每个权重。" },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Backpropagation proceeds backwards through the network, from the last layer to the first.",
          zh: "反向传播在网络中反向进行，从最后一层到第一层。",
        },
      },
    ],
  },
  {
    id: "feed-forward-networks",
    part: "foundations",
    slideRef: 4,
    title: {
      en: "Feed-Forward Neural Networks",
      zh: "前馈神经网络",
      ms: "Rangkaian Neural Suap Hadapan",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "A feed-forward network is the foundational architecture: connections between nodes do not form a cycle, so information flows in only one direction. The simplest form is the single-layer perceptron.",
          zh: "前馈网络是最基础的架构：节点之间的连接不构成环路，因此信息只沿一个方向流动。最简单的形式是单层感知机。",
        },
      },
      {
        type: "compare",
        leftTitle: { en: "Feed-Forward", zh: "前馈" },
        rightTitle: { en: "Recurrent", zh: "循环" },
        left: [
          { en: "Directed acyclic graph", zh: "有向无环图" },
          { en: "One-way data flow", zh: "单向数据流" },
          { en: "No cycles", zh: "无环路" },
        ],
        right: [
          {
            en: "Contains cycles / feedback loops",
            zh: "含有环路 / 反馈回路",
          },
          {
            en: "Sequential / time-series data",
            zh: "序列 / 时间序列数据",
          },
          { en: "State carried across steps", zh: "状态在各步之间传递" },
        ],
      },
    ],
  },
  {
    id: "single-layer-perceptron",
    part: "foundations",
    slideRef: 5,
    title: {
      en: "How Feed-Forward Networks Work",
      zh: "前馈网络如何工作",
      ms: "Cara Rangkaian Suap Hadapan Berfungsi",
    },
    body: [
      {
        type: "steps",
        steps: [
          {
            en: "Inputs (x₁, x₂, x₃) are multiplied by their weights (w₁, w₂, w₃).",
            zh: "输入 (x₁, x₂, x₃) 与各自的权重 (w₁, w₂, w₃) 相乘。",
          },
          {
            en: "The weighted values are summed.",
            zh: "将加权后的值求和。",
          },
          {
            en: "An activation function f(x) is applied to the sum.",
            zh: "对求和结果应用激活函数 f(x)。",
          },
          {
            en: "The result is compared to a threshold to produce the output y (often 1 if above, −1 if below).",
            zh: "将结果与阈值比较以产生输出 y（通常高于阈值为 1，低于为 −1）。",
          },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "The delta rule adjusts the weights based on the output error. Extended to multiple layers, the error is propagated backward through every hidden layer — this is backpropagation.",
          zh: "δ 规则根据输出误差调整权重。扩展到多层后，误差会沿每个隐藏层向后传播——这就是反向传播。",
        },
      },
    ],
  },
  {
    id: "parallel-processing",
    part: "foundations",
    slideRef: 6,
    title: {
      en: "Applications of Feed-Forward Networks",
      zh: "前馈网络的应用",
      ms: "Aplikasi Rangkaian Suap Hadapan",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "Multiple independent networks can work in parallel with mild intermediary coordination — much like the human brain. Each network handles a sub-task independently, and the results are combined at the end.",
          zh: "多个独立的网络可以在轻度中间协调下并行工作——很像人脑。每个网络独立处理一个子任务，最后再把结果汇总。",
        },
      },
    ],
  },
  {
    id: "types-of-backpropagation",
    part: "theory",
    slideRef: 7,
    title: {
      en: "Types of Backpropagation Networks",
      zh: "反向传播网络的类型",
      ms: "Jenis Rangkaian Perambatan Balik",
    },
    body: [
      {
        type: "list",
        items: [
          {
            en: "Static backpropagation — maps a static input to a static output; used for OCR and classification.",
            zh: "静态反向传播——将静态输入映射到静态输出；用于 OCR 和分类。",
          },
          {
            en: "Recurrent backpropagation — processes input until a fixed value is reached; for sequence-dependent tasks.",
            zh: "循环反向传播——持续处理输入直到达到固定值；用于依赖序列的任务。",
          },
          {
            en: "Backpropagation Through Time (BPTT) — unrolls a recurrent network into feed-forward form to handle time-series data.",
            zh: "随时间反向传播（BPTT）——将循环网络展开成前馈形式，以处理时间序列数据。",
          },
        ],
      },
    ],
  },
  {
    id: "backpropagation-formula",
    part: "theory",
    slideRef: 8,
    title: {
      en: "Backpropagation Formula",
      zh: "反向传播公式",
      ms: "Formula Perambatan Balik",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "Each layer's output is a function of the previous layer's output, the weights, and a bias:",
          zh: "每一层的输出都是上一层输出、权重和偏置的函数：",
        },
      },
      { type: "math", tex: "h_1 = f_1(W_1 \\cdot x + b_1)" },
      { type: "math", tex: "h_2 = f_2(W_2 \\cdot h_1 + b_2)" },
      { type: "math", tex: "h_N = f_N(W_N \\cdot h_{N-1} + b_N)" },
      {
        type: "list",
        items: [
          { en: "hᵢ — output of layer i", zh: "hᵢ —— 第 i 层的输出" },
          {
            en: "fᵢ — activation function (sigmoid, ReLU, tanh, …)",
            zh: "fᵢ —— 激活函数（sigmoid、ReLU、tanh……）",
          },
          {
            en: "Wᵢ — weight matrix of layer i",
            zh: "Wᵢ —— 第 i 层的权重矩阵",
          },
          {
            en: "x — input vector · N — number of layers · bᵢ — bias",
            zh: "x —— 输入向量 · N —— 层数 · bᵢ —— 偏置",
          },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "This chained function composition is exactly what makes the chain rule applicable for efficient gradient computation.",
          zh: "正是这种链式的函数复合，使得链式法则可用于高效地计算梯度。",
        },
      },
    ],
  },
  {
    id: "loss-function",
    part: "theory",
    slideRef: 9,
    title: {
      en: "Loss Function for Backpropagation",
      zh: "反向传播的损失函数",
      ms: "Fungsi Kerugian untuk Perambatan Balik",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "After forward propagation produces an output, a loss function C measures the distance between the prediction and the true label. A low C means a good prediction; a high C means a poor one. Training drives C down over iterations.",
          zh: "前向传播产生输出后，损失函数 C 衡量预测值与真实标签之间的差距。C 低表示预测好，C 高表示预测差。训练会在多轮迭代中不断降低 C。",
        },
      },
      {
        type: "list",
        items: [
          { en: "Cross-entropy loss", zh: "交叉熵损失" },
          { en: "Cosine similarity", zh: "余弦相似度" },
          { en: "Hinge loss", zh: "合页损失（hinge loss）" },
          { en: "Mean squared error", zh: "均方误差" },
        ],
      },
    ],
  },
  {
    id: "loss-gradient",
    part: "theory",
    slideRef: 10,
    title: {
      en: "Computing the Loss Gradient",
      zh: "计算损失梯度",
      ms: "Mengira Kecerunan Kerugian",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "The task is to compute the derivative of the loss with respect to every weight:",
          zh: "任务是计算损失关于每一个权重的导数：",
        },
      },
      {
        type: "math",
        tex: "\\dfrac{\\partial C}{\\partial w_{i,j,k}}",
      },
      {
        type: "paragraph",
        text: {
          en: "Here w₍ᵢ,ⱼ,ₖ₎ is the weight from node j in layer (i−1) to node k in layer i. Each weight is then updated individually to reduce C.",
          zh: "这里 w₍ᵢ,ⱼ,ₖ₎ 是从第 (i−1) 层的节点 j 到第 i 层的节点 k 的权重。随后每个权重被单独更新以减小 C。",
        },
      },
    ],
  },
  {
    id: "chain-rule",
    part: "theory",
    slideRef: 11,
    title: {
      en: "Chain Rule for Gradient Calculation",
      zh: "用于梯度计算的链式法则",
      ms: "Petua Rantai untuk Pengiraan Kecerunan",
    },
    body: [
      {
        type: "math",
        tex: "\\dfrac{dz}{dx} = \\dfrac{dz}{dy} \\cdot \\dfrac{dy}{dx}",
      },
      {
        type: "paragraph",
        text: {
          en: "Because C depends on the weights through a chain of nested functions, the chain rule is applied recursively. Derivatives at layer N are computed first and reused for layer N−1, then N−2, and so on back to layer 1.",
          zh: "由于 C 通过一连串嵌套函数依赖于权重，需要递归地应用链式法则。先计算第 N 层的导数并复用于第 N−1 层，再到 N−2 层，依此类推一直回到第 1 层。",
        },
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Each layer's derivatives become the ingredients for the previous layer's — this reuse is the engine of efficiency.",
          zh: "每一层的导数都成为前一层导数的“原料”——这种复用正是高效的关键。",
        },
      },
    ],
  },
  {
    id: "algorithm-steps",
    part: "theory",
    slideRef: 12,
    title: {
      en: "How the Backpropagation Algorithm Works",
      zh: "反向传播算法如何运作",
      ms: "Cara Algoritma Perambatan Balik Berfungsi",
    },
    body: [
      {
        type: "steps",
        steps: [
          {
            en: "Inputs X arrive through the pre-connected path.",
            zh: "输入 X 通过预先连接好的路径到达。",
          },
          {
            en: "The input is modeled using randomly selected weights W.",
            zh: "用随机选取的权重 W 对输入建模。",
          },
          {
            en: "Calculate the output for every neuron, layer by layer.",
            zh: "逐层计算每个神经元的输出。",
          },
          {
            en: "Calculate the error at the outputs: Error = Actual Output − Desired Output.",
            zh: "计算输出端的误差：误差 = 实际输出 − 期望输出。",
          },
          {
            en: "Travel back and adjust the weights to decrease the error.",
            zh: "向后回溯并调整权重以减小误差。",
          },
          {
            en: "Repeat until the desired output is achieved.",
            zh: "重复直到达到期望输出。",
          },
        ],
      },
      {
        type: "callout",
        variant: "note",
        text: {
          en: "Backpropagation computes the gradient via the chain rule one layer at a time, and generalizes the delta rule.",
          zh: "反向传播通过链式法则逐层计算梯度，是 δ 规则的推广。",
        },
      },
    ],
  },
  {
    id: "bp-vs-bptt",
    part: "theory",
    slideRef: 13,
    title: {
      en: "Standard BP vs Backpropagation Through Time",
      zh: "标准 BP 与随时间反向传播",
      ms: "BP Standard lwn Perambatan Balik Merentas Masa",
    },
    body: [
      {
        type: "compare",
        leftTitle: { en: "Standard Backpropagation", zh: "标准反向传播" },
        rightTitle: { en: "BPTT", zh: "BPTT" },
        left: [
          { en: "Feed-forward networks (DAG)", zh: "前馈网络（有向无环图）" },
          { en: "Chain rule through layers", zh: "沿各层应用链式法则" },
          { en: "Static input → output", zh: "静态输入 → 输出" },
        ],
        right: [
          { en: "Unrolls RNNs across time steps", zh: "沿时间步展开 RNN" },
          {
            en: "Treated as feed-forward for training",
            zh: "训练时当作前馈网络处理",
          },
          { en: "Handles sequential data", zh: "处理序列数据" },
        ],
      },
      {
        type: "list",
        items: [
          {
            en: "Large unrolled networks become difficult to train.",
            zh: "展开后的大型网络变得难以训练。",
          },
          {
            en: "Easily trapped in local optima.",
            zh: "容易陷入局部最优。",
          },
          {
            en: "Vanishing gradient problem — distant interactions produce diminishingly small gradients.",
            zh: "梯度消失问题——相隔较远的相互作用产生越来越小的梯度。",
          },
          {
            en: "Mitigations: ReLU activation, regularization, LSTM/GRU.",
            zh: "缓解方法：ReLU 激活、正则化、LSTM/GRU。",
          },
        ],
      },
    ],
  },
  {
    id: "why-backpropagation",
    part: "theory",
    slideRef: 14,
    title: {
      en: "Why We Need Backpropagation",
      zh: "为什么我们需要反向传播",
      ms: "Mengapa Kita Memerlukan Perambatan Balik",
    },
    body: [
      {
        type: "list",
        items: [
          {
            en: "Simplifies structure — removes least-effective weighted links.",
            zh: "简化结构——移除最不起作用的加权连接。",
          },
          {
            en: "Reveals relationships between inputs and hidden layers.",
            zh: "揭示输入与隐藏层之间的关系。",
          },
          {
            en: "Assesses the impact of input variables on the output.",
            zh: "评估输入变量对输出的影响。",
          },
          {
            en: "Essential for deep networks in error-prone projects.",
            zh: "对易出错项目中的深度网络至关重要。",
          },
          {
            en: "Mathematically elegant — leverages the chain and power rules.",
            zh: "数学上优雅——利用链式法则与幂法则。",
          },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Without backpropagation, training deep networks would be computationally infeasible.",
          zh: "没有反向传播，训练深度网络在计算上将不可行。",
        },
      },
    ],
  },
  {
    id: "applications-intro",
    part: "applications",
    slideRef: 15,
    title: {
      en: "Part III — Real-World Applications",
      zh: "第三部分 —— 实际应用",
      ms: "Bahagian III — Aplikasi Dunia Sebenar",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "How the same algorithm adapts to pattern recognition, face recognition, and speech recognition.",
          zh: "同一个算法如何适配到模式识别、人脸识别和语音识别。",
        },
      },
    ],
  },
  {
    id: "pattern-recognition",
    part: "applications",
    slideRef: 16,
    title: {
      en: "Pattern Recognition",
      zh: "模式识别",
      ms: "Pengecaman Corak",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "Pattern recognition is the identification of a set of objects or phenomena that share common traits — from microorganisms (paramecium, amoeba, euglena) to star constellations. Humans are prone to pareidolia (seeing shapes in clouds or noise).",
          zh: "模式识别是对一组具有共同特征的物体或现象的辨识——从微生物（草履虫、变形虫、眼虫）到星座。人类容易出现空想性错视（在云朵或噪声中看到形状）。",
        },
      },
      {
        type: "list",
        items: [
          {
            en: "Automated, consistent, and objective",
            zh: "自动化、一致、客观",
          },
          { en: "Scalable and real-time", zh: "可扩展且实时" },
          {
            en: "Learns discriminating features automatically",
            zh: "自动学习有判别力的特征",
          },
        ],
      },
    ],
  },
  {
    id: "face-recognition",
    part: "applications",
    slideRef: 17,
    title: {
      en: "Backpropagation in Face Recognition",
      zh: "人脸识别中的反向传播",
      ms: "Perambatan Balik dalam Pengecaman Wajah",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "The VGGFace CNN (Parkhi, Vidaldi & Zisserman, 2015) has 18 layers, 2,622 identity classes, and was trained on 2.6M face images. A final refinement stage uses a triplet loss:",
          zh: "VGGFace CNN（Parkhi, Vidaldi & Zisserman, 2015）有 18 层、2,622 个身份类别，并在 260 万张人脸图像上训练。最后的精修阶段使用三元组损失：",
        },
      },
      {
        type: "math",
        tex: "L = \\max\\big(d(a,p) - d(a,n) + \\text{margin},\\; 0\\big)",
      },
      {
        type: "steps",
        steps: [
          {
            en: "Forward pass through the CNN to compute face embeddings.",
            zh: "通过 CNN 进行前向传播以计算人脸嵌入。",
          },
          {
            en: "Compute the triplet loss, penalizing misclassifications.",
            zh: "计算三元组损失，对错误分类进行惩罚。",
          },
          {
            en: "Backpropagate gradients and update all 18 layers' weights.",
            zh: "反向传播梯度并更新全部 18 层的权重。",
          },
          { en: "Repeat until convergence.", zh: "重复直到收敛。" },
        ],
      },
      {
        type: "reference",
        cite: "Parkhi, Vidaldi & Zisserman (2015), VGGFace.",
      },
    ],
  },
  {
    id: "speech-recognition",
    part: "applications",
    slideRef: 18,
    title: {
      en: "Backpropagation for Speech Recognition",
      zh: "语音识别中的反向传播",
      ms: "Perambatan Balik untuk Pengecaman Pertuturan",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "Sony's system recognizes English and Japanese on embedded devices. Raw audio is windowed, transformed with an FFT, and frequency features feed a 5-layer deep network trained with a softmax cross-entropy loss:",
          zh: "索尼（Sony）的系统在嵌入式设备上识别英语和日语。原始音频经加窗后做快速傅里叶变换，频率特征输入到一个用 softmax 交叉熵损失训练的 5 层深度网络：",
        },
      },
      {
        type: "math",
        tex: "\\text{Loss} = -\\sum y \\, \\log(\\hat{y})",
      },
      {
        type: "paragraph",
        text: {
          en: "The network is trained on Japanese first and then transferred to English — a textbook example of transfer learning. Backpropagation adjusts all 5 layers' weights via the gradient of the cross-entropy loss.",
          zh: "该网络先用日语训练，再迁移到英语——这是迁移学习的典型示例。反向传播通过交叉熵损失的梯度调整全部 5 层的权重。",
        },
      },
    ],
  },
  {
    id: "history",
    part: "evaluation",
    slideRef: 19,
    title: {
      en: "History of Backpropagation",
      zh: "反向传播的历史",
      ms: "Sejarah Perambatan Balik",
    },
    body: [
      {
        type: "list",
        items: [
          {
            en: "1847 — Cauchy invents gradient descent.",
            zh: "1847 年——Cauchy 发明梯度下降。",
          },
          {
            en: "1960s — early automatic differentiation.",
            zh: "1960 年代——早期的自动微分。",
          },
          {
            en: "1970 — Linnainmaa: reverse-mode automatic differentiation.",
            zh: "1970 年——Linnainmaa：反向模式自动微分。",
          },
          {
            en: "1986 — Rumelhart, Hinton & Williams popularize backpropagation for neural networks.",
            zh: "1986 年——Rumelhart、Hinton 和 Williams 将反向传播用于神经网络并使其流行。",
          },
          {
            en: "2000s+ — the deep learning revolution, powered by backpropagation.",
            zh: "2000 年代至今——由反向传播驱动的深度学习革命。",
          },
        ],
      },
      {
        type: "callout",
        variant: "note",
        text: {
          en: "Over 170 years of mathematical foundations.",
          zh: "超过 170 年的数学积淀。",
        },
      },
    ],
  },
  {
    id: "best-practices",
    part: "evaluation",
    slideRef: 20,
    title: {
      en: "Key Points & Best Practices",
      zh: "要点与最佳实践",
      ms: "Perkara Utama & Amalan Terbaik",
    },
    body: [
      {
        type: "list",
        items: [
          {
            en: "Simplify network structure — remove least-effective links.",
            zh: "简化网络结构——移除最不起作用的连接。",
          },
          {
            en: "Study layer relationships — examine input / activation values.",
            zh: "研究各层关系——检查输入 / 激活值。",
          },
          {
            en: "Assess input-variable impact on the output.",
            zh: "评估输入变量对输出的影响。",
          },
          {
            en: "Especially useful for image, speech, and NLP deep networks.",
            zh: "对图像、语音和 NLP 深度网络尤其有用。",
          },
          {
            en: 'The "shoe lace" analogy: Forward → Error → Backward → Update, repeated iteratively.',
            zh: "“鞋带”类比：前向 → 误差 → 反向 → 更新，反复迭代。",
          },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Backpropagation is the cornerstone of deep learning training — it enables efficient gradient computation across arbitrarily deep networks.",
          zh: "反向传播是深度学习训练的基石——它使得在任意深度的网络中高效计算梯度成为可能。",
        },
      },
    ],
  },
  {
    id: "disadvantages",
    part: "evaluation",
    slideRef: 21,
    title: {
      en: "Disadvantages of Backpropagation",
      zh: "反向传播的缺点",
      ms: "Kelemahan Perambatan Balik",
    },
    body: [
      {
        type: "list",
        items: [
          {
            en: "Data-quality dependency — poor or biased data leads to inaccurate adjustments.",
            zh: "依赖数据质量——劣质或有偏的数据会导致不准确的调整。",
          },
          {
            en: "Noise sensitivity — noise propagates through the network.",
            zh: "对噪声敏感——噪声会在网络中传播。",
          },
          {
            en: "Batch-strategy trade-offs — full-matrix updates need more memory and computation.",
            zh: "批处理策略的权衡——整矩阵更新需要更多内存与计算。",
          },
          {
            en: "Vanishing / exploding gradients in very deep networks.",
            zh: "在极深网络中出现梯度消失 / 爆炸。",
          },
          {
            en: "Computationally expensive — every iteration needs a full forward and backward pass.",
            zh: "计算开销大——每次迭代都需要完整的前向和反向传播。",
          },
        ],
      },
    ],
  },
  {
    id: "references",
    part: "evaluation",
    slideRef: 22,
    title: {
      en: "Summary & References",
      zh: "总结与参考资料",
      ms: "Ringkasan & Rujukan",
    },
    body: [
      {
        type: "paragraph",
        text: {
          en: "Backpropagation makes modern AI in vision, speech, and language understanding possible by enabling efficient gradient computation across deep networks.",
          zh: "反向传播通过在深度网络中实现高效的梯度计算，使视觉、语音和语言理解领域的现代 AI 成为可能。",
        },
      },
      {
        type: "reference",
        cite: "DeepAI — deepai.org/machine-learning-glossary-and-terms/backpropagation",
      },
      {
        type: "reference",
        cite: "Guru99 — guru99.com/backpropagation-neural-network.html",
      },
      {
        type: "reference",
        cite: "Original lecture by Maslina @ SSK5603 · Enhanced with AI tools for CCS3600.",
      },
    ],
  },
];
