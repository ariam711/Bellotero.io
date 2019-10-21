import { CalculatorActionsType } from "../types/CalculatorActionsType";
import { CalculatorType } from "../types/CalculatorType";

const initialState = {
  title: "No title",
  description: "No descriptions",
  monthlyIngredientSpending: 10,
  fullTimeEmployee: 1,
  estimatedFoodCostSaving: 0,
  yourEstimatedAnnualSavings: 0
} as CalculatorType;

export default function calculatorStore(state = initialState, action: any) {
  switch (action.type) {
    case CalculatorActionsType.RENDER_CALCULATOR: {
      return {
        ...state,
        ...action.calculator
      };
    }
    case CalculatorActionsType.RESET_CALCULATOR: {
      return {
        ...initialState
      };
    }
    case CalculatorActionsType.MAKE_CALC: {
      const estimatedFoodCostSaving = parseFloat(
        (state.monthlyIngredientSpending * 0.3).toFixed(2)
      );
      const yourEstimatedAnnualSavings = parseFloat(
        (state.fullTimeEmployee * 1337 + estimatedFoodCostSaving).toFixed(2)
      );
      return {
        ...state,
        estimatedFoodCostSaving,
        yourEstimatedAnnualSavings
      };
    }
    case CalculatorActionsType.SET_MONTHLY_INGREDIENT_SPENDING: {
      return {
        ...state,
        monthlyIngredientSpending: action.monthlyIngredientSpending
      };
    }
    case CalculatorActionsType.SET_FULL_TIME_EMPLOYEE: {
      return {
        ...state,
        fullTimeEmployee: action.fullTimeEmployee
      };
    }
    default:
      return state;
  }
}
