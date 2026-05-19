# Auto-Gradable Quiz — Back Propagation Neural Networks

**Course:** CCS3600 Artificial Intelligence — Natural Language Processing
**Project:** AI-Assisted Teaching Content Enhancement · **Topic:** (10) Back Propagation
**Deliverable:** Item 3 — Auto-gradable learning activities

**Format:** 20 questions (15 multiple-choice · 5 true/false) · single correct answer per question · 1 mark each · total **20 marks**
**Auto-grading:** every question has one unambiguous key — directly importable into Google Forms (auto-marking quiz), Quizizz, or Kahoot. A compact answer key is provided in §Answer Key for fast setup. Each question includes an explanation (讲解) used as auto-feedback shown after submission.
**Source:** all questions are grounded in the original courseware *Back Propagation Neural Network (SSK5603, Maslina)*; the slide each question maps to is noted in its explanation.

---

## Section A — Multiple Choice (Q1–Q15)

### Q1. What does the term "backpropagation" stand for?
- A. Backward processing of perceptrons
- B. Backward propagation of errors
- C. Batch propagation of activations
- D. Bidirectional propagation of weights

**Answer: B**
**讲解:** "Backpropagation" is short for *backward propagation of errors*. It fine-tunes the weights of a neural network based on the error rate obtained in the previous epoch (iteration). The other options are distractors that misuse the abbreviation. *(Original slide 2)*

---

### Q2. Backpropagation is best described as a method that:
- A. Defines how the computed gradient is used to update weights
- B. Randomly initializes the network weights before training
- C. Calculates the gradient of the loss function with respect to each weight
- D. Replaces the need for a loss function during training

**Answer: C**
**讲解:** Backpropagation *computes* the gradient of the loss function with respect to every weight, enabling each weight to be updated individually to reduce the loss over many iterations. Note option A is deliberately wrong: backpropagation computes the gradient but does **not** define how the gradient is used — that is the optimizer's job (e.g., gradient descent). *(Original slides 3 & 16)*

---

### Q3. In which direction does backpropagation compute gradients through the network?
- A. From the first layer forward to the last layer
- B. Simultaneously across all layers in parallel
- C. From the last layer backward to the first layer
- D. Only within the output layer

**Answer: C**
**讲解:** Backpropagation proceeds *backwards* — it first calculates the derivatives at layer N (the last layer), then reuses them as ingredients in the chain-rule formula for layer N−1, and so on back to the first layer. *(Original slides 3 & 15)*

---

### Q4. What is the defining property of a feed-forward neural network?
- A. The connections between nodes do not form a cycle
- B. Every node is connected back to the input layer
- C. Information can flow in both directions
- D. It always contains exactly one hidden layer

**Answer: A**
**讲解:** A feed-forward network is one in which the connections between nodes do **not** form a cycle; information is processed in only one direction and never moves backward. A network with cycles is a recurrent neural network — the opposite of feed-forward. *(Original slide 4)*

---

### Q5. In a single-layer perceptron, if the sum of weighted inputs is **below** the threshold (usually 0), the typical output is:
- A. 0
- B. 1
- C. −1
- D. The exact value of the sum

**Answer: C**
**讲解:** In the simplest perceptron model, inputs are multiplied by weights and summed. If the sum is above the threshold (usually 0) the output is often 1; if it falls below the threshold, the output is −1. *(Original slide 5)*

---

### Q6. The **delta rule** allows a single-layer perceptron to:
- A. Skip the activation function entirely
- B. Compare its node outputs with the intended values and adjust weights through training
- C. Convert itself into a recurrent network
- D. Eliminate the need for input weights

**Answer: B**
**讲解:** Using the delta rule, the network compares the outputs of its nodes with the intended values, allowing it to adjust its weights through training to produce more accurate outputs. In multi-layered perceptrons this weight-update process is defined more specifically as backpropagation. *(Original slides 6)*

---

### Q7. In the multilayer feedforward formula, the input to layer *i* is:
- A. The original network input vector x for every layer
- B. The output of the previous layer (layer i−1)
- C. A fresh random vector at each layer
- D. The final layer's output hN

**Answer: B**
**讲解:** Each layer receives the previous layer's output as its input: h1 = f1(W1·x + b1), then h2 = f2(W2·h1 + b2), and so on, until the final layer output hN. Only the first hidden layer takes the raw input x. *(Original slides 9–10)*

---

### Q8. In the formula symbols, *fᵢ* (the activation function of hidden layer i) could be:
- A. A sigmoid, ReLU, or tanh function
- B. The bias matrix of the layer
- C. The number of layers in the network
- D. The input vector to the network

**Answer: A**
**讲解:** fᵢ is the activation function of hidden layer i, which could be a sigmoid, a rectified linear unit (ReLU), a tanh function, or similar. The bias matrix, layer count, and input vector are separate symbols (bᵢ, N, and x respectively). *(Original slide 10)*

---

### Q9. How does the loss (cost) function *C* behave?
- A. Returns a high value when the output is close to the label
- B. Returns a low value when the output is close to the label
- C. Stays constant throughout training
- D. Is only defined for recurrent networks

**Answer: B**
**讲解:** The loss function returns a *low* value when the network output is close to the label and a *high* value when they differ. At the start of training the loss is very large; a fully trained model should have a small loss. *(Original slides 11–12)*

---

### Q10. Which of the following is an example of a loss function mentioned in the courseware?
- A. Fast Fourier Transform
- B. Cross-entropy loss
- C. The delta rule
- D. Gradient descent

**Answer: B**
**讲解:** Examples of loss functions given include the cross-entropy loss, the cosine similarity function, and the hinge loss. Fast Fourier Transform is a signal-processing step (speech recognition), the delta rule is a weight-update rule, and gradient descent is an optimizer — none are loss functions. *(Original slide 12)*

---

### Q11. The weight notation *w₍ᵢ,ⱼ,ₖ₎* refers to the weight going from:
- A. Node k in layer i to node j in layer i+1
- B. Node j in layer i−1 to node k in layer i
- C. The bias of layer i to its output
- D. The input vector directly to the output layer

**Answer: B**
**讲解:** The notation denotes the weight of the network going from node j in layer (i−1) to node k in layer i. To minimize C we must compute the derivative of C with respect to every such weight. *(Original slide 13)*

---

### Q12. The chain rule states that for z depending on y, and y depending on x:
- A. dz/dx = dz/dy + dy/dx
- B. dz/dx = dz/dy − dy/dx
- C. dz/dx = (dz/dy) · (dy/dx)
- D. dz/dx = (dz/dy) / (dy/dx)

**Answer: C**
**讲解:** The chain rule of calculus gives dz/dx = (dz/dy) · (dy/dx). Because C depends on the weights via a chain of many nested functions, the chain rule is applied recursively to obtain the derivative. *(Original slide 14)*

---

### Q13. Why is the backpropagation algorithm *efficient* compared to computing each weight's derivative separately?
- A. It ignores most of the weights to save time
- B. It saves and re-uses derivative calculations from later layers via the chain rule, avoiding duplicate computation
- C. It computes all layers fully in parallel with no dependencies
- D. It replaces the chain rule with a single matrix inversion

**Answer: B**
**讲解:** Calculating each component separately would be extremely inefficient. Backpropagation first computes the derivatives at layer N; these are ingredients in the chain-rule formula for layer N−1, so they are saved and re-used. Working backward and reusing prior derivatives avoids duplicate calculations. *(Original slide 15)*

---

### Q14. In the backpropagation procedure, the error at the output is computed as:
- A. Desired Output − Input
- B. Actual Output − Desired Output
- C. Actual Output + Desired Output
- D. Desired Output × Weights

**Answer: B**
**讲解:** The courseware states ErrorB = Actual Output − Desired Output. The algorithm then travels back from the output layer to the hidden layers, adjusting weights so that this error is decreased, repeating until the desired output is achieved. *(Original slide 17)*

---

### Q15. Backpropagation Through Time (BPTT) handles a recurrent network by:
- A. Deleting all cycles permanently from the network
- B. "Unrolling" the network across time steps so it can be viewed like a feed-forward network
- C. Training only the output layer and ignoring the rest
- D. Converting the loss function into an activation function

**Answer: B**
**讲解:** A recurrent network contains cycles, so it cannot be expressed as a directed acyclic graph directly. BPTT *unrolls* the network — each time step becomes a copy of the original network — so it can be treated like a feed-forward network for training. *(Original slides 18–19)*

---

## Section B — True / False (Q16–Q20)

### Q16. *True or False:* Backpropagation both computes the gradient **and** defines how that gradient is used to update the weights.

**Answer: False**
**讲解:** Backpropagation computes the gradient but does **not** define how the gradient is used — that is handled by a separate optimization method (e.g., stochastic gradient descent). It also generalizes the computation in the delta rule. *(Original slide 16)*

---

### Q17. *True or False:* The vanishing gradient problem in backpropagation-through-time can be addressed by choosing ReLU activation functions and introducing regularization.

**Answer: True**
**讲解:** When inputs are far apart in time, gradient contributions become diminishingly small compared to local effects — the vanishing gradient problem. The courseware states this can be addressed by choosing ReLU activation functions and introducing regularization. *(Original slide 19)*

---

### Q18. *True or False:* In the face-recognition example (Parkhi, Vidaldi & Zisserman, 2015), the **triplet loss** penalizes the network for classifying images of different people as similar, and images of the same person as different.

**Answer: True**
**讲解:** An 18-layer CNN was trained with backpropagation; a final refinement stage on layer 18 used a triplet loss. It receives three face images at once (e.g., two of Matt Damon, one of Brad Pitt) and is penalized for treating the same person as different or different people as similar. *(Original slide 25)*

---

### Q19. *True or False:* The Sony speech-recognition system trained on Japanese and then adapted to English is an example of **transfer learning**.

**Answer: True**
**讲解:** The system applied a Fast Fourier Transform to windowed sound, fed frequency features into a 5-layer network with a softmax cross-entropy loss, trained it on Japanese commands, then re-trained/adapted it for English — a textbook example of transfer learning. *(Original slide 26)*

---

### Q20. *True or False:* Augustin-Louis Cauchy is credited as the inventor of gradient descent.

**Answer: True**
**讲解:** The history section credits Augustin-Louis Cauchy (1789–1857) as the inventor of gradient descent, the optimization idea underlying backpropagation. *(Original slide 27)*

---

## Answer Key (for auto-grading setup)

| Q | Ans | Q | Ans | Q | Ans | Q | Ans |
|---|-----|---|-----|---|-----|---|-----|
| 1 | B | 6 | B | 11 | B | 16 | False |
| 2 | C | 7 | B | 12 | C | 17 | True |
| 3 | C | 8 | A | 13 | B | 18 | True |
| 4 | A | 9 | B | 14 | B | 19 | True |
| 5 | C | 10 | B | 15 | B | 20 | True |

**Scoring:** 1 mark per correct answer · no negative marking · pass mark suggested at 12/20 (60%).

---

## How to Deploy as an Auto-Graded Activity

This Markdown is platform-neutral. To make it automatically graded online:

1. **Google Forms (auto-marking quiz):** create a Form → *Settings → Make this a quiz*. Add each question, mark the correct option per the Answer Key, and paste the 讲解 text into "answer feedback" so learners get instant explanations on submission.
2. **Quizizz / Kahoot:** use the bulk-import / "import from spreadsheet" feature — each row = question, four options, correct answer index. The Answer Key table maps directly.
3. **AI-assisted import:** paste this file into Quizizz AI / QuestionWell / MagicSchool AI and instruct it to "create an auto-graded quiz from these exact questions, options, answers, and explanations" — then verify against the Answer Key (AI output must be checked for accuracy, per the project's responsible-AI requirement).

All 20 items have a single unambiguous correct answer, satisfying the requirement that automatic grading be enabled with an answer scheme and auto-feedback.
