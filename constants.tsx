
import { CoverageDetail, TimelineStep, QuizQuestion, Scenario } from './types';

export const COVERAGE_GROUPS = [
  "Benefits That Remain Mandatory",
  "Benefits That Are Now Optional (Effective July 1, 2026)",
  "Benefits That Remain Optional"
];

export const COVERAGE_DATA: CoverageDetail[] = [
  // GROUP: Benefits That Remain Mandatory
  {
    id: 'med-rehab',
    group: "Benefits That Remain Mandatory",
    title: "Medical and Rehabilitation Benefit",
    summary: "Covers the cost of reasonable and necessary medical and rehabilitation expenses that are not covered by OHIP or your group insurance plan.",
    mandatory: "For non-catastrophic injuries, the limit is $65,000. For minor injuries, the limit is $3,500.",
    increased: "Optional increase for non-catastrophic injuries to $130,000 or combined $1,000,000 with attendant care. Catastrophic injuries can add $1,000,000.",
    icon: "🏥",
    tip: "Note: Auto insurers are now 'first payor' for these expenses (except medication) before your private health plan."
  },
  {
    id: 'attendant-care',
    group: "Benefits That Remain Mandatory",
    title: "Attendant Care Benefit",
    summary: "If you require an aide or attendant to assist with your personal care after an accident, this benefit will pay for those services.",
    mandatory: "For non-catastrophic injuries, included within the $65,000 med/rehab limit. For catastrophic, the limit is $1,000,000.",
    increased: "Optional increase for non-catastrophic to $72,000 or combined $1,000,000 with med/rehab. Catastrophic injuries can add $1,000,000.",
    icon: "🛌",
    tip: "This coverage is essential for those who live alone and may need professional help with daily tasks like bathing or dressing."
  },

  // GROUP: Benefits That Are Now Optional (Effective July 1, 2026)
  {
    id: 'income-replacement',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Income Replacement Benefit",
    summary: "Previously mandatory; now optional. Provides a weekly payment if you are unable to work as a result of an accident.",
    mandatory: "70% of gross weekly income, up to a maximum of $400 per week (if selected).",
    increased: "Optional benefit to increase the weekly maximum to $600, $800, or $1,000.",
    icon: "💰",
    tip: "Review your workplace Long Term Disability (LTD) policy; you may already have sufficient coverage through your employer."
  },
  {
    id: 'non-earner',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Non-Earner Benefit",
    summary: "Previously mandatory; now optional. Provides a weekly payment if you do not qualify for income replacement and are unable to carry on a normal life.",
    mandatory: "$185 per week with a 4-week waiting period. Payable for up to two years (if selected).",
    increased: "Optional benefit to increase this to $320 per week.",
    icon: "🎓",
    tip: "Highly recommended for students, retirees, or stay-at-home parents who don't have a traditional income to protect."
  },
  {
    id: 'caregiver',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Caregiver Benefit",
    summary: "Previously mandatory for catastrophic injuries; now optional. Covers expenses to hire care if you can no longer care for a dependant.",
    mandatory: "Up to $250/week for first dependant + $50/others (if selected, for catastrophic injuries only).",
    increased: "Optional benefit available to make this coverage applicable for all levels of injury.",
    icon: "👪",
    tip: "Essential for primary caregivers of children or elderly relatives who would need to hire help if injured."
  },
  {
    id: 'housekeeping',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Housekeeping and Home Maintenance",
    summary: "Previously mandatory for catastrophic injuries; now optional. Covers costs of hiring household help.",
    mandatory: "Up to $100 per week (if selected, for catastrophic injuries only).",
    increased: "Optional benefit available to make this coverage applicable for all levels of injury.",
    icon: "🏠",
    tip: "Consider who would handle heavy cleaning or outdoor maintenance if you were temporarily unable to perform these duties."
  },
  {
    id: 'death-benefit',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Death Benefit",
    summary: "Previously mandatory; now optional. A one-time payment to the surviving spouse and dependants of a person who dies as a result of an auto accident.",
    mandatory: "$25,000 to spouse, $10,000 to each dependant (if selected). If none, $25,000 divided among other beneficiaries.",
    increased: "Optional increase to $50,000 for spouse and $20,000 for each dependant.",
    icon: "🕯️",
    tip: "This is a low-cost way to provide immediate cash flow for a family in the event of a tragic accident."
  },
  {
    id: 'funeral-benefit',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Funeral Benefit",
    summary: "Previously mandatory; now optional. A one-time payment to cover the costs of a funeral.",
    mandatory: "Up to $6,000 (if selected).",
    increased: "Optional increase to $8,000 limit.",
    icon: "⚰️",
    tip: "Standard funeral costs in Ontario often exceed the $6,000 base level; the optional increase is usually very affordable."
  },
  {
    id: 'lost-educational',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Lost Educational Expenses",
    summary: "Previously mandatory; now optional. Reimburses students for lost tuition, books, and fees if unable to continue their program.",
    mandatory: "Up to $15,000 (if selected).",
    increased: "No optional increase available.",
    icon: "📚",
    tip: "Crucial for university or college students who have already paid significant tuition for the semester."
  },
  {
    id: 'visitor-expenses',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Expenses of Visitors",
    summary: "Previously mandatory; now optional. Covers expenses of certain family members to visit you during treatment or recovery.",
    mandatory: "Reasonable expenses are covered (if selected).",
    increased: "No optional increase available.",
    icon: "👥",
    tip: "Helps your family be by your side without worrying about travel or lodging costs during a hospital stay."
  },
  {
    id: 'damage-clothing',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Damage to Clothing, Glasses, etc.",
    summary: "Previously mandatory; now optional. Covers cost to replace clothing, glasses, hearing aids, and medical devices damaged in the accident.",
    mandatory: "Reasonable expenses are covered (if selected).",
    increased: "No optional increase available.",
    icon: "👓",
    tip: "Expensive hearing aids or designer eyewear can be costly to replace out-of-pocket after a crash."
  },
  {
    id: 'exam-costs',
    group: "Benefits That Are Now Optional (Effective July 1, 2026)",
    title: "Cost of Examinations",
    summary: "Previously mandatory; now optional. Covers cost of examinations required to assess injuries and determine benefit eligibility.",
    mandatory: "Up to $2,500 (if selected).",
    increased: "No optional increase available.",
    icon: "📝",
    tip: "These exams are often required by the insurer to verify the nature and extent of your disability."
  },

  // GROUP: Benefits That Remain Optional
  {
    id: 'opt-dependant-care',
    group: "Benefits That Remain Optional",
    title: "Optional Dependant Care Benefit",
    summary: "Additional support for caring for dependants if you are employed at the time of the accident.",
    mandatory: "Not provided as a standard benefit.",
    increased: "Pays up to $75/week for first dependant + $25/others, max $150/week.",
    icon: "👶",
    tip: "A dedicated benefit specifically designed for working parents to ensure childcare continues uninterrupted."
  },
  {
    id: 'opt-indexation',
    group: "Benefits That Remain Optional",
    title: "Optional Indexation Benefit",
    summary: "Ensures benefits and monetary limits are adjusted annually for inflation.",
    mandatory: "Not provided as a standard benefit.",
    increased: "Annual adjustment based on the Consumer Price Index (CPI).",
    icon: "📈",
    tip: "Extremely valuable if an injury leads to a long-term disability, as it protects your benefits' value over many years."
  }
];

// Added TIMELINE_DATA for Timeline component
export const TIMELINE_DATA: TimelineStep[] = [
  {
    title: "Modernization Announcement",
    date: "April 2024",
    description: "Ontario government announces plans to give drivers more choice and lower premiums by making several SABS benefits optional.",
    status: "completed"
  },
  {
    title: "Legislative Changes",
    date: "Late 2024",
    description: "Amendments to the Insurance Act and SABS regulation are finalized to enable the new 'choice' model.",
    status: "completed"
  },
  {
    title: "Consumer Education",
    date: "2025 - Early 2026",
    description: "Insurers and brokers begin communicating with policyholders about the upcoming changes and new options.",
    status: "current"
  },
  {
    title: "Effective Date",
    date: "July 1, 2026",
    description: "New SABS optionality rules take effect for all new policies and renewals in Ontario.",
  }
];

// Added QUIZ_DATA for Quiz component
export const QUIZ_DATA: QuizQuestion[] = [
  {
    id: 1,
    question: "Which of these benefits will remain mandatory for all drivers after July 1, 2026?",
    options: ["Income Replacement Benefit", "Medical and Rehabilitation Benefit", "Non-Earner Benefit", "Funeral Benefit"],
    correctAnswer: "Medical and Rehabilitation Benefit",
    feedbackCorrect: "Correct! Medical and Rehabilitation (along with Attendant Care) remains a mandatory core benefit.",
    feedbackIncorrect: "Incorrect. Income Replacement, Non-Earner, and Funeral benefits are all becoming optional as of July 1, 2026."
  },
  {
    id: 2,
    question: "If a customer chooses NOT to buy the optional Income Replacement Benefit, what is their default coverage limit?",
    options: ["$400 per week", "70% of gross income", "$0 (No coverage)", "$185 per week"],
    correctAnswer: "$0 (No coverage)",
    feedbackCorrect: "Exactly. If they opt-out, they have $0 coverage for that specific benefit under SABS. They would rely on other disability insurance.",
    feedbackIncorrect: "Not quite. 'Optional' means if they don't select it and pay the premium, they have no coverage ($0) for that benefit."
  },
  {
    id: 3,
    question: "Who is the 'first payor' for medical expenses (excluding drugs) for auto accident injuries in Ontario?",
    options: ["OHIP", "Your private group health plan", "The auto insurer", "The federal government"],
    correctAnswer: "The auto insurer",
    feedbackCorrect: "Correct! For med/rehab expenses (except medication), the auto insurer is now the primary payor before private health plans.",
    feedbackIncorrect: "Incorrect. Auto insurers are now the 'first payor' for medical and rehabilitation expenses, preceding private health plans."
  }
];

// Added SCENARIOS_DATA for Scenarios component
export const SCENARIOS_DATA: Scenario[] = [
  {
    id: "senior-driver",
    title: "The Retired Professional",
    customerProfile: "I'm 72, retired, and have a comprehensive health plan through my former employer. I live with my spouse and we own our home.",
    icon: "👵",
    options: ["Income Replacement Benefit", "Medical and Rehabilitation Benefit", "Non-Earner Benefit", "Caregiver Benefit", "Housekeeping and Home Maintenance", "Death Benefit"],
    correctCoverages: ["Medical and Rehabilitation Benefit", "Non-Earner Benefit", "Death Benefit"],
    explanation: "Since they are retired, Income Replacement isn't needed. However, Non-Earner is vital if they lose independence. Medical/Rehab is core, and Death Benefit provides liquidity.",
    explanationOption: "I can explain the differences between the new optional benefits like Non-Earner and how they compare to your existing retiree health plan.",
    recommendationOption: "I recommend you skip Income Replacement but definitely keep the Non-Earner benefit as it's best for retirees."
  }
];
