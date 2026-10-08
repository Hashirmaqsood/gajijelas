import type { Guide } from "./guides";
import { epfContributionRows, minimumWageFigures, minimumWageRows, unpaidLeaveRows } from "./rateTables";
import { formatRM } from "@/lib/format";

const mw = minimumWageFigures();

export const WORKPLACE_GUIDES: Guide[] = [
  {
    slug: "minimum-wage-malaysia-2026-take-home-pay",
    title: "Minimum Wage Malaysia 2026: RM1,700 Take-Home Pay",
    description:
      "Malaysia's minimum wage is RM1,700 a month (RM8.72 an hour). See the EPF, SOCSO and EIS deducted from it and the take-home pay, plus who is covered.",
    publishedDate: "2026-10-08",
    body: [
      "Malaysia's national minimum wage is RM1,700 a month, or RM8.72 an hour, under the Minimum Wages Order 2024. It took effect on 1 February 2025, with a later start of 1 August 2025 for employers with fewer than five employees.",
      "## What RM1,700 looks like on a payslip",
      "The table uses our salary engine for a Malaysian employee under 60 with no other income. At RM1,700 a month no monthly income tax (PCB) is deducted, so the only deductions are EPF, SOCSO and EIS.",
      "## EPF, SOCSO and EIS at the minimum wage",
      `The employee pays 11% EPF (${formatRM(mw.epfEmployee)}), 0.5% SOCSO (${formatRM(mw.socsoEmployee)}) and 0.2% EIS (${formatRM(mw.eisEmployee)}). On top of the RM1,700 wage, the employer pays 13% EPF (${formatRM(mw.epfEmployer)}), 1.75% SOCSO (${formatRM(mw.socsoEmployer)}) and 0.2% EIS (${formatRM(mw.eisEmployer)}), so the real monthly cost of one minimum-wage employee is about ${formatRM(mw.employerCost)}.`,
      "## Hourly and daily rate",
      `The Order sets the minimum hourly rate at RM8.72, which comes from RM1,700 over the 195 hours in an average month of a 45-hour week. On the common 26-working-day method, RM1,700 a month is about ${formatRM(mw.daily)} a day.`,
      "## Who is covered",
      "The minimum wage applies to employees under a contract of service, whether full-time or part-time, local or foreign. Domestic workers are not covered by the Order.",
      "## Is the rate changing?",
      "The government has said it is reviewing the RM1,700 rate. Nothing changes until a new rate is gazetted, so confirm the current figure with the Ministry of Human Resources before using it for payroll.",
      "## Check your own pay",
      "Enter any salary in the calculator to see your own EPF, SOCSO, EIS, tax and take-home pay.",
    ],
    table: {
      afterIndex: 2,
      caption: "RM1,700 minimum wage: monthly deductions and take-home pay",
      headers: ["Item", "Monthly amount"],
      rows: minimumWageRows({
        gross: "Gross monthly wage",
        epf: "EPF employee (11%)",
        socso: "SOCSO employee (0.5%)",
        eis: "EIS employee (0.2%)",
        pcb: "Income tax (PCB)",
        net: "Take-home pay",
        employerCost: "Total cost to employer (with employer EPF, SOCSO, EIS)",
      }),
    },
    faq: [
      {
        q: "What is the minimum wage in Malaysia in 2026?",
        a: "RM1,700 a month, or RM8.72 an hour, under the Minimum Wages Order 2024. The government has said it is reviewing the rate, but nothing changes until a new rate is gazetted.",
      },
      {
        q: "What is the take-home pay on a RM1,700 salary?",
        a: `About ${formatRM(mw.net)} a month for a Malaysian employee under 60, after ${formatRM(mw.epfEmployee)} EPF, ${formatRM(mw.socsoEmployee)} SOCSO and ${formatRM(mw.eisEmployee)} EIS. No monthly income tax is deducted at this level.`,
      },
      {
        q: "How much EPF is deducted from a RM1,700 salary?",
        a: `The employee share is 11%, which is ${formatRM(mw.epfEmployee)}. The employer pays a further 13%, which is ${formatRM(mw.epfEmployer)}, on top of the wage.`,
      },
      {
        q: "What is the minimum wage per hour in Malaysia?",
        a: "RM8.72 an hour under the Minimum Wages Order 2024.",
      },
      {
        q: "Does the minimum wage apply to foreign workers?",
        a: "Yes, it applies to local and foreign employees under a contract of service. Domestic workers are not covered by the Order.",
      },
    ],
    relatedLinks: [
      { href: "/", label: "Malaysia Salary Calculator" },
      { href: "/guides/minimum-wage-updates-malaysia", label: "Minimum Wage in Malaysia: What's Changed" },
      { href: "/hourly-rate-calculator", label: "Hourly & Daily Rate Calculator" },
      { href: "/guides/gross-net-basic-salary-meaning-malaysia", label: "Gross vs Net vs Basic Salary" },
    ],
  },
  {
    slug: "epf-contribution-table-2026-employee-employer",
    title: "EPF Contribution Table 2026: Employee and Employer",
    description:
      "EPF contribution rates for 2026 by salary: 11% employee, 13% or 12% employer, plus rates for age 60+ and foreign workers. Table from RM1,000 to RM10,000.",
    publishedDate: "2026-10-08",
    body: [
      "EPF (KWSP) contributions are a percentage of your monthly wages. The rate depends on your age, whether you are a Malaysian citizen or permanent resident, and whether you earn RM5,000 or less.",
      "## EPF contribution rates by category",
      "Malaysian citizens and permanent residents below 60 pay 11% as the employee share. The employer pays 13% if the monthly wage is RM5,000 or less, and 12% if it is above RM5,000. Employees aged 60 and above have no required employee deduction and the employer pays 4%. Non-Malaysian employees contribute 2% each from the employee and the employer, which became mandatory from October 2025.",
      "## EPF contribution table by monthly wage",
      "The table shows the employee share, the employer share and the total going into the employee's EPF account for a Malaysian employee below 60. The wages shown are round amounts, where the exact percentage matches KWSP's official banded table. For other wages, the official Third Schedule groups wages in RM20 bands and rounds up, so your payslip can differ by a ringgit or two.",
      "## How and when contributions are paid",
      "The employer deducts the employee share from wages and pays both shares to KWSP by the 15th of the following month. Bonuses, commissions and most allowances count as wages, so contributions apply to them too.",
      "## Calculate your own contribution",
      "Enter your exact wage in the EPF calculator to see your employee and employer contributions and how they are split.",
    ],
    table: {
      afterIndex: 4,
      caption: "EPF contribution by monthly wage 2026 (Malaysian employee below 60)",
      headers: ["Monthly wage", "Employee (11%)", "Employer (13% / 12%)", "Total to EPF"],
      rows: epfContributionRows(),
    },
    faq: [
      {
        q: "What is the EPF contribution rate in 2026?",
        a: "For Malaysian citizens and permanent residents below 60, the employee pays 11% and the employer pays 13% on wages of RM5,000 or less, or 12% on wages above RM5,000.",
      },
      {
        q: "How much does the employer contribute to EPF?",
        a: "13% of monthly wages if the employee earns RM5,000 or less, 12% if above RM5,000, and 4% for employees aged 60 and above.",
      },
      {
        q: "Do foreign workers contribute to EPF?",
        a: "Yes. From October 2025, EPF is mandatory for non-Malaysian employees at 2% from the employee and 2% from the employer.",
      },
      {
        q: "When must EPF contributions be paid?",
        a: "By the 15th of the month after the wages are paid. Both the employee and employer shares are paid together by the employer.",
      },
    ],
    relatedLinks: [
      { href: "/epf-calculator", label: "EPF Calculator (KWSP)" },
      { href: "/guides/epf-employer-contribution-guide-malaysia", label: "EPF Employer Contribution Guide" },
      { href: "/guides/epf-socso-eis-foreign-workers-2025-changes", label: "EPF, SOCSO and EIS for Foreign Workers" },
      { href: "/socso-calculator", label: "SOCSO & EIS Calculator" },
    ],
  },
  {
    slug: "maternity-leave-malaysia-employment-act",
    title: "Maternity Leave in Malaysia: 98 Days & Pay Rules",
    description:
      "Maternity leave in Malaysia is 98 consecutive days under the Employment Act. Who qualifies, how maternity pay works and what to tell your employer.",
    publishedDate: "2026-10-08",
    body: [
      "Under the Employment Act 1955, a female employee is entitled to 98 consecutive days of maternity leave for each confinement. This was increased from 60 days by the Employment (Amendment) Act 2022, in force from 1 January 2023.",
      "## Maternity leave rules at a glance",
      "The table summarises the main rules in the Act. Your contract can give you more than this, but not less.",
      "## Maternity pay",
      "While on maternity leave you receive a maternity allowance at your ordinary rate of pay, as long as you meet the service conditions in the table. Because the 98 days are consecutive, weekends and public holidays inside the period count towards the 98.",
      "## What the Act also checks",
      "The Act contains further conditions linked to the number of surviving children, so check the current text of section 37 or ask the Labour Department if this applies to you.",
      "## Who this page covers",
      "This is a general summary of the Employment Act for private-sector employees in Peninsular Malaysia and Labuan. Sabah and Sarawak have their own Labour Ordinances, and government employees follow public-service circulars, so those rules can differ.",
      "## Telling your employer",
      "Give your employer your medical details and expected delivery date early so the start date and handover can be planned. If your husband works for a private-sector employer, he may also qualify for paternity leave.",
    ],
    table: {
      afterIndex: 2,
      caption: "Maternity leave under the Employment Act 1955",
      headers: ["Topic", "What the Act says"],
      rows: [
        ["Length", "98 consecutive days for each confinement"],
        ["Pay", "Maternity allowance at your ordinary rate of pay"],
        ["Service condition", "Employed for at least 90 days in the 9 months before the confinement, and employed at some point in the 4 months before it"],
        ["What counts as confinement", "Childbirth after at least 22 weeks of pregnancy, whether the child is born alive or not"],
        ["When it starts", "No earlier than 30 days before the expected delivery and no later than the day after the confinement"],
        ["Returning early", "Possible with your employer's consent and a medical certificate that you are fit to work"],
      ],
    },
    faq: [
      {
        q: "How many days of maternity leave do you get in Malaysia?",
        a: "98 consecutive days for each confinement under the Employment Act 1955, since the 2022 amendment took effect on 1 January 2023. Earlier rules gave 60 days.",
      },
      {
        q: "Is maternity leave paid in Malaysia?",
        a: "Yes, you receive a maternity allowance at your ordinary rate of pay if you meet the service conditions, including at least 90 days of employment in the 9 months before the confinement.",
      },
      {
        q: "Do weekends and public holidays count in the 98 days?",
        a: "Yes. The 98 days are consecutive, so weekends and public holidays within the period are counted.",
      },
      {
        q: "Can the husband take leave when his wife gives birth?",
        a: "Eligible married male employees can take 7 consecutive days of paternity leave. See our paternity leave guide for the conditions.",
      },
    ],
    relatedLinks: [
      { href: "/annual-leave-calculator", label: "Annual Leave Calculator" },
      { href: "/guides/paternity-leave-malaysia-employment-act", label: "Paternity Leave in Malaysia" },
      { href: "/guides/employment-act-1955-employee-rights-summary", label: "Employment Act 1955: Key Employee Rights" },
      { href: "/guides/annual-leave-sick-leave-entitlement-malaysia", label: "Annual Leave & Sick Leave Entitlement" },
    ],
  },
  {
    slug: "paternity-leave-malaysia-employment-act",
    title: "Paternity Leave in Malaysia: 7 Days Under the Act",
    description:
      "Married male employees in Malaysia can take 7 consecutive days of paternity leave. See who qualifies, the notice you must give and how it is paid.",
    publishedDate: "2026-10-08",
    body: [
      "Since 1 January 2023, the Employment Act 1955 gives eligible married male employees 7 consecutive days of paid paternity leave for each confinement of their spouse. This was introduced by the Employment (Amendment) Act 2022.",
      "## Paternity leave rules at a glance",
      "The table summarises the conditions. Your contract can offer more than the Act, but not less.",
      "## Paternity pay",
      "Paternity leave is paid at your ordinary rate of pay, so you should not lose salary for the 7 days.",
      "## The 12-month service condition",
      "You must have been employed by the same employer for at least 12 months immediately before the paternity leave starts. If you joined recently, check whether your company policy gives paternity leave earlier than the Act requires.",
      "## Notice to your employer",
      "You must tell your employer about your wife's pregnancy at least 30 days before the expected delivery, or as early as possible after the birth if the baby arrives early.",
      "## Who this page covers",
      "This is a general summary for private-sector employees under the Employment Act. Sabah and Sarawak have their own Labour Ordinances, and government employees follow public-service circulars, so those rules can differ.",
    ],
    table: {
      afterIndex: 2,
      caption: "Paternity leave under the Employment Act 1955",
      headers: ["Topic", "What the Act says"],
      rows: [
        ["Length", "7 consecutive days for each confinement"],
        ["Who qualifies", "Married male employees"],
        ["Service condition", "At least 12 months with the same employer immediately before the leave starts"],
        ["Notice", "At least 30 days before the expected delivery, or as early as possible after the birth if early"],
        ["Pay", "Ordinary rate of pay"],
        ["Limit", "Up to five confinements, regardless of the number of spouses"],
      ],
    },
    faq: [
      {
        q: "How many days of paternity leave do you get in Malaysia?",
        a: "7 consecutive days for each confinement of your spouse, under the Employment Act 1955 as amended in 2022.",
      },
      {
        q: "Is paternity leave paid in Malaysia?",
        a: "Yes, it is paid at your ordinary rate of pay.",
      },
      {
        q: "Who is eligible for paternity leave?",
        a: "Married male employees who have been with the same employer for at least 12 months immediately before the leave starts and who gave the required notice.",
      },
      {
        q: "How much notice do I need to give for paternity leave?",
        a: "At least 30 days before the expected delivery, or as early as possible after the birth if the baby arrives early.",
      },
    ],
    relatedLinks: [
      { href: "/annual-leave-calculator", label: "Annual Leave Calculator" },
      { href: "/guides/maternity-leave-malaysia-employment-act", label: "Maternity Leave in Malaysia" },
      { href: "/guides/employment-act-1955-employee-rights-summary", label: "Employment Act 1955: Key Employee Rights" },
    ],
  },
  {
    slug: "annual-leave-sick-leave-entitlement-malaysia",
    title: "Annual Leave & Sick Leave in Malaysia: Entitlement",
    description:
      "Annual leave in Malaysia is 8, 12 or 16 days depending on service, and sick leave is 14, 18 or 22 days. See the table and how first-year leave is prorated.",
    publishedDate: "2026-10-08",
    body: [
      "The Employment Act 1955 sets minimum paid annual leave and sick leave based on how long you have worked for your employer. Your contract or company policy can give you more, but not less.",
      "## Annual leave and sick leave by years of service",
      "The table shows the minimum paid days a year. Employees who are hospitalised can take up to 60 days of paid sick leave a year instead of the shorter sick leave allowance.",
      "## Prorated annual leave in your first year",
      "If you have worked less than 12 months in your first year, annual leave is prorated: your yearly entitlement divided by 12, multiplied by the number of completed months of service, rounded to the nearest half day. For example, 8 days with 6 completed months works out to 4 days.",
      "## Medical certificate for sick leave",
      "Paid sick leave generally requires a medical certificate from a registered medical practitioner, so keep the certificate and give it to your employer promptly.",
      "## Public holidays",
      "On top of leave, employees are entitled to 11 paid public holidays a year, including 5 fixed ones: National Day, Labour Day, Malaysia Day, the Agong's birthday and the Ruler's or Governor's birthday.",
      "## Who this page covers",
      "This is a general summary of the Employment Act for private-sector employees. Sabah and Sarawak have their own Labour Ordinances, and government employees follow separate service rules.",
      "## Work out your own leave",
      "Enter your years of service and months worked in the annual leave calculator to get your own number of days.",
    ],
    table: {
      afterIndex: 2,
      caption: "Minimum paid leave per year under the Employment Act 1955",
      headers: ["Years of service", "Annual leave", "Sick leave (not hospitalised)", "Sick leave (hospitalised)"],
      rows: [
        ["Under 2 years", "8 days", "14 days", "Up to 60 days"],
        ["2 years to under 5 years", "12 days", "18 days", "Up to 60 days"],
        ["5 years or more", "16 days", "22 days", "Up to 60 days"],
      ],
    },
    faq: [
      {
        q: "How many days of annual leave do you get in Malaysia?",
        a: "At least 8 days if you have worked under 2 years, 12 days for 2 years to under 5 years, and 16 days for 5 years or more, under the Employment Act 1955.",
      },
      {
        q: "How many days of sick leave do you get in Malaysia?",
        a: "14 days under 2 years of service, 18 days for 2 to under 5 years, and 22 days for 5 years or more. If you are hospitalised, you can take up to 60 days a year.",
      },
      {
        q: "How is annual leave calculated in the first year?",
        a: "Prorated: yearly entitlement divided by 12, multiplied by completed months of service, rounded to the nearest half day.",
      },
      {
        q: "How many paid public holidays are there in Malaysia?",
        a: "Employees are entitled to 11 paid public holidays a year, including 5 fixed ones: National Day, Labour Day, Malaysia Day, the Agong's birthday and the Ruler's or Governor's birthday.",
      },
    ],
    relatedLinks: [
      { href: "/annual-leave-calculator", label: "Annual Leave Calculator" },
      { href: "/guides/employment-act-1955-employee-rights-summary", label: "Employment Act 1955: Key Employee Rights" },
      { href: "/guides/unpaid-leave-malaysia-salary-deduction", label: "Unpaid Leave: Salary Deduction Per Day" },
      { href: "/prorated-salary-calculator", label: "Prorated Salary Calculator" },
    ],
  },
  {
    slug: "working-hours-malaysia-employment-act",
    title: "Working Hours in Malaysia: Employment Act Limits",
    description:
      "Normal working hours in Malaysia are up to 8 hours a day and 45 hours a week. See the break, spread-over and rest day rules and when overtime starts.",
    publishedDate: "2026-10-08",
    body: [
      "Under the Employment Act 1955, as amended by the Employment (Amendment) Act 2022, the normal working week in Malaysia is a maximum of 45 hours. This replaced the earlier 48-hour week from 1 January 2023.",
      "## Working hour limits at a glance",
      "The table summarises the main limits in the Act. There are limited exceptions, such as certain shift arrangements, so check with your employer or the Labour Department if your work is unusual.",
      "## Does the 8-hour day include the lunch break?",
      "The 8-hour limit counts hours worked, and your meal break is not counted as work. The Act separately limits how long the day can be stretched, so the whole day, breaks included, generally cannot be spread over more than 10 hours.",
      "## When overtime starts",
      "Work beyond the normal hours is overtime. For employees covered by the overtime provisions, meaning those earning RM4,000 a month or less and manual workers, the rate is 1.5 times the hourly rate on a normal working day, with higher rates on rest days and public holidays.",
      "## Who this page covers",
      "This is a general summary for private-sector employees. Sabah and Sarawak have their own Labour Ordinances, and some industries and government employees follow different hours.",
      "## Work out your overtime",
      "Use the overtime calculator to turn your hours and salary into overtime pay.",
    ],
    table: {
      afterIndex: 2,
      caption: "Working hour limits under the Employment Act 1955",
      headers: ["Rule", "Limit"],
      rows: [
        ["Hours a day", "Up to 8 hours"],
        ["Hours a week", "Up to 45 hours"],
        ["Continuous work", "No more than 5 consecutive hours without a break of at least 30 minutes"],
        ["Spread over a day", "No more than 10 hours from start to finish, breaks included"],
        ["Rest day", "At least one full rest day each week"],
        ["Overtime", "1.5 times the hourly rate on a normal day for covered employees"],
      ],
    },
    faq: [
      {
        q: "What are the normal working hours in Malaysia?",
        a: "Up to 8 hours a day and 45 hours a week under the Employment Act 1955 since 1 January 2023.",
      },
      {
        q: "Does the 8 working hours include the lunch break?",
        a: "No. The 8-hour limit counts hours worked. The whole working day, breaks included, generally cannot be spread over more than 10 hours.",
      },
      {
        q: "How long can you work without a break in Malaysia?",
        a: "No more than 5 consecutive hours without a break of at least 30 minutes.",
      },
      {
        q: "When does overtime start in Malaysia?",
        a: "After the normal working hours. For covered employees (RM4,000 a month or less, and manual workers) it is paid at 1.5 times the hourly rate on a normal working day.",
      },
    ],
    relatedLinks: [
      { href: "/overtime-calculator", label: "Overtime Calculator" },
      { href: "/guides/understanding-employment-act-overtime-rules", label: "Employment Act Overtime Rules" },
      { href: "/guides/employment-act-1955-employee-rights-summary", label: "Employment Act 1955: Key Employee Rights" },
      { href: "/hourly-rate-calculator", label: "Hourly & Daily Rate Calculator" },
    ],
  },
  {
    slug: "unpaid-leave-malaysia-salary-deduction",
    title: "Unpaid Leave in Malaysia: Salary Deduction Per Day",
    description:
      "How much salary is deducted for unpaid leave in Malaysia? See the daily deduction for common salaries using the monthly salary divided by 26 method.",
    publishedDate: "2026-10-08",
    body: [
      "Unpaid leave means taking time off without pay, so your employer deducts the days you are away from your monthly salary. The Employment Act does not give a general right to unpaid leave, so it normally depends on your contract, company policy and your manager's approval.",
      "## How much is deducted per day",
      "A common method is monthly salary divided by 26 working days, multiplied by the days of unpaid leave. The table shows the deduction for 1, 3 and 5 days at common salaries.",
      "## Other methods employers use",
      "Some employers divide by the actual calendar days in the month or by 30. Which method applies depends on your contract and company policy, so check your employment letter. Our guide on 30 or 31 days explains the differences.",
      "## Effect on EPF and SOCSO",
      "EPF, SOCSO and EIS contributions follow the wages paid for the month, so a month with a lower salary because of unpaid leave generally means slightly lower contributions.",
      "## Asking for unpaid leave",
      "Apply in writing as early as possible. State the dates, the reason and who will cover your work, and ask for confirmation of the approval from your employer.",
      "## Work out your own deduction",
      "Use the prorated salary calculator to compare the 26-day, 30-day and calendar-day methods for your own salary.",
    ],
    table: {
      afterIndex: 2,
      caption: "Salary deducted for unpaid leave (monthly salary ÷ 26 per day)",
      headers: ["Monthly salary", "1 day", "3 days", "5 days"],
      rows: unpaidLeaveRows(),
    },
    faq: [
      {
        q: "How is unpaid leave calculated in Malaysia?",
        a: "A common method is monthly salary divided by 26 working days, multiplied by the unpaid days. Some employers use calendar days or 30 days instead, so check your contract.",
      },
      {
        q: "Is unpaid leave a right under the Employment Act?",
        a: "The Employment Act does not give a general right to unpaid leave, so it usually depends on your contract, company policy and your employer's approval.",
      },
      {
        q: "Does unpaid leave affect EPF and SOCSO?",
        a: "Contributions are based on the wages paid for the month, so lower pay from unpaid leave generally means slightly lower EPF, SOCSO and EIS.",
      },
    ],
    relatedLinks: [
      { href: "/prorated-salary-calculator", label: "Prorated Salary Calculator" },
      { href: "/guides/salary-calculation-30-or-31-days-malaysia", label: "Salary Calculation: 30 or 31 Days?" },
      { href: "/guides/annual-leave-sick-leave-entitlement-malaysia", label: "Annual Leave & Sick Leave Entitlement" },
      { href: "/guides/daily-hourly-rate-calculation-malaysia", label: "Daily and Hourly Rate Calculation" },
    ],
  },
  {
    slug: "eis-perkeso-how-to-claim-benefits-malaysia",
    title: "How to Claim EIS (PERKESO) After Losing Your Job",
    description:
      "How to claim EIS benefits from PERKESO after losing your job in Malaysia: who qualifies, the 60-day deadline, the benefits and the steps to apply.",
    publishedDate: "2026-10-08",
    body: [
      "The Employment Insurance System (EIS), run by PERKESO, pays benefits to eligible employees who lose their jobs involuntarily. You and your employer each contribute 0.2% of monthly wages up to RM6,000, which is at most RM12 a month each.",
      "## Who is covered",
      "EIS covers Malaysian citizens and permanent residents aged 18 to 59. Foreign workers are not covered.",
      "## Who can claim",
      "You must apply within 60 days of losing your job and meet PERKESO's contribution qualifying conditions. Losing your job through retrenchment, redundancy, company closure or a voluntary separation scheme generally qualifies. Dismissal for misconduct, voluntary resignation and mandatory retirement do not.",
      "## EIS benefits",
      "The table summarises the five benefits. The Job Search Allowance is paid monthly for 3 to 6 months depending on eligibility, at 80%, 50%, 40%, 40%, 30% and 30% of your assumed monthly wage over the months. After the first month you must show that you are actively looking for work.",
      "## How to claim step by step",
      "Gather your MyKad, your termination letter (it should state the reason you lost your job), recent payslips and bank details. Apply online or at a PERKESO office within 60 days, and register on the MYFutureJobs portal to search for work. Once approved, complete the Re-Employment Placement Form. Required documents and portals can change, so confirm on perkeso.gov.my before you file.",
      "## Benefit changes under review",
      "The government has said it is reviewing the EIS Act, with possible improvements to some allowances. Check PERKESO for the current rates before you apply.",
      "## Check your EIS contribution",
      "The SOCSO and EIS calculator shows your own monthly contribution.",
    ],
    table: {
      afterIndex: 6,
      caption: "EIS benefits from PERKESO",
      headers: ["Benefit", "What you get"],
      rows: [
        ["Job Search Allowance", "Monthly payment for 3 to 6 months while you look for work"],
        ["Reduced Income Allowance", "For people who had more than one job and lost some of them; paid as a lump sum at the same rates and duration as the Job Search Allowance"],
        ["Early Re-Employment Allowance", "25% of the unpaid Job Search Allowance if you find a job while receiving it"],
        ["Training Fee", "Up to RM4,000 of approved vocational training paid to the provider"],
        ["Training Allowance", "RM10 to RM20 a day while attending approved training, depending on your previous assumed salary"],
      ],
    },
    faq: [
      {
        q: "How do I claim EIS from PERKESO?",
        a: "Apply online or at a PERKESO office within 60 days of losing your job, with your MyKad, termination letter, payslips and bank details, and register on MYFutureJobs to search for work.",
      },
      {
        q: "How long do I have to claim EIS?",
        a: "60 days from the date you lost your employment.",
      },
      {
        q: "Can I claim EIS if I resign?",
        a: "No. Voluntary resignation, dismissal for misconduct and mandatory retirement are not eligible causes of job loss.",
      },
      {
        q: "How much is the EIS Job Search Allowance?",
        a: "It is paid monthly for 3 to 6 months at 80%, 50%, 40%, 40%, 30% and 30% of your assumed monthly wage over the months.",
      },
      {
        q: "How much EIS is deducted from my salary?",
        a: "0.2% of monthly wages up to RM6,000, so at most RM12 a month. Your employer pays another 0.2%.",
      },
    ],
    relatedLinks: [
      { href: "/socso-calculator", label: "SOCSO & EIS Calculator" },
      { href: "/guides/what-is-perkeso-socso-same", label: "Is PERKESO the Same as SOCSO?" },
      { href: "/guides/resignation-notice-period-malaysia", label: "Resignation Notice Period in Malaysia" },
      { href: "/guides/lindung-24-jam-socso-new-scheme-2026", label: "LINDUNG 24 Jam Explained" },
    ],
  },
];
