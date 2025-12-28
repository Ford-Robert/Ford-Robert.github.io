---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 5
cv_pdf: assets/pdf/example_pdf.pdf # update to your actual PDF path
description: Download my CV
---

<div class="mt-4">
  <a
    class="btn btn-primary"
    href="{{ page.cv_pdf contains '://' | ternary: page.cv_pdf, page.cv_pdf | relative_url }}"
    target="_blank"
    rel="noopener noreferrer"
  >
    <i class="fa-solid fa-file-pdf"></i> Download CV (PDF)
  </a>
</div>
