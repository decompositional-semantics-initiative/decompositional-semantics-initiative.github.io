# Decomp website

This repository contains the source for the [Decompositional Semantics
Initiative website](http://decomp.io). It uses the [So Simple
Theme](http://mmistakes.github.io/so-simple-theme/) by [Michael
Rose](http://mademistakes.com). To learn how to install and use this theme check
out the [Setup Guide](http://mmistakes.github.io/so-simple-theme/theme-setup/).

## Modifying site (meta)data

As a member of Decomp, there are two sorts of (meta)data you may want to add to
the site: (meta)data about a researcher or (meta)data about a project.

### Adding a researcher

There are three steps to adding a researcher to the
[Researchers](http://decomp.io/researchers/) page.

1. Create an entry for the researcher in the `_data/researchers.yml` file within
the relevant group's `people` hash with a key built from the first letter of the
researcher's first name plus their last name and a metadata hash with six
entries: `name`, `role`, `affiliation`, `website`, `email`, and `projects`. For
instance, Benjamin Van Durme falls within the `faculty` group, so we create an
entry in the `people` hash for that group with a key `bvandurme`.

```
faculty:
  name: Faculty
  people:
    bvandurme:
      name: Benjamin Van Durme
      role: Assistant Professor of Computer Science
      affiliation: Johns Hopkins University
      website: http://www.cs.jhu.edu/~vandurme/
      email: vandurme@cs.jhu.edu
      projects:
        - spr
        - factuality
        - genericity
        - time
        - wsd
        - commonsense
        - dnc
```

Note that all entries are string-valued, except `projects`, which maps to a list
of strings. The strings contained within `projects` are handles associated with
each project. It is important that these handles match the keys found in the
top-level hash in `_data/projects.yml`, because the `project` list is used to
populate the Researchers section of project pages. For instance, because `spr`
is found in Ben's projects list and because the `spr` key in
`_data/projects.yml` is associated with the _Semantic Proto-Roles_ project, his
avatar is part of the researchers section of the [_Semantic Proto-Roles_ project
page](http://decomp.io/projects/http://decomp.io/projects/semantic-proto-roles/).

2. Place a square `.jpg` image of the researcher into the `images/` directory
with a filename that matches that researcher's handle. For instance,
`images/bvandurme.jpg` is the image associated with Benjamin Van Durme. Please
make sure this `.jpg` uses the `.jpg` extension, not the `.jpeg` extension.

3. Create a `.md` file in the `researchers/` directory with a name that matches
the researcher's handle. This will be the researcher page. At the top of the
file place the following metadata – where `<HANDLE>` is replaced with the
researcher's handle from `_data/researchers.yml`.

```
---
layout: researcher
group: faculty
handle: <HANDLE>
search_omit: true
---
```

For instance, the researcher page associated with Benjamin Van Durme would have
the following metadata.

```
---
layout: researcher
group: faculty
handle: bvandurme
search_omit: true
---
```

After the metadata, include a description of the researcher. The projects and
website links will be automatically populated from the project metadata in
`_data/researchers.yml`.

### Adding a project

There are four steps to adding a researcher to the
[Projects](http://decomp.io/projects/) and [Data](http://decomp.io/data/) pages.

1. Create an entry for the project in the `_data/projects.yml` file with a
metadata hash containing three entries: `title`, `url`, and either `repository`
(for code projects) or `datasets` (for annotation projects). For instance, the
_PredPatt_ project is a code project, so it has `title`, `url`, and
`repository`.

```
predpatt:
  title: PredPatt
  url: predpatt/
  repository: https://github.com/hltcoe/PredPatt
```

In contrast, the _Semantic Proto-Roles_ project is an annotation project, so its
hash contains the keys `title`, `url`, and `datasets`.

```
spr:
  title: Semantics Proto-Roles
  url: semantic-proto-roles/
  datasets:
    - name: v1
      filetype: tar.gz
      corpus: Penn TreeBank
      url: protoroles_eng_pb.tar.gz
      trainsize: XXXXX
      devsize: XXXXX
      testsize: XXXXX
    - name: v2
      filetype: tar.gz
      corpus: English Web TreeBank
      url: protoroles_eng_udewt.tar.gz
      trainsize: XXXXX
      devsize: XXXXX
      testsize: XXXXX
```

Note that all entries for an annotation project are string-valued, except
`datasets`, which maps to a list of hashes. The hashes contained within
`projects` are contain metadata that are used to populate the table in the
[Data](http://decomp.io/data/) page. Each hash must have seven entries: `name`,
`filetype`, `corpus`, `url`, `trainsize`, `devsize`, and `testsize`.

2. Create a directory for the project with a name that matches the value of
`url` you entered into `_data/projects.yml`. For instance, the directory
associated with the _Semantic Proto-Roles_ project would be named
`semantic-proto-roles`.

3. Create a file `index.md` within the directory you just made. This will be the
project page. At the top of the file place the following metadata – where
`<HANDLE>` is replaced with the project's handle from `_data/projects.yml`.

```
---
layout: project
handle: <HANDLE>
search_omit: true
---
```

For instance, the project page associated with the _Semantic Proto-Roles_
project would have the following metadata.

```
---
layout: project
handle: spr
search_omit: true
---
```

After the metadata, include a description of the project along with citations.
The data/code links and researcher section will be automatically populated from
the project metadata in `_data/projects.yml`.

4. If the project is an annotation project, place any datasets associated with
that project in the project directory – i.e. the same directory containing the
project page.
