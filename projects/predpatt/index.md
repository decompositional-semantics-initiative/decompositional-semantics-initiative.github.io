---
layout: project
handle: predpatt
search_omit: true
---

PredPatt extracts predicate-argument structures from Universal Dependencies trees using a rule-based system that identifies predicative patterns and their arguments. The system operates directly on dependency parses, making it applicable to any language with Universal Dependencies annotations.

The extraction rules identify both verbal and nominal predications, handling complex linguistic phenomena including control structures, coordination, relative clauses, and other syntactic constructions that affect argument realization. PredPatt normalizes these diverse surface patterns into a common predicate-argument format.

The framework serves as the structural foundation for UDS annotations, with each identified predicate and argument serving as an anchor point for semantic attribute annotations. This design enables the layering of semantic properties onto syntactically-derived structures without requiring semantic parsing or role labeling.

Empirical evaluations demonstrate that PredPatt achieves superior precision and recall compared to Open Information Extraction systems while maintaining cross-linguistic applicability through its Universal Dependencies foundation.