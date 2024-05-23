import React from 'react'

export default function SectionTitle({headTitle,para}) {
  return (
    <div class="row sections-detail">
          <div class="col-12">
            <h2 class="section-title">{headTitle}</h2>
            <p class="section-title-desc">{para}</p>
          </div>
        </div>
  )
}
