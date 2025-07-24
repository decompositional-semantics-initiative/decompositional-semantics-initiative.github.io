---
layout: project
handle: parsing
search_omit: true
---

Semantic parsing aims to map natural language to structured meaning representations. Traditional approaches rely on discrete categorical labels for semantic roles and relations, which can be brittle when faced with non-prototypical language use and difficult to port across domains or languages.

Universal Decompositional Semantic parsing addresses these limitations by jointly learning to predict both semantic graph structures and their associated real-valued attributes. This approach decomposes complex semantic phenomena into scalar-valued dimensions that capture graded properties of predicates and their arguments.

The parsing models employ neural architectures that perform joint syntactic and semantic analysis, learning compositional representations that can handle cross-lingual transfer and domain adaptation. These parsers are trained on the UDS corpus, which provides continuous-valued annotations for multiple semantic properties anchored to Universal Dependencies trees.

Key technical contributions include multitask learning frameworks that jointly model syntax and semantics, graph-based neural architectures for structured prediction, and cross-lingual transfer learning techniques that leverage the language-neutral nature of the decompositional semantic representations. 
