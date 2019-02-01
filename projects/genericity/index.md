---
layout: project
handle: genericity
search_omit: true
---

An important line of study in formal semantics, philosophy, and AI investigates how language is used to represent knowledge of kinds, regularities and patterns. For instance, how do we know that *lions roar* describes a generalization about a kind of thing (lions), while *those lions roared* describes a specific event in which particular lions participated?

In this line of work, we propose a novel framework for capturing linguistic expressions of generalization. We suggest that linguistic expressions of generalization should be captured in a continuous multi-label system, rather than a multi-class system. We do this by decomposing categories such as EPISODIC, HABITUAL, and GENERIC into simple referential properties of predicates and their arguments.

For a detailed description of the protocols, datasets as well as models of these data, please see the following paper:

> V. S. Govindarajan, B. Van Durme, & White, A. S. 2019. [Decomposing Generalization: Models of Generic, Habitual, and Episodic Statements](https://arxiv.org/abs/1901.11429).

The code for generating the dataset files for Amazon Mechanical Turk (along with the stylesheets) can be found [here](https://github.com/FACTSlab/factslab-protocols). The code for the experiments described in the paper can be found [here](https://github.com/FACTSlab/factslab-python)
