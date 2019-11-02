---
layout: project
handle: parabank
search_omit: true
---

We present ParaBank, a large-scale English paraphrase dataset that surpasses prior work in both quantity and quality. Following the approach of ParaNMT, we train a Czech-English neural machine translation (NMT) system to generate novel paraphrases of English reference sentences. By adding lexical constraints to the NMT decoding procedure, however, we are able to produce multiple high-quality sentential paraphrases per source sentence, yielding an English paraphrase resource with more than 4 billion generated tokens and exhibiting greater lexical diversity. Using human judgments, we also demonstrate that ParaBank's paraphrases improve over ParaNMT on both semantic similarity and fluency. Finally, we use ParaBank to train a monolingual NMT model with the same support for lexically-constrained decoding for sentence rewriting tasks.

For a detailed description of the collection and our methods, please see the following papers:

> Hu, J. E., R. Rudinger, M. Post, & B. Van Durme. 2019. [ParaBank: Monolingual Bitext Generation and Sentential Paraphrasing via Lexically-constrained Neural Machine Translation](http://aaai.org/Papers/AAAI/2019/AAAI-HuJ.4052.pdf). Proceedings of AAAI 2019, Honolulu, Hawaii, January 26 – Feb 1, 2019.

Our evaluation data is available for download [here](https://github.com/decompositional-semantics-initiative/ParaBank-Eval-Data).

#To interact with the monolingual rewriter described in the paper, [please check out this live demo](http://www.cs.jhu.edu/~vandurme/pbr-1a-demo/). The rewriter can be downloaded [here](https://github.com/decompositional-semantics-initiative/ParaBank-rewriter/releases/tag/v0.1).


We also present an improved constrained-decoding framework with an improved rewriter in the following paper:

> Hu, J. E., H. Khayrallah, R. Culkin, P. Xia, T. Chen, M. Post, & B. Van Durme. 2019b. [Improved Lexically Constrained Decoding for Translation and Monolingual Rewriting](http://cs.jhu.edu/~vandurme/papers/parabank-naacl19.pdf). Proceedings of NAACL 2019, Minneapolis, Minnesota, June 2 – 7, 2019.

In our experiments on data augmentation we overlooked a nice related article on NMT-based paraphrasing for <i>adversarial</i> model improvements, please see: [Ribeiro, Singh and Guestrin, ACL'18](https://aclweb.org/anthology/P18-1079).  There the authors are explicitly looking to find paraphrases that break models.

The improved rewriter is demonstrated [here](http://demo.parabank.io/), and can be downloaded [here](https://github.com/decompositional-semantics-initiative/improved-ParaBank-rewriter/releases/tag/v0.1).

We also made public our augmented [MNLI](http://cs.jhu.edu/~vandurme/data/pMNLI-1.0.tar.gz) and [QA](https://drive.google.com/open?id=1TjzjEvu9xj7aOVd47MMEzDRiL5t1ITn0) data, which is shown to have improved performance of some existing models.
