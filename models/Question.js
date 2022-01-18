export class Question{
	/**
	 * 
	 * @param {*} text texto de la pregunta 
	 * @param {[]} choices las opciones
	 * @param {*} answer la respuesta de la pregunta
	 */
	constructor(text,choices,answer,re){
		
		this.text = text;
		this.choices = choices;		
		this.answer = answer;
			
		
	}
	/**
	 * 
	 * @param {*} choice va la opcion elegida 
	 * @returns  boolean
	 */
	correctAnswer(choice){
		return choice === this.answer
	}
}

// let question1 = new Question()
// new Question()
// console.log(question1.correctAnswer())