import { 
  ShieldCheck, 
  HeartPulse, 
  Stethoscope, 
  Ear, 
  Activity, 
  Clock, 
  TrendingUp, 
  PiggyBank, 
  Landmark, 
  GraduationCap, 
  Umbrella, 
  FileText, 
  Briefcase, 
  Scale, 
  ScrollText,
  DollarSign
} from 'lucide-react';
import { ServiceCategory, Testimonial, BlogPost, EventItem, GalleryItem } from './types';

export const COMPANY_NAME = "RSRB Solutions";

export const NAVIGATION_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Testimonials', path: '/testimonials' },
  { name: 'Blog', path: '/blog' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

export const HEALTHCARE_SERVICES: ServiceCategory = {
  title: "Health Care Insurance Services",
  items: [
    { 
      title: "Medicare", 
      description: "Comprehensive guidance on Medicare Parts A, B, C, and D.", 
      details: "We navigate the complexities of Medicare to ensure you get the coverage you deserve. Part A covers hospital insurance, Part B covers medical insurance, Part C offers Medicare Advantage plans replacing Original Medicare with often broader coverage, and Part D covers prescription drugs. We guide you through enrollment periods, penalty avoidance, and selecting the plan that best fits your specific health needs and budget.",
      icon: ShieldCheck 
    },
    { 
      title: "Medicare Supplement Plans", 
      description: "Fill the gaps in your original Medicare coverage.", 
      details: "Also known as Medigap, these policies are sold by private companies to help pay some of the health care costs that Original Medicare doesn't cover, like copayments, coinsurance, and deductibles. We compare rates from top carriers to find you the most competitive pricing, ensuring you have predictable costs for your healthcare services.",
      icon: HeartPulse 
    },
    { 
      title: "Private Health Care Plans", 
      description: "Tailored health insurance solutions for individuals and families.", 
      details: "For those under 65 or not eligible for Medicare, we offer a diverse range of private health insurance options. Whether you need an Affordable Care Act (ACA) marketplace plan, short-term coverage to bridge a gap, or a comprehensive family plan, we analyze your financial situation and health requirements to recommend the best policy.",
      icon: Stethoscope 
    },
    { 
      title: "Dental, Vision, and Hearing", 
      description: "Essential coverage for complete wellness.", 
      details: "Original Medicare and many basic health plans do not cover routine dental, vision, and hearing care. We offer standalone plans or Medicare Advantage packages that include these vital benefits. From routine cleanings and eye exams to hearing aids and major dental work, we ensure your overall sensory health is fully protected.",
      icon: Ear 
    },
    { 
      title: "Disability Coverage", 
      description: "Protect your income in case of unexpected illness or injury.", 
      details: "Your ability to earn an income is likely your greatest asset. Our disability insurance policies provide monthly benefits if you become unable to work due to illness or injury. We help you calculate the right amount of coverage to ensure your mortgage, bills, and lifestyle are maintained even when you can't work.",
      icon: Activity 
    },
    { 
      title: "Long-Term Care Insurance", 
      description: "Planning for future care needs and assisted living.", 
      details: "Long-term care services—such as help with bathing, dressing, and eating—are rarely covered by regular health insurance or Medicare. We help you plan for the significant cost of assisted living, nursing home care, or home health aides, protecting your retirement savings from being rapidly depleted by these necessary care costs.",
      icon: Clock 
    },
  ]
};

export const FINANCIAL_SERVICES: ServiceCategory = {
  title: "Financial Services",
  items: [
    { 
      title: "401(k), 403(b) & IRA Rollovers", 
      description: "Seamless transfer and management of retirement funds.", 
      details: "Changing jobs or retiring often leaves retirement accounts scattered. We manage the rollover of your 401(k) or 403(b) funds into an IRA, giving you a wider range of investment choices and centralized control without incurring immediate tax penalties. We ensure the direct transfer is handled correctly to preserve the tax-deferred status of your hard-earned savings.",
      icon: TrendingUp 
    },
    { 
      title: "Tax-Free Retirement Planning", 
      description: "Strategies to maximize your retirement income efficiently.", 
      details: "We utilize advanced strategies like Roth IRAs, Roth conversions, and specialized life insurance policies (LIRPs) to create income streams in retirement that are free from federal income taxes. This approach protects your purchasing power against potential future tax rate increases and gives you more flexibility in how you draw down your assets.",
      icon: PiggyBank 
    },
    { 
      title: "Fixed Indexed Annuities", 
      description: "Growth potential with protection from market downturns.", 
      details: "Fixed Indexed Annuities (FIAs) offer a balance of safety and growth potential. Your principal is protected from market losses, while your interest earnings are linked to the performance of a market index (like the S&P 500). This provides the potential for higher returns than traditional fixed investments with zero downside risk to your principal due to market volatility.",
      icon: Landmark 
    },
    { 
      title: "College Education Planning", 
      description: "Saving for your children's future education expenses.", 
      details: "We help you navigate 529 plans, Coverdell ESAs, and other education savings vehicles. Our goal is to maximize your savings growth while minimizing the impact on financial aid eligibility. We help you project future tuition costs and create a disciplined savings plan to ensure you're ready when the acceptance letters arrive.",
      icon: GraduationCap 
    },
    { 
      title: "Life Insurance", 
      description: "Term, Whole Life, and IUL policies to protect your loved ones.", 
      details: "We offer a full suite of life insurance products tailored to your stage of life. Term life for affordable temporary protection during your working years, Whole Life for permanent coverage with guaranteed cash value, and Indexed Universal Life (IUL) for flexible premiums and cash value growth potential linked to market indices. We help you determine the right death benefit to protect your family's future.",
      icon: Umbrella 
    },
    { 
      title: "Final Expense Planning", 
      description: "Ensuring peace of mind for end-of-life expenses.", 
      details: "These are smaller permanent life insurance policies specifically designed to cover funeral costs, burial or cremation fees, and other end-of-life expenses. We help you secure a policy with simplified underwriting that ensures your loved ones aren't burdened with these financial obligations during a difficult emotional time.",
      icon: FileText 
    },
    { 
      title: "Estate Planning", 
      description: "Preserving your legacy for future generations.", 
      details: "Beyond just a will, effective estate planning involves structuring your assets to minimize estate taxes and ensure a smooth transfer to your heirs. We work alongside legal experts to help you understand how to title assets, designate beneficiaries, and utilize trusts to carry out your specific wishes and protect your legacy.",
      icon: Briefcase 
    },
    { 
      title: "Debt and Tax Consolidation", 
      description: "Strategies to manage and reduce financial liabilities.", 
      details: "We analyze your current liabilities and explore strategies to consolidate high-interest debt or manage tax liabilities more efficiently. By restructuring debt or utilizing home equity properly, we can often free up monthly cash flow that can then be redirected towards savings and wealth accumulation.",
      icon: DollarSign 
    },
    { 
      title: "Wills and Living Trusts", 
      description: "Legal preparations for asset distribution.", 
      details: "We guide you through the process of establishing essential legal documents. A Living Trust can help your estate avoid the costly and public probate process, saving time and money for your heirs. A Will ensures your specific instructions regarding asset distribution and guardianship of minor children are legally documented.",
      icon: Scale 
    },
    { 
      title: "Additional Financial Services", 
      description: "Customized financial solutions for unique needs.", 
      details: "From charitable giving strategies and business succession planning to executive compensation packages, our team is equipped to handle complex financial situations. We provide a customized, consultative approach to meet any unique financial challenge or opportunity you may face.",
      icon: ScrollText 
    },
  ]
};

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Small Business Owner",
    content: "RSRB Solutions helped me navigate the complex world of private health insurance. Their team was patient and found the perfect plan for my family.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 2,
    name: "Robert Chen",
    role: "Retired Engineer",
    content: "The retirement planning advice I received was invaluable. They helped me rollover my 401(k) seamlessly. Highly recommended for financial peace of mind.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 3,
    name: "Emily Thompson",
    role: "Teacher",
    content: "I didn't know where to start with life insurance. RSRB explained everything clearly and helped me choose a policy that fits my budget and needs.",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 4,
    name: "Michael Rodriguez",
    role: "IT Consultant",
    content: "The team at RSRB Solutions went above and beyond to help me set up a tax-free retirement plan. Their expertise is unmatched!",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 5,
    name: "Linda Davis",
    role: "Nurse Practitioner",
    content: "As a healthcare professional, I appreciate their deep understanding of Medicare supplement plans. They made the enrollment process effortless.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Architect",
    content: "Their estate planning services gave me peace of mind knowing my family's future is secure. Professional, knowledgeable, and caring.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Understanding Medicare Parts A, B, C, and D",
    excerpt: "A comprehensive guide to navigating the Medicare alphabet and choosing the right coverage for your retirement years.",
    date: "October 15, 2023",
    author: "RSRB Team",
    category: "Health Insurance",
    image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: "Medicare is a federal health insurance program for people who are 65 or older, certain younger people with disabilities, and people with End-Stage Renal Disease. Navigating the different parts of Medicare can be confusing. \n\nPart A covers inpatient hospital stays, care in a skilled nursing facility, hospice care, and some home health care. Part B covers certain doctors' services, outpatient care, medical supplies, and preventive services. Part C, or Medicare Advantage, is an alternative to Original Medicare offered by private companies. Part D adds prescription drug coverage to Original Medicare, some Medicare Cost Plans, some Medicare Private-Fee-for-Service Plans, and Medicare Medical Savings Account Plans. \n\nUnderstanding these components is crucial to making informed decisions about your healthcare coverage as you approach retirement."
  },
  {
    id: 2,
    title: "Why You Need Estate Planning Early",
    excerpt: "Estate planning isn't just for the wealthy. Learn why setting up a will or trust is crucial for families of all sizes.",
    date: "November 2, 2023",
    author: "RSRB Financial",
    category: "Financial Planning",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: "Many people believe that estate planning is only for the ultra-wealthy, but that couldn't be further from the truth. Estate planning is about ensuring your assets are distributed according to your wishes and that your loved ones are taken care of after you're gone. \n\nWithout a proper plan, the state determines how your assets are divided, which can lead to lengthy legal battles and family disputes. Early planning allows you to name guardians for minor children, minimize estate taxes, and designate a power of attorney for healthcare and financial decisions. \n\nStarting early gives you peace of mind knowing that your legacy is secure and your family is protected."
  },
  {
    id: 3,
    title: "The Benefits of Fixed Indexed Annuities",
    excerpt: "Explore how FIAs can provide a balanced approach to retirement savings with growth potential and principal protection.",
    date: "November 20, 2023",
    author: "RSRB Financial",
    category: "Retirement",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: "Fixed Indexed Annuities (FIAs) offer a unique combination of growth potential and principal protection, making them an attractive option for retirement planning. Unlike variable annuities, where your principal is at risk in the market, FIAs provide a guaranteed minimum interest rate. \n\nAdditionally, your interest potential is linked to the performance of an external market index, such as the S&P 500. If the index goes up, you earn interest up to a cap. If the index goes down, you simply earn zero interest for that period, but you don't lose your principal. \n\nThis 'zero is your hero' concept makes FIAs a powerful tool for conservative investors looking to grow their nest egg without the fear of market volatility."
  },
  {
    id: 4,
    title: "Financial Planning for Beginners: A Simple Guide",
    excerpt: "The world of finance can be intimidating, but mastering the basics of personal finance is the first step toward financial freedom.",
    date: "December 1, 2023",
    author: "RSRB Team",
    category: "Financial Planning",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: "Financial planning doesn't have to be complicated. At its core, it's about understanding your income, managing your expenses, and saving for the future. Start by creating a budget to track where your money goes every month. \n\nNext, build an emergency fund covering 3-6 months of expenses to protect against unexpected life events. Once your safety net is in place, focus on paying off high-interest debt. Finally, start investing early to take advantage of compound interest. \n\nEven small contributions to a retirement account can grow significantly over time. Remember, the journey to financial wellness is a marathon, not a sprint."
  },
  {
    id: 5,
    title: "Busting Common Health Insurance Myths",
    excerpt: "Don't let misinformation guide your healthcare choices. We debunk popular misconceptions about health insurance policies.",
    date: "December 10, 2023",
    author: "RSRB Financial",
    category: "Health Insurance",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    content: "There are many myths surrounding health insurance that can lead to costly mistakes. Myth #1: 'I'm young and healthy, so I don't need insurance.' Accidents and unexpected illnesses can happen to anyone, and medical bills can be devastating without coverage. \n\nMyth #2: 'The cheapest premium is always the best deal.' While low premiums are attractive, these plans often come with high deductibles. If you need frequent care, a higher premium plan might actually save you money. \n\nMyth #3: 'All services are covered.' Every policy has exclusions and limitations. It's vital to read the fine print and understand your out-of-pocket costs before you need care."
  }
];

export const UPCOMING_EVENTS: EventItem[] = [
  {
    id: 1,
    title: "Annual Medicare Enrollment Seminar",
    month: "OCT",
    day: "15",
    time: "10:00 AM - 2:00 PM",
    location: "RSRB Community Hall, Suite 400",
    description: "Join us for a comprehensive breakdown of the new Medicare changes for 2025. Refreshments provided.",
    image: "https://images.unsplash.com/photo-1544531586-fde5298cdd40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Financial Wellness for Families",
    month: "NOV",
    day: "05",
    time: "5:30 PM - 7:30 PM",
    location: "City Library Conference Room",
    description: "Learn strategies for budgeting, saving for college, and protecting your family's future income.",
    image: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Holiday Community Mixer",
    month: "DEC",
    day: "12",
    time: "6:00 PM - 9:00 PM",
    location: "The Grand Hotel Ballroom",
    description: "A networking event for our clients and partners to celebrate the year's successes together.",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Client meeting in conference room",
    category: "Office"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Community outreach event",
    category: "Events"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Health seminar presentation",
    category: "Seminars"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Team strategy session",
    category: "Office"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Happy clients shaking hands",
    category: "Clients"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Group photo at charity run",
    category: "Events"
  }
];