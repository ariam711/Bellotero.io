import { CalculatorActionsType } from "../types/CalculatorActionsType";

export function loadCalculator() {
  return {
    type: CalculatorActionsType.LOAD_CALCULATOR
  };
}

export function makeCalc() {
  return {
    type: CalculatorActionsType.MAKE_CALC
  };
}

export function setMonthlyIngredientSpending(
  monthlyIngredientSpending: number
) {
  return {
    monthlyIngredientSpending,
    type: CalculatorActionsType.SET_MONTHLY_INGREDIENT_SPENDING
  };
}

export function setFullTimeEmployee(fullTimeEmployee: number) {
  return {
    fullTimeEmployee,
    type: CalculatorActionsType.SET_FULL_TIME_EMPLOYEE
  };
}
