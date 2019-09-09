---
layout: project
handle: time
search_omit: true
---

We present a novel semantic framework for modeling temporal relations and event durations
that maps pairs of events to real valued scales for the purpose of constructing document-level event timelines. 

Using our framework, we construct the largest temporal relation dataset to date, and use it to train a variety of neural models to jointly predict finegrained (real-valued) temporal relations and event durations, showing not only that our models obtain strong results on our dataset, the representations they learn can be straightforwardly transferred to the standard categorical relation datasets with competitive performance.

For a detailed description of the protocols, datasets, as well as models of these data, please see the following paper:

> Vashishtha, S., B. Van Durme, & A.S. White. 2019. [Fine-Grained Temporal Relation Extraction](https://www.aclweb.org/anthology/P19-1280/). 

The code for generating the dataset files for Amazon Mechanical Turk (along with the stylesheets) can be found [here](https://github.com/FACTSlab/factslab-protocols). The fully dockerized code with our best model can be found [here](https://hub.docker.com/r/sidvash/temporal).