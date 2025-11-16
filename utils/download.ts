import type { Resume } from '@/types/resume';

export function downloadResume(resume: Resume) {
    const html = generateResumeHTML(resume);
    const element = document.createElement('a');
    const file = new Blob([html], { type: 'text/html' });
    element.href = URL.createObjectURL(file);
    element.download = `${
        resume.personalInfo.name.replace(/\s+/g, '_') || 'Resume'
    }.html`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    // For PDF, open print dialog
    setTimeout(() => {
        const printWindow = window.open('', '', 'width=800,height=600');
        if (printWindow) {
            printWindow.document.write(html);
            printWindow.document.close();
            printWindow.focus();
            printWindow.print();
            printWindow.close();
        }
    }, 100);
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
          background: #f0f0f0;
          padding: 4px 10px;
          border-radius: 3px;
          color: #333;
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
                personalInfo.email
                    ? `<span class="contact-item">${personalInfo.email}</span>`
                    : ''
            }
            ${
                personalInfo.phone
                    ? `<span class="contact-item">${personalInfo.phone}</span>`
                    : ''
            }
            ${
                personalInfo.location
                    ? `<span class="contact-item">${personalInfo.location}</span>`
                    : ''
            }
            ${
                personalInfo.website
                    ? `<span class="contact-item"><a href="${personalInfo.website}" style="color: #0066cc; text-decoration: none;">${personalInfo.website}</a></span>`
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
                  <div class="entry-date">${exp.startDate}${
                        exp.endDate ? ` - ${exp.endDate}` : ' - Present'
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
                  <div class="entry-date">${edu.graduationDate}</div>
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
                  <div class="entry-title">${cert.name}</div>
                  <div class="entry-date">${cert.date}</div>
                </div>
                ${
                    cert.issuer
                        ? `<div class="entry-subtitle">${cert.issuer}</div>`
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
                  <div class="entry-title">${pub.title}</div>
                  <div class="entry-date">${pub.date}</div>
                </div>
                ${
                    pub.publication
                        ? `<div class="entry-subtitle">${pub.publication}</div>`
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
