---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 5
cv_pdf: assets/pdf/rob_resume.pdf # update to your actual PDF path
description: Download my CV
---

<div class="mt-4 mb-4">
  <a
    class="btn btn-primary"
    href="{{ page.cv_pdf contains '://' | ternary: page.cv_pdf, page.cv_pdf | relative_url }}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
  </a>
</div>

## Contact

- **Name:** Robert Ford  
- **Email:** <a href="mailto:robert.ford@mail.utoronto.ca">robert.ford@mail.utoronto.ca</a>
- **GitHub:** <https://github.com/Ford-Robert/Ford-Robert.github.io>

## Professional Experience

**Alpha Coding — Private Tutor (Toronto)** | 2021–2022  
- Tutored learners (ages 10–17) in Python fundamentals and advanced concepts.  
- Created lesson plans and tracked learning progression.

## Education

**University of Toronto** | Bachelor of Science, 2021–2025  
- Major: Statistics  
- Minors: Computer Science, History

## Projects

**Information Sharing in Bayesian Neural Networks** | 2024  
- Applied Bayesian hierarchical modelling to share statistical strength across units, regularizing activations and reducing dead units/gradient blow-up.

**YouTube Agent** | 2025  
- Built an automated YouTube Shorts agent (MCP + industry tooling) that generates, renders, and uploads videos end-to-end.  
- Implemented a data pipeline to pull YouTube Analytics (watch time, likes) and applied experimentation to optimize engagement.

**Preventing Model Collapse** | 2025  
- Tackled generative model degradation when trained on synthetic outputs.  
- Used bi-level optimization: an outer-loop foundation model learns to generate synthetic datasets that keep inner-loop models robust to collapse.
