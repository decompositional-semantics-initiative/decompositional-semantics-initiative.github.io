---
layout: project
handle: parabank2
search_omit: true
---

Producing diverse paraphrases of a sentence is a challenging task. Natural paraphrase corpora are scarce and limited, while existing large-scale resources are automatically generated via back-translation and rely on beam search, which tends to lack diversity. We describe ParaBank 2, a new resource that contains multiple diverse sentential paraphrases, produced from a bilingual corpus using negative constraints, inference sampling, and clustering. We show that ParaBank 2 significantly surpasses prior work in both lexical and syntactic diversity while being meaning-preserving, as measured by human judgments and standardized metrics. Further, we illustrate how such paraphrastic resources may be used to refine contextualized encoders, leading to improvements in downstream tasks.
For a detailed description of the collection and our methods, please see the following papers:

> Hu, J. E., A. Singh, N. Holzenberger, M. Post, & B. Van Durme. 2019. [Large-scale, Diverse, Paraphrastic Bitexts via Sampling and Clustering](https://mjpost.github.io/papers/hu-etal-2019-large-scale.pdf). Proceedings of CoNLL 2019, Hong Kong, Nov 3 – Nov 7, 2019.

