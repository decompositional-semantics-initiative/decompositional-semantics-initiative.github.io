---
layout: project
handle: event-structure
search_omit: true
---

Natural language provides many ways to describe complex events. For instance, the same event could be described by a single clause (*the contractor built the house*) or by multiple sentences (*They started by laying the foundation. Then, they framed the house and installed the plumbing...*).

In this work, we aim to capture the *structure* of complex events, augmenting existing UDS with a new dataset for event-structural properties that capture information about such things as the subparts of an event, how they are arranged in time, and how events relate to each other and their participants.

We use this new dataset along with others in UDS to induce an empircal event structure ontology from a generative model based on sentence- and document-level UDS graphs. This ontology is jointly learned with three other ontologies for semantic roles, entities, and event-event relations. In each case, we find that our categories align well with others proposed in the linguistics and computational semantics literature.

Both the data and the protocols are included in the zip archives below. The code for the generative model is available [here](https://github.com/wgantt/event_type_induction).
