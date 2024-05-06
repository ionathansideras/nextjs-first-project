"use client";
import style from "./page.module.css";
import ImagePicker from "@/components/meals/ImagePicker";
import { shareMeal } from "@/lib/actions";
import MealsFormSubmit from "@/components/meals/MealsFormSubmit";
import { useFormState } from "react-dom";

export default function ShareMealPage() {
    const [state, formAction] = useFormState(shareMeal, { message: null });

    return (
        <>
            <header className={style.header}>
                <h1>
                    Share your{" "}
                    <span className={style.highlight}>favorite meal</span>
                </h1>
                <p>Or any other meal you feel needs sharing!</p>
            </header>
            <main className={style.main}>
                <form className={style.form} action={formAction}>
                    <div className={style.row}>
                        <p>
                            <label htmlFor="name">Your name</label>
                            <input type="text" id="name" name="name" required />
                        </p>
                        <p>
                            <label htmlFor="email">Your email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                            />
                        </p>
                    </div>
                    <p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" required />
                    </p>
                    <p>
                        <label htmlFor="summary">Short Summary</label>
                        <input
                            type="text"
                            id="summary"
                            name="summary"
                            required
                        />
                    </p>
                    <p>
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            id="instructions"
                            name="instructions"
                            rows="10"
                            required
                        ></textarea>
                    </p>
                    <ImagePicker label="Meal Image" name="image" />
                    {state.message && (
                        <p className={style.error}>{state.message}</p>
                    )}
                    <p className={style.actions}>
                        <MealsFormSubmit />
                    </p>
                </form>
            </main>
        </>
    );
}
