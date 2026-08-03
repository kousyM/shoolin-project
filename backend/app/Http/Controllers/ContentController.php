<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Models\Banner;
use App\Models\Service;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\NewsItem;
use App\Models\Inquiry;
use App\Models\Contact;

class ContentController extends Controller
{
    /**
     * Get dynamic homepage content (Banners, Services, Case Studies, Insights, News)
     */
    public function homepage()
    {
        try {
            $dbBanners = Banner::where('is_active', true)->orderBy('sort_order')->get();
            $banners = $dbBanners->count() > 0 ? $dbBanners : $this->getDefaultBanners();
        } catch (\Exception $e) {
            $banners = $this->getDefaultBanners();
        }

        try {
            $dbServices = Service::orderBy('sort_order')->get();
            $services = $dbServices->count() > 0 ? $dbServices : $this->getDefaultServices();
        } catch (\Exception $e) {
            $services = $this->getDefaultServices();
        }

        try {
            $dbCaseStudies = CaseStudy::latest()->get();
            $caseStudies = $dbCaseStudies->count() > 0 ? $dbCaseStudies : $this->getDefaultCaseStudies();
        } catch (\Exception $e) {
            $caseStudies = $this->getDefaultCaseStudies();
        }

        try {
            $dbInsights = Insight::latest()->get();
            $insights = $dbInsights->count() > 0 ? $dbInsights : $this->getDefaultInsights();
        } catch (\Exception $e) {
            $insights = $this->getDefaultInsights();
        }

        try {
            $dbNews = NewsItem::latest()->get();
            $news = $dbNews->count() > 0 ? $dbNews : $this->getDefaultNews();
        } catch (\Exception $e) {
            $news = $this->getDefaultNews();
        }

        $stats = [
            [
                'id' => 1,
                'number' => '12,000+',
                'label' => 'Technology & Domain Experts',
                'subtext' => 'Across Australia and Asia-Pacific'
            ],
            [
                'id' => 2,
                'number' => '20+',
                'label' => 'Global Hubs & Delivery Centres',
                'subtext' => 'Delivering localized digital solutions'
            ],
            [
                'id' => 3,
                'number' => '100+',
                'label' => 'Government & Enterprise Clients',
                'subtext' => 'Trusted for critical infrastructure & AI'
            ]
        ];

        $partners = [
            ['name' => 'Microsoft', 'logo' => 'Microsoft', 'category' => 'Gold Partner'],
            ['name' => 'AWS', 'logo' => 'Amazon Web Services', 'category' => 'Premier Tier'],
            ['name' => 'Google Cloud', 'logo' => 'Google Cloud', 'category' => 'Managed Partner'],
            ['name' => 'Salesforce', 'logo' => 'Salesforce', 'category' => 'Summit Partner']
        ];

        return response()->json([
            'status' => 'success',
            'banners' => $banners,
            'services' => $services,
            'caseStudies' => $caseStudies,
            'insights' => $insights,
            'news' => $news,
            'stats' => $stats,
            'partners' => $partners
        ]);
    }

    /**
     * Handle contact form submission: Store in contacts DB + Dispatch Email.
     */
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'nullable|string|max:255',
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'name' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:255',
            'organisation' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'designation' => 'nullable|string|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string'
        ]);

        $fullName = $validated['full_name'] ?? ($validated['name'] ?? trim(($validated['first_name'] ?? '') . ' ' . ($validated['last_name'] ?? '')));
        if (empty($fullName)) {
            $fullName = 'Valued Client';
        }

        $email = $validated['email'];
        $phone = $validated['phone'] ?? '';
        $subject = $validated['subject'];
        $message = $validated['message'];
        $organisation = $validated['organisation'] ?? ($validated['company'] ?? '');

        // 1. Store in Contacts table
        $contactRecord = null;
        try {
            $contactRecord = Contact::create([
                'full_name' => $fullName,
                'first_name' => $validated['first_name'] ?? '',
                'last_name' => $validated['last_name'] ?? '',
                'email' => $email,
                'phone' => $phone,
                'organisation' => $organisation,
                'designation' => $validated['designation'] ?? '',
                'subject' => $subject,
                'message' => $message,
                'consent' => true
            ]);
        } catch (\Exception $e) {
            Log::error('Database store in contacts table failed: ' . $e->getMessage());
        }

        // 2. Dispatch Email Notification to Admin
        try {
            $emailContent = "New Contact Us Enquiry Received:\n\n" .
                "Full Name: {$fullName}\n" .
                "Email: {$email}\n" .
                "Phone Number: " . ($phone ? $phone : 'N/A') . "\n" .
                "Subject: {$subject}\n\n" .
                "Message:\n{$message}\n";

            Mail::raw($emailContent, function ($mail) use ($email, $fullName, $subject) {
                $mail->to('kowsalyam2611@gmail.com')
                    ->subject('NCS Corporate Portal - New Inquiry from ' . $fullName . ' [' . $subject . ']');
            });
        } catch (\Exception $e) {
            Log::error('Contact form email notification failed: ' . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for contacting us! Your message has been received and saved.',
            'data' => $contactRecord
        ]);
    }

    private function getDefaultBanners()
    {
        return [
            [
                'id' => 1,
                'tag' => 'TRANSFORM WITH CONFIDENCE',
                'title' => 'What challenge are you facing?',
                'subtitle' => 'We partner with governments and enterprises to navigate complex digital transformations with Next-Gen technology, cloud innovation, and AI.',
                'image_url' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80',
                'button_text' => 'Explore Our Solutions',
                'button_link' => '#services'
            ],
            [
                'id' => 2,
                'tag' => 'ARTIFICIAL INTELLIGENCE & DATA',
                'title' => 'Accelerating Enterprise AI Value',
                'subtitle' => 'Unlock sustainable growth with sovereign data platforms, predictive analytics, and enterprise generative AI solutions built for real impact.',
                'image_url' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1920&q=80',
                'button_text' => 'Discover Data & AI',
                'button_link' => '#services'
            ]
        ];
    }

    private function getDefaultServices()
    {
        return [
            [
                'id' => 1,
                'icon' => 'Code',
                'title' => 'Applications & Platforms',
                'summary' => 'Modernise, build, and run critical business applications with microservices and cloud-native architecture.',
                'description' => 'Our application modernise capabilities accelerate digital delivery, boost resiliency, and lower total cost of ownership across public sector and enterprise workloads.',
                'features' => ['Cloud Migration & Modernisation', 'Custom API & Microservices', 'DevSecOps Automation', 'Legacy Application Evolution']
            ],
            [
                'id' => 2,
                'icon' => 'Smartphone',
                'title' => 'Digital Experience (CX)',
                'summary' => 'Create seamless, human-centric digital experiences that captivate citizens and enterprise users alike.',
                'description' => 'Combining human-centred design with agile engineering to craft intuitive digital portals, mobile applications, and omnichannel citizen experiences.',
                'features' => ['Human-Centred UX/UI Design', 'Omnichannel Citizen Portals', 'Mobile App Development', 'Accessibility & Design Systems']
            ],
            [
                'id' => 3,
                'icon' => 'Cpu',
                'title' => 'Data & AI Ecosystems',
                'summary' => 'Harness sovereign data intelligence, enterprise analytics, and generative AI models safely.',
                'description' => 'Turn massive data streams into actionable operational intelligence while maintaining strict data governance, security compliance, and privacy.',
                'features' => ['Enterprise Data Platforms', 'Generative AI & LLM Integration', 'Predictive Analytics & ML', 'Data Governance & Sovereignty']
            ]
        ];
    }

    private function getDefaultCaseStudies()
    {
        return [
            [
                'id' => 1,
                'category' => 'Financial Services',
                'title' => 'Transforming compliance controls with AI in financial services',
                'summary' => 'Automating regulatory compliance and risk monitoring with generative AI and machine learning audit models.',
                'image_url' => 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 2,
                'category' => 'Education & Public Services',
                'title' => 'When a leading education provider set out to reimagine student engagement, NCS helped make it real',
                'summary' => 'Deploying personalized mobile student portals and automated digital administration for 50,000+ students.',
                'image_url' => 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 3,
                'category' => 'Education',
                'title' => 'Raising the bar for cashless school payments',
                'summary: Streamlining payment ecosystems across 400+ schools with contactless smart cards and real-time transaction reconciliation.',
                'summary' => 'Streamlining payment ecosystems across 400+ schools with contactless smart cards and real-time reconciliation.',
                'image_url' => 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 4,
                'category' => 'Industrial & Commercial',
                'title' => 'Driving proactive worksite safety through AI technology',
                'summary' => 'Deploying computer vision edge analytics to detect hazards and PPE compliance in real time on heavy industrial worksites.',
                'image_url' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 5,
                'category' => 'Enterprise Technology',
                'title' => 'Enabling AI-powered high performance for a global workforce',
                'summary' => 'Empowering 18,000+ employees with sovereign generative AI copilots and automated workflows.',
                'image_url' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 6,
                'category' => 'Healthcare & Biotech',
                'title' => 'Modernising patient care systems with secure cloud infrastructure',
                'summary' => 'Connecting regional healthcare networks with real-time electronic health records and HIPAA-compliant data pipelines.',
                'image_url' => 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
            ]
        ];
    }

    private function getDefaultInsights()
    {
        return [
            [
                'id' => 1,
                'type' => 'ARTICLE',
                'category' => 'Data & AI',
                'date_str' => 'Jul 02',
                'title' => 'Databricks Data + AI Summit 2026: The Shift from Data Platforms to AI Powered Innovation',
                'summary' => 'Key takeaways on scaling lakehouse architecture and sovereign data governance for generative AI enterprise models.',
                'image_url' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'Data • AI • Platform'
            ],
            [
                'id' => 2,
                'type' => 'WHITEPAPER',
                'category' => 'AI Governance',
                'date_str' => 'Jun 22',
                'title' => 'Platform, people, and process: why AI governance is the missing piece',
                'summary' => 'Why successful AI deployment requires aligning technology platforms, human talent, and transparent risk management frameworks.',
                'image_url' => 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'AI • Governance • People'
            ],
            [
                'id' => 3,
                'type' => 'REPORT',
                'category' => 'Public Sector',
                'date_str' => 'Jun 18',
                'title' => 'AI in government: the procurement problem',
                'summary' => 'How public sector procurement frameworks must evolve to accommodate rapidly shifting cloud & AI technologies safely.',
                'image_url' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'AI • Data • Transformation'
            ],
            [
                'id' => 4,
                'type' => 'ARTICLE',
                'category' => 'Cloud & Security',
                'date_str' => 'Jun 05',
                'title' => 'Navigating Sovereign Cloud Requirements for Government Agencies',
                'summary: Ensuring strict data sovereignty while harvesting the agility of multi-cloud architectures.',
                'summary' => 'Ensuring strict data sovereignty while harvesting the agility of multi-cloud architectures in government.',
                'image_url' => 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'Cloud • Sovereignty • Security'
            ],
            [
                'id' => 5,
                'type' => 'PERSPECTIVE',
                'category' => 'Digital CX',
                'date_str' => 'May 20',
                'title' => 'Designing Human-Centric Citizen Experiences in the Age of Autonomous AI',
                'summary' => 'Creating accessible, frictionless digital services that build trust across diverse demographics.',
                'image_url' => 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'CX • Accessibility • AI'
            ],
            [
                'id' => 6,
                'type' => 'RESEARCH',
                'category' => 'Cybersecurity',
                'date_str' => 'May 10',
                'title' => 'Zero Trust in the GenAI Era: Securing LLM Integrations against Data Leakage',
                'summary' => 'Best practices for securing enterprise Large Language Models against prompt injections and telemetry leaks.',
                'image_url' => 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'Security • GenAI • ZeroTrust'
            ]
        ];
    }

    private function getDefaultNews()
    {
        return [
            [
                'id' => 1,
                'category' => 'PRESS RELEASE',
                'title' => 'Challenge Us: A new era of partnership and possibility',
                'date_str' => 'JULY 20, 2026',
                'summary' => 'Discover how NCS is partnering with enterprises to challenge conventional thinking and accelerate digital value.',
                'image_url' => 'https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?auto=format&fit=crop&w=600&q=80',
                'icon_overlay' => 'quote'
            ],
            [
                'id' => 2,
                'category' => 'PARTNERSHIP',
                'title' => 'NCS and Newgen announce new low-code partnership to accelerate enterprise-scale modernisation for Australian businesses',
                'date_str' => 'JUNE 15, 2026',
                'summary' => 'Empowering commercial enterprises with rapid application delivery and workflow automation.',
                'image_url' => 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
                'icon_overlay' => 'tech'
            ],
            [
                'id' => 3,
                'category' => 'ANNOUNCEMENT',
                'title' => 'NCS launches Google Cloud Academy in Australia to strengthen Australian AI and cloud talent',
                'date_str' => 'MAY 28, 2026',
                'summary' => 'Creating specialized training programs to upskill 1,000+ local engineers in enterprise generative AI.',
                'image_url' => 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
                'icon_overlay' => 'cloud'
            ],
            [
                'id' => 4,
                'category' => 'AWARD',
                'title: NCS recognised as Leader in Asia-Pacific Cloud Migration & AI Operations Report 2026',
                'title' => 'NCS recognised as Leader in Asia-Pacific Cloud Migration & AI Operations Report 2026',
                'date_str' => 'MAY 12, 2026',
                'summary' => 'Independent study highlights NCS for market leadership in public sector digital transformation.',
                'image_url' => 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80',
                'icon_overlay' => 'star'
            ],
            [
                'id' => 5,
                'category' => 'COLLABORATION',
                'title' => 'NCS expands Strategic Collaboration with AWS to build Sovereign Cloud Solutions',
                'date_str' => 'APRIL 29, 2026',
                'summary' => 'Delivering next-generation secure cloud environments for critical infrastructure across ANZ.',
                'image_url' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80',
                'icon_overlay' => 'cloud'
            ],
            [
                'id' => 6,
                'category' => 'EXPANSION',
                'title' => 'NCS opens new Innovation Hub in Melbourne to accelerate AI research and enterprise co-creation',
                'date_str' => 'APRIL 14, 2026',
                'summary' => 'New state-of-the-art facility dedicated to rapid prototyping of generative AI solutions.',
                'image_url' => 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
                'icon_overlay' => 'tech'
            ]
        ];
    }
}
