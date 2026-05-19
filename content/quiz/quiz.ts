import type { LangText } from "@/lib/i18n-content";

export type QuizQuestion = {
  id: number;
  type: "mcq" | "truefalse";
  section: "A" | "B";
  prompt: LangText;
  /** MCQ: 4 options. True/False: empty — the UI renders localized True/False. */
  options: LangText[];
  /** 0-based. MCQ: 0..3. True/False: 0 = True, 1 = False. */
  correctIndex: number;
  explanation: LangText;
  slideRef: string;
};

export const quizMeta = {
  total: 20,
  totalMarks: 20,
  passMark: 12,
} as const;

export const quiz: QuizQuestion[] = [
  {
    id: 1,
    type: "mcq",
    section: "A",
    prompt: {
      en: 'What does the term "backpropagation" stand for?',
      zh: "“反向传播”这个术语代表什么？",
    },
    options: [
      { en: "Backward processing of perceptrons", zh: "感知机的反向处理" },
      { en: "Backward propagation of errors", zh: "误差的反向传播" },
      { en: "Batch propagation of activations", zh: "激活值的批量传播" },
      {
        en: "Bidirectional propagation of weights",
        zh: "权重的双向传播",
      },
    ],
    correctIndex: 1,
    explanation: {
      en: '"Backpropagation" is short for backward propagation of errors. It fine-tunes the weights of a neural network based on the error rate obtained in the previous epoch (iteration). The other options are distractors that misuse the abbreviation.',
      zh: "“反向传播”是 backward propagation of errors（误差的反向传播）的简称。它根据上一轮（迭代）得到的误差率来微调神经网络的权重。其他选项都是滥用该缩写的干扰项。",
    },
    slideRef: "Original slide 2",
  },
  {
    id: 2,
    type: "mcq",
    section: "A",
    prompt: {
      en: "Backpropagation is best described as a method that:",
      zh: "对反向传播最准确的描述是：它是一种能够……的方法",
    },
    options: [
      {
        en: "Defines how the computed gradient is used to update weights",
        zh: "定义如何使用计算出的梯度来更新权重",
      },
      {
        en: "Randomly initializes the network weights before training",
        zh: "在训练前随机初始化网络权重",
      },
      {
        en: "Calculates the gradient of the loss function with respect to each weight",
        zh: "计算损失函数关于每个权重的梯度",
      },
      {
        en: "Replaces the need for a loss function during training",
        zh: "在训练中取代对损失函数的需求",
      },
    ],
    correctIndex: 2,
    explanation: {
      en: "Backpropagation computes the gradient of the loss function with respect to every weight, enabling each weight to be updated individually to reduce the loss over many iterations. Option A is deliberately wrong: backpropagation computes the gradient but does not define how it is used — that is the optimizer's job (e.g., gradient descent).",
      zh: "反向传播计算损失函数关于每个权重的梯度，使每个权重都能被单独更新，从而在多轮迭代中降低损失。选项 A 是故意设置的错误：反向传播计算梯度，但并不定义如何使用梯度——那是优化器（如梯度下降）的工作。",
    },
    slideRef: "Original slides 3 & 16",
  },
  {
    id: 3,
    type: "mcq",
    section: "A",
    prompt: {
      en: "In which direction does backpropagation compute gradients through the network?",
      zh: "反向传播在网络中沿哪个方向计算梯度？",
    },
    options: [
      {
        en: "From the first layer forward to the last layer",
        zh: "从第一层正向到最后一层",
      },
      {
        en: "Simultaneously across all layers in parallel",
        zh: "在所有层中并行同时进行",
      },
      {
        en: "From the last layer backward to the first layer",
        zh: "从最后一层反向到第一层",
      },
      { en: "Only within the output layer", zh: "仅在输出层内部" },
    ],
    correctIndex: 2,
    explanation: {
      en: "Backpropagation proceeds backwards — it first calculates the derivatives at layer N (the last layer), then reuses them as ingredients in the chain-rule formula for layer N−1, and so on back to the first layer.",
      zh: "反向传播是反向进行的——它首先计算第 N 层（最后一层）的导数，然后将其作为第 N−1 层链式法则公式中的“原料”重复使用，依此类推一直回到第一层。",
    },
    slideRef: "Original slides 3 & 15",
  },
  {
    id: 4,
    type: "mcq",
    section: "A",
    prompt: {
      en: "What is the defining property of a feed-forward neural network?",
      zh: "前馈神经网络的决定性特征是什么？",
    },
    options: [
      {
        en: "The connections between nodes do not form a cycle",
        zh: "节点之间的连接不构成环路",
      },
      {
        en: "Every node is connected back to the input layer",
        zh: "每个节点都连接回输入层",
      },
      {
        en: "Information can flow in both directions",
        zh: "信息可以双向流动",
      },
      {
        en: "It always contains exactly one hidden layer",
        zh: "它总是恰好包含一个隐藏层",
      },
    ],
    correctIndex: 0,
    explanation: {
      en: "A feed-forward network is one in which the connections between nodes do not form a cycle; information is processed in only one direction and never moves backward. A network with cycles is a recurrent neural network — the opposite of feed-forward.",
      zh: "前馈网络是指节点之间的连接不构成环路的网络；信息只沿一个方向处理，绝不向后移动。含有环路的网络是循环神经网络——与前馈网络相反。",
    },
    slideRef: "Original slide 4",
  },
  {
    id: 5,
    type: "mcq",
    section: "A",
    prompt: {
      en: "In a single-layer perceptron, if the sum of weighted inputs is below the threshold (usually 0), the typical output is:",
      zh: "在单层感知机中，如果加权输入之和低于阈值（通常为 0），典型的输出是：",
    },
    options: [
      { en: "0", zh: "0" },
      { en: "1", zh: "1" },
      { en: "−1", zh: "−1" },
      { en: "The exact value of the sum", zh: "该和的精确数值" },
    ],
    correctIndex: 2,
    explanation: {
      en: "In the simplest perceptron model, inputs are multiplied by weights and summed. If the sum is above the threshold (usually 0) the output is often 1; if it falls below the threshold, the output is −1.",
      zh: "在最简单的感知机模型中，输入与权重相乘并求和。如果该和高于阈值（通常为 0），输出通常为 1；如果低于阈值，输出为 −1。",
    },
    slideRef: "Original slide 5",
  },
  {
    id: 6,
    type: "mcq",
    section: "A",
    prompt: {
      en: "The delta rule allows a single-layer perceptron to:",
      zh: "δ 规则（delta rule）使单层感知机能够：",
    },
    options: [
      {
        en: "Skip the activation function entirely",
        zh: "完全跳过激活函数",
      },
      {
        en: "Compare its node outputs with the intended values and adjust weights through training",
        zh: "将其节点输出与预期值比较，并通过训练调整权重",
      },
      {
        en: "Convert itself into a recurrent network",
        zh: "将自身转换为循环网络",
      },
      {
        en: "Eliminate the need for input weights",
        zh: "消除对输入权重的需求",
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "Using the delta rule, the network compares the outputs of its nodes with the intended values, allowing it to adjust its weights through training to produce more accurate outputs. In multi-layered perceptrons this weight-update process is defined more specifically as backpropagation.",
      zh: "利用 δ 规则，网络将其节点的输出与预期值进行比较，从而通过训练调整权重以产生更准确的输出。在多层感知机中，这一权重更新过程被更具体地定义为反向传播。",
    },
    slideRef: "Original slide 6",
  },
  {
    id: 7,
    type: "mcq",
    section: "A",
    prompt: {
      en: "In the multilayer feedforward formula, the input to layer i is:",
      zh: "在多层前馈公式中，第 i 层的输入是：",
    },
    options: [
      {
        en: "The original network input vector x for every layer",
        zh: "每一层都使用原始网络输入向量 x",
      },
      {
        en: "The output of the previous layer (layer i−1)",
        zh: "上一层（第 i−1 层）的输出",
      },
      {
        en: "A fresh random vector at each layer",
        zh: "每一层都使用一个全新的随机向量",
      },
      { en: "The final layer's output hN", zh: "最后一层的输出 hN" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Each layer receives the previous layer's output as its input: h1 = f1(W1·x + b1), then h2 = f2(W2·h1 + b2), and so on, until the final layer output hN. Only the first hidden layer takes the raw input x.",
      zh: "每一层都接收上一层的输出作为其输入：h1 = f1(W1·x + b1)，然后 h2 = f2(W2·h1 + b2)，依此类推，直到最后一层输出 hN。只有第一个隐藏层接收原始输入 x。",
    },
    slideRef: "Original slides 9–10",
  },
  {
    id: 8,
    type: "mcq",
    section: "A",
    prompt: {
      en: "In the formula symbols, fᵢ (the activation function of hidden layer i) could be:",
      zh: "在公式符号中，fᵢ（第 i 个隐藏层的激活函数）可以是：",
    },
    options: [
      {
        en: "A sigmoid, ReLU, or tanh function",
        zh: "sigmoid、ReLU 或 tanh 函数",
      },
      { en: "The bias matrix of the layer", zh: "该层的偏置矩阵" },
      {
        en: "The number of layers in the network",
        zh: "网络中的层数",
      },
      { en: "The input vector to the network", zh: "网络的输入向量" },
    ],
    correctIndex: 0,
    explanation: {
      en: "fᵢ is the activation function of hidden layer i, which could be a sigmoid, a rectified linear unit (ReLU), a tanh function, or similar. The bias matrix, layer count, and input vector are separate symbols (bᵢ, N, and x respectively).",
      zh: "fᵢ 是第 i 个隐藏层的激活函数，可以是 sigmoid、修正线性单元（ReLU）、tanh 函数或类似函数。偏置矩阵、层数和输入向量是不同的符号（分别为 bᵢ、N 和 x）。",
    },
    slideRef: "Original slide 10",
  },
  {
    id: 9,
    type: "mcq",
    section: "A",
    prompt: {
      en: "How does the loss (cost) function C behave?",
      zh: "损失（代价）函数 C 的表现如何？",
    },
    options: [
      {
        en: "Returns a high value when the output is close to the label",
        zh: "当输出接近标签时返回较高的值",
      },
      {
        en: "Returns a low value when the output is close to the label",
        zh: "当输出接近标签时返回较低的值",
      },
      {
        en: "Stays constant throughout training",
        zh: "在整个训练过程中保持不变",
      },
      {
        en: "Is only defined for recurrent networks",
        zh: "仅对循环网络有定义",
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "The loss function returns a low value when the network output is close to the label and a high value when they differ. At the start of training the loss is very large; a fully trained model should have a small loss.",
      zh: "当网络输出接近标签时，损失函数返回较低的值；当二者差异较大时返回较高的值。训练开始时损失非常大；训练充分的模型应具有较小的损失。",
    },
    slideRef: "Original slides 11–12",
  },
  {
    id: 10,
    type: "mcq",
    section: "A",
    prompt: {
      en: "Which of the following is an example of a loss function mentioned in the courseware?",
      zh: "以下哪一项是课件中提到的损失函数示例？",
    },
    options: [
      { en: "Fast Fourier Transform", zh: "快速傅里叶变换" },
      { en: "Cross-entropy loss", zh: "交叉熵损失" },
      { en: "The delta rule", zh: "δ 规则" },
      { en: "Gradient descent", zh: "梯度下降" },
    ],
    correctIndex: 1,
    explanation: {
      en: "Examples of loss functions given include the cross-entropy loss, the cosine similarity function, and the hinge loss. Fast Fourier Transform is a signal-processing step (speech recognition), the delta rule is a weight-update rule, and gradient descent is an optimizer — none are loss functions.",
      zh: "课件给出的损失函数示例包括交叉熵损失、余弦相似度函数和合页损失（hinge loss）。快速傅里叶变换是信号处理步骤（用于语音识别），δ 规则是权重更新规则，梯度下降是优化器——都不是损失函数。",
    },
    slideRef: "Original slide 12",
  },
  {
    id: 11,
    type: "mcq",
    section: "A",
    prompt: {
      en: "The weight notation w₍ᵢ,ⱼ,ₖ₎ refers to the weight going from:",
      zh: "权重记号 w₍ᵢ,ⱼ,ₖ₎ 指的是从下列哪处出发的权重：",
    },
    options: [
      {
        en: "Node k in layer i to node j in layer i+1",
        zh: "第 i 层的节点 k 到第 i+1 层的节点 j",
      },
      {
        en: "Node j in layer i−1 to node k in layer i",
        zh: "第 i−1 层的节点 j 到第 i 层的节点 k",
      },
      {
        en: "The bias of layer i to its output",
        zh: "第 i 层的偏置到其输出",
      },
      {
        en: "The input vector directly to the output layer",
        zh: "输入向量直接到输出层",
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "The notation denotes the weight of the network going from node j in layer (i−1) to node k in layer i. To minimize C we must compute the derivative of C with respect to every such weight.",
      zh: "该记号表示网络中从第 (i−1) 层的节点 j 到第 i 层的节点 k 的权重。要最小化 C，我们必须计算 C 关于每一个这样的权重的导数。",
    },
    slideRef: "Original slide 13",
  },
  {
    id: 12,
    type: "mcq",
    section: "A",
    prompt: {
      en: "The chain rule states that for z depending on y, and y depending on x:",
      zh: "链式法则指出，对于 z 依赖于 y、y 依赖于 x 的情况：",
    },
    options: [
      { en: "dz/dx = dz/dy + dy/dx", zh: "dz/dx = dz/dy + dy/dx" },
      { en: "dz/dx = dz/dy − dy/dx", zh: "dz/dx = dz/dy − dy/dx" },
      {
        en: "dz/dx = (dz/dy) · (dy/dx)",
        zh: "dz/dx = (dz/dy) · (dy/dx)",
      },
      {
        en: "dz/dx = (dz/dy) / (dy/dx)",
        zh: "dz/dx = (dz/dy) / (dy/dx)",
      },
    ],
    correctIndex: 2,
    explanation: {
      en: "The chain rule of calculus gives dz/dx = (dz/dy) · (dy/dx). Because C depends on the weights via a chain of many nested functions, the chain rule is applied recursively to obtain the derivative.",
      zh: "微积分的链式法则给出 dz/dx = (dz/dy) · (dy/dx)。由于 C 通过一连串嵌套函数依赖于权重，需要递归地应用链式法则来求导。",
    },
    slideRef: "Original slide 14",
  },
  {
    id: 13,
    type: "mcq",
    section: "A",
    prompt: {
      en: "Why is the backpropagation algorithm efficient compared to computing each weight's derivative separately?",
      zh: "与单独计算每个权重的导数相比，反向传播算法为何高效？",
    },
    options: [
      {
        en: "It ignores most of the weights to save time",
        zh: "它忽略大多数权重以节省时间",
      },
      {
        en: "It saves and re-uses derivative calculations from later layers via the chain rule, avoiding duplicate computation",
        zh: "它通过链式法则保存并重复使用较后层的导数计算，避免重复运算",
      },
      {
        en: "It computes all layers fully in parallel with no dependencies",
        zh: "它在无依赖的情况下完全并行计算所有层",
      },
      {
        en: "It replaces the chain rule with a single matrix inversion",
        zh: "它用一次矩阵求逆取代链式法则",
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "Calculating each component separately would be extremely inefficient. Backpropagation first computes the derivatives at layer N; these are ingredients in the chain-rule formula for layer N−1, so they are saved and re-used. Working backward and reusing prior derivatives avoids duplicate calculations.",
      zh: "单独计算每个分量会极其低效。反向传播首先计算第 N 层的导数；这些导数是第 N−1 层链式法则公式中的“原料”，因此被保存并重复使用。反向推进并重用先前的导数避免了重复计算。",
    },
    slideRef: "Original slide 15",
  },
  {
    id: 14,
    type: "mcq",
    section: "A",
    prompt: {
      en: "In the backpropagation procedure, the error at the output is computed as:",
      zh: "在反向传播过程中，输出端的误差计算为：",
    },
    options: [
      { en: "Desired Output − Input", zh: "期望输出 − 输入" },
      {
        en: "Actual Output − Desired Output",
        zh: "实际输出 − 期望输出",
      },
      {
        en: "Actual Output + Desired Output",
        zh: "实际输出 + 期望输出",
      },
      { en: "Desired Output × Weights", zh: "期望输出 × 权重" },
    ],
    correctIndex: 1,
    explanation: {
      en: "The courseware states ErrorB = Actual Output − Desired Output. The algorithm then travels back from the output layer to the hidden layers, adjusting weights so that this error is decreased, repeating until the desired output is achieved.",
      zh: "课件指出 ErrorB = 实际输出 − 期望输出。算法随后从输出层回溯到隐藏层，调整权重以减小该误差，并不断重复直到达到期望输出。",
    },
    slideRef: "Original slide 17",
  },
  {
    id: 15,
    type: "mcq",
    section: "A",
    prompt: {
      en: "Backpropagation Through Time (BPTT) handles a recurrent network by:",
      zh: "随时间反向传播（BPTT）处理循环网络的方式是：",
    },
    options: [
      {
        en: "Deleting all cycles permanently from the network",
        zh: "永久删除网络中的所有环路",
      },
      {
        en: '"Unrolling" the network across time steps so it can be viewed like a feed-forward network',
        zh: "沿时间步“展开”网络，使其可以像前馈网络一样看待",
      },
      {
        en: "Training only the output layer and ignoring the rest",
        zh: "仅训练输出层并忽略其余部分",
      },
      {
        en: "Converting the loss function into an activation function",
        zh: "将损失函数转换为激活函数",
      },
    ],
    correctIndex: 1,
    explanation: {
      en: "A recurrent network contains cycles, so it cannot be expressed as a directed acyclic graph directly. BPTT unrolls the network — each time step becomes a copy of the original network — so it can be treated like a feed-forward network for training.",
      zh: "循环网络含有环路，因此不能直接表示为有向无环图。BPTT 将网络展开——每个时间步成为原始网络的一个副本——从而可以像前馈网络一样进行训练。",
    },
    slideRef: "Original slides 18–19",
  },
  {
    id: 16,
    type: "truefalse",
    section: "B",
    prompt: {
      en: "Backpropagation both computes the gradient and defines how that gradient is used to update the weights.",
      zh: "反向传播既计算梯度，又定义如何使用该梯度来更新权重。",
    },
    options: [],
    correctIndex: 1,
    explanation: {
      en: "False. Backpropagation computes the gradient but does not define how the gradient is used — that is handled by a separate optimization method (e.g., stochastic gradient descent). It also generalizes the computation in the delta rule.",
      zh: "错误。反向传播计算梯度，但并不定义如何使用梯度——那由单独的优化方法（如随机梯度下降）处理。它同时也是 δ 规则中计算的推广。",
    },
    slideRef: "Original slide 16",
  },
  {
    id: 17,
    type: "truefalse",
    section: "B",
    prompt: {
      en: "The vanishing gradient problem in backpropagation-through-time can be addressed by choosing ReLU activation functions and introducing regularization.",
      zh: "随时间反向传播中的梯度消失问题，可以通过选择 ReLU 激活函数并引入正则化来缓解。",
    },
    options: [],
    correctIndex: 0,
    explanation: {
      en: "True. When inputs are far apart in time, gradient contributions become diminishingly small compared to local effects — the vanishing gradient problem. The courseware states this can be addressed by choosing ReLU activation functions and introducing regularization.",
      zh: "正确。当输入在时间上相距较远时，梯度贡献相对于局部效应会变得越来越小——即梯度消失问题。课件指出可以通过选择 ReLU 激活函数并引入正则化来缓解。",
    },
    slideRef: "Original slide 19",
  },
  {
    id: 18,
    type: "truefalse",
    section: "B",
    prompt: {
      en: "In the face-recognition example (Parkhi, Vidaldi & Zisserman, 2015), the triplet loss penalizes the network for classifying images of different people as similar, and images of the same person as different.",
      zh: "在人脸识别示例（Parkhi, Vidaldi & Zisserman, 2015）中，三元组损失（triplet loss）会因网络把不同人的图像判为相似、把同一人的图像判为不同而对其进行惩罚。",
    },
    options: [],
    correctIndex: 0,
    explanation: {
      en: "True. An 18-layer CNN was trained with backpropagation; a final refinement stage on layer 18 used a triplet loss. It receives three face images at once (e.g., two of Matt Damon, one of Brad Pitt) and is penalized for treating the same person as different or different people as similar.",
      zh: "正确。一个 18 层 CNN 用反向传播训练；在第 18 层的最终精修阶段使用了三元组损失。它一次接收三张人脸图像（例如两张 Matt Damon、一张 Brad Pitt），若把同一人判为不同或把不同人判为相似就会受到惩罚。",
    },
    slideRef: "Original slide 25",
  },
  {
    id: 19,
    type: "truefalse",
    section: "B",
    prompt: {
      en: "The Sony speech-recognition system trained on Japanese and then adapted to English is an example of transfer learning.",
      zh: "先用日语训练、再适配到英语的索尼（Sony）语音识别系统，是迁移学习的一个示例。",
    },
    options: [],
    correctIndex: 0,
    explanation: {
      en: "True. The system applied a Fast Fourier Transform to windowed sound, fed frequency features into a 5-layer network with a softmax cross-entropy loss, trained it on Japanese commands, then re-trained/adapted it for English — a textbook example of transfer learning.",
      zh: "正确。该系统对加窗后的声音应用快速傅里叶变换，将频率特征输入到一个采用 softmax 交叉熵损失的 5 层网络，先用日语指令训练，再为英语重新训练/适配——这是迁移学习的典型示例。",
    },
    slideRef: "Original slide 26",
  },
  {
    id: 20,
    type: "truefalse",
    section: "B",
    prompt: {
      en: "Augustin-Louis Cauchy is credited as the inventor of gradient descent.",
      zh: "Augustin-Louis Cauchy 被认为是梯度下降的发明者。",
    },
    options: [],
    correctIndex: 0,
    explanation: {
      en: "True. The history section credits Augustin-Louis Cauchy (1789–1857) as the inventor of gradient descent, the optimization idea underlying backpropagation.",
      zh: "正确。历史部分将梯度下降的发明归功于 Augustin-Louis Cauchy（1789–1857），这一优化思想是反向传播的基础。",
    },
    slideRef: "Original slide 27",
  },
];
