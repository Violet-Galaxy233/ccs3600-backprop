import type { LectureSection } from "./types";

/**
 * The enhanced 22-slide deck rebuilt as native content.
 * `en` is the source of truth; `zh`/`ms` fall back to `en` per-field
 * (see lib/i18n-content.pickLang) until the translation pass fills them.
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
        },
      },
      {
        type: "callout",
        variant: "note",
        text: {
          en: "CCS3600 Artificial Intelligence — Enhanced Teaching Materials. Original lecture by Maslina @ SSK5603.",
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
          },
          {
            en: "Algorithm — the mathematics of backpropagation: loss functions, the chain rule, and gradient computation.",
          },
          {
            en: "Applications — pattern recognition, face recognition with CNNs, and speech recognition.",
          },
          {
            en: "Evaluation — the history, advantages, and limitations of backpropagation in modern AI.",
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
        },
      },
      {
        type: "list",
        items: [
          { en: "Fine-tunes weights to reduce prediction error." },
          { en: "Computes the gradient needed for learning." },
          { en: "Is the foundation of supervised learning in deep networks." },
          { en: "Updates each weight individually." },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Backpropagation proceeds backwards through the network, from the last layer to the first.",
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
        },
      },
      {
        type: "compare",
        leftTitle: { en: "Feed-Forward" },
        rightTitle: { en: "Recurrent" },
        left: [
          { en: "Directed acyclic graph" },
          { en: "One-way data flow" },
          { en: "No cycles" },
        ],
        right: [
          { en: "Contains cycles / feedback loops" },
          { en: "Sequential / time-series data" },
          { en: "State carried across steps" },
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
          { en: "Inputs (x₁, x₂, x₃) are multiplied by their weights (w₁, w₂, w₃)." },
          { en: "The weighted values are summed." },
          { en: "An activation function f(x) is applied to the sum." },
          {
            en: "The result is compared to a threshold to produce the output y (often 1 if above, −1 if below).",
          },
        ],
      },
      {
        type: "paragraph",
        text: {
          en: "The delta rule adjusts the weights based on the output error. Extended to multiple layers, the error is propagated backward through every hidden layer — this is backpropagation.",
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
          },
          {
            en: "Recurrent backpropagation — processes input until a fixed value is reached; for sequence-dependent tasks.",
          },
          {
            en: "Backpropagation Through Time (BPTT) — unrolls a recurrent network into feed-forward form to handle time-series data.",
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
        },
      },
      { type: "math", tex: "h_1 = f_1(W_1 \\cdot x + b_1)" },
      { type: "math", tex: "h_2 = f_2(W_2 \\cdot h_1 + b_2)" },
      { type: "math", tex: "h_N = f_N(W_N \\cdot h_{N-1} + b_N)" },
      {
        type: "list",
        items: [
          { en: "hᵢ — output of layer i" },
          { en: "fᵢ — activation function (sigmoid, ReLU, tanh, …)" },
          { en: "Wᵢ — weight matrix of layer i" },
          { en: "x — input vector · N — number of layers · bᵢ — bias" },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "This chained function composition is exactly what makes the chain rule applicable for efficient gradient computation.",
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
        },
      },
      {
        type: "list",
        items: [
          { en: "Cross-entropy loss" },
          { en: "Cosine similarity" },
          { en: "Hinge loss" },
          { en: "Mean squared error" },
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
        },
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Each layer's derivatives become the ingredients for the previous layer's — this reuse is the engine of efficiency.",
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
          { en: "Inputs X arrive through the pre-connected path." },
          { en: "The input is modeled using randomly selected weights W." },
          { en: "Calculate the output for every neuron, layer by layer." },
          { en: "Calculate the error at the outputs: Error = Actual Output − Desired Output." },
          { en: "Travel back and adjust the weights to decrease the error." },
          { en: "Repeat until the desired output is achieved." },
        ],
      },
      {
        type: "callout",
        variant: "note",
        text: {
          en: "Backpropagation computes the gradient via the chain rule one layer at a time, and generalizes the delta rule.",
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
        leftTitle: { en: "Standard Backpropagation" },
        rightTitle: { en: "BPTT" },
        left: [
          { en: "Feed-forward networks (DAG)" },
          { en: "Chain rule through layers" },
          { en: "Static input → output" },
        ],
        right: [
          { en: "Unrolls RNNs across time steps" },
          { en: "Treated as feed-forward for training" },
          { en: "Handles sequential data" },
        ],
      },
      {
        type: "list",
        items: [
          { en: "Large unrolled networks become difficult to train." },
          { en: "Easily trapped in local optima." },
          {
            en: "Vanishing gradient problem — distant interactions produce diminishingly small gradients.",
          },
          { en: "Mitigations: ReLU activation, regularization, LSTM/GRU." },
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
          { en: "Simplifies structure — removes least-effective weighted links." },
          { en: "Reveals relationships between inputs and hidden layers." },
          { en: "Assesses the impact of input variables on the output." },
          { en: "Essential for deep networks in error-prone projects." },
          { en: "Mathematically elegant — leverages the chain and power rules." },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Without backpropagation, training deep networks would be computationally infeasible.",
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
        },
      },
      {
        type: "list",
        items: [
          { en: "Automated, consistent, and objective" },
          { en: "Scalable and real-time" },
          { en: "Learns discriminating features automatically" },
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
        },
      },
      {
        type: "math",
        tex: "L = \\max\\big(d(a,p) - d(a,n) + \\text{margin},\\; 0\\big)",
      },
      {
        type: "steps",
        steps: [
          { en: "Forward pass through the CNN to compute face embeddings." },
          { en: "Compute the triplet loss, penalizing misclassifications." },
          { en: "Backpropagate gradients and update all 18 layers' weights." },
          { en: "Repeat until convergence." },
        ],
      },
      { type: "reference", cite: "Parkhi, Vidaldi & Zisserman (2015), VGGFace." },
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
          { en: "1847 — Cauchy invents gradient descent." },
          { en: "1960s — early automatic differentiation." },
          { en: "1970 — Linnainmaa: reverse-mode automatic differentiation." },
          {
            en: "1986 — Rumelhart, Hinton & Williams popularize backpropagation for neural networks.",
          },
          { en: "2000s+ — the deep learning revolution, powered by backpropagation." },
        ],
      },
      {
        type: "callout",
        variant: "note",
        text: { en: "Over 170 years of mathematical foundations." },
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
          { en: "Simplify network structure — remove least-effective links." },
          { en: "Study layer relationships — examine input / activation values." },
          { en: "Assess input-variable impact on the output." },
          { en: "Especially useful for image, speech, and NLP deep networks." },
          {
            en: 'The "shoe lace" analogy: Forward → Error → Backward → Update, repeated iteratively.',
          },
        ],
      },
      {
        type: "callout",
        variant: "key",
        text: {
          en: "Backpropagation is the cornerstone of deep learning training — it enables efficient gradient computation across arbitrarily deep networks.",
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
          },
          { en: "Noise sensitivity — noise propagates through the network." },
          {
            en: "Batch-strategy trade-offs — full-matrix updates need more memory and computation.",
          },
          { en: "Vanishing / exploding gradients in very deep networks." },
          {
            en: "Computationally expensive — every iteration needs a full forward and backward pass.",
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
