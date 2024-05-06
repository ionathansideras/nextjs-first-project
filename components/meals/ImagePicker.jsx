"use client";
import style from "./ImagePicker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
    const inputRef = useRef();
    const [image, setImage] = useState(null);

    function handlePickImage() {
        inputRef.current.click();
    }

    function handleImageChange(e) {
        const file = e.target.files[0];

        if (!file) {
            setImage(null);
            return;
        }

        const reader = new FileReader();

        reader.onload = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    }

    return (
        <div className={style.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={style.controls}>
                <div className={style.preview}>
                    {!image && <p>No image picked yet.</p>}
                    {image && <Image src={image} alt="Preview" fill />}
                </div>
                <input
                    ref={inputRef}
                    className={style.input}
                    type="file"
                    id={name}
                    name={name}
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                    required
                />
                <button
                    onClick={handlePickImage}
                    className={style.button}
                    type="button"
                >
                    Pick Image
                </button>
            </div>
        </div>
    );
}
