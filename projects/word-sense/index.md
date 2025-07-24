---
layout: project
handle: wsd
search_omit: true
---

Word sense disambiguation requires determining which meaning of a polysemous word is intended in a given context. Traditional approaches rely on enumerating discrete senses from lexical resources, but word meanings often exhibit gradience and context-dependency that challenges categorical sense inventories.

This project applies the decompositional approach to word sense by having annotators answer binary questions about meaning components rather than selecting from predefined senses. For example, given an occurrence of "bank," annotators might be asked whether the word refers to something financial, whether it refers to a physical location, or whether it involves water.

The annotation framework focuses on frequent polysemous words, with multiple annotators providing judgments for each word occurrence. The binary questions are designed to capture major meaning dimensions while remaining intuitive for untrained annotators. Responses are aggregated to produce continuous values representing the applicability of each semantic property.

This approach enables modeling word sense as a compositional phenomenon where meanings can combine properties in context-specific ways. The framework naturally handles cases of simultaneous activation of multiple senses and provides a more flexible representation for downstream applications in natural language understanding.