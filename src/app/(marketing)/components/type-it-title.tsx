"use client";
import TypeIt from "typeit-react";

export function TypeItTitle() {
	return (
		<TypeIt
			getBeforeInit={(instance) => {
				instance
					.type("Hello World!")
					.pause(750)
					.delete(13)
					.pause(500)
					.type("Witam!")
					.pause(750)
					.delete(20)
					.pause(500)
					.type("bom Dia Mundo!")
					.pause(750)
					.delete(15)
					.pause(500)
					.type("доброго ранку світ!")
					.pause(750)
					.delete(24)
					.pause(500)
					.type("Hi and welcome!");
				return instance;
			}}
		/>
	);
}
