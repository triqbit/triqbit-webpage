/**
 * triqbit Website Worker - Single-File HTTP Handler (v5)
 * This Worker serves a professional, multi-page AI development website.
 * The entire application (HTML, CSS, and Client-side Router) is contained
 * within the 'HTML_BODY' variable and served with a single fetch handler.
 * * NOTE: The entire website is contained within this single JavaScript file 
 * and exported via the Fetch Handler.
 */

// --- 1. Define the HTML Content as a JavaScript String ---
// We use backticks (`) for template literals to handle multi-line HTML.
const HTML_BODY = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>triqbit | AI-Native, Edge-Deployed Intelligence</title>
    <!-- Load Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        /* Custom font import for a modern, technical look */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
        body {
            font-family: 'Inter', sans-serif;
            background-color: #0d0d10; /* Near-black background */
            color: #e0e0e0; /* Light gray text */
        }
        /* Custom gradient for key text elements */
        .code-gradient {
            background-image: linear-gradient(to right, #00c6ff, #0072ff);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        /* Custom scrollbar for a polished look */
        ::-webkit-scrollbar { width: 8px; }
        ::-webkit-scrollbar-thumb { background-color: #4a4a50; border-radius: 10px; }
        ::-webkit-scrollbar-track { background-color: #1e1e20; }
        
        /* Active nav link style for consistency */
        .nav-link {
            padding-bottom: 4px; /* Add padding for the border */
            border-bottom: 2px solid transparent; /* Default transparent border */
        }
        .nav-link.active {
            color: #00c6ff;
            border-bottom-color: #00c6ff;
        }
        /* Footer link style */
        .footer-link {
            background: none;
            border: none;
            padding: 0;
            margin: 0 0.5rem;
            cursor: pointer;
            color: #9ca3af; /* gray-500 */
        }
        .footer-link:hover {
            color: #00c6ff;
            text-decoration: underline;
        }
        /* Simple button for navigation */
        .btn-secondary {
            /* Using Tailwind @apply directive within <style> tag */
            display: inline-block;
            padding-left: 1.5rem;
            padding-right: 1.5rem;
            padding-top: 0.5rem;
            padding-bottom: 0.5rem;
            font-size: 0.875rem;
            line-height: 1.25rem;
            font-weight: 500;
            color: #D1D5DB; /* text-gray-300 */
            border: 1px solid #374151; /* border-gray-700 */
            border-radius: 0.5rem; /* rounded-lg */
            transition-property: all;
            transition-duration: 300ms;
        }
        .btn-secondary:hover {
            color: #00c6ff;
            border-color: #00c6ff;
        }
    </style>
</head>
<body class="min-h-screen antialiased">

    <!-- Header & Navigation -->
    <header class="sticky top-0 z-50 bg-[#0d0d10]/90 backdrop-blur-sm shadow-xl shadow-[#00c6ff]/10 border-b border-[#00c6ff]/20">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav class="flex justify-between items-center h-20">
                <a href="#home" class="text-3xl font-extrabold tracking-tight code-gradient">
                    triqbit
                </a>
                <div class="flex space-x-6">
                    <button data-route="home" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">Home</button>
                    <button data-route="solutions" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">Solutions</button>
                    <button data-route="projects" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">Projects</button>
                    <button data-route="casestudies" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">Case Studies</button>
                    <button data-route="blog" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">Insights</button>
                    <button data-route="about" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">About</button>
                    <button data-route="contact" class="nav-link text-sm font-medium transition duration-150 ease-in-out text-white hover:text-[#00c6ff]">Contact</button>
                </div>
            </nav>
        </div>
    </header>

    <!-- Main Content Container -->
    <main id="content-container" class="max-w-6xl mx-auto p-4 sm:p-6 lg:px-8 pt-12"></main>

    <!-- Footer -->
    <footer class="mt-20 border-t border-[#0072ff]/20 pt-8 pb-4 text-center text-sm text-gray-500">
        <p>© 2025 triqbit. AI-Native Development. All Rights Reserved. | Hosted on Cloudflare Workers</p>
        <div class="mt-2">
            <a href="https://github.com/triqbit" target="_blank" rel="noopener noreferrer" class="footer-link">GitHub Repository</a>
            <span class="text-gray-700">|</span>
            <button data-route="privacy" class="footer-link">Privacy Policy</button>
        </div>
    </footer>

    <!-- JavaScript for Routing and Content Rendering -->
    <script>
        // Define page content as functions returning HTML strings

        // --- HOME PAGE CONTENT ---
        function renderHome() {
            return \`
                <section class="text-center py-20">
                    <h1 class="text-6xl sm:text-7xl lg:text-8xl font-black mb-6 leading-tight">
                        <span class="code-gradient">AI-Native.</span> Edge-Deployed.
                    </h1>
                    <p class="text-2xl text-gray-400 max-w-3xl mx-auto mb-10">
                        We engineer and deploy custom, scalable Generative AI and Machine Learning solutions directly onto the edge. **triqbit** transforms complex data into a strategic, ultra-low latency advantage.
                    </p>
                    <div class="flex justify-center space-x-6">
                        <button data-route="projects" class="px-8 py-3 text-lg font-bold text-white bg-[#0072ff] rounded-lg shadow-2xl shadow-[#0072ff]/50 hover:bg-[#00c6ff] transition duration-300 transform hover:scale-105">
                            Explore Our Code
                        </button>
                        <button data-route="solutions" class="px-8 py-3 text-lg font-medium text-gray-300 border border-gray-700 rounded-lg hover:border-[#00c6ff] hover:text-[#00c6ff] transition duration-300">
                            Our Core Capabilities
                        </button>
                    </div>
                </section>
                
                <section class="py-16">
                    <h2 class="text-4xl font-extrabold text-center mb-12 text-white border-b border-gray-800 pb-4">Technical Authority at the Edge</h2>
                    <div class="grid md:grid-cols-3 gap-8">
                        <div class="p-6 bg-[#1a1a21] rounded-xl shadow-lg border border-[#00c6ff]/20 hover:shadow-[#00c6ff]/20 transition duration-300">
                            <h3 class="text-xl font-bold mb-3 code-gradient">Serverless LLM Inference</h3>
                            <p class="text-gray-400">Leveraging **Cloudflare Workers AI** and serverless GPU architecture to achieve sub-50ms inference time globally. Pay-per-use, no infrastructure management.</p>
                        </div>
                        <div class="p-6 bg-[#1a1a21] rounded-xl shadow-lg border border-[#0072ff]/20 hover:shadow-[#0072ff]/20 transition duration-300">
                            <h3 class="text-xl font-bold mb-3 code-gradient">RAG & Vector Search</h3>
                            <p class="text-gray-400">Building precise Retrieval-Augmented Generation (RAG) pipelines with **Vectorize** and **D1/R2** for grounded, factual AI responses using enterprise data.</p>
                        </div>
                        <div class="p-6 bg-[#1a1a21] rounded-xl shadow-lg border border-[#00c6ff]/20 hover:shadow-[#00c6ff]/20 transition duration-300">
                            <h3 class="text-xl font-bold mb-3 code-gradient">Agentic Workflow Automation</h3>
                            <p class="text-gray-400">Designing autonomous software agents that execute complex, multi-step business logic and automate decision-making across platforms.</p>
                        </div>
                    </div>
                </section>

                <section class="py-16">
                    <h2 class="text-4xl font-extrabold text-center mb-16 text-white">Our Technology Stack</h2>
                    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center">
                        <div class="flex flex-col items-center p-4 bg-[#1a1a21] rounded-lg border border-gray-700/50">
                            <span class="text-3xl mb-2">⚡️</span>
                            <span class="font-bold text-white">Workers AI</span>
                            <span class="text-sm text-gray-400">Global LLM Inference</span>
                        </div>
                        <div class="flex flex-col items-center p-4 bg-[#1a1a21] rounded-lg border border-gray-700/50">
                            <span class="text-3xl mb-2">🧠</span>
                            <span class="font-bold text-white">Vectorize</span>
                            <span class="text-sm text-gray-400">Edge Vector Database</span>
                        </div>
                        <div class="flex flex-col items-center p-4 bg-[#1a1a21] rounded-lg border border-gray-700/50">
                            <span class="text-3xl mb-2">🗄️</span>
                            <span class="font-bold text-white">D1 Database</span>
                            <span class="text-sm text-gray-400">Serverless SQL</span>
                        </div>
                        <div class="flex flex-col items-center p-4 bg-[#1a1a21] rounded-lg border border-gray-700/50">
                            <span class="text-3xl mb-2">📦</span>
                            <span class="font-bold text-white">R2 Storage</span>
                            <span class="text-sm text-gray-400">S3-Compatible Objects</span>
                        </div>
                        <div class="flex flex-col items-center p-4 bg-[#1a1a21] rounded-lg border border-gray-700/50">
                            <span class="text-3xl mb-2">🔗</span>
                            <span class="font-bold text-white">AI Gateway</span>
                            <span class="text-sm text-gray-400">Caching & Observability</span>
                        </div>
                    </div>
                </section>
            \`;
        }

        // --- SOLUTIONS PAGE CONTENT ---
        function renderSolutions() {
            return \`
                <section class="py-12">
                    <h2 class="text-5xl font-black mb-8 code-gradient">Solutions: Production-Grade AI Systems</h2>
                    <p class="text-gray-400 text-xl mb-12 max-w-4xl">
                        Our core capability is transforming R&D models into deployable, observable, and secure products. We manage the entire AI lifecycle, from data ingestion to global edge deployment.
                    </p>

                    <div class="space-y-12">
                        <!-- Solution 1: LLM Specialization & RAG -->
                        <div class="bg-[#1a1a21] p-8 rounded-xl border border-gray-700/50">
                            <h3 class="text-3xl font-bold mb-4 text-white">LLM Specialization & RAG</h3>
                            <p class="text-gray-400 mb-6">We adapt open-source foundation models (Llama 3, Mistral) to your proprietary datasets. Through advanced RAG pipelines, we ground models in your data for factual, context-aware, and secure responses.</p>
                            
                            <h4 class="text-xl font-semibold text-gray-200 mb-3">Key Benefits</h4>
                            <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                <li>**Reduce Hallucinations:** Ensure AI responses are based on your verified documents.</li>
                                <li>**Data Privacy:** Utilize private Cloudflare infrastructure (R2/Vectorize) to ensure data never leaves your environment.</li>
                                <li>**Cost-Effective:** Achieve finetuning-level performance at a fraction of the computational cost.</li>
                            </ul>
                            
                            <h4 class="text-xl font-semibold text-gray-200 mb-3">Core Services</h4>
                            <ul class="list-disc list-inside text-gray-500 space-y-2 ml-4">
                                <li>Data Ingestion & Chunking Pipelines (from R2, S3, GCS)</li>
                                <li>Vector Embedding & Indexing (using Workers AI & Vectorize)</li>
                                <li>Advanced Prompt Engineering & Context Retrieval</li>
                                <li>Model Selection & Benchmarking (Speed vs. Cost vs. Accuracy)</li>
                            </ul>
                        </div>

                        <!-- Solution 2: Edge-Native Compute -->
                        <div class="bg-[#1a1a21] p-8 rounded-xl border border-gray-700/50">
                            <h3 class="text-3xl font-bold mb-4 text-white">Edge-Native Compute & Global API Layer</h3>
                            <p class="text-gray-400 mb-6">We eliminate cold starts and latency bottlenecks by deploying critical inference logic across Cloudflare's 300+ global edge locations. This is AI as a high-speed, reliable service.</p>

                            <h4 class="text-xl font-semibold text-gray-200 mb-3">Key Benefits</h4>
                            <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                <li><strong>Ultra-Low Latency:</strong> Serve AI responses in <100ms by running compute close to your users.</li>
                                <li><strong>Global Scalability:</strong> Automatically scale from zero to millions of requests without managing servers.</li>
                                <li><strong>Centralized Control:</strong> Manage all your models (OpenAI, Anthropic, Workers AI) from one secure endpoint.</li>
                            </ul>

                            <h4 class="text-xl font-semibold text-gray-200 mb-3">Core Services</h4>
                            <ul class="list-disc list-inside text-gray-500 space-y-2 ml-4">
                                <li>**Workers AI Optimization:** Building custom inference APIs with Workers and Cloudflare AI.</li>
                                <li>**AI Gateway Implementation:** Centralized control, caching, rate limiting, and observability for all model endpoints.</li>
                                <li>**Geo-Aware Routing:** Ensuring users hit the closest GPU instance for optimal performance.</li>
                            </ul>
                        </div>
                        
                        <!-- Solution 3: Agentic Systems & Automation -->
                        <div class="bg-[#1a1a21] p-8 rounded-xl border border-gray-700/50">
                            <h3 class="text-3xl font-bold mb-4 text-white">Agentic Systems & Automation</h3>
                            <p class="text-gray-400 mb-6">We develop autonomous AI agents that perform multi-step tasks across disparate platforms, linking LLMs to your internal tools and APIs to automate complex business logic.</p>

                            <h4 class="text-xl font-semibold text-gray-200 mb-3">Key Benefits</h4>
                            <ul class="list-disc list-inside text-gray-400 space-y-2 mb-6">
                                <li>**Operational Efficiency:** Reduce manual operational burden by up to 80% in areas like support, finance, and operations.</li>
                                <li>**Execute Real-World Actions:** Move beyond simple text generation to agents that can send emails, update databases, and manage services.</li>
                                <li>**Durable & Stateful:** Build reliable automations that can run for hours or days, with built-in retries and error handling.</li>
                            </ul>

                            <h4 class="text-xl font-semibold text-gray-200 mb-3">Core Services</h4>
                            <ul class="list-disc list-inside text-gray-500 space-y-2 ml-4">
                                <li>**Workflow Orchestration:** Using Cloudflare Workflows for durable, stateful task management.</li>
                                <li>**Tool Calling:** Integrating LLMs with external APIs (Slack, ERP, CRM, GitHub) for real-world actions.</li>
                                <li>**Human-in-the-Loop:** Designing safety and approval gates for critical automated decisions.</li>
                            </ul>
                        </div>
                    </div>
                \`;
        }

        // --- PROJECTS PAGE CONTENT ---
        function renderProjects() {
            return \`
                <section class="py-12">
                    <h2 class="text-5xl font-black mb-8 code-gradient">Open Source Projects</h2>
                    <p class="text-gray-400 text-xl mb-12 max-w-4xl">
                        Our commitment to technical excellence is proven in our open-source contributions. We build tools and frameworks that are open, auditable, and deployable for the entire community.
                    </p>

                    <div class="space-y-8">
                        <!-- Project 1: "Helios" - RAG Ingestion Engine -->
                        <div class="bg-[#1a1a21] p-6 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between border border-[#00c6ff]/20">
                            <div class="mb-4 sm:mb-0">
                                <h3 class="text-2xl font-bold text-white mb-1">Project "Helios": RAG Ingestion Engine</h3>
                                <p class="text-gray-500 mb-3 max-w-2xl">A serverless engine that automatically monitors data sources (R2, S3, Notion) and updates a Vectorize index in real-time. It intelligently chunks, embeds, and indexes new information, ensuring RAG systems are always synchronized.</p>
                                <p class="text-sm font-mono text-[#00c6ff]">Keywords: #RAG #ETL #Vectorize #Workers #Serverless</p>
                            </div>
                            <a href="https://github.com/triqbit" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 px-5 py-2 text-white bg-[#0072ff] rounded-lg hover:bg-[#00c6ff] transition duration-300 text-center">
                                View on GitHub
                            </a>
                        </div>
                        
                        <!-- Project 2: "Merlin" - Agentic Orchestrator -->
                        <div class="bg-[#1a1a21] p-6 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between border border-[#0072ff]/20">
                            <div class="mb-4 sm:mb-0">
                                <h3 class="text-2xl font-bold text-white mb-1">Project "Merlin": Agentic Orchestrator</h3>
                                <p class="text-gray-500 mb-3 max-w-2xl">An open-source framework for building and orchestrating complex AI agents. "Merlin" uses Cloudflare Workflows to manage state, tool-calling, and human-in-the-loop approvals, enabling reliable autonomous systems for complex business tasks.</p>
                                <p class="text-sm font-mono text-[#0072ff]">Keywords: #Agentic #Workflows #ToolCalling #LLM #Automation</p>
                            </div>
                            <a href="https://github.com/triqbit" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 px-5 py-2 text-white bg-[#0072ff] rounded-lg hover:bg-[#00c6ff] transition duration-300 text-center">
                                View on GitHub
                            </a>
                        </div>

                        <!-- Project 3: "Warp" - Global Inference Gateway -->
                        <div class="bg-[#1a1a21] p-6 rounded-xl flex flex-col sm:flex-row sm:items-center sm:justify-between border border-[#00c6ff]/20">
                            <div class="mb-4 sm:mb-0">
                                <h3 class="text-2xl font-bold text-white mb-1">Project "Warp": Global Inference Gateway</h3>
                                <p class="text-gray-500 mb-3 max-w-2xl">A high-performance gateway built on Workers that provides a unified API for multiple model providers (Workers AI, OpenAI, Anthropic). Features intelligent caching, dynamic fallbacks, and p50/p99 latency tracking.</p>
                                <p class="text-sm font-mono text-[#00c6ff]">Keywords: #AI #Gateway #LowLatency #Observability #Workers</p>
                            </div>
                            <a href="https://github.com/triqbit" target="_blank" rel="noopener noreferrer" class="flex-shrink-0 px-5 py-2 text-white bg-[#0072ff] rounded-lg hover:bg-[#00c6ff] transition duration-300 text-center">
                                View on GitHub
                            </a>
                        </div>
                    </div>
                </section>
            \`;
        }

        // --- BLOG (INSIGHTS) LIST PAGE ---
        function renderBlog() {
            return \`
                <section class="py-12">
                    <h2 class="text-5xl font-black mb-8 code-gradient">Insights & Technical Deep Dives</h2>
                    <p class="text-gray-400 text-xl mb-12 max-w-4xl">
                        Our thoughts on edge AI, serverless architecture, and provable performance.
                    </p>

                    <div class="space-y-10">
                        <!-- Blog Post 1 -->
                        <div class="p-6 bg-[#1a1a21] rounded-xl border border-gray-700/50 transition duration-300 hover:border-[#00c6ff]/50">
                            <span class="text-sm text-gray-500">November 02, 2025</span>
                            <h3 class="text-3xl font-bold text-white my-2">Why We Chose Workers AI for Project Merlin</h3>
                            <p class="text-gray-400 mb-4">A deep dive into stateful agentic orchestration using Cloudflare Workflows and the challenges we overcame...</p>
                            <button data-route="blog-merlin" class="text-[#00c6ff] font-semibold hover:underline">Read Article &rarr;</button>
                        </div>
                        
                        <!-- Blog Post 2 -->
                        <div class="p-6 bg-[#1a1a21] rounded-xl border border-gray-700/50 transition duration-300 hover:border-[#00c6ff]/50">
                            <span class="text-sm text-gray-500">October 27, 2025</span>
                            <h3 class="text-3xl font-bold text-white my-2">The Data-Side of RAG: A Look at Project Helios</h3>
                            <p class="text-gray-400 mb-4">Real-time RAG is only as good as your data pipeline. Here's how we built our serverless ingestion engine...</p>
                            <button data-route="blog-helios" class="text-[#00c6ff] font-semibold hover:underline">Read Article &rarr;</button>
                        </div>
                    </div>
                </section>
            \`;
        }

        // --- BLOG ARTICLE 1 (MERLIN) ---
        function renderBlogMerlin() {
            return \`
                <section class="py-12 max-w-3xl mx-auto">
                    <button data-route="blog" class="btn-secondary mb-8">&larr; Back to Insights</button>
                    
                    <h1 class="text-5xl font-black mb-4 leading-tight text-white">Why We Chose Workers AI for Project Merlin</h1>
                    <p class="text-gray-500 mb-8">Posted on November 02, 2025 by the triqbit team</p>

                    <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>In building Project Merlin, our goal was to create a framework for autonomous AI agents that was not just powerful, but also reliable, scalable, and stateful. Traditional server-based approaches introduced too much complexity and infrastructure overhead. We needed a serverless-native solution, and that's what led us to Cloudflare Workflows and Workers AI.</p>
                        
                        <h3 class="text-2xl font-bold text-white pt-6">The Challenge of State</h3>
                        <p>The hardest part of any agentic system is managing state. An agent might need to run for hours, make multiple API calls, wait for human approval, and then resume its task. Using a traditional database to manage this is complex and brittle.</p>
                        <p>Cloudflare Workflows provided the durable, stateful execution environment we needed. We could define our agent's logic as a single workflow, and Cloudflare handles the persistence, retries, and state management automatically, even across days or weeks.</p>
                        
                        <h3 class="text-2xl font-bold text-white pt-6">Inference at the Edge</h3>
                        <p>With state solved, we needed fast, low-latency inference for the "brain" of our agent. By co-locating our orchestration (Workflows) and our inference (Workers AI) on the same platform, we eliminated network hops. Our agent's "tool-calling" and "decision-making" loops are now incredibly fast, running in the same global network as our users.</p>
                    </div>
                </section>
            \`;
        }
        
        // --- BLOG ARTICLE 2 (HELIOS) ---
        function renderBlogHelios() {
            return \`
                <section class="py-12 max-w-3xl mx-auto">
                    <button data-route="blog" class="btn-secondary mb-8">&larr; Back to Insights</button>
                    
                    <h1 class="text-5xl font-black mb-4 leading-tight text-white">The Data-Side of RAG: A Look at Project Helios</h1>
                    <p class="text-gray-500 mb-8">Posted on October 27, 2025 by the triqbit team</p>

                    <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <p>Project Helios started with a simple problem: our partners loved the idea of RAG (Retrieval-Augmented Generation) but found it impossible to keep their vector databases synchronized with their live application data.</p>
                        <p>A RAG system that's a week out of date is worse than no RAG system at all. It provides confident, incorrect answers based on stale information. We needed an event-driven, real-time solution.</p>
                        
                        <h3 class="text-2xl font-bold text-white pt-6">Building a Serverless ETL Pipeline</h3>
                        <p>Project Helios is, at its core, a serverless ETL (Extract, Transform, Load) pipeline built for RAG. We leverage R2's event notifications. When a new file (a PDF, a .txt, a .docx) is uploaded to an R2 bucket, an event fires.</p>
                        <p>This event triggers a series of Workers:</p>
                        <ol class="list-decimal list-inside space-y-2 pl-4">
                            <li><strong>Transform:</strong> A Worker reads the document, parses its content, and breaks it into intelligent, semantically-aware chunks.</li>
                            <li><strong>Embed:</strong> Another Worker takes these chunks and calls a Workers AI embedding model to turn them into vectors.</li>
                            <li><strong>Load:</strong> The final Worker upserts these new vectors into Cloudflare Vectorize, making the new information immediately available for retrieval.</li>
                        </ol>
                        <p>The entire process is complete in seconds, not days. This is the only way to build RAG systems that users can trust.</p>
                    </div>
                </section>
            \`;
        }

        // --- CASE STUDIES LIST PAGE ---
        function renderCaseStudies() {
            return \`
                <section class="py-12">
                    <h2 class="text-5xl font-black mb-8 code-gradient">Case Studies</h2>
                    <p class="text-gray-400 text-xl mb-12 max-w-4xl">
                        See how our solutions create real-world value for our partners.
                    </p>

                    <div class="space-y-8">
                        <!-- Case Study 1 -->
                        <div class="bg-[#1a1a21] p-6 rounded-xl border border-gray-700/50 transition duration-300 hover:border-[#00c6ff]/50">
                            <h3 class="text-3xl font-bold text-white mb-2">E-commerce: Real-Time RAG Support Bot</h3>
                            <p class="text-gray-400 mb-4 max-w-3xl">How we used Project Helios and Workers AI to build a RAG-based support bot that reduced human-in-the-loop support tickets by 40%.</p>
                            <button data-route="casestudy-ecommerce" class="text-[#00c6ff] font-semibold hover:underline">View Case Study &rarr;</button>
                        </div>
                        
                        <!-- Case Study 2 -->
                        <div class="bg-[#1a1a21] p-6 rounded-xl border border-gray-700/50 transition duration-300 hover:border-[#00c6ff]/50">
                            <h3 class="text-3xl font-bold text-white mb-2">Fintech: Autonomous Compliance Agent</h3>
                            <p class="text-gray-400 mb-4 max-w-3xl">A look at how Project Merlin enables a stateful AI agent to autonomously read, analyze, and summarize SEC filings for compliance teams.</p>
                            <button data-route="casestudy-fintech" class="text-[#00c6ff] font-semibold hover:underline">View Case Study &rarr;</button>
                        </div>
                    </div>
                </section>
            \`;
        }

        // --- CASE STUDY DETAIL (E-COMMERCE) ---
        function renderCaseStudyEcomm() {
            return \`
                <section class="py-12 max-w-3xl mx-auto">
                    <button data-route="casestudies" class="btn-secondary mb-8">&larr; Back to Case Studies</button>
                    
                    <h1 class="text-5xl font-black mb-4 leading-tight text-white">Case Study: E-commerce Co.</h1>
                    <p class="text-2xl code-gradient font-semibold mb-8">Real-Time RAG Support Bot with 99% Uptime</p>

                    <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <h3 class="text-3xl font-bold text-white pt-6 border-b border-gray-700 pb-2">The Problem</h3>
                        <p>A leading e-commerce partner was overwhelmed with support tickets for common questions about product specs, return policies, and order status. Their existing "chatbot" was FAQ-based and failed to answer 80% of user queries, leading to high frustration and ballooning support costs.</p>
                        
                        <h3 class="text-3xl font-bold text-white pt-6 border-b border-gray-700 pb-2">The Solution</h3>
                        <p>We deployed a custom, end-to-end RAG (Retrieval-Augmented Generation) solution built on serverless Cloudflare infrastructure.</p>
                        <ol class="list-decimal list-inside space-y-2 pl-4">
                            <li><strong>Data Ingestion (Project Helios):</strong> We configured our 'Helios' engine to monitor their product database (via R2) and help-desk articles (via Notion). New and updated information is now automatically indexed in Vectorize within 5 seconds.</li>
                            <li><strong>Inference (Workers AI):</strong> The user-facing chatbot API was built on Workers AI, running a specialized Llama 3 model. It retrieves context from Vectorize and provides an accurate, human-like answer in milliseconds.</li>
                            <li><strong>Gateway (Project Warp):</strong> Our 'Warp' gateway provided a single, secure endpoint, caching common queries and giving the partner a full observability dashboard.</li>
                        </ol>
                        
                        <h3 class="text-3xl font-bold text-white pt-6 border-b border-gray-700 pb-2">The Outcome</h3>
                        <ul class="list-disc list-inside space-y-2 pl-4">
                            <li><strong>40% reduction</strong> in human-answered support tickets within 30 days.</li>
                            <li><strong>Sub-150ms</strong> average API response time for chatbot answers, globally.</li>
                            <li><strong>92% user-reported satisfaction</strong> with the new bot's answers.</li>
                            <li>Zero infrastructure to manage, with costs scaling perfectly with user traffic.</li>
                        </ul>
                    </div>
                </section>
            \`;
        }

        // --- CASE STUDY DETAIL (FINTECH) ---
        function renderCaseStudyFintech() {
            return \`
                <section class="py-12 max-w-3xl mx-auto">
                    <button data-route="casestudies" class="btn-secondary mb-8">&larr; Back to Case Studies</button>
                    
                    <h1 class="text-5xl font-black mb-4 leading-tight text-white">Case Study: Fintech Firm</h1>
                    <p class="text-2xl code-gradient font-semibold mb-8">Autonomous Compliance Agent for SEC Filings</p>

                    <div class="space-y-6 text-gray-400 text-lg leading-relaxed">
                        <h3 class="text-3xl font-bold text-white pt-6 border-b border-gray-700 pb-2">The Problem</h3>
                        <p>A financial technology partner's compliance team spent hundreds of hours per quarter manually reading thousands of pages of SEC filings from competitors. This slow, manual process meant they were often reacting to market changes days or weeks late.</p>
                        
                        <h3 class="text-3xl font-bold text-white pt-6 border-b border-gray-700 pb-2">The Solution</h3>
                        <p>We deployed an autonomous AI agent using our 'Merlin' (Agentic Orchestrator) framework. The agent's job is to monitor, read, analyze, and summarize filings, all without human intervention.</p>
                        <ol class="list-decimal list-inside space-y-2 pl-4">
                            <li><strong>Stateful Orchestration (Project Merlin):</strong> The agent is built on Cloudflare Workflows, allowing it to run durably for hours. It monitors an S3 bucket for new filings, fetches them, and begins its analysis.</li>
                            <li><strong>Tool-Calling:</strong> The agent uses a custom-trained model on Workers AI to "read" the document, identify key risk sections, and extract financial tables.</li>
                            <li><strong>Human-in-the-Loop:</strong> If the agent finds a "critical" new risk factor (e.g., mention of a new lawsuit), it pauses and automatically sends a summary to a compliance officer in Slack for approval before continuing its summary.</li>
                        </ol>
                        
                        <h3 class="text-3xl font-bold text-white pt-6 border-b border-gray-700 pb-2">The Outcome</h3>
                        <ul class="list-disc list-inside space-y-2 pl-4">
                            <li><strong>90% reduction</strong> in manual-read time for the compliance team.</li>
                            <li><strong>Real-time alerts</strong> on critical market-moving information, down from 1-3 weeks to < 5 minutes.</li>
                            <li>A fully auditable, stateful log of every action the agent took for compliance records.</li>
                        </ul>
                    </div>
                </section>
            \`;
        }
        
        // --- ABOUT US PAGE CONTENT ---
        function renderAbout() {
            return \`
                <section class="py-12">
                    <h2 class="text-5xl font-black mb-8 code-gradient">About triqbit</h2>
                    <p class="text-gray-400 text-xl mb-12 max-w-4xl">
                        We are a specialized team of AI engineers and infrastructure architects obsessed with one thing: **performance**. We believe the future of AI is not in slow, centralized data centers, but distributed globally, running nanoseconds from the user.
                    </p>

                    <div class="grid md:grid-cols-2 gap-12 items-center">
                        <div class="bg-[#1a1a21] p-8 rounded-xl border border-gray-700/50">
                            <h3 class="text-3xl font-bold mb-4 text-white">Our Mission</h3>
                            <p class="text-gray-400 mb-4">
                                Our mission is to democratize high-performance AI. We build the tools, frameworks, and infrastructure that allow any company to leverage AI that is fast, secure, and scalable, without the traditional overhead of managing complex GPU infrastructure.
                            </D>
                            <p class="text-gray-400">
                                We exclusively build on serverless, edge-native platforms like Cloudflare, which we believe represents the new frontier of computation.
                            </p>
                        </div>
                        <div class="bg-[#1a1a21] p-8 rounded-xl border border-gray-700/50">
                            <h3 class="text-3xl font-bold mb-4 text-white">The triqbit Philosophy</h3>
                            <ul class="list-disc list-inside text-gray-400 space-y-3">
                                <li><strong class="text-gray-200">Edge-First:</strong> Compute should live where your users are.</li>
                                <li><strong class="text-gray-200">Code over Config:</strong> We value robust, testable code over complex GUI-based infrastructure.</li>
                                <li><strong class="text-gray-200">Provable Performance:</strong> We don't just build models; we build observable, benchmarked, and production-ready systems.</li>
                                <li><strong class="text-gray-200">Open & Auditable:</strong> We contribute back to the community and prefer solutions that are open and transparent.</li>
                            </ul>
                        </div>
                    </div>
                </section>
            \`;
        }

        // --- CONTACT PAGE CONTENT ---
        function renderContact() {
            return \`
                <section class="py-12 max-w-3xl mx-auto">
                    <h2 class="text-5xl font-black mb-6 code-gradient text-center">Contact & Partnership</h2>
                    <p class="text-gray-400 text-xl mb-12 text-center">
                        Ready to integrate AI into your core business logic? Contact us for a technical deep-dive into your requirements.
                    </p>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                         <div class="bg-[#1a1a21] p-6 rounded-xl border border-gray-700/50">
                            <h4 class="text-xl font-bold text-white mb-2">Partnership Inquiries</h4>
                            <p class="text-gray-400 mb-3">For project consultations and technical deep-dives.</p>
                            <a href="mailto:partners@triqbit.com" class="text-[#00c6ff] font-medium hover:underline">partners@triqbit.com</a>
                         </div>
                         <div class="bg-[#1a1a21] p-6 rounded-xl border border-gray-700/50">
                            <h4 class="text-xl font-bold text-white mb-2">Career Inquiries</h4>
                            <p class="text-gray-400 mb-3">Join our team of distributed AI engineers.</p>
                            <a href="mailto:careers@triqbit.com" class="text-[#00c6ff] font-medium hover:underline">careers@triqbit.com</a>
                         </div>
                    </div>

                    <div class_id="contact-form-wrapper" class="bg-[#1a1a21] p-8 rounded-xl shadow-2xl border border-[#0072ff]/20">
                        <h3 class="text-2xl font-bold text-white text-center mb-6">Send a Project Brief</h3>
                        <form onsubmit="handleSubmit(event)">
                            <div class="mb-4">
                                <label for="name" class="block text-sm font-medium text-gray-300 mb-2">Name / Company</label>
                                <input type="text" id="name" name="name" required class="w-full p-3 bg-[#2a2a33] border border-gray-600 rounded-lg focus:ring-[#00c6ff] focus:border-[#00c6ff] text-white">
                            </div>
                            <div class="mb-4">
                                <label for="email" class="block text-sm font-medium text-gray-300 mb-2">Work Email</label>
                                <input type="email" id="email" name="email" required class="w-full p-3 bg-[#2a2a33] border border-gray-600 rounded-lg focus:ring-[#00c6ff] focus:border-[#00c6ff] text-white">
                            </div>
                            <div class="mb-6">
                                <label for="message" class="block text-sm font-medium text-gray-300 mb-2">Project Brief (Required)</label>
                                <textarea id="message" name="message" rows="5" required class="w-full p-3 bg-[#2a2a33] border border-gray-600 rounded-lg focus:ring-[#00c6ff] focus:border-[#00c6ff] text-white" placeholder="Describe your technical challenge: RAG, Agentic Automation, Edge Inference..."></textarea>
                            </div>
                            <div id="contact-message" class="text-center mb-4 text-green-400 hidden"></div>
                            <button type="submit" class="w-full py-3 text-lg font-bold text-white bg-[#0072ff] rounded-lg shadow-xl shadow-[#0072ff]/40 hover:bg-[#00c6ff] transition duration-300">
                                Request Technical Consultation
                            </button>
                        </form>
                    </div>

                    <p class="text-center text-gray-600 mt-6">
                        <span class="font-bold">Fast-Track Consultation:</span> We respond to detailed project inquiries within 1 business day.
                    </p>
                </section>
            \`;
        }

        // --- PRIVACY POLICY PAGE CONTENT ---
        function renderPrivacy() {
            return \`
                <section class="py-12 max-w-3xl mx-auto">
                    <h2 class="text-5xl font-black mb-8 code-gradient">Privacy Policy</h2>
                    
                    <div class="space-y-6 text-gray-400 p-8 bg-[#1a1a21] rounded-xl border border-gray-700/50">
                        <p>Last updated: November 09, 2025</p>
                        
                        <p>triqbit ("us", "we", or "our") operates the triqbit-webpage.triqbit.workers.dev website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.</p>

                        <h3 class="text-2xl font-bold text-white pt-4">Information Collection and Use</h3>
                        <p>We do not collect any personally identifiable information about you when you visit our website. Our contact form collects your name, email, and project brief solely for the purpose of responding to your inquiry. We do not sell, trade, or otherwise transfer this information to outside parties.</p>

                        <h3 class="text-2xl font-bold text-white pt-4">Log Data</h3>
                        <p>Like most website operators, we may collect information that your browser sends whenever you visit our Service ("Log Data"). This Log Data may include information such as your computer's Internet Protocol ("IP") address (anonymized), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics. This information is used purely for analytics and performance monitoring and is not personally identifiable.</p>

                        <h3 class="text-2xl font-bold text-white pt-4">Cookies</h3>
                        <p>We do not use cookies. Our Service is static and does not require session tracking for visitors.</p>

                        <h3 class="text-2xl font-bold text-white pt-4">Contact Us</h3>
                        <p>If you have any questions about this Privacy Policy, please contact us by email: <a href="mailto:privacy@triqbit.com" class="text-[#00c6ff] hover:underline">privacy@triqbit.com</a>.</p>
                    </div>
                </section>
            \`;
        }
        
        
        // --- JAVASCRIPT ROUTER LOGIC (Executed by browser) ---
        const routes = {
            'home': renderHome,
            'solutions': renderSolutions,
            'projects': renderProjects,
            'casestudies': renderCaseStudies,
            'casestudy-ecommerce': renderCaseStudyEcomm,
            'casestudy-fintech': renderCaseStudyFintech,
            'blog': renderBlog,
            'blog-merlin': renderBlogMerlin,
            'blog-helios': renderBlogHelios,
            'about': renderAbout,
            'contact': renderContact,
            'privacy': renderPrivacy,
        };

        const contentContainer = document.getElementById('content-container');

        // Function to handle route changes
        function navigate(routeName) {
            // Default to 'home' if route not found
            const renderFunction = routes[routeName] || routes['home'];
            const newRouteName = routes[routeName] ? routeName : 'home';
            
            contentContainer.innerHTML = renderFunction();
            
            // Update URL hash and active navigation state
            window.location.hash = newRouteName;
            updateNav(newRouteName);
            window.scrollTo(0, 0); // Scroll to top on navigation
        }

        // Function to update the active navigation button styling
        function updateNav(activeRoute) {
            // Normalize route name for parent highlighting (e.g., 'blog-merlin' highlights 'blog')
            let parentRoute = activeRoute.split('-')[0];
            
            document.querySelectorAll('.nav-link').forEach(link => {
                const route = link.getAttribute('data-route');
                // Remove previous active styles
                link.classList.remove('active', 'text-[#00c6ff]');
                link.classList.add('text-white', 'hover:text-[#00c6ff]');

                // Add active styles if current route OR a parent route
                if (route === activeRoute || route === parentRoute) {
                    link.classList.add('active', 'text-[#00c6ff]');
                    link.classList.remove('text-white');
                } 
            });
        }

        // Event listener for all clicks, delegated from the document
        document.addEventListener('click', (e) => {
            const target = e.target.closest('[data-route]');
            if (target) {
                e.preventDefault(); // Prevent default link behavior
                const route = target.getAttribute('data-route');
                if (route) {
                    navigate(route);
                }
            }
        });
        
        // Event listener for hash changes (back/forward buttons)
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.substring(1) || 'home';
            navigate(hash);
        });

        // Contact form submission handler (Placeholder - would require a Worker backend)
        function handleSubmit(event) {
            event.preventDefault();
            const messageBox = document.getElementById('contact-message');
            messageBox.textContent = 'Thank you for your inquiry! Your brief has been securely submitted. A triqbit engineer will contact you shortly.';
            messageBox.classList.remove('hidden');
            // Reset the form after simulated submission
            event.target.reset();
        }
        
        // Initialize the router on page load
        document.addEventListener('DOMContentLoaded', () => {
            const initialRoute = window.location.hash.substring(1) || 'home';
            navigate(initialRoute);
        });

    </script>
</body>
</html>
`

/**
 * Standard Worker Fetch Handler
 * This function is the actual entry point executed by Cloudflare.
 */
export default {
    async fetch(request) {
        // Return the full HTML string with the correct content type
        return new Response(HTML_BODY, {
            headers: {
                'Content-Type': 'text/html;charset=UTF-8',
            },
        });
    }
};