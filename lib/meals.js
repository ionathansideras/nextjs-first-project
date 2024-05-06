import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";
import fs from "node:fs";

const db = sql("meals.db");

export function getMeals() {
    return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
    return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

// This function is used to store a meal in the database
export async function storeMeal(meal) {
    // Generate a URL-friendly version of the meal's title
    meal.slug = slugify(meal.title, { lower: true });
    // Sanitize the instructions to prevent XSS attacks
    meal.instructions = xss(meal.instructions);

    // Get the extension of the image file
    const extension = meal.image.name.split(".").pop();
    // Create a unique filename for the image using the meal's slug and the original extension
    const uniqueFilename = `${meal.slug}.${extension}`;

    // Create a read stream for the image file
    const stream = fs.createWriteStream(`public/images/${uniqueFilename}`);
    // Get the image file as an array buffer
    const buffer = await meal.image.arrayBuffer();

    // Write the image file to the stream
    stream.write(Buffer.from(buffer), (error) => {
        // If there's an error, throw an exception
        if (error) {
            throw new Error("Failed to store image");
        }
    });

    // Update the image property of the meal to the path of the stored image
    meal.image = "/images/" + uniqueFilename;

    // Prepare an SQL statement to insert the meal into the database
    db.prepare(
        `
        INSERT INTO meals (slug, creator, creator_email, title, summary, instructions, image)
        VALUES (@slug, @creator, @creator_email, @title, @summary, @instructions, @image)
        `
        // Execute the SQL statement with the meal object
    ).run(meal);
}
