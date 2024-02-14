import { foodService } from "@/packages/api/services";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(request: NextApiRequest, response: NextApiResponse)
{
    const { name, description, price, country } = request.body

    const menu = await foodService.addMenu({ name, description, price, country });

    response.status(200).json(menu);
}