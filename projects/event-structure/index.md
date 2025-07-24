---
layout: project
handle: event-structure
search_omit: true
---

Event structure captures the internal composition of events, including their temporal extent, sub-event relationships, and connections to participants. Complex events often involve multiple sub-events with intricate temporal and causal relationships that natural language expresses through various syntactic and lexical devices.

This project extends UDS with annotations for event-structural properties including: whether events have distinguishable subparts, the temporal duration of events, relationships between events and their arguments over time, and hierarchical relationships between events. The annotation framework decomposes these properties into questions about event boundaries, duration, and change over time.

The dataset includes three types of annotations: properties of individual predicates (such as duration and telicity), relationships between predicates and their arguments (such as whether arguments exist before or after the event), and relationships between pairs of predicates (such as temporal ordering and causal relations).

A key contribution is the induction of empirical ontologies from the annotated data using unsupervised generative models. These models jointly learn categories for event types, semantic roles, entity types, and event relations directly from the continuous-valued annotations. The induced ontologies align well with theoretical proposals while revealing additional distinctions not captured in traditional frameworks.
