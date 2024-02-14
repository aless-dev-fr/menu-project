import { uncurry } from "@/packages/common"
import { addMenu } from "./add-menu"
import { TCreateFoodServiceOptions, TCreateFoodServiceOptionsWithExtras } from "./types"

export const createFoodService = (options: TCreateFoodServiceOptions) => {
    return uncurry(
        {
            addMenu
        },
        { ...options } satisfies TCreateFoodServiceOptionsWithExtras
    )
}

export type TFoodService = ReturnType<typeof createFoodService>