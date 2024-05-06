"use server";

import { storeMeal } from "lib/meals";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function checkIfIsValid(text) {
    return !text || text.trim() === "";
}

export async function shareMeal(pervState, formData) {
    const meal = {
        creator: formData.get("name"),
        creator_email: formData.get("email"),
        title: formData.get("title"),
        summary: formData.get("summary"),
        instructions: formData.get("instructions"),
        image: formData.get("image"),
    };

    if (
        checkIfIsValid(meal.creator) ||
        checkIfIsValid(meal.creator_email) ||
        checkIfIsValid(meal.title) ||
        checkIfIsValid(meal.summary) ||
        checkIfIsValid(meal.instructions) ||
        !meal.image ||
        meal.image.size === 0 ||
        !meal.creator_email.includes("@")
    ) {
        return {
            message: "Invalid data",
        };
    }

    await storeMeal(meal);
    // Revalidate the meals page to show the new meal because the data was cached
    revalidatePath("/meals");
    redirect("/meals");
}
