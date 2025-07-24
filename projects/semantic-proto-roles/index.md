---
layout: project
handle: spr
search_omit: true
---

Traditional thematic role systems employ discrete categories like AGENT and PATIENT to characterize participant involvement in events. Following Dowty's (1991) proto-role theory, this project decomposes these coarse categories into fine-grained semantic properties that capture dimensions of meaning such as volition, sentience, causation, and change of state.

The annotation framework operationalizes proto-role properties through simple binary questions about event participants. For example, rather than determining if an argument is an AGENT, annotators answer specific questions about whether the participant wanted the event to happen, was aware of the event, or caused the event. These responses are aggregated to produce scalar values representing the degree to which each property applies.

The datasets include annotations for both Penn TreeBank and Universal Dependencies corpora, with properties annotated for all predicate-argument pairs identified by PredPatt. The continuous-valued nature of the annotations enables modeling graded semantic phenomena and soft clustering of semantic roles.

Computational models trained on this data demonstrate that proto-role properties provide strong predictive signal for syntactic realization patterns, supporting theoretical claims about the syntax-semantics interface. The framework has been extended to model lexical semantic relationships and selectional preferences.