<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\JobPosting;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $defaultJobs = [
            [
                'title' => 'SAP ABAP Technical Consultant - 3 month contract',
                'slug' => 'sap-abap-technical-consultant-3-month-contract',
                'employment_type' => 'Full-time',
                'department' => 'SAP',
                'location' => 'Melbourne, VIC',
                'work_mode' => '4 days onsite, 1 wfh',
                'is_remote' => true,
                'company_description' => 'At NCS Australia, we believe in doing technology services better. Our commitment to quality, focus on people, and willingness to challenge traditional thinking set us apart. Our team brings this belief to life by partnering with our clients and communities to make tomorrow together.',
                'job_description' => 'We are seeking an experienced SAP ABAP Developer for a 3 month engagement supporting a major SAP Upgrade project. Reporting directly to the SAP Upgrade Solution Architect, you will serve as a hands-on technical specialist responsible for designing, building, testing, deploying, and supporting core integration solutions primarily on SAP S/4HANA.',
                'key_responsibilities' => "• Design and develop ABAP code for SAP S/4HANA transformations.\n• Perform performance tuning, bug fixing, and code optimization.\n• Collaborate with functional consultants and solution architects.\n• Build custom REST/OData APIs and enterprise workflows.",
                'requirements' => "• 5+ years of experience in SAP ABAP development.\n• Hands-on experience with SAP S/4HANA and OData services.\n• Strong troubleshooting and debugging skills.",
                'status' => 'active',
            ],
            [
                'title' => 'HCM Business Analyst',
                'slug' => 'hcm-business-analyst',
                'employment_type' => 'Full-time',
                'department' => 'Digital Applications',
                'location' => 'Macquarie Park, NSW',
                'work_mode' => 'Hybrid mode',
                'is_remote' => false,
                'company_description' => 'NCS Australia is a leading digital technology transformation partner enabling public and private sector clients across ANZ.',
                'job_description' => 'Join our Digital Applications practice as an HCM Business Analyst to drive human capital management platform modernisations for key public sector accounts.',
                'key_responsibilities' => "• Gather business requirements and construct functional specification documents.\n• Facilitate stakeholder workshops across HR and payroll functions.\n• Partner with tech leads to validate delivery blueprints.",
                'requirements' => "• Proven experience in Workday, SAP SuccessFactors, or Oracle HCM implementations.\n• Strong analytical and agile storytelling skills.",
                'status' => 'active',
            ],
            [
                'title' => 'Senior Business Analyst',
                'slug' => 'senior-business-analyst',
                'employment_type' => 'Contract',
                'department' => 'Digital Applications',
                'location' => 'Preston, VIC',
                'work_mode' => 'Hybrid mode',
                'is_remote' => true,
                'company_description' => 'NCS Australia brings human-centric technology solutions to government and commercial enterprises.',
                'job_description' => 'We are looking for a Senior Business Analyst to lead complex system integration projects across our Digital Applications practice in Preston, VIC.',
                'key_responsibilities' => "• Lead end-to-end requirement engineering for multi-cloud digital platforms.\n• Manage product backlogs and sprint planning.",
                'requirements' => "• 7+ years of experience as a BA in IT services or consulting.",
                'status' => 'active',
            ],
            [
                'title' => 'SAP FICO Consultant (S/4HANA)',
                'slug' => 'sap-fico-consultant-s4hana',
                'employment_type' => 'Full-time',
                'department' => 'SAP',
                'location' => 'Sydney, Australia',
                'work_mode' => 'Hybrid mode',
                'is_remote' => false,
                'company_description' => 'NCS Australia SAP Practice drives large-scale digital ERP transformations.',
                'job_description' => 'Delivering SAP S/4HANA Financial Accounting and Controlling modules for key enterprise client deployments.',
                'key_responsibilities' => "• Configure SAP FICO modules for ledger management and financial reporting.",
                'requirements' => "• SAP S/4HANA FICO Certification preferred.",
                'status' => 'active',
            ],
            [
                'title' => 'Google Data Engineer - GCP',
                'slug' => 'google-data-engineer-gcp',
                'employment_type' => 'Full-time',
                'department' => 'Cloud & AI',
                'location' => 'Canberra, Australia',
                'work_mode' => 'Hybrid mode',
                'is_remote' => true,
                'company_description' => 'NCS Data & AI Academy builds sovereign cloud intelligence solutions.',
                'job_description' => 'Architecting and implementing scalable data pipelines on Google Cloud Platform using BigQuery, Dataflow, and Pub/Sub.',
                'key_responsibilities' => "• Build ETL/ELT pipelines and BigQuery analytics tables.\n• Implement GenAI and machine learning model integrations.",
                'requirements' => "• GCP Professional Data Engineer Certification.",
                'status' => 'active',
            ]
        ];

        foreach ($defaultJobs as $jobData) {
            JobPosting::updateOrCreate(['slug' => $jobData['slug']], $jobData);
        }
    }
}
