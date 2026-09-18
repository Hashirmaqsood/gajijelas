import { round2 } from "@/lib/format";

/**
 * Overtime pay under the Employment Act 1955 (Second Schedule). These rates
 * apply to "employees" as defined by the Act (currently: monthly wages of
 * RM4,000 or less, or any manual/machinery-operating worker regardless of
 * wage) — always shown as a caveat in the UI, not baked into the math.
 */
export type OvertimeDayType = "normal" | "restDay" | "publicHoliday";

export interface OvertimeInput {
  hourlyRate: number;
  normalHoursPerDay: number;
  dayType: OvertimeDayType;
  hoursWorked: number;
}

export interface OvertimeResult {
  pay: number;
  /** i18n key (under overtimePage.formula.*) describing which multiplier applied. */
  multiplierKey: string;
}

export function calculateOvertime(input: OvertimeInput): OvertimeResult {
  const { hourlyRate, normalHoursPerDay, dayType, hoursWorked } = input;
  const dailyRate = hourlyRate * normalHoursPerDay;

  if (dayType === "normal") {
    const pay = round2(hoursWorked * hourlyRate * 1.5);
    return { pay, multiplierKey: "overtimePage.formulaNormal" };
  }

  if (dayType === "restDay") {
    const half = normalHoursPerDay / 2;
    if (hoursWorked <= half) {
      return { pay: round2(dailyRate * 0.5), multiplierKey: "overtimePage.formulaRestHalf" };
    }
    if (hoursWorked <= normalHoursPerDay) {
      return { pay: round2(dailyRate * 1), multiplierKey: "overtimePage.formulaRestFull" };
    }
    const excessHours = hoursWorked - normalHoursPerDay;
    const pay = round2(dailyRate * 1 + excessHours * hourlyRate * 2);
    return { pay, multiplierKey: "overtimePage.formulaRestExcess" };
  }

  // publicHoliday
  if (hoursWorked <= normalHoursPerDay) {
    return { pay: round2(dailyRate * 2), multiplierKey: "overtimePage.formulaHolidayFull" };
  }
  const excessHours = hoursWorked - normalHoursPerDay;
  const pay = round2(dailyRate * 2 + excessHours * hourlyRate * 3);
  return { pay, multiplierKey: "overtimePage.formulaHolidayExcess" };
}
