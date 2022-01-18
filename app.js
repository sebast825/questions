//importa el archivo puntual
//questions recorre todas las preguntas ocn un map
import {questions} from './data/question.js'

import {Quiz} from './models/Quiz.js'

function main(){

	let quiz = new Quiz(questions)
	// quiz.guess('asd')
	console.log(quiz)
}

main()