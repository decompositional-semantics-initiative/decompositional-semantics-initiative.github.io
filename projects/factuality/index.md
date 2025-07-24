---
layout: project
handle: factuality
search_omit: true
---

Factuality concerns whether events described in text actually occurred, are occurring, or will occur. This semantic property is mediated by various linguistic devices including modal auxiliaries, negation, conditionality, and evidential markers that signal speaker commitment to the truth of propositions.

The annotation framework decomposes factuality into two orthogonal dimensions: the factuality value itself (ranging from definitely did not happen to definitely happened) and the speaker's confidence in that assessment. This two-dimensional approach captures uncertainty inherent in natural language, where speakers often hedge claims or report information from other sources.

Annotators assess factuality through questions about whether events happened in the actual world according to the speaker, with confidence ratings capturing epistemic uncertainty. The framework handles complex linguistic phenomena including embedded clauses, reported speech, and hypothetical scenarios.

The resulting annotations enable computational models to perform factuality prediction as a regression task rather than classification, better reflecting the gradient nature of certainty in natural language. Applications include information extraction systems that need to distinguish factual claims from speculation or misinformation detection systems.