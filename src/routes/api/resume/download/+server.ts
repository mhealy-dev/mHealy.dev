import type { RequestHandler } from "./$types";
import puppeteer from "puppeteer";

// Resume data optimized for ATS/AI parsing
const resumeData = {
  name: "Michael Healy",
  title: "Platform Engineer",
  contact: {
    email: "mhealy.dev@gmail.com",
    phone: "+64 022 074 8914",
    location: "Mangawhai Heads, New Zealand",
    github: "github.com/mhealy-dev",
    linkedin: "linkedin.com/in/michael-healy-5aabaa161",
  },
  summary:
    "Platform Engineer with expertise in automation, cloud infrastructure, and full-stack development. Specialized in building scalable solutions using Go, Python, and Infrastructure as Code practices. Proven track record of improving operational efficiency and implementing innovative solutions across global technology stacks.",
  experience: [
    {
      title: "Platform Engineer",
      company: "YUM! Brands",
      period: "FEB 2025 - PRESENT",
      location: "Chicago",
      highlights: ["To be determined"],
    },
    {
      title: "Sr. Production Support Analyst",
      company: "YUM! Brands",
      period: "FEB 2024 - JAN 2025",
      location: "Chicago",
      highlights: [
        "Developed and implemented automation, integrations, and monitoring tools supporting Yum's global stack",
        "Designed and deployed infrastructure solutions using Python, JavaScript, and Terraform",
        "Led initiatives with SRE and Platform Engineering teams to implement Incident.io and Retool",
        "Established structured training sessions and maintained centralized Git repository for team tooling",
      ],
    },
    {
      title: "Production Support Analyst III",
      company: "Taco Bell",
      period: "SEP 2023 - FEB 2024",
      location: "Irvine",
      highlights: [
        "Developed tailored dashboards and automation scripts for NGPOS project",
        "Contributed to production code development and deployment",
        "Maintained and improved knowledge-sharing structures and documentation",
      ],
    },
    {
      title: "Production Support Analyst II",
      company: "Taco Bell",
      period: "SEP 2022 - SEP 2023",
      location: "Irvine",
      highlights: [
        "Spearheaded development of customized dashboards and applications for NGPOS support",
        "Coordinated deployments and issues across cross-functional teams",
        "Designed and implemented new knowledge and training structure for FOH products",
      ],
    },
  ],
  skills: {
    "Programming Languages": [
      "Go",
      "Python",
      "JavaScript",
      "TypeScript",
      "SQL",
      "Bash",
    ],
    "Cloud & Infrastructure": [
      "AWS (Lambda, EC2, DynamoDB, S3, SQS, CloudWatch, CloudFormation, KMS)",
      "Terraform",
      "Terragrunt",
      "Infrastructure as Code",
    ],
    "DevOps & Tools": [
      "Docker",
      "Kubernetes",
      "CI/CD",
      "Git",
      "Jenkins",
      "DataDog",
      "Retool",
    ],
    Frameworks: [
      "React",
      "Node.js",
      "Serverless Framework",
      "React Native",
      "Expo",
    ],
  },
  education: "Full-Stack Developer Certificate - Bethel School of Technology",
  certifications: ["CompTIA A+ - CompTIA"],
};

export const GET: RequestHandler = async ({ url }) => {
  try {
    // Generate clean HTML for PDF
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${resumeData.name} - Resume</title>
	<style>
		* {
			margin: 0;
			padding: 0;
			box-sizing: border-box;
		}

		body {
			font-family: 'Calibri', 'Arial', sans-serif;
			font-size: 11pt;
			line-height: 1.6;
			color: #2c3e50;
			background: #ffffff;
			padding: 0;
			margin: 0;
		}

		.container {
			max-width: 800px;
			margin: 0 auto;
			padding: 30px 40px;
		}

		/* Header */
		.header {
			text-align: center;
			margin-bottom: 30px;
			position: relative;
			padding-bottom: 20px;
		}

		.header::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 100px;
			height: 3px;
			background: linear-gradient(to right, #3498db, #2ecc71);
		}

		.name {
			font-size: 32pt;
			font-weight: 300;
			margin-bottom: 5px;
			color: #2c3e50;
			letter-spacing: 2px;
		}

		.title {
			font-size: 16pt;
			margin-bottom: 15px;
			color: #3498db;
			font-weight: 500;
			letter-spacing: 1px;
		}

		.contact {
			font-size: 10pt;
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			gap: 20px;
			color: #7f8c8d;
		}

		.contact span {
			color: #bdc3c7;
		}

		.contact a {
			color: #3498db;
			text-decoration: none;
			transition: color 0.3s;
		}

		.contact a:hover {
			color: #2980b9;
			text-decoration: underline;
		}

		/* Sections */
		.section {
			margin-bottom: 25px;
		}

		.section-title {
			font-size: 13pt;
			font-weight: 600;
			margin-bottom: 15px;
			text-transform: uppercase;
			color: #2c3e50;
			letter-spacing: 1.5px;
			position: relative;
			padding-left: 15px;
		}

		.section-title::before {
			content: '';
			position: absolute;
			left: 0;
			top: 50%;
			transform: translateY(-50%);
			width: 4px;
			height: 20px;
			background: #3498db;
		}

		/* Summary */
		.summary {
			text-align: justify;
			margin-bottom: 25px;
			padding: 15px;
			background: #f8f9fa;
			border-left: 3px solid #3498db;
			color: #34495e;
			font-size: 10.5pt;
			line-height: 1.7;
		}

		/* Experience */
		.job {
			margin-bottom: 20px;
			padding: 15px;
			background: #ffffff;
			border: 1px solid #ecf0f1;
			border-radius: 5px;
			transition: all 0.3s;
		}

		.job:hover {
			box-shadow: 0 2px 5px rgba(0,0,0,0.1);
			border-color: #3498db;
		}

		.job-header {
			display: flex;
			justify-content: space-between;
			align-items: baseline;
			margin-bottom: 8px;
		}

		.job-title {
			font-weight: 600;
			font-size: 13pt;
			color: #2c3e50;
		}

		.company {
			font-style: normal;
			color: #3498db;
			font-weight: 500;
		}

		.period {
			font-size: 10pt;
			color: #7f8c8d;
			font-weight: 500;
		}

		.highlights {
			list-style: none;
			margin-left: 0;
			margin-top: 10px;
			padding-left: 0;
		}

		.highlights li {
			margin-bottom: 6px;
			padding-left: 20px;
			position: relative;
			color: #34495e;
			font-size: 10.5pt;
		}

		.highlights li::before {
			content: '▸';
			position: absolute;
			left: 0;
			color: #3498db;
			font-weight: bold;
		}

		/* Skills */
		.skills-grid {
			display: grid;
			grid-template-columns: 1fr 1fr;
			gap: 20px;
			background: #f8f9fa;
			padding: 20px;
			border-radius: 5px;
		}

		.skill-category {
			margin-bottom: 0;
		}

		.skill-category-title {
			font-weight: 600;
			font-size: 11pt;
			margin-bottom: 8px;
			color: #2c3e50;
		}

		.skill-list {
			font-size: 10pt;
			color: #34495e;
			line-height: 1.6;
		}

		/* Education & Certifications */
		.education-section {
			background: #f8f9fa;
			padding: 20px;
			border-radius: 5px;
		}

		.education-item {
			margin-bottom: 8px;
			color: #34495e;
		}

		.education-item strong {
			color: #2c3e50;
			font-weight: 600;
		}

		/* Print optimization */
		@page {
			margin: 0.5in;
			size: letter;
		}

		@media print {
			body {
				print-color-adjust: exact;
				-webkit-print-color-adjust: exact;
			}
		}
	</style>
</head>
<body>
	<div class="container">
		<!-- Header -->
		<div class="header">
			<h1 class="name">${resumeData.name}</h1>
			<h2 class="title">${resumeData.title}</h2>
			<div class="contact">
				<span>${resumeData.contact.email}</span>
				<span>|</span>
				<span>${resumeData.contact.phone}</span>
				<span>|</span>
				<span>${resumeData.contact.location}</span>
				<span>|</span>
				<a href="https://${resumeData.contact.github}" target="_blank">GitHub</a>
				<span>|</span>
				<a href="https://${resumeData.contact.linkedin}" target="_blank">LinkedIn</a>
			</div>
		</div>

		<!-- Summary -->
		<div class="section">
			<h3 class="section-title">Professional Summary</h3>
			<div class="summary">
				${resumeData.summary}
			</div>
		</div>

		<!-- Experience -->
		<div class="section">
			<h3 class="section-title">Professional Experience</h3>
			${resumeData.experience
        .map(
          (job) => `
				<div class="job">
					<div class="job-header">
						<div>
							<span class="job-title">${job.title}</span> |
							<span class="company">${job.company}</span>, ${job.location}
						</div>
						<span class="period">${job.period}</span>
					</div>
					<ul class="highlights">
						${job.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
					</ul>
				</div>
			`,
        )
        .join("")}
		</div>

		<!-- Skills -->
		<div class="section">
			<h3 class="section-title">Technical Skills</h3>
			<div class="skills-grid">
				${Object.entries(resumeData.skills)
          .map(
            ([category, skills]) => `
					<div class="skill-category">
						<div class="skill-category-title">${category}:</div>
						<div class="skill-list">${skills.join(", ")}</div>
					</div>
				`,
          )
          .join("")}
			</div>
		</div>

		<!-- Education & Certifications -->
		<div class="section">
			<h3 class="section-title">Education & Certifications</h3>
			<div class="education-section">
				<div class="education-item">
					<strong>Education:</strong> ${resumeData.education}
				</div>
				<div class="education-item">
					<strong>Certifications:</strong> ${resumeData.certifications.join(", ")}
				</div>
			</div>
		</div>
	</div>
</body>
</html>
		`;

    // Launch puppeteer
    const browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Set content directly instead of navigating
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    // Generate PDF
    const pdf = await page.pdf({
      format: "letter",
      printBackground: false,
      margin: {
        top: "0",
        right: "0",
        bottom: "0",
        left: "0",
      },
    });

    await browser.close();

    // Return PDF with appropriate headers
    return new Response(pdf, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="Michael_Healy_Resume.pdf"',
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    });
  } catch (error) {
    console.error("PDF generation error:", error);
    return new Response("Error generating PDF", { status: 500 });
  }
};
