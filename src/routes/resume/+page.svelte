<script lang="ts">
    import { browser } from "$app/environment";

    let isGeneratingPDF = $state(false);

    async function handleDownloadPDF() {
        if (!browser) return;

        isGeneratingPDF = true;

        try {
            // Use client-side generation for GitHub Pages
            const { jsPDF } = await import("jspdf");

            // Create a clean PDF optimized for ATS
            const pdf = new jsPDF("p", "pt", "letter");

            // Set fonts
            pdf.setFont("helvetica");

            // Helper functions
            const addText = (
                text: string,
                x: number,
                y: number,
                size: number = 11,
                style: string = "normal",
            ) => {
                pdf.setFontSize(size);
                pdf.setFont("helvetica", style);
                pdf.text(text, x, y);
            };

            const addLine = (y: number) => {
                pdf.setLineWidth(0.5);
                pdf.line(40, y, 572, y);
            };

            let yPos = 60;

            // Header
            addText(resumeData.name, 306, yPos, 24, "bold");
            yPos += 30;
            addText(resumeData.title, 306, yPos, 14);
            yPos += 25;

            // Contact info
            pdf.setFontSize(10);
            const contactInfo = `${resumeData.contact.email} | ${resumeData.contact.location}`;
            pdf.text(contactInfo, 306, yPos, { align: "center" });
            yPos += 15;
            const socialInfo = `GitHub: ${resumeData.contact.github} | LinkedIn: ${resumeData.contact.linkedin}`;
            pdf.text(socialInfo, 306, yPos, { align: "center" });
            yPos += 25;

            // Professional Summary
            addLine(yPos);
            yPos += 20;
            addText("PROFESSIONAL SUMMARY", 40, yPos, 12, "bold");
            yPos += 20;

            // Wrap summary text
            const summaryLines = pdf.splitTextToSize(resumeData.summary, 532);
            pdf.setFontSize(11);
            pdf.setFont("helvetica", "normal");
            summaryLines.forEach((line: string) => {
                pdf.text(line, 40, yPos);
                yPos += 16;
            });
            yPos += 10;

            // Experience
            addLine(yPos);
            yPos += 20;
            addText("PROFESSIONAL EXPERIENCE", 40, yPos, 12, "bold");
            yPos += 20;

            resumeData.experience.slice(0, 4).forEach((job) => {
                // Job header
                pdf.setFont("helvetica", "bold");
                pdf.setFontSize(11);
                pdf.text(job.title, 40, yPos);
                pdf.setFont("helvetica", "normal");
                pdf.text(job.period, 572, yPos, { align: "right" });
                yPos += 16;

                pdf.setFont("helvetica", "italic");
                pdf.text(`${job.company}, ${job.location}`, 40, yPos);
                yPos += 16;

                // Highlights
                pdf.setFont("helvetica", "normal");
                job.highlights.forEach((highlight) => {
                    if (yPos > 700) {
                        pdf.addPage();
                        yPos = 60;
                    }
                    const bulletLines = pdf.splitTextToSize(
                        `• ${highlight}`,
                        520,
                    );
                    bulletLines.forEach((line: string, index: number) => {
                        pdf.text(index === 0 ? line : `  ${line}`, 50, yPos);
                        yPos += 16;
                    });
                });
                yPos += 10;
            });

            // Check if we need a new page for skills
            if (yPos > 600) {
                pdf.addPage();
                yPos = 60;
            }

            // Skills
            addLine(yPos);
            yPos += 20;
            addText("TECHNICAL SKILLS", 40, yPos, 12, "bold");
            yPos += 20;

            Object.entries(resumeData.skills).forEach(([category, skills]) => {
                pdf.setFont("helvetica", "bold");
                pdf.text(`${category}:`, 40, yPos);
                pdf.setFont("helvetica", "normal");

                const skillsText = (skills as string[]).join(", ");
                const skillLines = pdf.splitTextToSize(skillsText, 480);
                skillLines.forEach((line: string, index: number) => {
                    pdf.text(line, 140, yPos + index * 16);
                });
                yPos += skillLines.length * 16 + 10;
            });

            // Education & Certifications
            if (yPos > 700) {
                pdf.addPage();
                yPos = 60;
            }

            addLine(yPos);
            yPos += 20;
            addText("EDUCATION & CERTIFICATIONS", 40, yPos, 12, "bold");
            yPos += 20;

            pdf.setFont("helvetica", "normal");
            resumeData.education.forEach((edu) => {
                pdf.text(`${edu.degree} - ${edu.school}`, 40, yPos);
                yPos += 16;
                if (edu.focus) {
                    pdf.text(`Focus: ${edu.focus}`, 40, yPos);
                    yPos += 16;
                }
            });

            yPos += 10;
            resumeData.certifications.forEach((cert) => {
                pdf.text(`${cert.name} - ${cert.issuer}`, 40, yPos);
                yPos += 16;
            });

            pdf.save("Michael_Healy_Resume.pdf");
        } catch (error) {
            console.error("PDF generation error:", error);
            alert("Unable to generate PDF. Please try again later.");
        } finally {
            isGeneratingPDF = false;
        }
    }

    // Resume data structure
    const resumeData = {
        name: "Michael Healy",
        title: "Platform Engineer",
        contact: {
            email: "mhealy.dev@gmail.com",
            location: "New Zealand",
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
            {
                title: "Production Support Analyst I",
                company: "Taco Bell",
                period: "DEC 2021 - SEP 2022",
                location: "Irvine",
                highlights: [
                    "Ensured reliability and stability of NextGen POS system",
                    "Developed foundational knowledge base structure and training materials",
                ],
            },
            {
                title: "Reliability Engineer",
                company: "Staffmark Investment LLC",
                period: "OCT 2020 - DEC 2021",
                location: "Irvine",
                highlights: [
                    "Supported reliability and stability of NextGen POS system",
                    "Coordinated deployments and facilitated team communication",
                    "Developed initial knowledge and training materials",
                ],
            },
        ],
        skills: {
            Languages: [
                "Go",
                "Python",
                "JavaScript (React, Node.js)",
                "HTML/CSS",
                "SQL",
            ],
            "Cloud & Infrastructure": [
                "AWS (Lambda, EC2, DynamoDB, S3, SQS, CloudWatch, CloudFormation, KMS)",
                "Terraform",
                "Terragrunt",
                "Serverless Framework",
            ],
            "Tools & Platforms": [
                "Git",
                "Docker",
                "Retool",
                "DataDog",
                "Android/iOS App Development (Expo)",
            ],
            Databases: ["MySQL", "DynamoDB", "Parameter Store"],
        },
        education: [
            {
                degree: "Full-Stack Developer Certificate",
                school: "Bethel School of Technology",
                focus: "JavaScript, HTML, CSS",
            },
        ],
        certifications: [
            {
                name: "CompTIA A+",
                issuer: "CompTIA",
                description: "General Hardware and Software knowledge",
            },
        ],
    };
</script>

<svelte:head>
    <title>Resume - Michael Healy</title>
    <meta
        name="description"
        content="Resume of Michael Healy - Platform Engineer specializing in cloud infrastructure and DevOps"
    />
</svelte:head>

<div class="min-h-screen pt-20 pb-12">
    <div class="section-container max-w-4xl">
        <!-- Header with Download button -->
        <div class="flex justify-between items-center mb-8 no-print">
            <h1 class="text-3xl font-bold gradient-text">Resume</h1>
            <button
                onclick={handleDownloadPDF}
                class="btn btn-primary text-sm"
                disabled={isGeneratingPDF}
            >
                {#if isGeneratingPDF}
                    <svg
                        class="animate-spin w-4 h-4 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            class="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            stroke-width="4"
                        ></circle>
                        <path
                            class="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                    </svg>
                    Generating...
                {:else}
                    <svg
                        class="w-4 h-4 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    Download PDF
                {/if}
            </button>
        </div>

        <!-- Resume Content -->
        <div class="resume-container card p-8 md:p-12 relative overflow-hidden">
            <!-- Background decoration -->
            <div
                class="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-3xl opacity-5"
            ></div>
            <div
                class="absolute bottom-0 left-0 w-96 h-96 bg-secondary-500 rounded-full blur-3xl opacity-5"
            ></div>

            <!-- Header -->
            <header class="text-center mb-10 relative z-10">
                <h1
                    class="text-5xl font-light text-primary-100 mb-3 tracking-wide"
                >
                    {resumeData.name}
                </h1>
                <h2
                    class="text-2xl text-primary-300 mb-6 font-medium tracking-wider"
                >
                    {resumeData.title}
                </h2>

                <!-- Decorative line -->
                <div
                    class="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-400 mx-auto mb-6"
                ></div>

                <div
                    class="flex flex-wrap justify-center gap-2 text-sm text-gray-400"
                >
                    <a
                        href="mailto:{resumeData.contact.email}"
                        class="px-3 py-1 rounded-full border border-gray-700 hover:border-primary-500 hover:text-primary-300 transition-all duration-300"
                    >
                        <svg
                            class="w-4 h-4 inline mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                            />
                        </svg>
                        {resumeData.contact.email}
                    </a>
                    <span class="px-3 py-1 rounded-full border border-gray-700">
                        <svg
                            class="w-4 h-4 inline mr-1"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        {resumeData.contact.location}
                    </span>
                    <a
                        href="https://{resumeData.contact.github}"
                        target="_blank"
                        class="px-3 py-1 rounded-full border border-gray-700 hover:border-primary-500 hover:text-primary-300 transition-all duration-300"
                    >
                        <svg
                            class="w-4 h-4 inline mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                            />
                        </svg>
                        GitHub
                    </a>
                    <a
                        href="https://{resumeData.contact.linkedin}"
                        target="_blank"
                        class="px-3 py-1 rounded-full border border-gray-700 hover:border-primary-500 hover:text-primary-300 transition-all duration-300"
                    >
                        <svg
                            class="w-4 h-4 inline mr-1"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
                            />
                        </svg>
                        LinkedIn
                    </a>
                </div>
            </header>

            <!-- Summary -->
            <section class="mb-10 relative z-10">
                <h3
                    class="text-xl font-semibold text-primary-200 mb-4 flex items-center"
                >
                    <span
                        class="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 mr-3"
                    ></span>
                    Professional Summary
                </h3>
                <div
                    class="bg-gray-900 bg-opacity-50 p-6 rounded-lg border border-gray-800 backdrop-blur-sm"
                >
                    <p class="text-gray-300 leading-relaxed">
                        {resumeData.summary}
                    </p>
                </div>
            </section>

            <!-- Experience -->
            <section class="mb-10 relative z-10">
                <h3
                    class="text-xl font-semibold text-primary-200 mb-6 flex items-center"
                >
                    <span
                        class="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 mr-3"
                    ></span>
                    Professional Experience
                </h3>
                <div class="space-y-4">
                    {#each resumeData.experience as job, i}
                        <div
                            class="group hover:transform hover:translate-x-2 transition-all duration-300"
                        >
                            <div
                                class="bg-gray-900 bg-opacity-30 p-6 rounded-lg border border-gray-800 hover:border-primary-500 hover:border-opacity-50 backdrop-blur-sm relative overflow-hidden"
                            >
                                <!-- Hover effect -->
                                <div
                                    class="absolute inset-0 bg-gradient-to-r from-primary-500 to-secondary-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
                                ></div>

                                <div class="relative z-10">
                                    <div
                                        class="flex justify-between items-start mb-3"
                                    >
                                        <div>
                                            <h4
                                                class="text-lg font-semibold text-primary-100 group-hover:text-primary-50 transition-colors"
                                            >
                                                {job.title}
                                            </h4>
                                            <p
                                                class="text-secondary-300 font-medium"
                                            >
                                                {job.company}, {job.location}
                                            </p>
                                        </div>
                                        <span
                                            class="text-sm text-gray-400 bg-gray-800 bg-opacity-50 px-3 py-1 rounded-full"
                                            >{job.period}</span
                                        >
                                    </div>
                                    <ul class="space-y-2 mt-4">
                                        {#each job.highlights as highlight}
                                            <li
                                                class="text-sm text-gray-300 flex items-start"
                                            >
                                                <svg
                                                    class="w-4 h-4 text-accent-400 mr-2 mt-0.5 flex-shrink-0"
                                                    fill="currentColor"
                                                    viewBox="0 0 20 20"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                                <span>{highlight}</span>
                                            </li>
                                        {/each}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    {/each}
                </div>
            </section>

            <!-- Skills -->
            <section class="mb-10 relative z-10">
                <h3
                    class="text-xl font-semibold text-primary-200 mb-6 flex items-center"
                >
                    <span
                        class="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 mr-3"
                    ></span>
                    Technical Skills
                </h3>
                <div
                    class="bg-gray-900 bg-opacity-30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm"
                >
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {#each Object.entries(resumeData.skills) as [category, skills]}
                            <div>
                                <h4
                                    class="text-sm font-semibold text-primary-300 mb-3 uppercase tracking-wider"
                                >
                                    {category}
                                </h4>
                                <div class="flex flex-wrap gap-2">
                                    {#each skills as skill}
                                        <span
                                            class="px-3 py-1 text-xs rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 bg-opacity-10 text-primary-200 border border-primary-500 border-opacity-20 hover:border-opacity-50 hover:bg-opacity-20 transition-all duration-300 cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            </section>

            <!-- Education & Certifications -->
            <section class="relative z-10">
                <h3
                    class="text-xl font-semibold text-primary-200 mb-6 flex items-center"
                >
                    <span
                        class="w-1 h-6 bg-gradient-to-b from-primary-400 to-secondary-400 mr-3"
                    ></span>
                    Education & Certifications
                </h3>
                <div
                    class="bg-gray-900 bg-opacity-30 p-6 rounded-lg border border-gray-800 backdrop-blur-sm"
                >
                    <div class="space-y-4">
                        {#each resumeData.education as edu}
                            <div class="flex items-start space-x-4">
                                <div
                                    class="flex-shrink-0 w-2 h-2 bg-secondary-400 rounded-full mt-2"
                                ></div>
                                <div class="flex-grow">
                                    <h4
                                        class="text-lg text-primary-100 font-medium"
                                    >
                                        {edu.degree}
                                    </h4>
                                    <p class="text-secondary-300">
                                        {edu.school}
                                    </p>
                                    {#if edu.focus}
                                        <p class="text-sm text-gray-400">
                                            Focus: {edu.focus}
                                        </p>
                                    {/if}
                                </div>
                            </div>
                        {/each}

                        {#if resumeData.certifications && resumeData.certifications.length > 0}
                            <div class="border-t border-gray-700 pt-4 mt-6">
                                <h4
                                    class="text-md font-semibold text-primary-300 mb-3"
                                >
                                    Certifications
                                </h4>
                                <div class="space-y-3">
                                    {#each resumeData.certifications as cert}
                                        <div class="flex items-start space-x-4">
                                            <div
                                                class="flex-shrink-0 w-2 h-2 bg-accent-400 rounded-full mt-2"
                                            ></div>
                                            <div class="flex-grow">
                                                <h5
                                                    class="text-primary-100 font-medium"
                                                >
                                                    {cert.name}
                                                </h5>
                                                <p
                                                    class="text-secondary-300 text-sm"
                                                >
                                                    {cert.issuer}
                                                </p>
                                                {#if cert.description}
                                                    <p
                                                        class="text-xs text-gray-400"
                                                    >
                                                        {cert.description}
                                                    </p>
                                                {/if}
                                            </div>
                                        </div>
                                    {/each}
                                </div>
                            </div>
                        {/if}
                    </div>
                </div>
            </section>
        </div>
    </div>
</div>

<style>
    /* Print styles */
    @media print {
        :global(body) {
            background: white !important;
        }

        :global(.no-print) {
            display: none !important;
        }

        .resume-container {
            background: white !important;
            color: black !important;
            box-shadow: none !important;
            border: none !important;
        }

        .resume-container :global(*) {
            color: black !important;
            border-color: #ddd !important;
        }

        .resume-container :global(a) {
            text-decoration: underline !important;
        }
    }
</style>
