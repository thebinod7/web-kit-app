import type { Resume } from '@/types/resume';
import { formatDateToDMY, formatDateToMMYY } from './date';

export function downloadResume(resume: Resume) {
    const html = generateResumeHTML(resume);

    // Only open print dialog, don't download HTML
    const printWindow = window.open('', '', 'width=800,height=600');
    if (printWindow) {
        printWindow.document.write(html);
        printWindow.document.close();
        printWindow.focus();

        // Wait for content to load before printing
        printWindow.onload = () => {
            printWindow.print();
            printWindow.close();
        };
    }
}

function generateResumeHTML(resume: Resume): string {
    const {
        personalInfo,
        summary,
        experience,
        education,
        skills,
        projects,
        certifications,
        publications,
    } = resume;

    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>${personalInfo.name} - Resume</title>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          line-height: 1.6;
          color: #1a1a1a;
          background: white;
        }
        ul {
            list-style-type: disc;
            padding-left: 2.25rem;
        }
        ol {
            list-style-type: decimal;
            padding-left: 2.25rem;
        }
        li {
            margin-bottom: 0.25rem;
        }
        .container {
          max-width: 850px;
          margin: 0 auto;
          padding: 40px;
          background: white;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #333;
          padding-bottom: 20px;
        }
        .name {
          font-size: 32px;
          font-weight: 700;
          color: #1a1a1a;
          margin-bottom: 5px;
        }
        .title {
          font-size: 16px;
          color: #555;
          margin-bottom: 10px;
        }
        .contact-info {
          font-size: 13px;
          color: #666;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 15px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .section {
          margin-bottom: 25px;
        }
        .section-title {
          font-size: 14px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          color: #1a1a1a;
          margin-bottom: 12px;
          padding-bottom: 8px;
          border-bottom: 1px solid #ddd;
        }
        .summary-text {
          font-size: 13px;
          line-height: 1.7;
          color: #444;
          text-align: justify;
        }
        .entry {
          margin-bottom: 15px;
        }
        .entry-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 3px;
        }
        .entry-title {
          font-size: 13px;
          font-weight: 600;
          color: #1a1a1a;
        }
        .entry-subtitle {
          font-size: 12px;
          color: #666;
          font-style: italic;
        }
        .entry-date {
          font-size: 12px;
          color: #888;
        }
        .entry-description {
          font-size: 12px;
          color: #555;
          margin-top: 5px;
          line-height: 1.5;
        }
        .skills-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-size: 12px;
        }
        .skill-tag {
          padding: 6px 14px;
          background: #e6f0ff;
          border-radius: 999px; 
          font-size: 14px;
          font-weight: 500;
          border: 1px solid #c7dcff;
          display: inline-block;
        }
        .bullet {
          margin-left: 20px;
          text-indent: -10px;
          margin-bottom: 5px;
          font-size: 12px;
          color: #555;
        }
        .bullet::before {
          content: "• ";
          margin-right: 8px;
        }
        @media (max-width: 600px) {
          .container {
            padding: 20px;
          }
          .name {
            font-size: 24px;
          }
          .contact-info {
            flex-direction: column;
            gap: 8px;
          }
        }
        @media print {
          body {
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 100%;
            margin: 0;
            padding: 0.5in;
          }
          /* Remove browser print headers and footers */
          @page {
            margin: 0.5in;
            size: letter;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="name">${personalInfo.name}</div>
          ${
              personalInfo.title
                  ? `<div class="title">${personalInfo.title}</div>`
                  : ''
          }
          
          <div class="contact-info">
            ${
                personalInfo.location
                    ? `<span class="contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin-icon lucide-map-pin"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg> ${personalInfo.location}</span>`
                    : ''
            }
            ${
                personalInfo.email
                    ? `<span class="contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail-icon lucide-mail"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect x="2" y="4" width="20" height="16" rx="2"/></svg> ${personalInfo.email}</span>`
                    : ''
            }
            ${
                personalInfo.phone
                    ? `<span class="contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-icon lucide-phone"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/></svg> ${personalInfo.phone}</span>`
                    : ''
            }

            ${
                personalInfo.dateOfBirth
                    ? `<span class="contact-item"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-icon lucide-calendar"><path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></svg> ${formatDateToDMY(
                          personalInfo.dateOfBirth
                      )}</span>`
                    : ''
            }
         
            ${
                personalInfo.website
                    ? `<span class="contact-item"><a href="${personalInfo.website}" style="color: #0066cc; text-decoration: none;">Website</a></span>`
                    : ''
            }
            ${
                personalInfo.linkedin
                    ? `<span class="contact-item"><a href="${personalInfo.linkedin}" style="color: #0066cc; text-decoration: none;">LinkedIn</a></span>`
                    : ''
            }
          </div>
        </div>

        ${
            summary
                ? `
          <div class="section">
            <div class="section-title">Summary</div>
            <div class="summary-text">${summary}</div>
          </div>
        `
                : ''
        }

        ${
            experience.length > 0
                ? `
          <div class="section">
            <div class="section-title">Experience</div>
            ${experience
                .map(
                    (exp) => `
              <div class="entry">
                <div class="entry-header">
                  <div>
                    <div class="entry-title">${exp.position}</div>
                    <div class="entry-subtitle">${exp.company}${
                        exp.location ? `, ${exp.location}` : ''
                    }</div>
                  </div>
                  <div class="entry-date">${formatDateToMMYY(exp.startDate)}${
                        exp.endDate
                            ? ` - ${formatDateToMMYY(exp.endDate)}`
                            : ' - Present'
                    }</div>
                </div>
                ${
                    exp.description
                        ? `<div class="entry-description">${exp.description}</div>`
                        : ''
                }
              </div>
            `
                )
                .join('')}
          </div>
        `
                : ''
        }

        ${
            education.length > 0
                ? `
          <div class="section">
            <div class="section-title">Education</div>
            ${education
                .map(
                    (edu) => `
              <div class="entry">
                <div class="entry-header">
                  <div>
                    <div class="entry-title">${edu.degree}${
                        edu.field ? ` in ${edu.field}` : ''
                    }</div>
                    <div class="entry-subtitle">${edu.school}</div>
                  </div>
                  <div class="entry-date">${formatDateToMMYY(
                      edu.graduationDate
                  )}</div>
                </div>
                ${
                    edu.details
                        ? `<div class="entry-description">${edu.details}</div>`
                        : ''
                }
              </div>
            `
                )
                .join('')}
          </div>
        `
                : ''
        }

        ${
            skills.length > 0
                ? `
          <div class="section">
            <div class="section-title">Skills</div>
            <div class="skills-list">
              ${skills
                  .map(
                      (skill) => `<span class="skill-tag">${skill.name}</span>`
                  )
                  .join('')}
            </div>
          </div>
        `
                : ''
        }

        ${
            projects.length > 0
                ? `
          <div class="section">
            <div class="section-title">Projects</div>
            ${projects
                .map(
                    (project) => `
              <div class="entry">
                <div class="entry-header">
                  <div class="entry-title">${project.title}</div>
                </div>
                ${
                    project.description
                        ? `<div class="entry-description">${project.description}</div>`
                        : ''
                }
                ${
                    project.technologies
                        ? `<div class="entry-description"><strong>Technologies:</strong> ${project.technologies}</div>`
                        : ''
                }
                 ${
                     project.link
                         ? `<div class="entry-description"><strong>Link:</strong> <a href="${project.link}" style="color: #0066cc; font-size: 12px; text-decoration: none;">View Project</a></div>`
                         : ''
                 }
              </div>
            `
                )
                .join('')}
          </div>
        `
                : ''
        }

        ${
            certifications.length > 0
                ? `
          <div class="section">
            <div class="section-title">Certifications</div>
            ${certifications
                .map(
                    (cert) => `
              <div class="entry">
                <div class="entry-header">
                  <div class="entry-title">${cert.name}  ${
                        cert.link
                            ? `<a href="${cert.link}" style="color: #0066cc; font-size: 10px; text-decoration: none;">View Certificate</a>`
                            : ''
                    }</div>
                  <div class="entry-date">${formatDateToDMY(cert.date)}</div>
                </div>
                ${
                    cert.issuer
                        ? `<div class="entry-subtitle">Issued By: ${cert.issuer}</div>`
                        : ''
                }
              </div>
            `
                )
                .join('')}
          </div>
        `
                : ''
        }

        ${
            publications.length > 0
                ? `
          <div class="section">
            <div class="section-title">Publications</div>
            ${publications
                .map(
                    (pub) => `
              <div class="entry">
                <div class="entry-header">
                  <div class="entry-title">${pub.title}   ${
                        pub.link
                            ? `<a href="${pub.link}" style="color: #0066cc; font-size: 10px; text-decoration: none;">View Publication</a>`
                            : ''
                    }</div>
                  <div class="entry-date">${formatDateToDMY(pub.date)}</div>
                </div>
                ${
                    pub.publication
                        ? `<div class="entry-subtitle">Published By: ${pub.publication}</div>`
                        : ''
                }
              </div>
            `
                )
                .join('')}
          </div>
        `
                : ''
        }
      </div>
    </body>
    </html>
  `;
}
