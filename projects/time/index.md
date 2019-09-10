---
layout: project
handle: time
search_omit: true
---

We present a novel semantic framework for modeling temporal relations and event durations
that maps pairs of events to real valued scales for the purpose of constructing document-level event timelines. 

Using our framework, we construct the largest temporal relation dataset to date, and use it to train a variety of neural models to jointly predict finegrained (real-valued) temporal relations and event durations, showing not only that our models obtain strong results on our dataset, the representations they learn can be straightforwardly transferred to the standard categorical relation datasets with competitive performance.

For a detailed description of the protocols, datasets, as well as models of these data, please see the following paper:

> Vashishtha, S., B. Van Durme, & A.S. White. 2019. [Fine-Grained Temporal Relation Extraction](https://www.aclweb.org/anthology/P19-1280/). Proceedings of the 57th Annual Meeting of the Association for Computational Linguistics (ACL 2019), Florence, Italy, July 29-31, 2019.

In our results section, we overlooked a nice article that introduces a Global Context Layer (GCL) model and achieves competitive performance on TimeBank-Dense, please see: [Meng and Rumshisky, ACL2018](https://www.aclweb.org/anthology/P18-1049/). 

The code for generating the dataset files for Amazon Mechanical Turk (along with the stylesheets) can be found [here](https://github.com/FACTSlab/factslab-protocols). The fully dockerized code with our best model can be found [here](https://hub.docker.com/r/sidvash/temporal).