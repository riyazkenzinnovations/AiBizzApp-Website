import React from 'react'
import {
  GraduationCap,
  BookOpen,
  Users,
  Calendar,
  CreditCard,
  Award,
  ShieldCheck,
  FileCheck,
  CheckCircle2,
  Building,
  Clock,
  Briefcase
} from 'lucide-react'
import IndustryTemplate from './IndustryTemplate'
import eduImg from '../../assets/industry-images/education.jpeg'

export default function Education({ onNavigate }) {
  const challenges = [
    {
      icon: CreditCard,
      iconBg: 'bg-rose-50 text-rose-600',
      title: 'Fee Collection & Defaulter Tracking',
      desc: 'Manual fee reconciliation, missed payment dues, and uncoordinated installment plans causing chronic institutional cash flow gaps.'
    },
    {
      icon: Calendar,
      iconBg: 'bg-blue-50 text-blue-600',
      title: 'Complex Timetable & Room Conflicts',
      desc: 'Clashes in faculty teaching hours, multi-section room availability, and lab resource bookings creating operational chaos.'
    },
    {
      icon: Users,
      iconBg: 'bg-emerald-50 text-emerald-600',
      title: 'Disconnected Student Records',
      desc: 'Siloed admission portals, exam score databases, and attendance registers preventing single-view student evaluation.'
    },
    {
      icon: Award,
      iconBg: 'bg-amber-50 text-amber-600',
      title: 'Sluggish Examination & Grading Cycles',
      desc: 'Weeks spent manually tabulating GPA scores, moderating marks, and printing physical report cards and transcripts.'
    }
  ]

  const whySolutions = [
    {
      icon: CreditCard,
      title: 'Automated Fee Management & Online Gateway',
      desc: 'Multi-tier fee structure setup, automated payment reminders via SMS/WhatsApp, and 1-click online fee receipt generation.'
    },
    {
      icon: Calendar,
      title: 'Intelligent Faculty & Room Scheduling',
      desc: 'Automated timetable generation algorithm preventing faculty overlap and optimizing classroom and lab capacity.'
    },
    {
      icon: Award,
      title: 'Instant Gradebook & Digital Transcripts',
      desc: 'Weighted GPA calculation, continuous internal assessment (CIA) grading, and automated digital certificate generation.'
    }
  ]

  const functionalSections = [
    {
      badge: 'STUDENT LIFECYCLE',
      title: 'Admissions, Attendance & Academic Portals',
      description: 'Unified management for schools, polytechnics, and multi-campus universities.',
      icon: GraduationCap,
      items: [
        'Online student inquiry, application & merit list engine',
        'Biometric & RFID student / staff attendance integration',
        'Parent & student mobile portal for notices and homework',
        'Hostel allotment, mess billing & library circulation'
      ]
    },
    {
      badge: 'EXAMINATION & ACCREDITATION',
      title: 'Examinations, GPA Grading & Compliance',
      description: 'Maintain academic accreditation standards with automated reports.',
      icon: BookOpen,
      items: [
        'Hall ticket generation and examination seating layouts',
        'Relative & absolute grading with automated GPA / CGPA',
        'Faculty workload balancing and payroll integration',
        'Accreditation audit reporting (NAAC, NBA, ABET)'
      ]
    }
  ]

  const faqs = [
    {
      q: 'Can AiBizz Education ERP handle multiple campuses and faculties?',
      a: 'Yes. It is multi-campus and multi-tenant by design, allowing university groups to manage individual colleges while consolidating financial ledgers at the trust level.'
    },
    {
      q: 'Does it support automated fee reminders and online payment portals?',
      a: 'Yes. Parents can view outstanding dues and pay instantly via UPI, credit/debit card, or net banking, with auto-reconciled student fee ledgers.'
    },
    {
      q: 'Can professors log marks and attendance on mobile devices?',
      a: 'Yes. Faculty members have mobile app access to mark daily lecture attendance and input internal test scores in seconds.'
    }
  ]

  return (
    <IndustryTemplate
      badge="All-in-One Campus ERP Suite"
      titlePrefix="ERP Software Solutions for"
      highlightWord="Schools, Colleges & Universities"
      subtitle="Complete student lifecycle management, digital admission portals, multi-tier fee structures, faculty scheduling, and exam grading."
      trustPoints={['Multi-Campus Trust Setup', 'Automated Fee Gateways', 'Accreditation Ready']}
      heroImage={eduImg}
      heroHud={{
        badge: 'CAMPUS LIVE • 99.9% ENROLLED',
        statLabel: 'FEE RECONCILIATION',
        statValue: '98% On-Time Dues'
      }}
      overview={{
        title: 'Modern Higher Education & School Operations',
        p1: 'Modern educational institutions must deliver digital convenience to students and parents while managing complex regulatory compliance, faculty scheduling, and institutional budgets.',
        subheading: 'Elevate Academic Administration to the Cloud',
        p2: 'AiBizz Education ERP unifies student admissions, fee collections, academic schedules, and payroll into an intuitive digital campus platform.'
      }}
      challenges={challenges}
      whySolutions={whySolutions}
      functionalSections={functionalSections}
      faqs={faqs}
      onNavigate={onNavigate}
    />
  )
}
