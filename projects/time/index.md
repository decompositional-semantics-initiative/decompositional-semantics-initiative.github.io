---
layout: project
handle: time
search_omit: true
---

Temporal relation extraction traditionally employs discrete categories like BEFORE, AFTER, and OVERLAP to characterize how events relate in time. This project develops a continuous-valued approach that captures fine-grained temporal distinctions and event durations using real-valued scales.

The annotation framework decomposes temporal reasoning into two complementary tasks: relation strength and duration assessment. For temporal relations, annotators use slider interfaces to indicate how much earlier one event occurred relative to another, producing scalar values that capture degrees of temporal precedence. For duration, annotators estimate event length on a log-scale from seconds to decades.

The UDS-Time dataset contains annotations for all pairwise temporal relations between events in each document, making it the largest temporal relation dataset to date. The continuous annotations reveal that temporal relations form a spectrum rather than discrete categories, with many event pairs exhibiting partial overlap or vague temporal boundaries.

Neural models trained on this data learn representations that capture both fine-grained temporal distinctions and traditional categorical relations. The continuous framework enables applications including timeline construction, where the scalar annotations can be used to position events along a temporal axis with appropriate uncertainty bounds.