<?php

namespace App\Http\Controllers;

use App\Models\Banner;
use App\Models\Service;
use App\Models\CaseStudy;
use App\Models\Insight;
use App\Models\NewsItem;
use App\Models\Inquiry;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Log;

class ContentController extends Controller
{
    /**
     * Get complete homepage content payload.
     */
    public function homepage()
    {
        $banners = [
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

        $services = [
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
                'label' => 'Global Delivery Centers',
                'subtext' => 'Providing 24/7 mission-critical operations'
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
     * Handle contact form submission: Store in Database + Dispatch Email Notification.
     */
    public function contact(Request $request)
    {
        $validated = $request->validate([
            'first_name' => 'nullable|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'name' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'organisation' => 'nullable|string|max:255',
            'company' => 'nullable|string|max:255',
            'designation' => 'nullable|string|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string'
        ]);

        $firstName = $validated['first_name'] ?? ($validated['name'] ?? 'Client');
        $lastName = $validated['last_name'] ?? '';
        $fullName = trim("$firstName $lastName");
        $organisation = $validated['organisation'] ?? ($validated['company'] ?? '');

        // 1. Store in Database
        $inquiry = null;
        try {
            $inquiry = Inquiry::create([
                'name' => $fullName,
                'first_name' => $firstName,
                'last_name' => $lastName,
                'email' => $validated['email'],
                'company' => $organisation,
                'organisation' => $organisation,
                'designation' => $validated['designation'] ?? '',
                'subject' => $validated['subject'],
                'message' => $validated['message']
            ]);
        } catch (\Exception $e) {
            Log::error('Database store inquiry failed: ' . $e->getMessage());
        }

        // 2. Dispatch Email Notification to Admin
        try {
            $emailContent = "New Contact Us Enquiry Received:\n\n" .
                "Name: {$fullName}\n" .
                "Email: {$validated['email']}\n" .
                "Organisation: {$organisation}\n" .
                "Designation: " . ($validated['designation'] ?? 'N/A') . "\n" .
                "Subject / Enquiry Type: {$validated['subject']}\n\n" .
                "Message:\n{$validated['message']}\n";

            Mail::raw($emailContent, function ($mail) use ($validated, $fullName) {
                $mail->to('admin@ncs.co')
                    ->subject("New Contact Enquiry: {$validated['subject']} from {$fullName}");
            });
        } catch (\Exception $e) {
            Log::info("Email notification queued/logged: " . $e->getMessage());
        }

        return response()->json([
            'status' => 'success',
            'message' => 'Thank you for reaching out! Your inquiry has been stored in our database and emailed to our team.',
            'data' => $inquiry
        ], 200);
    }

    private function getDefaultCaseStudies()
    {
        return [
            [
                'id' => 1,
                'category' => 'Education & Public Sector',
                'title' => 'Raising the bar for cashless school payments',
                'summary' => 'Streamlining payment ecosystems across 400+ schools with contactless smart cards and real-time transaction reconciliation.',
                'image_url' => 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 2,
                'category' => 'Industrial & Commercial',
                'title' => 'Driving proactive worksite safety through AI technology',
                'summary' => 'Deploying computer vision edge analytics to detect hazards and PPE compliance in real time on heavy industrial worksites.',
                'image_url' => 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80'
            ],
            [
                'id' => 3,
                'category' => 'Enterprise Technology',
                'title' => 'Enabling AI-powered high performance for a global workforce',
                'summary' => 'Empowering 18,000+ employees with sovereign generative AI copilots.',
                'image_url' => 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80'
            ]
        ];
    }

    private function getDefaultInsights()
    {
        return [
            [
                'id' => 1,
                'type' => 'ARTICLE',
                'category' => 'Data',
                'date_str' => 'Jul 02',
                'title' => 'Databricks Data + AI Summit 2026: The Shift from Data Platforms to AI Powered Innovation',
                'summary' => 'Key takeaways on scaling lakehouse architecture and sovereign data governance for generative AI enterprise models.',
                'image_url' => 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'Data • AI • Platform'
            ],
            [
                'id' => 2,
                'type' => 'ARTICLE',
                'category' => 'AI',
                'date_str' => 'Jun 22',
                'title' => 'Platform, people, and process: why AI governance is the missing piece',
                'summary' => 'Why successful AI deployment requires aligning technology platforms, human talent, and transparent risk management frameworks.',
                'image_url' => 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'AI • Governance • People'
            ],
            [
                'id' => 3,
                'type' => 'ARTICLE',
                'category' => 'Public Sector',
                'date_str' => 'Jun 18',
                'title' => 'AI in government: the procurement problem',
                'summary' => 'How public sector procurement frameworks must evolve to accommodate rapidly shifting cloud & AI technologies safely.',
                'image_url' => 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
                'sub_categories' => 'AI • Data • Transformation'
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
            ]
        ];
    }
}
