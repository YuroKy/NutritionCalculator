import Ingredient from "./ingredient.js" 
import foodGroups from "./enums/foodGroups.js";
import measurementMethods from "./enums/measurementMethods.js";

const ingredients = {
    legumes: new Ingredient("Бобові", 45, 90, foodGroups.grainsAndCarbs),
    potatoes: new Ingredient("Картопля", 150, 300, foodGroups.grainsAndCarbs),
    freshCorn: new Ingredient("Свіжа кукурудза", 150, 300, foodGroups.grainsAndCarbs),
    flakes: new Ingredient("Пластівці", 45, 90, foodGroups.grainsAndCarbs),
    bulgur: new Ingredient("Булгур", 45, 90, foodGroups.grainsAndCarbs),
    buckwheat: new Ingredient("Гречка", 45, 90, foodGroups.grainsAndCarbs),
    rice: new Ingredient("Рис (не шліфований)", 45, 90, foodGroups.grainsAndCarbs),
    cereals: new Ingredient("Крупи", 45, 90, foodGroups.grainsAndCarbs),
    wholeGrainFlour: new Ingredient("Цільнозернове борошно", 45, 90, foodGroups.grainsAndCarbs),
    bread: new Ingredient("Хлібці", 65, 130, foodGroups.grainsAndCarbs),
    wholeGrainBread: new Ingredient("Цільнозерновий хліб", 70, 140, foodGroups.grainsAndCarbs),
    macaroni: new Ingredient("Макарони", 45,90, foodGroups.grainsAndCarbs),
    pita: new Ingredient("Лаваш", 65, 130, foodGroups.grainsAndCarbs),

    leanMilk: new Ingredient("Молоко до 2.5%", 200, 200,foodGroups.leanDairy),
    leanKefir: new Ingredient("Кефір до 2.5%", 200, 200, foodGroups.leanDairy),
    leanYoghurt: new Ingredient("Йогурт (не солодкий) до 2.5%", 200, 200, foodGroups.leanDairy),

    oilyMilk: new Ingredient("Молоко від 2.5%", 360, 360, foodGroups.oilyDairy),
    oilyKefir: new Ingredient("Кефір від 2.5%", 360, 360, foodGroups.oilyDairy),
    oilyYoghurt: new Ingredient("Йогурт (не солодкий) від 2.5%", 370, 370, foodGroups.oilyDairy),
    curd: new Ingredient("Сир зернистий (творог 5% жиру)", 160, 160, foodGroups.oilyDairy),
    cheese: new Ingredient("Сир (м'який, твердий, плавлений)", 55, 55, foodGroups.oilyDairy),
    sourCream: new Ingredient("Сметана", 110, 110, foodGroups.oilyDairy),
    butter: new Ingredient("Масло", 27, 27, foodGroups.oilyDairy),
    fat: new Ingredient("Сало", 19, 19, foodGroups.oilyDairy),

    veal: new Ingredient("Телятина", 150, 300, foodGroups.proteins),
    liver: new Ingredient("Печінка", 150, 150, foodGroups.proteins),
    сhickenFillet: new Ingredient("Куряче філе", 175, 350, foodGroups.proteins),
    turkeyFillet: new Ingredient("Індиче філе", 175, 350, foodGroups.proteins),
    leanFish: new Ingredient("Риба (до 5% жиру)", 180, 360, foodGroups.proteins),
    oilyFish: new Ingredient("Риба (від 5% жиру)", 120, 240, foodGroups.proteins),
    eggs: new Ingredient("Яйця", 3, 9, foodGroups.proteins, measurementMethods.quantity),
    seafood: new Ingredient("Морепродукти", 200, 400, foodGroups.proteins),

    vegetables: new Ingredient("Овочі", 300, 600, foodGroups.vegetablesAndMushrooms),
    mushrooms: new Ingredient("Гриби", 300, 600, foodGroups.vegetablesAndMushrooms),

    oil: new Ingredient("Олія", 10, 10, foodGroups.fats),
    mayonnaise: new Ingredient("Майонез", 13, 13, foodGroups.fats),
    avocado: new Ingredient("Авокадо", 55, 55, foodGroups.fats),
    olives: new Ingredient("Оливки", 70, 70, foodGroups.fats),
    mayonnaise: new Ingredient("Гірчиця", 24, 24, foodGroups.fats),

    fruitsAndBerries: new Ingredient("Фрукти та ягоди", 250, 250, foodGroups.fruitsAndBerries),
    bannanas: new Ingredient("Банани", 150, 150, foodGroups.fruitsAndBerries),
    grape: new Ingredient("Виноград", 150, 150, foodGroups.fruitsAndBerries),
    persimmon: new Ingredient("Хурма", 150, 150, foodGroups.fruitsAndBerries),
    mango: new Ingredient("Манго", 150, 150, foodGroups.fruitsAndBerries),

    walnut: new Ingredient("Грецький горіх", 20, 20, foodGroups.nutsAndSeeds),
    nutsAndSeeds: new Ingredient("Горіхи та насіння", 20, 20, foodGroups.nutsAndSeeds),

    snacksAndSweets: new Ingredient("Солодощі, снеки, ковбаса", 55, 55, foodGroups.nutsAndSeeds),
}

export default ingredients;